"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Check } from "lucide-react";

const highlights = [
  "Helt vattenlös. Ställ den var du vill",
  "Batteridrift. Ingen elanslutning",
  "Luktfri värmeförsegling efter varje användning",
  "Biologiskt nedbrytbara påsar. Släng i vanliga soporna",
  "Kompakt design som passar alla husbilar och husvagnar",
];

export function Product() {
  return (
    <section id="produkt" className="py-20 sm:py-28 bg-bg-alt">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <AnimateOnScroll>
            <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-surface to-bg-warm flex items-center justify-center border border-border overflow-hidden">
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full p-12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse cx="200" cy="330" rx="130" ry="22" fill="#1B3A4B" opacity="0.04" />
                <path
                  d="M140 195 C140 135 165 92 200 92 C235 92 260 135 260 195 L260 275 C260 296 242 308 200 308 C158 308 140 296 140 275 Z"
                  fill="white" stroke="#E8E2D8" strokeWidth="2"
                />
                <ellipse cx="200" cy="195" rx="60" ry="32" fill="#FFFDF9" stroke="#1B3A4B" strokeWidth="2" />
                <ellipse cx="200" cy="195" rx="44" ry="23" fill="#F7F3ED" />
                <circle cx="200" cy="105" r="11" fill="#B8860B" />
                <circle cx="200" cy="105" r="5.5" fill="white" opacity="0.35" />
                {/* Checkmark badge */}
                <circle cx="280" cy="140" r="22" fill="#2E7D4F" opacity="0.1" />
                <path d="M270 140 L277 147 L292 132" stroke="#2E7D4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </AnimateOnScroll>

          {/* Text */}
          <AnimateOnScroll delay={0.15}>
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
              Frihetstoan
            </p>
            <h2
              className="text-3xl sm:text-4xl tracking-tight text-text leading-snug"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Möt NordLet Frihetstoan
            </h2>
            <p className="mt-5 text-text-muted leading-relaxed text-lg">
              Frihetstoan är ingen vanlig campingtoalett. Det är Nordens första
              vattenlösa husbilstoalett som helt ersätter din gamla lösning.
              Ingen installation. Ingen anslutning. Du packar upp den, ställer
              den på plats, och börjar använda den direkt.
            </p>

            <ul className="mt-8 space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-green-light flex items-center justify-center">
                    <Check className="text-green" size={14} />
                  </span>
                  <span className="text-text text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button href="#bestall">Beställ Frihetstoan</Button>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
