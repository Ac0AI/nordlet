import { createHmac, timingSafeEqual } from "node:crypto";
import { Resend } from "resend";

// Tar emot inkommande mail till @nordlet.se via Resend (webhook email.received)
// och vidarebefordrar dem till teamets inkorg. nordlet.se har ingen egen
// mailbox – MX pekar på Resend och detta är "inkorgen".
//
// Vilande-tills-nyckel som allt annat: utan RESEND_INBOUND_WEBHOOK_SECRET
// eller INBOUND_FORWARD_EMAIL svarar routen 503 och Resend försöker igen.

const FORWARD_TO = process.env.INBOUND_FORWARD_EMAIL ?? "";
const WEBHOOK_SECRET = process.env.RESEND_INBOUND_WEBHOOK_SECRET ?? "";
// Avsändaren måste ligga på den verifierade domänen.
const FORWARD_FROM = "NordLet <info@nordlet.se>";

// Max ålder på webhook-signaturen – skydd mot replay.
const TOLERANCE_MS = 5 * 60 * 1000;

function json(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

/**
 * Verifierar Resends webhook-signatur (svix-formatet): HMAC-SHA256 över
 * "<id>.<timestamp>.<payload>" med den base64-kodade delen av whsec_-nyckeln.
 */
function verifySignature(req: Request, payload: string): boolean {
  const id = req.headers.get("svix-id");
  const timestamp = req.headers.get("svix-timestamp");
  const signatures = req.headers.get("svix-signature");
  if (!id || !timestamp || !signatures) return false;

  const ageMs = Math.abs(Date.now() - Number(timestamp) * 1000);
  if (!Number.isFinite(ageMs) || ageMs > TOLERANCE_MS) return false;

  const key = Buffer.from(WEBHOOK_SECRET.replace(/^whsec_/, ""), "base64");
  const expected = createHmac("sha256", key)
    .update(`${id}.${timestamp}.${payload}`)
    .digest();

  // Headern kan innehålla flera signaturer: "v1,<base64> v1,<base64> ..."
  return signatures.split(" ").some((part) => {
    const [version, sig] = part.split(",");
    if (version !== "v1" || !sig) return false;
    const candidate = Buffer.from(sig, "base64");
    return (
      candidate.length === expected.length &&
      timingSafeEqual(candidate, expected)
    );
  });
}

export async function POST(req: Request) {
  if (!WEBHOOK_SECRET || !FORWARD_TO || !process.env.RESEND_API_KEY) {
    return json(503, { error: "unconfigured" });
  }

  const payload = await req.text();
  if (!verifySignature(req, payload)) {
    return json(401, { error: "invalid_signature" });
  }

  let event: { type?: string; data?: { email_id?: string } };
  try {
    event = JSON.parse(payload);
  } catch {
    return json(400, { error: "invalid_json" });
  }

  if (event.type !== "email.received" || !event.data?.email_id) {
    // Annat event än inkommande mail – kvittera utan åtgärd.
    return json(200, { ok: true, skipped: true });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.receiving.forward({
    emailId: event.data.email_id,
    to: FORWARD_TO,
    from: FORWARD_FROM,
  });

  if (error) {
    console.error("Inbound forward-fel:", error);
    // Icke-2xx gör att Resend försöker igen senare – mailet tappas inte.
    return json(502, { error: "forward_failed" });
  }

  return json(200, { ok: true });
}
