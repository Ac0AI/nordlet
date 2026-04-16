"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Chapter as ChapterData } from "@/lib/constants";

type Props = {
  chapter: ChapterData;
  index: number;
};

export function Chapter({ chapter, index }: Props) {
  const reverse = index % 2 === 1; // växlar sida varje kapitel
  return (
    <section
      id={chapter.slug}
      className={index % 2 === 0 ? "py-20 sm:py-28" : "py-20 sm:py-28 bg-bg-alt"}
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Text-kolumn */}
          <AnimateOnScroll
            className={`lg:col-span-5 ${reverse ? "lg:col-start-8" : ""}`}
          >
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
              Kapitel {chapter.number}
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl tracking-tight text-text leading-tight"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              {chapter.title}
            </h2>
            <p className="mt-5 text-xl text-text leading-snug font-medium">
              {chapter.lead}
            </p>
            <p className="mt-5 text-text-muted leading-relaxed text-base sm:text-lg">
              {chapter.body}
            </p>
            <p className="mt-8 pt-6 border-t border-border text-sm text-text-muted">
              <span className="block text-xs uppercase tracking-widest text-accent font-semibold mb-2">
                I siffror
              </span>
              {chapter.stat}
            </p>
          </AnimateOnScroll>

          {/* Bild-kolumn */}
          <AnimateOnScroll
            delay={0.12}
            className={`lg:col-span-7 ${reverse ? "lg:col-start-1 lg:row-start-1" : ""}`}
          >
            <div className="grid gap-4 sm:grid-cols-5">
              {/* Primär bild 4:5 */}
              <div className="relative sm:col-span-3 aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-surface">
                <Image
                  src={chapter.images.primary}
                  alt={chapter.images.primaryAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 35vw"
                />
              </div>
              {/* Sekundär bild 1:1 */}
              <div className="relative sm:col-span-2 aspect-square overflow-hidden rounded-3xl border border-border bg-surface sm:mt-16">
                <Image
                  src={chapter.images.secondary}
                  alt={chapter.images.secondaryAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 25vw"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
