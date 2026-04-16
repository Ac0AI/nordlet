"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function OperatingHero() {
  return (
    <section className="relative bg-primary-dark overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Subtil ljuseffekt uppe till vänster */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-accent/20 blur-3xl" />
      </div>
      <Container className="relative">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75 backdrop-blur-md sm:text-xs"
          >
            Så fungerar det
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Från rullen i kartongen till påsen i hushållssoporna.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/72 sm:text-xl"
          >
            Frihetstoa ersätter kassettanken med en vattenlös lösning som sköter
            sig själv. Här är fyra kapitel som förklarar exakt vad som händer
            från det att du packar upp kartongen till det att du slänger den
            sista påsen hemma i köket.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
