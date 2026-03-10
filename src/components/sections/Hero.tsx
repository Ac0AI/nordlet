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
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      <Container className="relative z-10 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-3xl mx-auto text-center">
          {/* Social proof bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-2.5 border border-white/20 mb-8"
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
            className="text-4xl sm:text-5xl lg:text-6xl leading-[1.15] tracking-tight text-white"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Slipp kassettanken,
            <br />
            toamedlet och{" "}
            <span className="text-accent-light italic">tömningsstationerna.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto"
          >
            Frihetstoan är Nordens första vattenlösa husbilstoa.
            Ingen kassettank. Inga kemikalier. Ingen lukt, inte ens i
            sommarhettan. Tryck på en knapp. Släng påsen i soporna. Kör vidare.
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
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Se hur det fungerar
              </Button>
            </div>
            <p className="mt-4 text-sm text-accent-light font-medium">
              Begränsat antal kvar i lager. Fri frakt vid beställning idag.
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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-12 max-w-5xl mx-auto grid gap-4 lg:grid-cols-[1.35fr_0.85fr]"
        >
          <div className="relative min-h-[320px] sm:min-h-[420px] overflow-hidden rounded-3xl border border-white/15 bg-white/95 shadow-2xl shadow-black/20">
            <div className="absolute top-5 left-5 z-10 rounded-full bg-primary px-4 py-2 text-xs font-semibold tracking-wide text-white">
              Produktbild
            </div>
            <Image
              src={IMAGES.productFront}
              alt="Frihetstoan framifrån"
              fill
              className="object-contain p-6 sm:p-8"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="relative min-h-[180px] overflow-hidden rounded-2xl border border-white/15 bg-white/95 shadow-xl shadow-black/10">
              <Image
                src={IMAGES.productDetail}
                alt="Detaljbild av Frihetstoans ovandel"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 30vw"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              <div className="relative min-h-[180px] overflow-hidden rounded-2xl border border-white/15 bg-white/95 shadow-xl shadow-black/10">
                <Image
                  src={IMAGES.productSide}
                  alt="Frihetstoan från sidan"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 50vw, 15vw"
                />
              </div>

              <div className="relative min-h-[180px] overflow-hidden rounded-2xl border border-white/15 bg-white/95 shadow-xl shadow-black/10">
                <Image
                  src={IMAGES.productDimensions}
                  alt="Måttskiss för Frihetstoan"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 50vw, 15vw"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
