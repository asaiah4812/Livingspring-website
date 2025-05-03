import { FocusCardsDemo } from "@/components/card/FocusCard";
import HeroSection from "@/components/heroSection";
import { FeaturesSectionDemo } from "@/components/section/BentoGrid";
import { CardHero } from "@/components/section/CardSection";
import HeroGo from "@/components/section/HeroGo";
import { BackgroundBeamsWithCollisionDemo } from "@/components/section/ThemeSection";
// import Image from "next/image";

export default function Home() {
  return (
    <>
   <HeroSection/>
   <section>
      <HeroGo/>
   </section>
   <section>
    <CardHero/>
   </section>
   <section>
    <FeaturesSectionDemo/>
   </section>
   <section>
    <FocusCardsDemo/>
   </section>
   <section>
    <BackgroundBeamsWithCollisionDemo/>
   </section>
    </>
  );
}
