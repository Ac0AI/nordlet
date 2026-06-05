"use client";

import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Check, X } from "lucide-react";

type Row = {
  feature: string;
  other: boolean; // har "den andra lösningen" egenskapen?
  nordlet: boolean; // har NordLet Pro egenskapen?
  negative?: boolean; // true = egenskapen är en nackdel (att ha den är dåligt)
};

// NordLet Pro vs traditionell kassettoalett.
// Alla rader formuleras som fördelar -> grön bock betyder alltid "bra/ja".
const cassetteRows: Row[] = [
  { feature: "Slipper kassettank", other: false, nordlet: true },
  { feature: "Utan kemikalier/toamedel", other: false, nordlet: true },
  { feature: "Ingen tömningsstation", other: false, nordlet: true },
  { feature: "Helt vattenlös", other: false, nordlet: true },
  { feature: "Luktfri försegling", other: false, nordlet: true },
  { feature: "Funkar med vanligt toalettpapper", other: false, nordlet: true },
  { feature: "Batteridrift", other: false, nordlet: true },
  { feature: "Ingen fast installation", other: false, nordlet: true },
  { feature: "Släng i vanliga soporna", other: false, nordlet: true },
];

// NordLet Pro vs andra (typiskt manuella) förseglande toaletter
const sealingRows: Row[] = [
  { feature: "Batteridrift", other: false, nordlet: true },
  { feature: "Laddas via USB eller 12V", other: false, nordlet: true },
  { feature: "Försegling med ett knapptryck", other: false, nordlet: true },
  { feature: "Mjukstängande lock och sits", other: false, nordlet: true },
  { feature: "Enkelt, intuitivt gränssnitt", other: false, nordlet: true },
];

function CellIcon({ good }: { good: boolean }) {
  return good ? (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-light">
      <Check size={15} className="text-green" />
    </span>
  ) : (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-bg-alt">
      <X size={15} className="text-text-light" />
    </span>
  );
}

function ComparisonTable({
  rows,
  otherLabel,
}: {
  rows: Row[];
  otherLabel: string;
}) {
  return (
    <div className="max-w-2xl mx-auto overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="grid grid-cols-[minmax(0,1fr)_auto_auto] gap-0 bg-bg-alt px-6 py-4 border-b border-border">
        <div />
        <div className="w-28 sm:w-36 text-center text-sm font-medium text-text-muted">
          {otherLabel}
        </div>
        <div className="w-28 sm:w-36 text-center">
          <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
            NordLet Pro
          </span>
        </div>
      </div>

      {rows.map((row, i) => (
        <div
          key={row.feature}
          className={`grid grid-cols-[minmax(0,1fr)_auto_auto] gap-0 px-6 py-3.5 items-center ${
            i % 2 === 0 ? "bg-surface" : "bg-bg-alt/30"
          }`}
        >
          <span className="text-sm sm:text-base text-text">{row.feature}</span>
          <div className="w-28 sm:w-36 flex justify-center">
            <CellIcon good={row.negative ? !row.other : row.other} />
          </div>
          <div className="w-28 sm:w-36 flex justify-center">
            <CellIcon good={row.negative ? !row.nordlet : row.nordlet} />
          </div>
        </div>
      ))}
    </div>
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
              className="text-3xl sm:text-4xl tracking-tight text-text font-display"
            >
              NordLet Pro vs. kassettoaletten
            </h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <ComparisonTable rows={cassetteRows} otherLabel="Kassettoalett" />
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <div className="text-center mt-20 mb-14">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
              Jämförelse
            </p>
            <h2
              className="text-3xl sm:text-4xl tracking-tight text-text font-display"
            >
              NordLet Pro vs. andra förseglande toaletter
            </h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <ComparisonTable rows={sealingRows} otherLabel="Andra förseglande" />
          <p className="max-w-2xl mx-auto mt-4 text-center text-xs text-text-muted">
            Jämfört med typiska manuella förseglande toaletter på marknaden.
          </p>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
