export interface RegulatoryHighlight {
  id: string;
  text: string;
}

export interface ComplianceSectionData {
  heading: string;
  introParagraph: string;
  highlights: RegulatoryHighlight[];
  images: {
    src: string;
    alt: string;
  }[]; // only images[0] is used — single hexagon frame
}

export interface GlobalAcceptanceSectionData {
  heading: string;
  image: {
    src: string;
    alt: string;
  };
  paragraphs: string[];
  countriesLabel: string;
  countries: string[];
}

export interface CTASectionData {
  heading: string;
  subtitle: string;
  buttons: {
    id: string;
    label: string;
    href: string;
  }[];
}

export interface RegulatoryPageData {
  compliance: ComplianceSectionData;
  globalAcceptance: GlobalAcceptanceSectionData;
  cta: CTASectionData;
}