import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AsSeenIn } from "@/components/sections/AsSeenIn";
import { Problem } from "@/components/sections/Problem";
import { Product } from "@/components/sections/Product";
import { Authority } from "@/components/sections/Authority";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Comparison } from "@/components/sections/Comparison";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { SavingsCalculator } from "@/components/sections/SavingsCalculator";
import { Reciprocity } from "@/components/sections/Reciprocity";
import { Specifications } from "@/components/sections/Specifications";
import { FAQ } from "@/components/sections/FAQ";
import { Pricing } from "@/components/sections/Pricing";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { SocialProofToast } from "@/components/sections/SocialProofToast";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hook — emotionell headline + social proof + telefon */}
        <Hero />
        {/* 2. "Som sett i" — authority logos */}
        <AsSeenIn />
        {/* 3. Agitate — smärtpunkter ("vi husbilsägare") */}
        <Problem />
        {/* 4. Solution — produkt-intro */}
        <Product />
        {/* 5. Authority — certifieringar, media, svenskt företag */}
        <Authority />
        {/* 6. How it works — enkelhet */}
        <HowItWorks />
        {/* 7. Jämförelse — NordLet vs traditionell */}
        <Comparison />
        {/* 8. Features — djupare fördelar */}
        <Features />
        {/* 9. Social proof — detaljerade omdömen */}
        <Testimonials />
        {/* 10. Besparingskalkyl */}
        <SavingsCalculator />
        {/* 11. Reciprocity — gratis guide */}
        <Reciprocity />
        {/* 12. Specs — för den analytiska */}
        <Specifications />
        {/* 13. FAQ — invändningshantering */}
        <FAQ />
        {/* 14. Pricing — paket med pris + stort telefonnummer */}
        <Pricing />
      </main>
      <Footer />
      {/* Sticky mobil-CTA + social proof toasts */}
      <StickyMobileCTA />
      <SocialProofToast />
    </>
  );
}
