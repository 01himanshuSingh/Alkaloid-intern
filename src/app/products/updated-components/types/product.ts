export type ProductCategory =
  | "API"
  | "Herbal Extract as API"
  | "Advanced Intermediaries"
  | "Products Under Development";

export interface ProductSummary {
  id: string;
  name: string;
  certification: string;
  image: string;
  category: ProductCategory;
}

export interface ProductDetail extends ProductSummary {
  synonyms: string;
  casNo: string;
  dmf: string;
  therapeuticUse: string;
  plantPartUsed: string;
  certificates: string;
  similarProductIds: string[];
  otherProductIds: string[];
}
