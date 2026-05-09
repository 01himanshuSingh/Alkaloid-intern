export interface EventItem {
  id: string;
  day: string;
  month: string;
  title: string;
  time: string;
  location: string;
  href?: string;
}

export interface ProductItem {
  id: string;
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconPath: string;
  imageSrc: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
  width: number;
  height: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterOfficeInfo {
  name: string;
  address: string[];
}
