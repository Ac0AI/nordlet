"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  readConsent,
  writeConsent,
  trackingConfigured,
  type ConsentValue,
} from "@/lib/consent";

// Visas bara när spårning faktiskt är konfigurerad (pixel-ID satt) och inget
// val gjorts än. Innan dess sätts inga icke-nödvändiga cookies, så ingen ruta
// behövs. Acceptera/avböj har samma tyngd (GDPR).
export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!trackingConfigured || readConsent()) return;
    // Deferra setState ur effektkroppen (undviker kaskadrender-varning).
    const id = requestAnimationFrame(() => setShow(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!show) return null;

  const choose = (value: ConsentValue) => {
    writeConsent(value);
    setShow(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-4">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-border bg-surface/95 p-5 shadow-[0_24px_60px_-24px_rgba(13,37,48,0.45)] backdrop-blur-md sm:flex-row sm:items-center sm:gap-6 sm:p-6">
        <p className="flex-1 text-sm leading-relaxed text-text-muted">
          Vi använder cookies för att mäta och förbättra våra annonser. Du väljer
          själv – nödvändiga cookies behövs för att sidan ska fungera.{" "}
          <Link
            href="/integritetspolicy"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-light"
          >
            Läs mer
          </Link>
          .
        </p>
        <div className="flex flex-shrink-0 flex-col gap-2.5 sm:flex-row">
          <button
            type="button"
            onClick={() => choose("necessary")}
            className="rounded-full border border-primary/20 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Endast nödvändiga
          </button>
          <button
            type="button"
            onClick={() => choose("all")}
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-light"
          >
            Acceptera alla
          </button>
        </div>
      </div>
    </div>
  );
}
