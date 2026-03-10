"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/images";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Container } from "@/components/ui/Container";

export function LifestyleBanner() {
  return (
    <AnimateOnScroll>
      <section className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <Image
          src={IMAGES.road}
          alt="Par som dricker kaffe utanför husbil vid sjö i nordisk morgondimma"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <Container className="relative z-10 h-full flex items-end pb-12">
          <div className="max-w-lg">
            <p
              className="text-3xl sm:text-4xl text-white tracking-tight leading-snug"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Stanna var du vill.
              <br />
              Så länge du vill.
            </p>
            <p className="mt-3 text-white/60 text-lg">
              Utan att tänka på tömningsstationer.
            </p>
          </div>
        </Container>
      </section>
    </AnimateOnScroll>
  );
}
