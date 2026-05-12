import { ProductPageData } from "../types/product";

export function generateProductMetadata(product: ProductPageData) {
  return {
    title: `${product.feature.title} | Alkaloids Private Limited`,
    description: `${product.feature.title} — CAS No. ${product.feature.casNumber}. Therapeutic use: ${product.feature.therapeuticUse}. Premium pharmaceutical grade.`,
    openGraph: {
      title: product.feature.title,
      description: `Premium pharmaceutical-grade ${product.feature.title}`,
    },
  };
}

export function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
