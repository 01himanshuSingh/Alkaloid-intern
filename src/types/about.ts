export interface CoreValue {
  id: string;
  text: string;
}

export interface ObjectiveItem {
  id: string;
  paragraph: string;
}

export interface MarketRegion {
  id: string;
  label: string;
  position: {
    top: string;
    left: string;
  };
}

export interface HeroBannerData {
  imageSrc: string;
  imageAlt: string;
  headline: string;
}

export interface CoreValuesSectionData {
  imageSrc: string;
  imageAlt: string;
  highlightParagraph: string;
  bodyParagraphs: string[];
  bulletPoints: CoreValue[];
  closingParagraph: string;
}

export interface ObjectivesSectionData {
  imageSrc: string;
  imageAlt: string;
  objectives: ObjectiveItem[];
}

export interface MarketsSectionData {
  heading: string;
  subtitle: string;
  mapImageSrc: string;
  mapImageAlt: string;
}

export interface AboutPageData {
  hero: HeroBannerData;
  coreValues: CoreValuesSectionData;
  objectives: ObjectivesSectionData;
  markets: MarketsSectionData;
}
