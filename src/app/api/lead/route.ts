import type { NextRequest } from "next/server";
import { isResendConfigured, sendLeadEmails } from "@/lib/resend";

// Tar emot intresseanmälan från reservationsformuläret. Skickar bekräftelse +
// notis via Resend. Svarar 503 om Resend inte är konfigurerat än, så att
// klienten kan falla tillbaka till mailto (ingen anmälan tappas).

function json(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json(400, { error: "invalid_json" });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const product = String(body.product ?? "frihetstoa").trim();

  if (name.length < 2 || !EMAIL_RE.test(email)) {
    return json(400, { error: "validation" });
  }

  if (!isResendConfigured()) {
    // Inte igång än – klienten öppnar mailto i stället.
    return json(503, { error: "unconfigured" });
  }

  try {
    await sendLeadEmails({ name, email, phone, product });
    return json(200, { ok: true });
  } catch (err) {
    console.error("Lead API-fel:", err);
    return json(502, { error: "send_failed" });
  }
}
