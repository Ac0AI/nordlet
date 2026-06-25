import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { KustomSnippet } from "@/components/checkout/KustomSnippet";
import { MetaTrack } from "@/components/analytics/MetaTrack";
import { createCheckoutOrder, isKustomConfigured } from "@/lib/kustom";
import { PRODUCTS, isProductKey } from "@/lib/products";
import { SITE } from "@/lib/constants";
import { Lock, ShieldCheck, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Kassa | NordLet",
  robots: { index: false, follow: false },
};

// Varje besök skapar en färsk checkout-session hos Kustom.
export const dynamic = "force-dynamic";

export default async function KassaPage({
  searchParams,
}: {
  searchParams: Promise<{ paket?: string; antal?: string }>;
}) {
  const { paket, antal } = await searchParams;

  if (!isProductKey(paket)) {
    redirect("/#bestall");
  }

  const product = PRODUCTS[paket];
  const quantity = Math.min(Math.max(Number(antal) || 1, 1), 10);
  const totalKr = product.priceKr * quantity;

  return (
    <>
      <Header solid />
      <MetaTrack
        event="InitiateCheckout"
        params={{
          content_name: product.name,
          content_ids: [product.reference],
          num_items: quantity,
          value: totalKr,
          currency: "SEK",
        }}
      />
      <main className="pt-32 pb-20 sm:pt-36 sm:pb-28 min-h-[70vh] bg-bg-warm">
        <Container>
          <div className="max-w-2xl mx-auto">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
              Kassa
            </p>
            <h1 className="text-3xl sm:text-4xl tracking-tight text-text font-display mb-8">
              Slutför din beställning
            </h1>

            {/* Ordersammanfattning */}
            <div className="rounded-2xl bg-surface border border-border p-6 sm:p-7 mb-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-text">{product.name}</p>
                  <p className="text-sm text-text-muted mt-1">
                    {product.description}
                  </p>
                  {quantity > 1 && (
                    <p className="text-sm text-text-muted mt-1">
                      Antal: {quantity}
                    </p>
                  )}
                </div>
                <p className="text-xl font-bold text-text font-display whitespace-nowrap">
                  {totalKr.toLocaleString("sv-SE")} kr
                </p>
              </div>
              <div className="mt-5 pt-5 border-t border-border flex flex-wrap gap-x-6 gap-y-2 text-xs text-text-muted">
                <span className="flex items-center gap-1.5">
                  <Truck size={13} className="text-green" /> Fri leverans
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-green" /> 30 dagars
                  öppet köp
                </span>
                <span className="flex items-center gap-1.5">
                  <Lock size={13} className="text-green" /> Säker betalning via
                  Kustom
                </span>
              </div>
            </div>

            <CheckoutArea productKey={product.key} quantity={quantity} />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

async function CheckoutArea({
  productKey,
  quantity,
}: {
  productKey: keyof typeof PRODUCTS;
  quantity: number;
}) {
  if (!isKustomConfigured()) {
    // Kassan är inte aktiverad än - beställning via e-post tills dess.
    const product = PRODUCTS[productKey];
    return (
      <div className="rounded-2xl bg-surface border border-border p-6 sm:p-7 text-center">
        <p className="text-text font-semibold mb-2">
          Kassan öppnar inom kort.
        </p>
        <p className="text-sm text-text-muted mb-5">
          Tills dess tar vi emot beställningar via e-post. Vi svarar med
          leveransinformation och en betalningslänk med Klarna, Swish och kort.
        </p>
        <a
          href={`mailto:${SITE.email}?subject=Beställning: ${product.name}`}
          className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-semibold text-white hover:bg-accent-light transition-all"
        >
          Beställ via e-post
        </a>
      </div>
    );
  }

  let orderSnippet: string | null = null;
  try {
    const order = await createCheckoutOrder(productKey, quantity);
    orderSnippet = order.html_snippet;
  } catch (error) {
    console.error("Kustom checkout error:", error);
  }

  if (!orderSnippet) {
    const product = PRODUCTS[productKey];
    return (
      <div className="rounded-2xl bg-surface border border-border p-6 sm:p-7 text-center">
        <p className="text-text font-semibold mb-2">
          Kassan kunde inte laddas just nu.
        </p>
        <p className="text-sm text-text-muted mb-5">
          Försök igen om en stund, eller beställ via e-post så hjälper vi dig
          direkt.
        </p>
        <a
          href={`mailto:${SITE.email}?subject=Beställning: ${product.name}`}
          className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-semibold text-white hover:bg-accent-light transition-all"
        >
          Beställ via e-post
        </a>
      </div>
    );
  }

  return <KustomSnippet html={orderSnippet} />;
}
