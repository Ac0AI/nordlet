"use client";

import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Check, X } from "lucide-react";

const rows = [
  { feature: "Kräver vatten", traditional: true, nordlet: false },
  { feature: "Kräver kemikalier", traditional: true, nordlet: false },
  { feature: "Tömningsstation behövs", traditional: true, nordlet: false },
  { feature: "Elanslutning krävs", traditional: true, nordlet: false },
  { feature: "Luktar", traditional: true, nordlet: false },
  { feature: "Installation krävs", traditional: true, nordlet: false },
  { feature: "Batteridrift", traditional: false, nordlet: true },
  { feature: "Biologiskt nedbrytbar", traditional: false, nordlet: true },
  { feature: "Fristående, flytta fritt", traditional: false, nordlet: true },
  { feature: "Släng i vanliga soporna", traditional: false, nordlet: true },
];

function CellIcon({ good }: { good: boolean }) {
  return good ? (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-light">
      <Check size={15} className="text-green" />
    </span>
  ) : (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-50">
      <X size={15} className="text-red-400" />
    </span>
  );
}

export function Comparison() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
              Jämförelse
            </p>
            <h2
              className="text-3xl sm:text-4xl tracking-tight text-text"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Frihetstoan vs. traditionell husbilstoalett
            </h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="max-w-2xl mx-auto overflow-hidden rounded-2xl border border-border bg-surface">
            {/* Header */}
            <div className="grid grid-cols-[1fr_auto_auto] gap-0 bg-bg-alt px-6 py-4 border-b border-border">
              <div />
              <div className="w-28 sm:w-36 text-center text-sm font-medium text-text-muted">
                Traditionell
              </div>
              <div className="w-28 sm:w-36 text-center">
                <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Frihetstoan
                </span>
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => {
              // For "kräver/luktar/installation" rows: traditional=true is BAD, nordlet=false is GOOD
              // For "batteridrift/nedbrytbar/fristående" rows: traditional=false is BAD, nordlet=true is GOOD
              const traditionalGood = !row.traditional;
              const nordletGood = row.nordlet
                ? true // positive features: nordlet has them = good
                : !row.traditional
                  ? false // negative features inverted: if traditional doesn't need it, nordlet neither
                  : true; // negative features: nordlet doesn't have them = good

              // Simpler logic: for first 6 rows, "true" = bad. For last 4, "true" = good.
              const isNegativeFeature = i < 6;

              return (
                <div
                  key={row.feature}
                  className={`grid grid-cols-[1fr_auto_auto] gap-0 px-6 py-3.5 items-center ${
                    i % 2 === 0 ? "bg-surface" : "bg-bg-alt/30"
                  }`}
                >
                  <span className="text-sm sm:text-base text-text">
                    {row.feature}
                  </span>
                  <div className="w-28 sm:w-36 flex justify-center">
                    <CellIcon
                      good={isNegativeFeature ? !row.traditional : row.traditional}
                    />
                  </div>
                  <div className="w-28 sm:w-36 flex justify-center">
                    <CellIcon
                      good={isNegativeFeature ? !row.nordlet : row.nordlet}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
