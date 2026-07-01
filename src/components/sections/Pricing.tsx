"use client";

import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import {
  Check,
  Star,
  Phone,
  CreditCard,
  Lock,
  ShieldCheck,
  Truck,
  CalendarCheck,
} from "lucide-react";
import { SITE, EARLY_ACCESS } from "@/lib/constants";
import { PRODUCTS, type ProductKey } from "@/lib/products";
import { track } from "@/lib/analytics";
import { openBuyModal } from "@/lib/buyModal";
import { TrustStrip } from "@/components/ui/TrustStrip";

// Var beställ-knappen pekar, i prioritetsordning:
// 1. extern checkout-länk via env, 2. Kustom-kassan, 3. e-post (fallback)
function checkoutHref(key: ProductKey, name: string): {
  href: string;
  hasCheckout: boolean;
} {
  const externalUrl =
    key in SITE.checkoutUrls
      ? SITE.checkoutUrls[key as keyof typeof SITE.checkoutUrls]
      : "";
  if (externalUrl) return { href: externalUrl, hasCheckout: true };
  if (SITE.kustomEnabled)
    return { href: `/kassa?paket=${key}`, hasCheckout: true };
  return {
    href: `mailto:${SITE.email}?subject=Beställning: ${name}`,
    hasCheckout: false,
  };
}

const REFILL_PACKS = [
  {
    key: "refill-1" as const,
    label: "1 rulle",
    uses: "30 användningar",
    note: "Testa eller fyll på",
    popular: false,
  },
  {
    key: "refill-3" as const,
    label: "3-pack",
    uses: "90 användningar",
    note: "Räcker hela semestern",
    popular: true,
  },
  {
    key: "refill-5" as const,
    label: "5-pack",
    uses: "150 användningar",
    note: "En hel säsong",
    popular: false,
  },
];

const packages = [
  {
    name: "NordLet Pro",
    checkoutKey: "frihetstoa" as const,
    price: "14 900",
    description: "För dig som vill komma igång i egen takt.",
    features: [
      "NordLet Pro",
      "1 rulle påsar (30 användningar)",
      "USB-laddkabel",
      "Svensk bruksanvisning",
      "2 års garanti",
    ],
    popular: false,
  },
  {
    name: "Säsongspaketet",
    checkoutKey: "sasongspaket" as const,
    price: "16 900",
    originalPrice: "18 380",
    description: "Vårt mest uppskattade val för en hel säsong.",
    features: [
      "NordLet Pro",
      "5 rullar påsar (150 användningar)",
      "USB-laddkabel + 12V-adapter",
      "Bärväska för förvaring",
      "Svensk bruksanvisning",
      "2 års garanti",
      "Prioriterad support",
    ],
    popular: true,
  },
];

export function Pricing() {
  const anyCheckoutConfigured = Object.values(SITE.checkoutUrls).some(Boolean);

  return (
    <section
      id="bestall"
      className="scroll-mt-24 bg-bg-warm py-20 sm:scroll-mt-28 sm:py-28"
    >
      <Container>
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
              Beställ
            </p>
            <h2
              className="text-3xl sm:text-4xl tracking-tight text-text font-display"
            >
              Välj ditt paket
            </h2>
            <p className="mt-3 text-text-muted text-lg max-w-lg mx-auto">
              Fri leverans i hela Sverige, leverans normalt inom 1-5
              arbetsdagar och 30 dagars öppet köp.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Prova-innan-du-betalar / Nöjd-Kundgaranti */}
        <AnimateOnScroll>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="rounded-2xl border border-accent/30 bg-surface p-7 sm:p-9 shadow-lg shadow-accent/5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="flex items-center gap-4 sm:border-r sm:border-border sm:pr-8 flex-shrink-0">
                  <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <ShieldCheck size={26} />
                  </span>
                  <p
                    className="text-xl text-text leading-tight font-display"
                  >
                    Nöjd-Kundgaranti
                  </p>
                </div>
                <div className="grid sm:grid-cols-3 gap-5 flex-1">
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-light text-green">
                      <Truck size={13} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-text">
                        Få hem den fraktfritt
                      </p>
                      <p className="text-xs text-text-muted mt-0.5 leading-relaxed">
                        Levereras i hela Sverige utan fraktkostnad.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-light text-green">
                      <CalendarCheck size={13} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-text">
                        Prova i 30 dagar
                      </p>
                      <p className="text-xs text-text-muted mt-0.5 leading-relaxed">
                        Inte nöjd? Skicka tillbaka, inga frågor.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-light text-green">
                      <CreditCard size={13} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-text">
                        Betala med Klarna
                      </p>
                      <p className="text-xs text-text-muted mt-0.5 leading-relaxed">
                        Betala om 30 dagar eller dela upp – först om du behåller
                        den.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg, i) => {
            const monthly =
              Math.ceil(Number(pkg.price.replace(/\s/g, "")) / 36 / 10) * 10;
            const { href: checkoutUrl, hasCheckout } = checkoutHref(
              pkg.checkoutKey,
              pkg.name
            );
            const buyLabel = EARLY_ACCESS
              ? `Köp ${pkg.name}`
              : hasCheckout
                ? `Beställ ${pkg.name}`
                : "Beställ via e-post";
            const ctaMicro = EARLY_ACCESS
              ? "Säker betalning, fri leverans, 30 dagars öppet köp och svensk support."
              : hasCheckout
                ? "Säker kassa, fri leverans, 30 dagars öppet köp och svensk support."
                : "Vi svarar med nästa steg, leveransinformation och betalningslänk.";
            return (
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
                      Mest uppskattat
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-semibold text-text">{pkg.name}</h3>
                <p className="text-text-muted text-sm mt-1">{pkg.description}</p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span
                    className="text-4xl sm:text-5xl font-bold text-text font-display"
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
                    ? "Samlad lösning för en längre säsong"
                    : "Ett långsiktigt val för ett friare reseliv"}
                </p>

                {/* Klarna betalalternativ */}
                <div className="mt-4 rounded-xl bg-bg-warm border border-border px-4 py-3">
                  <p className="flex items-center gap-2 text-sm font-medium text-text">
                    <CreditCard size={15} className="text-accent flex-shrink-0" />
                    Dela upp med Klarna – från ca {monthly} kr/mån
                  </p>
                  <p className="text-text-light text-xs mt-1">
                    Eller betala om 30 dagar. Exakt belopp och ränta visas i
                    Klarnas kassa.
                  </p>
                </div>

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
                    href={EARLY_ACCESS ? undefined : checkoutUrl}
                    variant={pkg.popular ? "primary" : "outline"}
                    className="w-full justify-center"
                    onClick={() =>
                      EARLY_ACCESS
                        ? openBuyModal("pricing")
                        : track("cta_click", {
                            location: "pricing",
                            plan: pkg.checkoutKey,
                            mode: "checkout",
                          })
                    }
                  >
                    {buyLabel}
                  </Button>
                  {/* Micro-copy under CTA */}
                  <p className="text-center text-xs text-text-light mt-3">
                    {ctaMicro}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
            );
          })}
        </div>

        {/* Förtroende-rad direkt under köp-knapparna */}
        <AnimateOnScroll delay={0.15}>
          <TrustStrip className="mt-12 max-w-4xl mx-auto" />
        </AnimateOnScroll>

        {/* Refill: påsrullar – döljs under early access (inget att fylla på än) */}
        {!EARLY_ACCESS && (
        <AnimateOnScroll delay={0.1}>
          <div id="pasrullar" className="max-w-4xl mx-auto mt-16 scroll-mt-24">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl tracking-tight text-text font-display">
                Påsrullar - refill
              </h3>
              <p className="mt-2 text-text-muted max-w-xl mx-auto">
                Originalrullar till NordLet Pro. Alltid i lager i Sverige och
                fraktfritt hem till dig, så att påsarna aldrig blir ett
                orosmoment.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {REFILL_PACKS.map((pack) => {
                const product = PRODUCTS[pack.key];
                const perUse = Math.round(
                  product.priceKr /
                    (Number(pack.uses.replace(/\D/g, "")) || 30)
                );
                const { href: refillHref, hasCheckout: refillCheckout } =
                  checkoutHref(pack.key, product.name);
                return (
                  <div
                    key={pack.key}
                    className={`relative rounded-2xl p-6 flex flex-col bg-surface ${
                      pack.popular
                        ? "border-2 border-accent shadow-lg shadow-accent/10"
                        : "border border-border"
                    }`}
                  >
                    {pack.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="inline-flex items-center gap-1 bg-accent text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                          <Star size={10} className="fill-white" />
                          Mest valda
                        </span>
                      </div>
                    )}
                    <p className="font-semibold text-text">{pack.label}</p>
                    <p className="text-xs text-text-muted mt-0.5">
                      {pack.uses} · {pack.note}
                    </p>
                    <div className="mt-4 flex items-baseline gap-1.5">
                      <span className="text-3xl font-bold text-text font-display">
                        {product.priceKr.toLocaleString("sv-SE")}
                      </span>
                      <span className="text-text-muted">kr</span>
                    </div>
                    <p className="text-xs text-text-light mt-1 flex-grow">
                      ca {perUse} kr per användning · fri frakt
                    </p>
                    <div className="mt-5">
                      <Button
                        href={refillHref}
                        variant={pack.popular ? "primary" : "outline"}
                        className="w-full justify-center !px-4 !py-3 !text-sm"
                      >
                        {refillCheckout ? "Beställ" : "Beställ via e-post"}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-center text-xs text-text-light mt-5">
              Varje rulle räcker till 30 användningar - ungefär en resevecka
              för två. LED-indikatorn visar när det är dags att byta.
            </p>
          </div>
        </AnimateOnScroll>
        )}

        {/* Betalmetoder */}
        <AnimateOnScroll delay={0.15}>
          <div className="mt-10 flex flex-col items-center gap-3">
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {[
                { src: "/images/payment/klarna.svg", alt: "Klarna" },
                { src: "/images/payment/swish.svg", alt: "Swish" },
                { src: "/images/payment/visa.svg", alt: "Visa" },
                { src: "/images/payment/master.svg", alt: "Mastercard" },
                { src: "/images/payment/apple_pay.svg", alt: "Apple Pay" },
              ].map((m) => (
                <span
                  key={m.alt}
                  className="inline-flex items-center justify-center h-10 px-3.5 rounded-lg bg-white border border-border"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.src}
                    alt={`Betala med ${m.alt}`}
                    className="h-5 w-auto"
                  />
                </span>
              ))}
            </div>
            <p className="flex items-center gap-1.5 text-xs text-text-light">
              <Lock size={12} className="flex-shrink-0" />
              {anyCheckoutConfigured
                ? "Trygg betalning. Faktura och delbetalning via Klarna."
                : "Klarna, Swish och kortbetalning visas i kassan när betalningslänk skickas."}
            </p>
          </div>
        </AnimateOnScroll>

        {/* Phone CTA — only when SITE.phone is configured via env */}
        {SITE.phone && (
          <AnimateOnScroll delay={0.2}>
            <div className="mt-12 text-center">
              <p className="text-text-muted text-base mb-2">
                Vill du hellre beställa med personlig rådgivning?
              </p>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 text-2xl font-bold text-primary hover:text-accent transition-colors py-3 font-display"
              >
                <Phone size={22} />
                {SITE.phone}
              </a>
              <p className="text-sm text-text-light mt-1">
                Vardagar 9-17. Lugnt, personligt och utan köstress.
              </p>
            </div>
          </AnimateOnScroll>
        )}
      </Container>
    </section>
  );
}
