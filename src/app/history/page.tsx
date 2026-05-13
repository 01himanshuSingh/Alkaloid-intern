import type { Metadata } from "next";
import { HistoryHero } from "./components/history/HistoryHero";
import { JourneyIntro } from "./components/history/JourneyIntro";
import { StatisticsSection } from "./components/history/StatisticsSection";
import { MilestoneBanner } from "./components/history/MilestoneBanner";
import { historyPageData } from "./data/history";
import { Pharmaceutical } from "./components/history/Pharmaceutical";


export const metadata: Metadata = {
  title:
    "Our History | Alkaloids Pvt Ltd",

  description:
    "Explore the history of Alkaloids Pvt Ltd and discover our pharmaceutical journey, innovation, healthcare excellence, research-driven growth, and commitment to global pharmaceutical manufacturing standards.",

  keywords: [
    "Alkaloids history",
    "pharmaceutical company history",
    "Alkaloids Pvt Ltd journey",
    "Indian pharma company history",
    "pharmaceutical innovation",
    "healthcare company growth",
    "API manufacturer India",
    "pharmaceutical manufacturing history",
    "global pharma company",
    "research driven pharma company",
    "life sciences company",
    "pharmaceutical excellence",
    "drug manufacturing company",
    "healthcare innovation India",
    "trusted pharmaceutical company",
    "medical research company",
    "pharmaceutical legacy",
    "Indian pharmaceutical industry",
    "pharma infrastructure",
    "healthcare manufacturing excellence"
  ],

  authors: [{ name: "Alkaloids Pvt Ltd" }],

  creator: "Alkaloids Pvt Ltd",

  publisher: "Alkaloids Pvt Ltd",

  metadataBase: new URL("https://alkaloids.in"),

  alternates: {
    canonical: "/our-history",
  },

  openGraph: {
    title:
      "Our History | Alkaloids Pvt Ltd",

    description:
      "Discover the history, growth, pharmaceutical innovation, and global healthcare journey of Alkaloids Pvt Ltd.",

    url: "https://alkaloids.in/our-history",

    siteName: "Alkaloids Pvt Ltd",

    images: [
      {
        url: "https://alkaloids.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Our History - Alkaloids Pvt Ltd",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Our History | Alkaloids Pvt Ltd",

    description:
      "Explore the pharmaceutical journey, innovation, and history of Alkaloids Pvt Ltd.",

    images: ["https://alkaloids.in/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
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
