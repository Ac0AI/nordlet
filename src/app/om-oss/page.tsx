import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

// Ludvigs egen profil – frikopplad från guide-författaren (som nu är Erik).
const LUDVIG_URL = "https://www.linkedin.com/in/ludvig-eriksson-540519a8/";

export const metadata: Metadata = {
  title: "Om oss | NordLet Pro",
  description:
    "NordLet grundades av Erik Martling och Ludvig Eriksson efter många år med omsorgsprodukter – och en enkel fråga från deras föräldrar om bekvämare liv och hygien på vägarna.",
  alternates: { canonical: "/om-oss" },
};

// Explicit entitetsgraf: kopplar de två grundarna till NordLet-organisationen
// (samma @id som i layouten). Ger E-E-A-T-signaler och namngivna personer.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://nordlet.se/om-oss",
      url: "https://nordlet.se/om-oss",
      name: "Om oss | NordLet",
      inLanguage: "sv-SE",
      about: { "@id": "https://nordlet.se/#organization" },
    },
    {
      "@type": "Organization",
      "@id": "https://nordlet.se/#organization",
      name: "NordLet",
      url: "https://nordlet.se",
      founder: [
        { "@id": "https://nordlet.se/om-oss#erik-martling" },
        { "@id": "https://nordlet.se/om-oss#ludvig-eriksson" },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://nordlet.se/om-oss#erik-martling",
      name: "Erik Martling",
      jobTitle: "Medgrundare",
      worksFor: { "@id": "https://nordlet.se/#organization" },
    },
    {
      "@type": "Person",
      "@id": "https://nordlet.se/om-oss#ludvig-eriksson",
      name: "Ludvig Eriksson",
      jobTitle: "Medgrundare",
      url: LUDVIG_URL,
      sameAs: [LUDVIG_URL],
      worksFor: { "@id": "https://nordlet.se/#organization" },
    },
  ],
};

export default function OmOssPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header solid />
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
                Erik och Ludvig hade ägnat åren åt omsorgsprodukter – sånt som
                gör vardagen enklare, renare och lite varmare för dem som
                behöver det mest. De älskade jobbet. Men en fråga låg och
                pirrade i bakhuvudet.
              </p>

              <figure className="border-l-2 border-accent pl-5 my-8">
                <blockquote className="font-display text-2xl sm:text-3xl text-text leading-snug not-italic">
                  &rdquo;Varför satsar ni inte på ett bekvämare liv och bättre
                  hygien på vägarna?&rdquo;
                </blockquote>
                <figcaption className="mt-3 text-sm text-text-light">
                  – frågan från deras föräldrar, som liksom aldrig släppte taget
                </figcaption>
              </figure>

              <p>
                Ju mer de tänkte på det, desto tydligare blev det: friheten på
                vägen är fantastisk. Men kassettanken, kemikalierna och
                söndagsköerna vid tömningsstationen knaprar på den, varje gång.
                Och det gick att göra så mycket bättre.
              </p>

              <p>
                Så de kavlade upp ärmarna. Tog hem värmeförseglingstekniken
                till Sverige, gav den ordentlig svensk support och 30 dagars
                öppet köp, och döpte den till{" "}
                <strong className="font-semibold text-text">
                  NordLet Pro
                </strong>
                . Renare, smartare och mer värdigt – precis så som de gjort i
                åratal, fast nu för livet på vägen.
              </p>

              <p>
                Vi är fortfarande små, svenska och rätt nystartade – och ärligt
                talat rätt stolta över det. Vi packar och skickar från Sverige,
                vi står bakom varenda toa vi säljer, och svarar gärna
                personligen när du hör av dig. Häng med, så gör vi livet på
                vägen lite friare.
              </p>
            </div>

            {/* Grundare */}
            <div className="mt-12 grid gap-8 sm:grid-cols-2 max-w-xl">
              <div className="border-t border-border pt-5">
                <p className="font-semibold text-text">Erik Martling</p>
                <p className="text-text-muted text-sm mt-1">
                  Medgrundare. Skriver guiderna här – gärna med en kaffe i
                  husbilsdörren.
                </p>
              </div>
              <div className="border-t border-border pt-5">
                <p className="font-semibold text-text">
                  <a
                    href={LUDVIG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    Ludvig Eriksson
                  </a>
                </p>
                <p className="text-text-muted text-sm mt-1">
                  Medgrundare. Åren inom omsorgsprodukter sitter i ryggraden –
                  vet hur man gör vardagen värdigare.
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
