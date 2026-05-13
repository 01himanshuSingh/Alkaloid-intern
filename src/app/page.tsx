import Hero from '@/components/hero/Hero'
import Certifications from '@/components/certifications/Certifications'
 import Events from '@/components/events/Events'
 import Manufacturing from '@/components/manufacturing/Manufacturing'
import Features from '@/components/features/Features'
import Products from '@/components/products/Products'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    "Alkaloids Pvt Ltd | Leading Pharmaceutical Company in India",

  description:
    "Alkaloids Pvt Ltd is a leading pharmaceutical company in India specializing in high-quality APIs, pharmaceutical manufacturing, healthcare innovation, research-driven solutions, and global pharmaceutical excellence.",

  keywords: [
    "Alkaloids Pvt Ltd",
    "pharmaceutical company India",
    "API manufacturer India",
    "active pharmaceutical ingredients",
    "healthcare company",
    "pharmaceutical manufacturing",
    "Indian pharma company",
    "bulk drug manufacturer",
    "pharmaceutical research",
    "life sciences company",
    "global pharmaceutical company",
    "pharma innovation",
    "healthcare solutions",
    "drug manufacturing company",
    "pharmaceutical exports India",
    "biotech company India",
    "medical research company",
    "pharmaceutical industry",
    "formulation development",
    "quality pharmaceutical products"
  ],

  authors: [{ name: "Alkaloids Pvt Ltd" }],

  creator: "Alkaloids Pvt Ltd",

  publisher: "Alkaloids Pvt Ltd",

  metadataBase: new URL("https://alkaloids.in"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Alkaloids Pvt Ltd | Leading Pharmaceutical Company in India",

    description:
      "Discover Alkaloids Pvt Ltd, a trusted pharmaceutical company delivering innovation, quality healthcare solutions, APIs, and pharmaceutical excellence worldwide.",

    url: "https://alkaloids.in",

    siteName: "Alkaloids Pvt Ltd",

    images: [
      {
        url: "https://alkaloids.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alkaloids Pvt Ltd", 
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Alkaloids Pvt Ltd | Pharmaceutical Excellence",

    description:
      "Leading pharmaceutical company in India specializing in APIs, healthcare innovation, and pharmaceutical manufacturing.",

    images: ["https://alkaloids.in/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function HomePage() {
  return (  
    <main className="min-h-screen">
      <Hero />
      <Certifications />
      <Events />
      <Manufacturing />
      <Features />
      <Products />
      
    </main>
  )
}
