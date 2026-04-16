import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Product } from "@/components/sections/Product";
import { Authority } from "@/components/sections/Authority";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { LifestyleBanner } from "@/components/sections/LifestyleBanner";
import { Comparison } from "@/components/sections/Comparison";
import { Features } from "@/components/sections/Features";
import { SavingsCalculator } from "@/components/sections/SavingsCalculator";
import { Specifications } from "@/components/sections/Specifications";
import { FAQ } from "@/components/sections/FAQ";
import { Pricing } from "@/components/sections/Pricing";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Product />
        <Authority />
        <HowItWorks />
        <LifestyleBanner />
        <Comparison />
        <Features />
        <SavingsCalculator />
        <Specifications />
        <FAQ />
        <Pricing />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
