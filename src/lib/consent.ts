// Lättviktig cookie-samtyckeshantering (ingen extern CMP).
// En enda marknadsföringsnivå: "all" (nödvändiga + marknadsföring) eller
// "necessary" (bara nödvändiga). Meta Pixel laddas bara vid "all".

export const CONSENT_COOKIE = "nordlet_consent";
export const CONSENT_EVENT = "nordlet:consent-change";

export type ConsentValue = "all" | "necessary";

/** Meta Pixel. Tomt = pixeln laddas aldrig. */
export const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";

/** PostHog produktanalys. Tomt = PostHog initieras aldrig. EU-host som standard. */
export const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "";
export const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://eu.i.posthog.com";

/** Är någon form av spårning ens konfigurerad? Styr om samtycke behövs alls. */
export const trackingConfigured = PIXEL_ID.length > 0 || POSTHOG_KEY.length > 0;

export function readConsent(): ConsentValue | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|;\\s*)${CONSENT_COOKIE}=([^;]+)`)
  );
  const value = match?.[1];
  return value === "all" || value === "necessary" ? value : null;
}

export function writeConsent(value: ConsentValue) {
  if (typeof document === "undefined") return;
  const maxAge = 60 * 60 * 24 * 180; // 180 dagar
  document.cookie = `${CONSENT_COOKIE}=${value}; path=/; max-age=${maxAge}; SameSite=Lax`;
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

export function hasMarketingConsent(): boolean {
  return readConsent() === "all";
}
