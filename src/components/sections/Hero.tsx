"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SOCIAL_PROOF_STATS, SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { Phone, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative grid min-h-[90vh] grid-cols-1 overflow-hidden lg:grid-cols-2">
      {/* Vänster: skog + slogan */}
      <div className="relative flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.heroForest}
            alt="Stämningsfull nordisk skog i dis"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Mörk gradient för läsbar text */}
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(8,23,31,0.86)_0%,rgba(8,23,31,0.66)_45%,rgba(8,23,31,0.34)_100%)]" />
        </div>

        <div className="relative z-10 w-full px-6 pb-16 pt-32 sm:px-10 lg:px-14 lg:py-28 xl:px-20">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur-md sm:text-xs"
            >
              Vattenlös frihet för husbilen
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Svara naturen.
              <br />
              <span className="text-accent-light italic">Var som helst.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-7 max-w-md text-lg leading-relaxed text-white/75 sm:text-xl"
            >
              Frihetstoa &ndash; den vattenlösa toaletten som förseglar varje
              besök lufttätt. Ingen kassettank, inga kemikalier, inga omvägar
              till tömningsstationen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Button href="#bestall" size="large">
                Beställ Frihetstoa
              </Button>
              <Button
                href="#sa-fungerar-det"
                variant="outline"
                size="default"
                className="border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white"
              >
                Se hur det fungerar
              </Button>
            </motion.div>

            <p className="mt-4 text-sm font-medium text-accent-light">
              Fri leverans i Sverige &middot; 30 dagars öppet köp
            </p>

            {SITE.phone && (
              <div className="mt-6 flex items-center gap-2">
                <Phone size={18} className="text-white/60" />
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="text-lg font-bold text-white transition-colors hover:text-accent-light"
                  style={{ fontFamily: "var(--font-dm-serif)" }}
                >
                  {SITE.phone}
                </a>
              </div>
            )}

            {/* Kompakta nyckeltal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex max-w-md gap-8 border-t border-white/15 pt-6"
            >
              {SOCIAL_PROOF_STATS.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-2xl font-bold text-white sm:text-3xl"
                    style={{ fontFamily: "var(--font-dm-serif)" }}
                  >
                    {stat.number}
                  </p>
                  <p className="mt-1 text-xs text-white/55">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Accentlinje mellan panelerna (som Clesana) */}
      <div className="absolute inset-y-0 left-1/2 z-20 hidden w-px -translate-x-1/2 bg-accent/60 lg:block" />

      {/* Höger: produkt på mörk bakgrund – bilden fyller hela panelen kant-till-kant */}
      <div className="relative min-h-[58vh] overflow-hidden bg-primary-dark lg:min-h-0">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="absolute inset-0"
        >
          <Image
            src={IMAGES.heroProduct}
            alt="Frihetstoa, vattenlös toalett för husbil"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
        {/* Mjuk vinjett för djup och kontrast mot brickan */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,transparent_45%,rgba(8,23,31,0.55)_100%)]" />

        {/* Äkta märkning (ingen falsk 'Made in')-bricka */}
        <div className="absolute bottom-6 right-6 z-10 flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
          <ShieldCheck size={14} className="text-accent-light" />
          CE-märkt &middot; Svensk support
        </div>
      </div>
    </section>
  );
}
