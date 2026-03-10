"use client";

import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const media = [
  { name: "Husbil & Husvagn", abbr: "H&H" },
  { name: "Allt om Husvagn & Camping", abbr: "AoHC" },
  { name: "Camping.se", abbr: "C.se" },
  { name: "Fritidsforum", abbr: "FF" },
];

export function AsSeenIn() {
  return (
    <AnimateOnScroll>
      <div className="py-10 border-y border-border bg-surface/50">
        <Container>
          <p className="text-center text-xs tracking-widest uppercase text-text-light font-semibold mb-6">
            Som uppmärksammat i
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            {media.map((m) => (
              <div key={m.name} className="text-center group">
                <span
                  className="text-xl sm:text-2xl font-bold text-text-light/40 group-hover:text-text-muted transition-colors tracking-tight"
                  style={{ fontFamily: "var(--font-dm-serif)" }}
                >
                  {m.abbr}
                </span>
                <span className="block text-[10px] text-text-light mt-0.5">
                  {m.name}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </AnimateOnScroll>
  );
}
