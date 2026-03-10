"use client";

import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { SITE, TRUST_BADGES } from "@/lib/constants";
import { Mail, Phone, ShieldCheck } from "lucide-react";

export function CTA() {
  return (
    <section id="bestall" className="py-20 sm:py-28">
      <Container>
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl sm:text-5xl tracking-tight text-text leading-snug"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Redo att resa friare?
            </h2>
            <p className="mt-5 text-lg sm:text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
              Anslut dig till 2 300+ husbilsägare som redan valt Frihetstoan.
              Du har 30 dagars öppet köp. Inte nöjd? Pengarna tillbaka.
              Inga frågor.
            </p>

            {/* Risk reversal — Cialdini #2 Commitment + #1 Reciprocity */}
            <div className="mt-8 inline-flex items-center gap-2 bg-green-light rounded-full px-5 py-2.5">
              <ShieldCheck size={18} className="text-green" />
              <span className="text-sm font-semibold text-green">
                Riskfritt köp. 30 dagars pengarna-tillbaka-garanti
              </span>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href={`mailto:${SITE.email}?subject=Beställning NordLet`}
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

            {/* Scarcity — Cialdini #6 */}
            <p className="mt-4 text-sm text-accent font-medium">
              Begränsat antal i lager. Vi skickar inom 1–2 arbetsdagar.
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

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-10">
              {TRUST_BADGES.map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 text-sm text-text-muted"
                >
                  <span className="text-lg">{badge.icon}</span>
                  <span className="font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
