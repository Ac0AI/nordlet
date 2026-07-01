"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { CONSENT_EVENT, POSTHOG_KEY } from "@/lib/consent";
import { startPostHog, capturePageview } from "@/lib/analytics";

// Initierar PostHog vid mount om samtycke redan finns, annars när "Acceptera
// alla" väljs. Skickar $pageview manuellt vid varje route-byte. Gör inget alls
// om NEXT_PUBLIC_POSTHOG_KEY saknas.
export function PostHogAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!POSTHOG_KEY) return;
    startPostHog();
    const onConsent = () => {
      startPostHog();
      capturePageview();
    };
    window.addEventListener(CONSENT_EVENT, onConsent);
    return () => window.removeEventListener(CONSENT_EVENT, onConsent);
  }, []);

  // Körs även vid mount → första sidvisningen fångas när PostHog är igång.
  useEffect(() => {
    capturePageview();
  }, [pathname]);

  return null;
}
