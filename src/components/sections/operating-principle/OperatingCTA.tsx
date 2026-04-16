"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SITE } from "@/lib/constants";
import { Phone } from "lucide-react";

export function OperatingCTA() {
  return (
    <section className="bg-primary-dark py-20 sm:py-28 text-white">
      <Container>
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent-light font-semibold text-sm tracking-widest uppercase mb-4">
              Hela operativprincipen
            </p>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10">
              Fyra steg som tillsammans ersätter kassettank, tömningsstation,
              svartvattenslang och sanitetsvätskor med en rullfolie och ett
              knapptryck.
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Redo att resa friare?
            </h2>
            <p className="mt-4 text-white/70 text-base sm:text-lg">
              Fri leverans i Sverige. 30 dagars öppet köp. Svensk support.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/#bestall" size="large">
                Beställ Frihetstoa
              </Button>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 text-lg font-semibold text-white hover:text-accent-light transition-colors py-3"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                <Phone size={18} />
                {SITE.phone}
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
