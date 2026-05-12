export interface ProductLink {
  label: string;
  slug: string;
}

export interface Certificate {
  name: string;
}

export interface ProductFeatureData {
  title: string;
  synonyms: string[];
  casNumber: string;
  dmfAvailable: boolean;
  therapeuticUse: string;
  plantName: string;
  plantPartUsed: string;
  certificates: Certificate[];
  hexagonImage: string;
}

export interface CategoryProduct {
  name: string;
  slug: string;
}

export interface ProductCategory {
  id: string;
  hexagonImage: string;
  imageAlt: string;
  products: CategoryProduct[];
}

export interface GridProduct {
  id: string;
  name: string;
  slug: string;
  hexagonImage: string;
  imageAlt: string;
}

export interface ProductPageData {
  slug: string;
  heroImage: string;
  categories: ProductCategory[];
  gridProducts: GridProduct[];
  feature: ProductFeatureData;
  similarProducts: ProductLink[];
  otherProducts: ProductLink[];
}