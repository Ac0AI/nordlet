"use client";

import { useEffect, useRef } from "react";

/**
 * Renderar html_snippet från Kustom Checkout. Snippeten innehåller en
 * <script> som måste återskapas manuellt - script-taggar som sätts via
 * innerHTML körs inte av webbläsaren.
 */
export function KustomSnippet({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = html;
    el.querySelectorAll("script").forEach((oldScript) => {
      const script = document.createElement("script");
      Array.from(oldScript.attributes).forEach((attr) =>
        script.setAttribute(attr.name, attr.value)
      );
      script.appendChild(document.createTextNode(oldScript.innerHTML));
      oldScript.parentNode?.replaceChild(script, oldScript);
    });
  }, [html]);

  return <div ref={ref} />;
}
