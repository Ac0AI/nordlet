"use client";

import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { PAIN_POINTS } from "@/lib/constants";

export function Problem() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <AnimateOnScroll>
          <div className="max-w-xl mb-14">
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-text">
              Friheten på vägen, vid vattnet och på landstället är svårslagen.
            </h2>
            <p className="mt-3 text-text-muted text-lg">
              Toalettlösningen är det inte alltid. Därför väljer fler ett mer
              genomtänkt alternativ för platser där vatten och avlopp inte ska
              styra vardagen. På landstället, i sommarens torka, är rent vatten
              dessutom en bristvara – då är en toalett som inte drar en droppe
              helt enkelt smartare.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-x-10 gap-y-12 max-w-5xl">
          {PAIN_POINTS.map((point, i) => {
            const Icon = point.icon;
            return (
              <AnimateOnScroll key={point.title} delay={i * 0.1}>
                <div className="border-t border-border pt-6">
                  <div className="mb-4 flex items-center gap-3">
                    <Icon className="text-accent" size={22} strokeWidth={1.75} />
                    <span className="font-display text-lg text-text-light">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-text leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        <AnimateOnScroll delay={0.3}>
          <p className="font-display mt-16 max-w-2xl text-2xl sm:text-3xl text-text leading-snug">
            Det finns ett mer genomtänkt sätt att vara fri.
          </p>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
