import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { KustomSnippet } from "@/components/checkout/KustomSnippet";
import { MetaTrack } from "@/components/analytics/MetaTrack";
import { fetchCheckoutOrder, isKustomConfigured } from "@/lib/kustom";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Tack för din beställning | NordLet",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function BekraftelsePage({
  searchParams,
}: {
  searchParams: Promise<{ order_id?: string }>;
}) {
  const { order_id } = await searchParams;

  let snippet: string | null = null;
  let purchaseValue: number | undefined;
  if (order_id && isKustomConfigured()) {
    try {
      const order = await fetchCheckoutOrder(order_id);
      snippet = order.html_snippet;
      if (typeof order.order_amount === "number") {
        purchaseValue = order.order_amount / 100; // ören -> kronor
      }
    } catch (error) {
      console.error("Kustom confirmation error:", error);
    }
  }

  return (
    <>
      <Header solid />
      <MetaTrack
        event="Purchase"
        params={{
          currency: "SEK",
          ...(purchaseValue !== undefined ? { value: purchaseValue } : {}),
        }}
      />
      <main className="pt-32 pb-20 sm:pt-36 sm:pb-28 min-h-[70vh] bg-bg-warm">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-light text-green mb-6">
                <CheckCircle2 size={32} />
              </div>
              <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
                Beställning mottagen
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight text-text leading-tight font-display">
                Tack för din beställning.
              </h1>
              <p className="mt-6 text-lg text-text-muted leading-relaxed">
                Du får en orderbekräftelse via e-post inom några minuter. Vi
                skickar normalt inom 3 arbetsdagar från svenskt lager.
              </p>
            </div>

            {/* Kustoms kvitto-snippet med ordersammanfattning */}
            {snippet && <KustomSnippet html={snippet} />}

            <div className="mt-10 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-surface px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-accent hover:bg-accent/5"
              >
                Tillbaka till startsidan
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
