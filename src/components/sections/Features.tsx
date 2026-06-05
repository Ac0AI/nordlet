"use client";

import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { FEATURES } from "@/lib/constants";

export function Features() {
  return (
    <section id="fordelar" className="py-20 sm:py-28 bg-primary-dark">
      <Container>
        <AnimateOnScroll>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-accent-light font-semibold text-sm tracking-widest uppercase mb-4">
              Fördelar
            </p>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-white">
              Därför väljer allt fler NordLet Pro framför kassettoaletten
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 max-w-5xl mx-auto">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <AnimateOnScroll key={feature.title} delay={i * 0.08}>
                <div className="border-t border-white/15 pt-6">
                  <Icon
                    className="text-accent-light mb-4"
                    size={24}
                    strokeWidth={1.75}
                  />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
