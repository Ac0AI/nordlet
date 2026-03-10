"use client";

import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Award, Newspaper, Building2 } from "lucide-react";

const authorityItems = [
  {
    icon: Newspaper,
    label: "Testad & rekommenderad",
    detail: "Uppmärksammad i Husbil & Husvagn — Sveriges största husbilstidning",
  },
  {
    icon: Award,
    label: "CE-certifierad",
    detail: "Uppfyller alla europeiska säkerhetskrav och standarder",
  },
  {
    icon: Building2,
    label: "Svensk kundtjänst & garanti",
    detail: "Svenskt företag med lager i Sverige. 2 års full garanti.",
  },
];

export function Authority() {
  return (
    <section className="py-16 sm:py-20 border-y border-border bg-surface">
      <Container>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {authorityItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimateOnScroll key={item.label} delay={i * 0.1}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center">
                    <Icon className="text-primary" size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-text text-base">
                      {item.label}
                    </p>
                    <p className="text-text-muted text-sm mt-1 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
