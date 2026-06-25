"use client";

import { useEffect, useRef } from "react";
import { PIXEL_READY_EVENT } from "./MetaPixel";

/**
 * Triggar ett standard Meta-event en gång när pixeln är redo.
 * Lägg på vilken sida som helst, t.ex.:
 *   <MetaTrack event="ViewContent" params={{ content_name: "NordLet Pro" }} />
 * Gör inget om ingen pixel är konfigurerad eller samtycke saknas.
 */
export function MetaTrack({
  event,
  params,
}: {
  event: string;
  params?: Record<string, unknown>;
}) {
  const fired = useRef(false);
  // Frys params till en stabil sträng så effekten inte loopar på ny objektidentitet.
  const paramsKey = params ? JSON.stringify(params) : "";

  useEffect(() => {
    const fire = () => {
      if (fired.current) return;
      if (typeof window === "undefined" || typeof window.fbq !== "function") return;
      fired.current = true;
      window.fbq("track", event, params);
    };
    fire();
    window.addEventListener(PIXEL_READY_EVENT, fire);
    return () => window.removeEventListener(PIXEL_READY_EVENT, fire);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event, paramsKey]);

  return null;
}
