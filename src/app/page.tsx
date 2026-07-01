import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AnswerOffer } from "@/components/sections/AnswerOffer";
import { SocialProofStrip } from "@/components/sections/SocialProofStrip";
import { Problem } from "@/components/sections/Problem";
import { Product } from "@/components/sections/Product";
import { Authority } from "@/components/sections/Authority";
import { TrustDetails } from "@/components/sections/TrustDetails";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { LifestyleBanner } from "@/components/sections/LifestyleBanner";
import { Comparison } from "@/components/sections/Comparison";
import { Features } from "@/components/sections/Features";
import { Reviews } from "@/components/sections/Reviews";
import { SavingsCalculator } from "@/components/sections/SavingsCalculator";
import { Specifications } from "@/components/sections/Specifications";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Pricing } from "@/components/sections/Pricing";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { MetaTrack } from "@/components/analytics/MetaTrack";
import { FAQS, REVIEWS, SITE } from "@/lib/constants";

// Senast innehållsuppdaterad. Höj datumet när sidans innehåll ändras
// på riktigt (färskhetssignal för sök- och AI-sökmotorer).
const LAST_MODIFIED = "2026-06-29";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "NordLet Pro | Vattenlös toalett för husbil, husvagn och båt",
    url: "https://nordlet.se",
    inLanguage: "sv-SE",
    description: SITE.description,
    datePublished: "2026-06-05",
    dateModified: LAST_MODIFIED,
    publisher: { "@type": "Organization", name: "NordLet", url: "https://nordlet.se" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "NordLet Pro",
    brand: {
      "@type": "Brand",
      name: SITE.name,
    },
    category: "Vattenlös toalett för husbil, husvagn, båt och platser utan avlopp",
    description: SITE.description,
    image: [
      "https://nordlet.se/images/products/a73eb482e69db1413051eec47614edf2.png",
      "https://nordlet.se/images/products/06403af0d7a8673f549f5d4aa192c629.png",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: String(REVIEWS.length),
      bestRating: "5",
      worstRating: "1",
    },
    review: REVIEWS.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.rating),
        bestRating: "5",
      },
      reviewBody: r.quote,
    })),
    offers: [
      {
        "@type": "Offer",
        name: "NordLet Pro",
        price: "14900",
        priceCurrency: "SEK",
        url: "https://nordlet.se/#bestall",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Säsongspaketet",
        price: "16900",
        priceCurrency: "SEK",
        url: "https://nordlet.se/#bestall",
        availability: "https://schema.org/InStock",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

export default function Home() {
  return (
    <>
      <Header />
      {/* Ett script per schema-typ: vissa AI-crawlers och enklare parsers läser
          bara första objektet i en JSON-LD-array, så Product/FAQPage kan annars
          missas. Google klarar båda formaten – detta garanterar att alla ser alla. */}
      {jsonLd.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <main>
        <MetaTrack
          event="ViewContent"
          params={{
            content_name: "NordLet Pro",
            content_type: "product",
            content_ids: ["NLP-100"],
            value: 14900,
            currency: "SEK",
          }}
        />
        <Hero />
        <AnswerOffer />
        <SocialProofStrip />
        <Problem />
        <Product />
        <TrustDetails />
        <Authority />
        {/* Kostnaden för alternativet direkt före priset – förankrar värdet. */}
        <SavingsCalculator />
        <Pricing />
        <HowItWorks />
        <LifestyleBanner />
        <Comparison />
        <Features />
        <Reviews />
        <Specifications />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
