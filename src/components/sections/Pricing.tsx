"use client";

import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { Check, Star } from "lucide-react";
import { SITE } from "@/lib/constants";

const packages = [
  {
    name: "Frihetstoan",
    price: "14 900",
    description: "Allt du behöver för att komma igång.",
    features: [
      "NordLet Frihetstoan",
      "1 rulle påsar (30 användningar)",
      "USB-laddkabel",
      "Svensk bruksanvisning",
      "2 års garanti",
    ],
    popular: false,
  },
  {
    name: "Startpaketet",
    price: "16 900",
    originalPrice: "18 380",
    description: "Vårt mest populära val. Allt för en hel säsong.",
    features: [
      "NordLet Frihetstoan",
      "5 rullar påsar (150 användningar)",
      "USB-laddkabel + 12V-adapter",
      "Bärväska för förvaring",
      "Svensk bruksanvisning",
      "2 års garanti",
      "Prioriterad kundtjänst",
    ],
    popular: true,
  },
];

export function Pricing() {
  return (
    <section id="bestall" className="py-20 sm:py-28 bg-bg-warm">
      <Container>
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
              Beställ
            </p>
            <h2
              className="text-3xl sm:text-4xl tracking-tight text-text"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Välj ditt paket
            </h2>
            <p className="mt-3 text-text-muted text-lg max-w-lg mx-auto">
              Fri frakt i hela Sverige. 30 dagars öppet köp. Inga dolda avgifter.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg, i) => (
            <AnimateOnScroll key={pkg.name} delay={i * 0.1}>
              <div
                className={`relative rounded-2xl p-8 sm:p-10 h-full flex flex-col ${
                  pkg.popular
                    ? "bg-surface border-2 border-accent shadow-xl shadow-accent/10"
                    : "bg-surface border border-border"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                      <Star size={12} className="fill-white" />
                      Mest populärt
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-semibold text-text">{pkg.name}</h3>
                <p className="text-text-muted text-sm mt-1">{pkg.description}</p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span
                    className="text-4xl sm:text-5xl font-bold text-text"
                    style={{ fontFamily: "var(--font-dm-serif)" }}
                  >
                    {pkg.price}
                  </span>
                  <span className="text-text-muted text-lg">kr</span>
                  {pkg.originalPrice && (
                    <span className="text-text-light line-through text-lg ml-2">
                      {pkg.originalPrice} kr
                    </span>
                  )}
                </div>

                {/* Cost comparison anchor */}
                <p className="mt-2 text-sm text-accent font-medium">
                  {pkg.popular
                    ? "Spara 1 480 kr jämfört med separat köp"
                    : "Betalar sig själv på under 5 säsonger"}
                </p>

                <ul className="mt-8 space-y-3 flex-grow">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-green-light flex items-center justify-center">
                        <Check className="text-green" size={12} />
                      </span>
                      <span className="text-text text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    href={`mailto:${SITE.email}?subject=Beställning: ${pkg.name}`}
                    variant={pkg.popular ? "primary" : "outline"}
                    className="w-full justify-center"
                  >
                    Beställ {pkg.name.toLowerCase()}
                  </Button>
                  {/* Micro-copy under CTA */}
                  <p className="text-center text-xs text-text-light mt-3">
                    Fri frakt. 30 dagars pengarna tillbaka. Ingen bindning.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Phone CTA — prominent for older demographic */}
        <AnimateOnScroll delay={0.2}>
          <div className="mt-12 text-center">
            <p className="text-text-muted text-base mb-2">
              Föredrar du att prata med en riktig människa?
            </p>
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 text-2xl font-bold text-primary hover:text-accent transition-colors"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              📞 {SITE.phone}
            </a>
            <p className="text-sm text-text-light mt-1">
              Vardagar 9–17. Vi svarar oftast direkt.
            </p>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
