import { RegulatoryPageData } from "../types/regulatory";

export const regulatoryPageData: RegulatoryPageData = {
  compliance: {
    heading: "Regulatory\nCompliance",
    introParagraph:
      "Over the past decade, APL has earned exceptional recognition from global regulatory authorities. Highlights include:",
    highlights: [
      {
        id: "rc-1",
        text: "Inspections and approvals from US FDA, ANSM, KFDA, TGA and CDSCO",
      },
      {
        id: "rc-2",
        text: "GMP Certificates and Written Confirmations for most products",
      },
      {
        id: "rc-3",
        text: "PMDA accreditation for several products",
      },
      {
        id: "rc-4",
        text: "Successful audits conducted by leading pharmaceutical companies",
      },
      {
        id: "rc-5",
        text: "Submission of numerous Drug Master Files to regulators worldwide",
      },
      {
        id: "rc-6",
        text: "Ongoing, transparent communication with authorities to ensure we not only meet, but also exceed compliance requirements",
      },
    ],
    images: [
      {
        src: "/PNG/Block-Facility-1536x910.webp",
        alt: "APL pharmaceutical laboratory facility",
      },
    ],
  },

  globalAcceptance: {
    heading: "Global Acceptance",
    paragraphs: [
      "As an Export House recognised by the Government of India for consistently delivering high-quality products, APL takes pride in serving clients worldwide with reliability and trust.",
      "Over the years, we have built lasting relationships across diverse markets, and our global footprint continues to grow.",
    ],
    countriesLabel:
      "Our current and upcoming expansion focus includes countries such as:",
    countries: [
      "Argentina",
      "Australia",
      "Austria",
      "Bangladesh",
      "Belgium",
      "Brazil",
      "Canada",
      "China",
      "Colombia",
      "Croatia",
      "Czech Republic",
      "Denmark",
      "Egypt",
      "France",
      "Germany",
      "Hong Kong",
      "Indonesia",
      "Iraq",
      "Japan",
      "Korea",
      "Latvia",
      "Malaysia",
      "Mexico",
      "Nepal",
      "Philippines",
      "Portugal",
      "Poland",
      "Paraguay",
      "Peru",
      "Singapore",
      "Slovak Republic",
      "South Africa",
      "Spain",
      "Sri Lanka",
      "Switzerland",
      "Taiwan",
      "Thailand",
      "The Netherlands",
      "Turkey",
      "Tunisia",
      "United Kingdom",
      "United States of America",
    ],
  },

  cta: {
    heading: "Get To Know More",
    subtitle: "About our products, send us a query or download our catalog.",
    buttons: [
      {
        id: "cta-contact",
        label: "Contact Us",
        href: "/contact",
      },
      {
        id: "cta-catalog",
        label: "Download Catalog",
        href: "/catalog",
      },
    ],
  },
};
