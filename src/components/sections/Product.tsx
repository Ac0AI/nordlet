"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { IMAGES } from "@/lib/images";
import { Check } from "lucide-react";

const highlights = [
  "Ingen kassettank att tömma",
  "Ingen sanitetsvätska att hälla och dosera",
  "Lufttät försegling även under varma dagar",
  "Förseglade påsar som går i hushållssoporna",
  "Kompakt format för husbilar och husvagnar",
];

export function Product() {
  return (
    <section id="produkt" className="py-20 sm:py-28 bg-bg-alt">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <AnimateOnScroll>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative sm:col-span-2 min-h-[340px] overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl shadow-primary/10">
                <Image
                  src={IMAGES.productFront}
                  alt="NordLet Pro framifrån"
                  fill
                  className="object-contain p-6 sm:p-8"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="relative min-h-[220px] overflow-hidden rounded-2xl border border-border bg-surface">
                <Image
                  src={IMAGES.productSide}
                  alt="NordLet Pro från sidan"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className="relative min-h-[220px] overflow-hidden rounded-2xl border border-border bg-surface">
                <Image
                  src={IMAGES.productDimensions}
                  alt="NordLet Pro med utdragen uppsamlingslåda"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </AnimateOnScroll>

          {/* Text */}
          <AnimateOnScroll delay={0.15}>
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
              NordLet Pro
            </p>
            <h2
              className="text-3xl sm:text-4xl tracking-tight text-text leading-snug font-display"
            >
              Ett mer genomtänkt toalettval för husbilen.
            </h2>
            <p className="mt-5 text-text-muted leading-relaxed text-lg">
              NordLet Pro ersätter den traditionella kassettoaletten med en
              vattenlös, fristående lösning. Ingen svartvattentank, ingen
              flytande sanitetsvätska och ingen fast installation. Placera den på plats och
              börja använda den direkt.
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
              <Button href="#bestall">Beställ NordLet Pro</Button>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
