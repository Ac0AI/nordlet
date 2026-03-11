"use client";

import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { PAIN_POINTS } from "@/lib/constants";

export function Problem() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl tracking-tight text-text"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Friheten med husbil är svårslagen.
            </h2>
            <p className="mt-3 text-text-muted text-lg max-w-xl mx-auto">
              Toalettlösningen är det inte alltid. Därför väljer allt fler ett
              mer genomtänkt alternativ.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PAIN_POINTS.map((point, i) => (
            <AnimateOnScroll key={point.title} delay={i * 0.1}>
              <div className="text-center p-8 rounded-2xl bg-surface border border-border">
                <span className="text-4xl mb-5 block">{point.emoji}</span>
                <h3 className="text-xl font-semibold text-text mb-3 leading-snug">
                  {point.title}
                </h3>
                <p className="text-text-muted leading-relaxed text-base">
                  {point.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.3}>
          <div className="mt-14 text-center">
            <p
              className="text-xl sm:text-2xl text-text"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Det finns ett mer genomtänkt sätt att resa.
            </p>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
