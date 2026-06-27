import { ProductCategory } from "../types/product";

export interface CategoryMeta {
  id: ProductCategory;
  label: string;
  description: string;
  icon: string; // SVG path or emoji
}

export const PRODUCT_CATEGORIES: CategoryMeta[] = [
  {
    id: "API",
    label: "API",
    description:
      "High quality Active Pharmaceutical Ingredients manufactured to global standards.",
    icon: "flask",
  },
  {
    id: "Herbal Extract as API",
    label: "Herbal Extract as API",
    description:
      "Standardised herbal extracts meeting international pharmacopoeial requirements.",
    icon: "leaf",
  },
  {
    id: "Advanced Intermediaries",
    label: "Advanced Intermediaries",
    description:
      "Complex synthetic intermediaries for advanced pharmaceutical manufacturing.",
    icon: "nodes",
  },
  {
    id: "Products Under Development",
    label: "Products Under Development",
    description:
      "Innovative pipeline products currently in development phase.",
    icon: "flask2",
  },
];
