export interface StatisticItem {
  id: string;
  value: string;
  label: string;
  sublabel?: string;
  imageSrc: string;
  imageAlt: string;
}

export interface MilestoneBannerData {
  text: string;
  imageSrc: string;
  imageAlt: string;
}

export interface HeroData {
  heading: string;
  imageSrc: string;
  imageAlt: string;
  logoSrc: string;
  logoAlt: string;
}

export interface JourneyIntroData {
  heading: string;
  paragraph: string;
}

export interface HistoryPageData {
  hero: HeroData;
  journeyIntro: JourneyIntroData;
  statistics: StatisticItem[];
  milestoneBanner: MilestoneBannerData;
}
