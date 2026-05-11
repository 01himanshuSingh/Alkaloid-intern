import type { Metadata } from "next";
import { aboutPageData } from "@/data/about";
import HeroBanner from "@/components/aboutus/HeroBanner";
import CoreValuesSection from "@/components/aboutus/CoreValuesSection";
import ObjectivesSection from "@/components/aboutus/ObjectivesSection";
import MarketsSection from "@/components/aboutus/MarketsSection";

export const metadata: Metadata = {
  title: "About Us | APL Alkaloids",
  description:
    "Learn about APL Alkaloids — our core values, objectives, principles, and the global markets we serve in the pharmaceutical industry since 1992.",
  openGraph: {
    title: "About Us | APL Alkaloids",
    description:
      "Driven by purpose to positively impact lives worldwide through innovation and development in the Healthcare space.",
    type: "website",
  },
};

export default function AboutPage() {
  const { hero, coreValues, objectives, markets } = aboutPageData;

  return (
    <main id="main-content">
      <HeroBanner data={hero} />
      <CoreValuesSection data={coreValues} />
      <ObjectivesSection data={objectives} />
      <MarketsSection data={markets} />
    </main>
  );
}
