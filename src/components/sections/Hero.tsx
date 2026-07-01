"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import {
  SOCIAL_PROOF_STATS,
  EARLY_ACCESS,
  CTA_PRIMARY_LABEL,
  FOUNDING,
} from "@/lib/constants";
import { track } from "@/lib/analytics";
import { IMAGES } from "@/lib/images";
import { ShieldCheck } from "lucide-react";

const foundingKr = FOUNDING.priceKr.toLocaleString("sv-SE");

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[92vh] flex-col overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark">
      {/* Skogen återvänder som tyst atmosfär till vänster och löses upp i tealen
          – ingen hård skarv. Maskad + nedtonad så texten förblir läsbar. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-0 w-full lg:w-[62%]"
        style={{
          WebkitMaskImage:
            "linear-gradient(100deg, black 0%, black 30%, transparent 72%)",
          maskImage:
            "linear-gradient(100deg, black 0%, black 30%, transparent 72%)",
        }}
      >
        <Image
          src={IMAGES.heroForest}
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 62vw"
          className="object-cover opacity-[0.22]"
        />
      </div>
      {/* Djup-vinjett: håller hörnen mörka, lyfter mitten */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 90% at 72% 38%, rgba(207,171,116,0.10) 0%, transparent 42%), radial-gradient(100% 100% at 50% 120%, rgba(8,23,31,0.65) 0%, transparent 55%)",
        }}
      />

      {/* Innehåll */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center gap-10 px-6 pb-10 pt-28 sm:px-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-6 lg:px-12 lg:pb-16 lg:pt-24">
        {/* Vänster: budskap */}
        <div className="w-full max-w-xl lg:col-span-6 xl:col-span-6">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-accent-light sm:text-xs"
          >
            <span className="h-px w-8 bg-accent/70" />
            För husbil · husvagn · båt · stuga
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-6 font-display text-[2.6rem] leading-[1.05] tracking-tight text-white sm:text-[3.4rem] lg:text-[3.8rem]"
          >
            <span className="block">En toalett utan vatten,</span>
            <span className="block">
              utan kassett <span className="text-white/40">–</span> och
            </span>
            <span className="block text-accent-light">utan lukt.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-7 max-w-md text-lg leading-relaxed text-white/72"
          >
            NordLet Pro förseglar varje besök lufttätt med värme, inom sekunder.
            Ingen vattenanslutning, ingen tömningsstation, ingen sanitetsvätska
            att dosera.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button
              href="#bestall"
              size="large"
              onClick={() => track("cta_click", { location: "hero" })}
            >
              {CTA_PRIMARY_LABEL}
            </Button>
            <Button
              href="#sa-fungerar-det"
              variant="outline"
              size="default"
              className="border-white/25 bg-white/[0.04] text-white hover:border-white/0 hover:bg-white hover:text-primary"
            >
              Se hur det fungerar
            </Button>
          </motion.div>

          {EARLY_ACCESS && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.36 }}
              className="mt-5 text-sm font-semibold text-accent-light"
            >
              Just nu: grundarpris {foundingKr} kr för de {FOUNDING.limit} första
            </motion.p>
          )}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-7 flex items-center gap-2.5 text-sm text-white/55"
          >
            <ShieldCheck size={16} className="text-accent-light" />
            30 dagars öppet köp · 2 års garanti · fraktfritt från svenskt lager
          </motion.p>
        </div>

        {/* Höger: den urklippta produkten på den mörka scenen, förseglad av en mässingsbåge */}
        <div className="relative flex w-full items-center justify-center lg:col-span-6 lg:h-full">
          <div className="relative aspect-square w-[82%] max-w-[540px] sm:w-[70%] lg:w-full">
            {/* Mjuk värme-glöd bakom – stor och diffus, ger djup utan hård skiva */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(56% 56% at 52% 44%, rgba(207,171,116,0.16) 0%, transparent 68%)",
              }}
            />

            {/* Mässings-sigillbåge – signaturen: en öppen båge som ritas in,
                produkten står framför den. Försegling, inte porthål. */}
            <svg
              aria-hidden
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full"
            >
              <motion.circle
                cx="50"
                cy="46"
                r="41"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="0.4"
                strokeLinecap="round"
                initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 0.7, opacity: 0.7 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                style={{ rotate: -126, transformOrigin: "50px 46px" }}
              />
            </svg>

            {/* Markskugga som förankrar produkten på scenen */}
            <div
              aria-hidden
              className="absolute bottom-[5%] left-1/2 h-[7%] w-[60%] -translate-x-1/2 rounded-[50%] blur-2xl"
              style={{ background: "rgba(8,23,31,0.6)" }}
            />

            {/* Produkten – urklippt (transparent bakgrund), står direkt på scenen */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 22, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="absolute inset-0"
              style={{ filter: "drop-shadow(0 26px 38px rgba(8,23,31,0.5))" }}
            >
              <Image
                src={IMAGES.productFrontCutout}
                alt="NordLet Pro, fristående vattenlös toalett med värmeförsegling"
                fill
                priority
                unoptimized
                sizes="(max-width: 1024px) 70vw, 36vw"
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Spec-remsa: tre ärliga nyckeltal i sekvens, ersätter spridda trust-element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="relative z-10 border-t border-white/10"
      >
        <dl className="mx-auto flex max-w-7xl items-stretch px-6 sm:px-10 lg:px-12">
          {SOCIAL_PROOF_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-1 items-baseline gap-3 py-5 ${
                i > 0 ? "border-l border-white/10 pl-5 sm:pl-8" : ""
              }`}
            >
              <dt className="font-display text-2xl text-white sm:text-3xl">
                {stat.number}
              </dt>
              <dd className="text-xs leading-tight text-white/55 sm:text-sm">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  );
}
