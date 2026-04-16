import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OperatingHero } from "@/components/sections/operating-principle/OperatingHero";
import { Chapter } from "@/components/sections/operating-principle/Chapter";
import { OperatingCTA } from "@/components/sections/operating-principle/OperatingCTA";
import { CHAPTERS } from "@/lib/constants";

export default function SaFungerarDetPage() {
  return (
    <>
      <Header />
      <main>
        <OperatingHero />
        {CHAPTERS.map((chapter, index) => (
          <Chapter key={chapter.slug} chapter={chapter} index={index} />
        ))}
        <OperatingCTA />
      </main>
      <Footer />
    </>
  );
}
