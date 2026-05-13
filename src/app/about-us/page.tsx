import type { Metadata } from "next";
import { aboutPageData } from "@/data/about";
import HeroBanner from "@/components/aboutus/HeroBanner";
import CoreValuesSection from "@/components/aboutus/CoreValuesSection";
import ObjectivesSection from "@/components/aboutus/ObjectivesSection";
import MarketsSection from "@/components/aboutus/MarketsSection";


export const metadata: Metadata = {
  title:
    "About Us | Alkaloids Pvt Ltd",

  description:
    "Learn about Alkaloids Pvt Ltd, a trusted pharmaceutical company in India committed to innovation, healthcare excellence, pharmaceutical manufacturing, APIs, research-driven solutions, and global quality standards.",

  keywords: [
    "About Alkaloids Pvt Ltd",
    "pharmaceutical company India",
    "about pharmaceutical company",
    "Indian pharma company",
    "API manufacturer India",
    "healthcare innovation",
    "pharmaceutical manufacturing",
    "global pharmaceutical company",
    "pharma excellence",
    "life sciences company",
    "research driven pharma company",
    "healthcare solutions India",
    "drug manufacturing company",
    "pharmaceutical exports",
    "trusted pharma company",
    "pharmaceutical leadership",
    "medical research company",
    "pharma infrastructure",
    "quality pharmaceutical company",
    "healthcare manufacturing company"
  ],

  authors: [{ name: "Alkaloids Pvt Ltd" }],

  creator: "Alkaloids Pvt Ltd",

  publisher: "Alkaloids Pvt Ltd",

  metadataBase: new URL("https://alkaloids.in"),

  alternates: {
    canonical: "/about-us",
  },

  openGraph: {
    title:
      "About Us | Alkaloids Pvt Ltd",

    description:
      "Discover the journey, values, pharmaceutical expertise, and global healthcare vision of Alkaloids Pvt Ltd.",

    url: "https://alkaloids.in/about-us",

    siteName: "Alkaloids Pvt Ltd",

    images: [
      {
        url: "https://alkaloids.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Alkaloids Pvt Ltd",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "About Us | Alkaloids Pvt Ltd",

    description:
      "Explore Alkaloids Pvt Ltd's pharmaceutical journey, innovation, healthcare expertise, and global excellence.",

    images: ["https://alkaloids.in/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
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
