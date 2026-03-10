import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AsSeenIn } from "@/components/sections/AsSeenIn";
import { Problem } from "@/components/sections/Problem";
import { Product } from "@/components/sections/Product";
import { Authority } from "@/components/sections/Authority";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { LifestyleBanner } from "@/components/sections/LifestyleBanner";
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
        <Hero />
        <AsSeenIn />
        <Problem />
        <Product />
        <Authority />
        <HowItWorks />
        <LifestyleBanner />
        <Comparison />
        <Features />
        <Testimonials />
        <SavingsCalculator />
        <Reciprocity />
        <Specifications />
        <FAQ />
        <Pricing />
      </main>
      <Footer />
      <StickyMobileCTA />
      <SocialProofToast />
    </>
  );
}
