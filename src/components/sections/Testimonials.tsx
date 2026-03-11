"use client";

import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { TESTIMONIALS } from "@/lib/constants";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section id="omdomen" className="py-20 sm:py-28 bg-bg-alt">
      <Container>
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
              Erfarenheter
            </p>
            <h2
              className="text-3xl sm:text-4xl tracking-tight text-text"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Röster från vägen
            </h2>
            <p className="mt-3 text-text-muted text-lg">
              96% av våra kunder säger att de gärna rekommenderar Frihetstoa vidare
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <AnimateOnScroll key={t.name} delay={i * 0.1}>
              <div className="bg-surface rounded-2xl p-8 border border-border shadow-sm h-full flex flex-col">
                <Quote className="text-accent/30 mb-4" size={28} />
                <p className="text-text leading-relaxed text-base flex-grow italic">
                  &quot;{t.text}&quot;
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex mb-2">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star
                        key={j}
                        size={14}
                        className="text-accent fill-accent"
                      />
                    ))}
                  </div>
                  <p className="font-semibold text-text text-sm">{t.name}</p>
                  <p className="text-text-light text-sm">
                    {t.location}, {t.vehicle}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
