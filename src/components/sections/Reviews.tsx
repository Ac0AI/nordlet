"use client";

import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Star } from "lucide-react";
import { REVIEWS } from "@/lib/constants";

export function Reviews() {
  return (
    <section className="py-20 sm:py-28 bg-bg-alt">
      <Container>
        <AnimateOnScroll>
          <div className="text-center mb-14 max-w-xl mx-auto">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
              Omdömen
            </p>
            <h2
              className="text-3xl sm:text-4xl tracking-tight text-text font-display"
            >
              Vad våra första kunder säger
            </h2>
            <p className="mt-3 text-text-muted text-lg">
              Vi är ett nytt företag. De här är några av de första som provat
              NordLet Pro på riktigt - i husvagn, husbil och på landstället.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {REVIEWS.map((review, i) => (
            <AnimateOnScroll key={review.name} delay={i * 0.1}>
              <figure className="h-full flex flex-col rounded-2xl bg-surface border border-border p-8">
                <div
                  className="flex gap-1 text-accent mb-5"
                  aria-label={`${review.rating} av 5`}
                >
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <Star key={s} size={16} className="fill-accent" />
                  ))}
                </div>
                <blockquote className="flex-grow text-text leading-relaxed text-base">
                  “{review.quote}”
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-border">
                  <p className="font-semibold text-text">{review.name}</p>
                  <p className="text-text-muted text-sm mt-0.5">
                    {review.context}
                  </p>
                </figcaption>
              </figure>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
