import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Geologica, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import SmoothScroll from "@/components/Lazyscroll-component/SmoothScroll";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});
  
const geologica = Geologica({
  subsets: ["latin"],
  variable: "--font-geologica",
  weight: ["300", "400", "500", "600", "700"],
});

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  variable: '--font-baskerville',
  weight: ['400', '700'],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title:
    "Alkaloids Pvt Ltd | Leading Pharmaceutical Company in India",

  description:
    "Alkaloids Pvt Ltd is a leading pharmaceutical company in India specializing in high-quality APIs, pharmaceutical manufacturing, healthcare innovation, research-driven solutions, and global pharmaceutical excellence.",

//  robots: {
//     index: false,
//     follow: false,
//     nocache: true,
//     googleBot: {
//       index: false,
//       follow: false,
//       noimageindex: true,
//     },
//   },

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



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geologica.className} ${libreBaskerville.variable}`}
    >
      <body className="min-h-full flex flex-col"><Navbar/>
      <SmoothScroll/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
