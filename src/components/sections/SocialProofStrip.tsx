"use client";

import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Star } from "lucide-react";
import { REVIEWS } from "@/lib/constants";

// Ett tidigt, äkta bevis högt upp på sidan – kall trafik från Meta är
// skeptisk, och ett riktigt citat före första prisfrågan sänker tröskeln.
// Fullständiga omdömen finns längre ner i Reviews-sektionen.
const featured = REVIEWS.find((r) => r.name === "Robert Eriksson") ?? REVIEWS[0];

export function SocialProofStrip() {
  return (
    <section className="bg-bg-alt py-14 sm:py-16">
      <Container>
        <AnimateOnScroll>
          <figure className="mx-auto max-w-3xl text-center">
            <div
              className="mb-5 flex justify-center gap-1 text-accent"
              aria-label={`${featured.rating} av 5`}
            >
              {Array.from({ length: featured.rating }).map((_, s) => (
                <Star key={s} size={18} className="fill-accent" />
              ))}
            </div>
            <blockquote className="font-display text-2xl leading-snug text-text sm:text-3xl">
              “{featured.quote}”
            </blockquote>
            <figcaption className="mt-6 text-sm text-text-muted">
              <span className="font-semibold text-text">{featured.name}</span> ·{" "}
              {featured.context}
            </figcaption>
          </figure>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
