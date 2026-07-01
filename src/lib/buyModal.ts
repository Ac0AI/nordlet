// Öppnar köp-popupen från vilken köp-CTA som helst. Under förlansering ersätter
// popupen kassan: den visar slut-i-lager + rabatt och fångar e-post. Vi loggar
// också köpintentionen (buy_intent) så vi kan mäta hur många som vill köpa.

import { track } from "@/lib/analytics";

export const OPEN_BUY_MODAL = "nordlet:open-buy-modal";

export function openBuyModal(source: string) {
  if (typeof window === "undefined") return;
  track("buy_intent", { source });
  window.dispatchEvent(new CustomEvent(OPEN_BUY_MODAL, { detail: { source } }));
}
