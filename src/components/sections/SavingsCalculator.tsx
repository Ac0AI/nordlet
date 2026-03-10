"use client";

import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const costs = [
  { label: "Kemikalier & sanitetsvätskor", perYear: "1 200 kr" },
  { label: "Tömningsavgifter (15 tömningar/år)", perYear: "1 500 kr" },
  { label: "Extra vatten till spolning", perYear: "400 kr" },
  { label: "Tid & omvägar till stationer", perYear: "Ovärderligt" },
];

export function SavingsCalculator() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <AnimateOnScroll>
          <div className="max-w-2xl mx-auto bg-surface rounded-2xl border border-border p-8 sm:p-12">
            <div className="text-center mb-8">
              <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
                Räkna själv
              </p>
              <h3
                className="text-2xl sm:text-3xl tracking-tight text-text"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                Vad kostar din nuvarande toalett egentligen?
              </h3>
            </div>

            <div className="space-y-4">
              {costs.map((cost) => (
                <div
                  key={cost.label}
                  className="flex justify-between items-center py-3 border-b border-border last:border-b-0"
                >
                  <span className="text-text text-base">{cost.label}</span>
                  <span className="text-text font-semibold text-base">
                    {cost.perYear}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t-2 border-accent/30 flex justify-between items-center">
              <span className="text-text font-semibold text-lg">
                Årlig kostnad idag
              </span>
              <span
                className="text-2xl font-bold text-accent"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                ~3 100 kr/år
              </span>
            </div>

            <div className="mt-8 bg-green-light rounded-xl p-6 text-center">
              <p className="text-green font-semibold text-lg">
                Med NordLet: bara påsar ~300 kr/år
              </p>
              <p
                className="text-green text-2xl font-bold mt-1"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                Du sparar ~2 800 kr per år
              </p>
              <p className="text-green/70 text-sm mt-2">
                NordLet betalar sig själv på under 2 säsonger
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
