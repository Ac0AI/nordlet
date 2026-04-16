"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CHAPTERS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section id="sa-fungerar-det" className="py-20 sm:py-28">
      <Container>
        <AnimateOnScroll>
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
              Så fungerar det
            </p>
            <h2
              className="text-3xl sm:text-4xl tracking-tight text-text"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Så fungerar Frihetstoa
            </h2>
            <p className="mt-4 text-text-muted text-lg">
              Från rullen i kartongen till påsen i hushållssoporna. Fyra
              kapitel.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {CHAPTERS.map((chapter, i) => (
            <AnimateOnScroll key={chapter.slug} delay={i * 0.1}>
              <Link
                href={`/sa-fungerar-det#${chapter.slug}`}
                className="group block h-full overflow-hidden rounded-3xl border border-border bg-surface transition-all hover:border-accent/40 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-bg-alt">
                  <Image
                    src={chapter.images.primary}
                    alt={chapter.images.primaryAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                    Kapitel {chapter.number}
                  </p>
                  <h3 className="mt-2 text-xl text-text leading-snug">
                    {chapter.title}
                  </h3>
                  <p className="mt-3 text-sm text-text-muted leading-relaxed">
                    {chapter.lead}
                  </p>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.35}>
          <div className="mt-12 text-center">
            <Link
              href="/sa-fungerar-det"
              className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-surface px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-accent hover:bg-accent/5"
            >
              Läs hela historien
              <ArrowRight size={16} />
            </Link>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
