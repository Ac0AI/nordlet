"use client";

import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { TRUST_BADGES, EARLY_ACCESS, CTA_PRIMARY_LABEL } from "@/lib/constants";
import { track } from "@/lib/analytics";
import { ShieldCheck } from "lucide-react";

// Avslutande CTA längst ned på startsidan. Leder tillbaka till beställ-sektionen
// (#bestall) som har den riktiga kassalogiken - ingen egen mailto här.
export function CTA() {
  return (
    <section className="bg-bg-warm py-20 sm:py-28">
      <Container>
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl sm:text-5xl tracking-tight text-text leading-snug font-display"
            >
              Redo för en mer genomtänkt toalettlösning?
            </h2>
            <p className="mt-5 text-lg sm:text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
              {EARLY_ACCESS
                ? "NordLet Pro är slut i lager just nu. Anmäl dig så får du notis när nästa leverans släpps – och 900 kr rabatt på din första beställning, med öppet köp och svensk rådgivning."
                : "Välj NordLet Pro om du vill ha en vattenlös lösning med öppet köp, svensk rådgivning och en vardag på vägen som kräver mindre av dig."}
            </p>

            <div className="mt-8 inline-flex items-center gap-2 bg-green-light rounded-full px-5 py-2.5">
              <ShieldCheck size={18} className="text-green" />
              <span className="text-sm font-semibold text-green">
                30 dagars öppet köp och 2 års garanti.
              </span>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="#bestall"
                size="large"
                onClick={() => track("cta_click", { location: "footer_cta" })}
              >
                {CTA_PRIMARY_LABEL}
              </Button>
              <Button href="#sa-fungerar-det" variant="outline" size="large">
                Se hur det fungerar
              </Button>
            </div>

            <p className="mt-4 text-sm text-text-light">
              Fri leverans i hela Sverige. Leverans normalt inom 1-5 arbetsdagar.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-10">
              {TRUST_BADGES.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.text}
                    className="flex items-center gap-2 text-sm text-text-muted"
                  >
                    <Icon size={16} className="text-text-light" />
                    <span className="font-medium">{badge.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
