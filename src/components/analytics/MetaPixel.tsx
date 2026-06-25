"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  CONSENT_EVENT,
  PIXEL_ID,
  hasMarketingConsent,
} from "@/lib/consent";

// Skickas på window när pixeln initierats, så sidspecifika events
// (ViewContent/Purchase ...) vet när de kan triggas. Se MetaTrack.
export const PIXEL_READY_EVENT = "nordlet:pixel-ready";

declare global {
  interface Window {
    fbq?: ((...args: unknown[]) => void) & { queue?: unknown[]; loaded?: boolean };
    _fbq?: unknown;
  }
}

let pixelLoaded = false;

function loadPixel() {
  if (pixelLoaded || typeof window === "undefined") return;
  if (!PIXEL_ID || !hasMarketingConsent()) return;
  pixelLoaded = true;

  // Officiell Meta Pixel base-snippet (ominifierad för läsbarhet).
  /* eslint-disable @typescript-eslint/no-explicit-any */
  (function (f: any, b: Document, e: string, v: string) {
    if (f.fbq) return;
    const n: any = (f.fbq = function (...args: unknown[]) {
      if (n.callMethod) {
        n.callMethod(...args);
      } else {
        n.queue.push(args);
      }
    });
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    const t = b.createElement(e) as HTMLScriptElement;
    t.async = true;
    t.src = v;
    const s = b.getElementsByTagName(e)[0];
    s.parentNode?.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  /* eslint-enable @typescript-eslint/no-explicit-any */

  window.fbq?.("init", PIXEL_ID);
  window.fbq?.("track", "PageView");
  window.dispatchEvent(new Event(PIXEL_READY_EVENT));
}

export function MetaPixel() {
  const pathname = usePathname();

  // Ladda vid mount om samtycke redan finns, annars när det ges.
  useEffect(() => {
    if (!PIXEL_ID) return;
    loadPixel();
    window.addEventListener(CONSENT_EVENT, loadPixel);
    return () => window.removeEventListener(CONSENT_EVENT, loadPixel);
  }, []);

  // SPA-navigeringar: räkna varje vy som en PageView.
  useEffect(() => {
    if (!pixelLoaded) return;
    window.fbq?.("track", "PageView");
  }, [pathname]);

  return null;
}
