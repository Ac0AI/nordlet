"use client";

import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { SITE, TRUST_BADGES } from "@/lib/constants";
import { Mail, Phone, ShieldCheck } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl sm:text-5xl tracking-tight text-text leading-snug"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Redo för en mer genomtänkt toalettlösning?
            </h2>
            <p className="mt-5 text-lg sm:text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
              Välj Frihetstoa om du vill ha en vattenlös lösning med fri retur,
              svensk rådgivning och en vardag på vägen som kräver mindre av dig.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 bg-green-light rounded-full px-5 py-2.5">
              <ShieldCheck size={18} className="text-green" />
              <span className="text-sm font-semibold text-green">
                30 dagars öppet köp och fri retur.
              </span>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href={`mailto:${SITE.email}?subject=Beställning Frihetstoa`}
                size="large"
              >
                <Mail size={18} className="mr-2.5" />
                Beställ via e-post
              </Button>
              <Button
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                variant="secondary"
                size="large"
              >
                <Phone size={18} className="mr-2.5" />
                Ring oss direkt
              </Button>
            </div>

            <p className="mt-4 text-sm text-accent font-medium">
              Begränsat antal i lager. Leverans inom 1-2 arbetsdagar från Sverige.
            </p>

            <div className="mt-6 text-text-muted text-base">
              <a
                href={`mailto:${SITE.email}`}
                className="hover:text-accent transition-colors"
              >
                {SITE.email}
              </a>
              <span className="mx-3 text-border">|</span>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="hover:text-accent transition-colors"
              >
                {SITE.phone}
              </a>
            </div>

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
