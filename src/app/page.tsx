import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { Hero } from "@/components/sections/Hero/Hero";
import { KeyBenefits } from "@/components/sections/KeyBenefits/KeyBenefits";
import { InstrumentCategories } from "@/components/sections/InstrumentCategories/InstrumentCategories";
import { FeaturedTeachers } from "@/components/sections/FeaturedTeachers/FeaturedTeachers";
import { HowItWorks } from "@/components/sections/HowItWorks/HowItWorks";
import { WhyMusicTutor } from "@/components/sections/WhyMusicTutor/WhyMusicTutor";
import { FinalCta } from "@/components/sections/FinalCta/FinalCta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <KeyBenefits />
        <InstrumentCategories />
        <FeaturedTeachers />
        <HowItWorks />
        <WhyMusicTutor />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
