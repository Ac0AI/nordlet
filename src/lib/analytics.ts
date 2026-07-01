// Lättviktigt analyslager. PostHog initieras bara vid marknadsföringssamtycke
// (samma nivå som Meta-pixeln) och bara om en nyckel är satt. Alla anrop är
// no-ops tills dess, så komponenter kan spåra fritt utan att kolla status.

import posthog from "posthog-js";
import {
  POSTHOG_KEY,
  POSTHOG_HOST,
  hasMarketingConsent,
} from "@/lib/consent";

let started = false;

/** Initiera PostHog om nyckel finns och samtycke getts. Idempotent. */
export function startPostHog() {
  if (started || typeof window === "undefined") return;
  if (!POSTHOG_KEY || !hasMarketingConsent()) return;
  started = true;
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    person_profiles: "identified_only",
    // Vi skickar $pageview manuellt vid route-byten (App Router är en SPA).
    capture_pageview: false,
    capture_pageleave: true,
    autocapture: true,
  });
}

/** Manuell sidvisning. No-op tills PostHog är igång. */
export function capturePageview() {
  if (!started) return;
  posthog.capture("$pageview");
}

/** Generellt event till PostHog. No-op tills PostHog är igång. */
export function track(event: string, props?: Record<string, unknown>) {
  if (!started) return;
  posthog.capture(event, props);
}

/**
 * Konvertering: intresseanmälan skickad. Går till både PostHog (funnel) och
 * Meta som standard-eventet `Lead` så att annonserna kan optimera mot den.
 */
export function trackLead(props: {
  value: number;
  currency: string;
  product: string;
}) {
  track("lead_submitted", props);
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Lead", {
      value: props.value,
      currency: props.currency,
      content_name: props.product,
    });
  }
}
