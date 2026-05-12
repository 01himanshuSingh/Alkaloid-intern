import type { Metadata } from "next";
import { HistoryHero } from "./components/history/HistoryHero";
import { JourneyIntro } from "./components/history/JourneyIntro";
import { StatisticsSection } from "./components/history/StatisticsSection";
import { MilestoneBanner } from "./components/history/MilestoneBanner";
import { historyPageData } from "./data/history";
import { Pharmaceutical } from "./components/history/Pharmaceutical";
export const metadata: Metadata = {
  title: "Our History | APL Alkaloids Private Limited",
  description:
    "Explore APL Alkaloids' remarkable pharmaceutical journey — from Indian origins to global impact. Over 31 years of excellence, serving 85 countries worldwide.",
  openGraph: {
    title: "Our History | APL Alkaloids Private Limited",
    description:
      "Explore APL Alkaloids' remarkable pharmaceutical journey — from Indian origins to global impact.",
    type: "website",
  },
};

export default function HistoryPage() {
  const { hero, journeyIntro, statistics, milestoneBanner } = historyPageData;

  return (
    <main aria-label="Company history page">
      <HistoryHero data={hero} />
      <JourneyIntro data={journeyIntro} />
      <Pharmaceutical/>
      <StatisticsSection items={statistics} />
      <MilestoneBanner data={milestoneBanner} />
    </main>
  );
}
