"use client";

import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { STEPS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section id="sa-fungerar-det" className="py-20 sm:py-28">
      <Container>
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
              Enkelt som 1-2-3
            </p>
            <h2
              className="text-3xl sm:text-4xl tracking-tight text-text"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Så fungerar NordLet
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {STEPS.map((step, i) => (
            <AnimateOnScroll key={step.number} delay={i * 0.15}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <span
                    className="text-2xl text-accent font-semibold"
                    style={{ fontFamily: "var(--font-dm-serif)" }}
                  >
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-text mb-3">
                  {step.title}
                </h3>
                <p className="text-text-muted leading-relaxed text-base">
                  {step.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
