import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AUTHOR } from "@/lib/guider";

export const metadata: Metadata = {
  title: "Om oss | NordLet Pro",
  description:
    "NordLet grundades av Erik och Ludvig efter många år med omsorgsprodukter – och en enkel fråga från deras föräldrar om bekvämare liv och hygien på vägarna.",
  alternates: { canonical: "/om-oss" },
};

export default function OmOssPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <Container>
          <div className="max-w-2xl">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
              Om oss
            </p>
            <h1 className="font-display text-4xl sm:text-5xl tracking-tight text-text leading-tight">
              Det började med en fråga
            </h1>

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-text-muted">
              <p>
                Erik och Ludvig hade jobbat länge med omsorgsprodukter – saker
                som gör vardagen enklare, renare och lite mer värdig för
                människor som behöver det.
              </p>

              <figure className="border-l-2 border-accent pl-5 my-8">
                <blockquote className="font-display text-2xl sm:text-3xl text-text leading-snug not-italic">
                  &rdquo;Varför satsar ni inte på ett bekvämare liv och bättre
                  hygien på vägarna?&rdquo;
                </blockquote>
                <figcaption className="mt-3 text-sm text-text-light">
                  – frågan från deras föräldrar som inte släppte taget
                </figcaption>
              </figure>

              <p>
                De visste, efter åren med omsorgsprodukter, att det gick att
                lösa renare och mer genomtänkt än kassettank, kemikalier och
                ständiga omvägar till tömningsstationen. Så de tog hem
                värmeförseglingstekniken till Sverige, gav den svensk support
                och 30 dagars öppet köp, och kallade den{" "}
                <strong className="font-semibold text-text">
                  NordLet Pro
                </strong>
                .
              </p>

              <p>
                NordLet är fortfarande ett litet, nystartat svenskt företag. Vi
                lagerhåller och levererar från Sverige, vi står bakom varje
                produkt vi säljer, och vi svarar personligen på dina frågor.
              </p>
            </div>

            {/* Grundare */}
            <div className="mt-12 grid gap-8 sm:grid-cols-2 max-w-xl">
              <div className="border-t border-border pt-5">
                <p className="font-semibold text-text">Erik</p>
                <p className="text-text-muted text-sm mt-1">
                  Medgrundare. Bakgrund inom omsorgsprodukter.
                </p>
              </div>
              <div className="border-t border-border pt-5">
                <p className="font-semibold text-text">
                  <a
                    href={AUTHOR.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    Ludvig Eriksson
                  </a>
                </p>
                <p className="text-text-muted text-sm mt-1">
                  Medgrundare. Skriver också guiderna här på sajten.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button href="/#bestall">Beställ NordLet Pro</Button>
              <Button href="/guider" variant="outline">
                Läs våra guider
              </Button>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
