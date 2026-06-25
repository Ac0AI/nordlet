// Server-side klient för Kustom Checkout (f.d. Klarna Checkout).
// Dokumentation: https://docs.kustom.co/contents/checkout
//
// Kräver miljövariabler (sätts när Kustom-kontot är godkänt, se SETUP.md):
//   KUSTOM_API_USERNAME  - merchant-ID/användarnamn från Kustom
//   KUSTOM_API_PASSWORD  - delad hemlighet från Kustom
//   KUSTOM_ENV           - "playground" (test) eller "production"
//
// Importeras ENDAST från server-komponenter och API-routes - aldrig från
// "use client"-filer (hemligheterna får inte läcka till webbläsaren).

import {
  PRODUCTS,
  type ProductKey,
  MOMS_RATE,
  priceMinorUnits,
  taxAmountMinorUnits,
} from "@/lib/products";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nordlet.se";

function apiBase(): string {
  return process.env.KUSTOM_ENV === "production"
    ? "https://api.kustom.co"
    : "https://api.playground.kustom.co";
}

export function isKustomConfigured(): boolean {
  return Boolean(
    process.env.KUSTOM_API_USERNAME && process.env.KUSTOM_API_PASSWORD
  );
}

function authHeader(): string {
  const credentials = `${process.env.KUSTOM_API_USERNAME}:${process.env.KUSTOM_API_PASSWORD}`;
  return `Basic ${Buffer.from(credentials).toString("base64")}`;
}

export type KustomOrder = {
  order_id: string;
  status: string;
  html_snippet: string;
  // Finns i Kustoms orderrespons; används för Purchase-värde i annonsspårning.
  order_amount?: number; // i ören (minor units)
  purchase_currency?: string;
};

/**
 * Skapar en checkout-order hos Kustom och returnerar html_snippet
 * som renderas på /kassa. Kvantitet stöds per produkt.
 */
export async function createCheckoutOrder(
  productKey: ProductKey,
  quantity = 1
): Promise<KustomOrder> {
  const product = PRODUCTS[productKey];
  const totalAmount = priceMinorUnits(product) * quantity;
  const totalTax = taxAmountMinorUnits(totalAmount);

  const payload = {
    purchase_country: "SE",
    purchase_currency: "SEK",
    locale: "sv-SE",
    order_amount: totalAmount,
    order_tax_amount: totalTax,
    order_lines: [
      {
        type: "physical",
        reference: product.reference,
        name: product.name,
        quantity,
        unit_price: priceMinorUnits(product),
        tax_rate: MOMS_RATE,
        total_amount: totalAmount,
        total_tax_amount: totalTax,
      },
    ],
    merchant_urls: {
      terms: `${SITE_URL}/kopvillkor`,
      checkout: `${SITE_URL}/kassa?paket=${productKey}`,
      confirmation: `${SITE_URL}/kassa/bekraftelse?order_id={checkout.order.id}`,
      push: `${SITE_URL}/api/kustom/push?order_id={checkout.order.id}`,
    },
  };

  const res = await fetch(`${apiBase()}/checkout/v3/orders`, {
    method: "POST",
    headers: {
      Authorization: authHeader(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Kustom create order misslyckades (${res.status}): ${body}`);
  }

  return (await res.json()) as KustomOrder;
}

/** Hämtar en befintlig checkout-order, t.ex. för bekräftelsesidan. */
export async function fetchCheckoutOrder(orderId: string): Promise<KustomOrder> {
  const res = await fetch(`${apiBase()}/checkout/v3/orders/${orderId}`, {
    headers: { Authorization: authHeader() },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Kustom fetch order misslyckades (${res.status})`);
  }

  return (await res.json()) as KustomOrder;
}

/**
 * Bekräftar mottagen order via Order Management API.
 * Anropas från push-callbacken så att ordern inte flaggas som obekräftad.
 */
export async function acknowledgeOrder(orderId: string): Promise<void> {
  const res = await fetch(
    `${apiBase()}/ordermanagement/v1/orders/${orderId}/acknowledge`,
    {
      method: "POST",
      headers: { Authorization: authHeader() },
      cache: "no-store",
    }
  );

  // 204 = bekräftad. 403/404 loggas men kraschar inte callbacken -
  // Kustom skickar om push-notiser tills de får 200 från oss.
  if (!res.ok && res.status !== 204) {
    console.error(`Kustom acknowledge misslyckades (${res.status}) för ${orderId}`);
  }
}
