// Tunn Resend-klient (REST, ingen extra dependency) för intresseanmälan.
// Vilande tills RESEND_API_KEY är satt – precis som Kustom och Meta-pixeln.

import { FOUNDING } from "@/lib/constants";

const RESEND_API = "https://api.resend.com";

const FROM = process.env.RESEND_FROM_EMAIL ?? "NordLet <info@nordlet.se>";
const NOTIFY = process.env.LEAD_NOTIFY_EMAIL ?? "info@nordlet.se";
const AUDIENCE = process.env.RESEND_AUDIENCE_ID ?? "";

export function isResendConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}

export type Lead = {
  name: string;
  email: string;
  phone?: string;
  product: string;
};

async function resendPost(path: string, body: unknown): Promise<void> {
  const res = await fetch(`${RESEND_API}${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Resend ${path} ${res.status}: ${detail}`);
  }
}

const priceKr = FOUNDING.priceKr.toLocaleString("sv-SE");
const ordinaryKr = FOUNDING.ordinaryKr.toLocaleString("sv-SE");

/**
 * Skickar bekräftelse till kunden och notis till oss, samt lägger (om
 * RESEND_AUDIENCE_ID är satt) till kontakten i lanseringslistan. Kastar om
 * bekräftelsen misslyckas så att API-routen kan falla tillbaka till mailto.
 */
export async function sendLeadEmails(lead: Lead): Promise<void> {
  // 1. Bekräftelse till kunden – ärlig, ingen utlovad exakt datum.
  await resendPost("/emails", {
    from: FROM,
    to: [lead.email],
    subject: "Din plats är reserverad – NordLet Pro",
    html: `
      <div style="font-family:Inter,Arial,sans-serif;color:#202826;line-height:1.6">
        <p>Hej ${escapeHtml(lead.name)},</p>
        <p>Tack! Din plats bland de första att köpa NordLet Pro är reserverad.</p>
        <p>Som en av de ${FOUNDING.limit} första får du <strong>grundarpriset
        ${priceKr} kr</strong> (ord. ${ordinaryKr} kr). Vi öppnar kassan inom
        kort och mejlar dig då en personlig länk för att slutföra köpet – med
        30 dagars öppet köp och 2 års garanti som vanligt.</p>
        <p>Har du en fråga innan dess går det bra att svara på det här mejlet.</p>
        <p>Vänliga hälsningar,<br/>NordLet</p>
      </div>
    `,
  });

  // 2. Notis till oss så att listan kan följas upp.
  await resendPost("/emails", {
    from: FROM,
    to: [NOTIFY],
    subject: `Ny intresseanmälan: ${lead.name}`,
    html: `
      <div style="font-family:Inter,Arial,sans-serif;color:#202826">
        <p><strong>Namn:</strong> ${escapeHtml(lead.name)}</p>
        <p><strong>E-post:</strong> ${escapeHtml(lead.email)}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(lead.phone || "–")}</p>
        <p><strong>Produkt:</strong> ${escapeHtml(lead.product)}</p>
      </div>
    `,
  }).catch((err) => {
    // Notisen får inte fälla flödet – kundbekräftelsen är redan skickad.
    console.error("Lead-notis misslyckades:", err);
  });

  // 3. Lägg till i lanseringslistan om en audience är konfigurerad.
  if (AUDIENCE) {
    await resendPost(`/audiences/${AUDIENCE}/contacts`, {
      email: lead.email,
      first_name: lead.name,
      unsubscribed: false,
    }).catch((err) => {
      console.error("Kunde inte lägga till kontakt i audience:", err);
    });
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
