"use client";

import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Award, Newspaper, Building2 } from "lucide-react";

const authorityItems = [
  {
    icon: Award,
    label: "CE-märkt",
    detail: "Uppfyller europeiska säkerhetskrav och standarder.",
  },
  {
    icon: Building2,
    label: "Svensk support & garanti",
    detail: "Svenskt företag med lager i Sverige. 2 års garanti.",
  },
  {
    icon: Newspaper,
    label: "14 dagars full ångerrätt",
    detail: "Enligt Distansavtalslagen. Utöver det: 30 dagars öppet köp.",
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
