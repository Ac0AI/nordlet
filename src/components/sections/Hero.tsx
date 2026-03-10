"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TRUST_BADGES, SOCIAL_PROOF_STATS, SITE } from "@/lib/constants";
import { Star, Phone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-bg-warm to-bg pt-28 pb-20 sm:pt-36 sm:pb-28">
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Social proof bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-surface rounded-full px-5 py-2.5 shadow-sm border border-border mb-8"
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
            <span className="text-sm text-text-muted font-medium">
              2 300+ husbilsägare har valt Frihetstoan
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl leading-[1.15] tracking-tight text-text"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Slipp kassettanken,
            <br />
            toamedlet och{" "}
            <span className="text-accent italic">tömningsstationerna.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-text-muted leading-relaxed max-w-2xl mx-auto"
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
              >
                Se hur det fungerar
              </Button>
            </div>
            <p className="mt-4 text-sm text-accent font-medium">
              Begränsat antal kvar i lager. Fri frakt vid beställning idag.
            </p>
            {/* Phone */}
            <div className="mt-6 flex items-center justify-center gap-2">
              <Phone size={18} className="text-primary" />
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="text-lg sm:text-xl font-bold text-primary hover:text-accent transition-colors"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                {SITE.phone}
              </a>
              <span className="text-sm text-text-light ml-1">ring oss direkt</span>
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
                className="flex items-center gap-2 text-sm text-text-muted"
              >
                <span className="text-lg">{badge.icon}</span>
                <span className="font-medium">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Product visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="relative aspect-[16/10] rounded-3xl bg-gradient-to-br from-bg-alt to-bg-warm flex items-center justify-center overflow-hidden border border-border shadow-2xl shadow-primary/5">
            <svg
              viewBox="0 0 600 380"
              className="w-full h-full p-8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="300" cy="330" rx="180" ry="28" fill="#1B3A4B" opacity="0.04" />
              <path
                d="M210 190 C210 120 240 72 300 72 C360 72 390 120 390 190 L390 290 C390 315 368 330 300 330 C232 330 210 315 210 290 Z"
                fill="white" stroke="#E8E2D8" strokeWidth="2"
              />
              <ellipse cx="300" cy="190" rx="90" ry="48" fill="#FFFDF9" stroke="#1B3A4B" strokeWidth="2" />
              <ellipse cx="300" cy="190" rx="68" ry="36" fill="#F7F3ED" />
              <path
                d="M215 184 C215 148 255 118 300 118 C345 118 385 148 385 184"
                fill="white" stroke="#1B3A4B" strokeWidth="2" opacity="0.4"
              />
              <circle cx="300" cy="108" r="14" fill="#B8860B" />
              <circle cx="300" cy="108" r="7" fill="white" opacity="0.35" />
              <rect x="355" y="272" width="22" height="10" rx="3" fill="#2E7D4F" opacity="0.5" />
              <rect x="358" y="274" width="6" height="6" rx="1" fill="#2E7D4F" opacity="0.7" />
              <rect x="366" y="274" width="6" height="6" rx="1" fill="#2E7D4F" opacity="0.4" />
              <line x1="395" y1="190" x2="480" y2="160" stroke="#B8860B" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
              <text x="485" y="157" fill="#B8860B" fontSize="11" fontWeight="600" fontFamily="system-ui">Ingen lukt</text>
              <text x="485" y="172" fill="#5A5A5A" fontSize="10" fontFamily="system-ui">Inte ens i 30°C</text>
              <line x1="390" y1="285" x2="470" y2="300" stroke="#1B3A4B" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
              <text x="475" y="297" fill="#1B3A4B" fontSize="11" fontWeight="600" fontFamily="system-ui">Batteridrift</text>
              <text x="475" y="312" fill="#5A5A5A" fontSize="10" fontFamily="system-ui">Inga kablar</text>
              <line x1="210" y1="285" x2="130" y2="300" stroke="#1B3A4B" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
              <text x="40" y="297" fill="#1B3A4B" fontSize="11" fontWeight="600" fontFamily="system-ui">Ingen kassettank</text>
              <text x="40" y="312" fill="#5A5A5A" fontSize="10" fontFamily="system-ui">Ingen tömning</text>
            </svg>
          </div>
        </motion.div>

        {/* Social proof stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-14 grid grid-cols-3 gap-4 max-w-xl mx-auto"
        >
          {SOCIAL_PROOF_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-2xl sm:text-3xl font-bold text-primary"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                {stat.number}
              </p>
              <p className="text-xs sm:text-sm text-text-muted mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
