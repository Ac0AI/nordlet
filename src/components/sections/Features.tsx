"use client";

import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { FEATURES } from "@/lib/constants";

export function Features() {
  return (
    <section id="fordelar" className="py-20 sm:py-28 bg-primary-dark">
      <Container>
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <p className="text-accent-light font-semibold text-sm tracking-widest uppercase mb-4">
              Fördelar
            </p>
            <h2
              className="text-3xl sm:text-4xl tracking-tight text-white"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Därför väljer allt fler Frihetstoan
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <AnimateOnScroll key={feature.title} delay={i * 0.08}>
                <div className="rounded-2xl bg-white/5 backdrop-blur-sm p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-5">
                    <Icon className="text-accent-light" size={22} />
                  </div>
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
