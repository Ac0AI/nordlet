"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TRUST_BADGES, SOCIAL_PROOF_STATS, SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { Star, Phone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero image background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.hero}
          alt="Husbil parkerad vid sjö i skandinavisk natur"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(142,184,201,0.22),transparent_28%),linear-gradient(180deg,rgba(6,27,36,0.45)_0%,rgba(8,30,40,0.62)_30%,rgba(8,23,31,0.82)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-primary-dark/70 to-transparent" />
      </div>

      <Container className="relative z-10 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75 backdrop-blur-md sm:text-xs"
          >
            Scandinavian RV Living
            <span className="hidden text-white/35 sm:inline">|</span>
            <span className="hidden text-white/60 sm:inline">För fjord, fjäll och stjärnhimmel</span>
          </motion.p>

          {/* Social proof bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur-md"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="text-accent fill-accent"
                />
              ))}
            </div>
            <span className="text-sm text-white/80 font-medium">
              2 300+ husbilsägare har valt Frihetstoan
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 text-4xl leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Byggd för vägarna norrut.
            <br />
            Slipp kassettanken mellan{" "}
            <span className="text-accent-light italic">fjord, fjäll och frihet.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/72 sm:text-xl"
          >
            Frihetstoan är den vattenlösa toaletten för dig som vill parkera
            vid vattnet, vakna i kall skandinavisk luft och köra vidare utan
            kemikalier, lukt eller jakt på tömningsstationer.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mx-auto mt-5 max-w-xl text-sm font-medium uppercase tracking-[0.18em] text-white/60"
          >
            Skandinavisk design. Svensk support. Byggd för ett friare campingliv.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="#bestall" size="large">
                Beställ Frihetstoan nu
              </Button>
              <Button
                href="#sa-fungerar-det"
                variant="outline"
                size="default"
                className="border-white/30 bg-white/5 text-white hover:bg-white/12 hover:text-white"
              >
                Se hur det fungerar
              </Button>
            </div>
            <p className="mt-4 text-sm font-medium text-accent-light">
              Fri frakt i Sverige. Begränsat antal kvar i första leveransen.
            </p>
            {/* Phone */}
            <div className="mt-6 flex items-center justify-center gap-2">
              <Phone size={18} className="text-white/60" />
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="text-lg sm:text-xl font-bold text-white hover:text-accent-light transition-colors"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                {SITE.phone}
              </a>
              <span className="text-sm text-white/40 ml-1">ring oss direkt</span>
            </div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-8"
          >
            {TRUST_BADGES.map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 text-sm text-white/60"
              >
                <span className="text-lg">{badge.icon}</span>
                <span className="font-medium">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Social proof stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-xl mx-auto"
        >
          {SOCIAL_PROOF_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-2xl sm:text-3xl font-bold text-white"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                {stat.number}
              </p>
              <p className="text-xs sm:text-sm text-white/50 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

      </Container>
    </section>
  );
}
