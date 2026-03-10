"use client";

import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Download } from "lucide-react";

export function Reciprocity() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary-dark to-primary rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/3" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
                <Download size={16} className="text-accent-light" />
                <span className="text-sm text-white/80 font-medium">
                  Gratis guide
                </span>
              </div>
              <h3
                className="text-2xl sm:text-3xl text-white tracking-tight"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                &quot;7 misstag husbilsägare gör
                <br className="hidden sm:block" /> med toaletten — och hur du undviker dem&quot;
              </h3>
              <p className="mt-4 text-white/60 text-base leading-relaxed max-w-lg mx-auto">
                Ladda ner vår kostnadsfria guide och lär dig hur erfarna
                husbilsägare löser toalettfrågan. Kort, praktisk och
                rakt på sak.
              </p>
              <div className="mt-8">
                <a
                  href="#bestall"
                  className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-8 py-4 rounded-xl hover:bg-accent-light transition-all shadow-lg shadow-accent/25 hover:-translate-y-0.5"
                >
                  <Download size={18} />
                  Ladda ner gratis
                </a>
              </div>
              <p className="mt-4 text-white/40 text-xs">
                Ingen registrering krävs. Vi skickar aldrig spam.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
