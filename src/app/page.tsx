import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AnswerOffer } from "@/components/sections/AnswerOffer";
import { Problem } from "@/components/sections/Problem";
import { Product } from "@/components/sections/Product";
import { Authority } from "@/components/sections/Authority";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { LifestyleBanner } from "@/components/sections/LifestyleBanner";
import { Comparison } from "@/components/sections/Comparison";
import { Features } from "@/components/sections/Features";
import { Reviews } from "@/components/sections/Reviews";
import { SavingsCalculator } from "@/components/sections/SavingsCalculator";
import { Specifications } from "@/components/sections/Specifications";
import { FAQ } from "@/components/sections/FAQ";
import { Pricing } from "@/components/sections/Pricing";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { FAQS, SITE } from "@/lib/constants";

const jsonLd = [
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
      "https://nordlet.se/images/hero-product.png",
      "https://nordlet.se/images/products/a73eb482e69db1413051eec47614edf2.png",
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero />
        <AnswerOffer />
        <Problem />
        <Product />
        <Authority />
        <Pricing />
        <HowItWorks />
        <LifestyleBanner />
        <Comparison />
        <Features />
        <Reviews />
        <SavingsCalculator />
        <Specifications />
        <FAQ />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
