
import { productPageData } from "./components/data/products";
import ProductHero from "./components/product-components/ProductHero";
import ProductCategorySection from "./components/product-components/ProductCategorySection";
import ProductGrid from "./components/product-components/ProductGrid";
import ProductFeatureSection from "./components/product-components/ProductFeatureSection";
import SimilarProducts from "./components/product-components/SimilarProducts";
import OtherProducts from "./components/product-components/OtherProducts";
import ProductCategorySection2 from "./components/product-components/Productioncatagorysection2";
import ProductCategorySection3 from "./components/product-components/ProductCategorysection3";
import ProductGrid2 from "./components/product-components/ProductGrid2";

// export const metadata: Metadata = generateProductMetadata(productPageData);

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Our Products | Alkaloids Pvt Ltd",

  description:
    "Explore Alkaloids Pvt Ltd pharmaceutical products including high-quality APIs, healthcare formulations, active pharmaceutical ingredients, and innovative pharmaceutical manufacturing solutions.",

  keywords: [
    "Alkaloids products",
    "pharmaceutical products India",
    "API products",
    "active pharmaceutical ingredients",
    "bulk drugs India",
    "pharmaceutical formulations",
    "healthcare products",
    "drug manufacturing",
    "pharma product company",
    "global pharmaceutical products",
    "high quality APIs",
    "pharmaceutical ingredients",
    "life sciences products",
    "Indian pharma exports",
    "medical formulations",
    "pharmaceutical solutions",
    "research based pharma products",
    "pharmaceutical innovation",
    "healthcare manufacturing",
    "trusted pharmaceutical company"
  ],

  metadataBase: new URL("https://alkaloids.in"),

  alternates: {
    canonical: "/products",
  },

  openGraph: {
    title:
      "Our Products | Alkaloids Pvt Ltd",

    description:
      "Discover Alkaloids Pvt Ltd pharmaceutical products, APIs, healthcare solutions, and innovative pharmaceutical manufacturing excellence.",

    url: "https://alkaloids.in/products",

    siteName: "Alkaloids Pvt Ltd",

    images: [
      {
        url: "https://alkaloids.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alkaloids Pvt Ltd Products",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Our Products | Alkaloids Pvt Ltd",

    description:
      "Explore pharmaceutical products, APIs, and healthcare manufacturing solutions from Alkaloids Pvt Ltd.",

    images: ["https://alkaloids.in/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ProductsPage() {
  const { categories, gridProducts, feature, similarProducts, otherProducts, heroImage } =
    productPageData;

  const [firstCategory, secondCategory, lastCategory] = categories;

  return (
    <main className="bg-[#F5F4EF] min-h-screen">
      <ProductHero heroImage={heroImage} />

      <div className="bg-white">
        {firstCategory && <ProductCategorySection category={firstCategory} />}

        <ProductGrid products={gridProducts.slice(0, 3)} />

        {secondCategory && <ProductCategorySection2 category={secondCategory} reverse />}

        <ProductGrid2 products={gridProducts.slice(3)} />

        {lastCategory && <ProductCategorySection3 category={lastCategory} />}
      </div>

      <ProductFeatureSection feature={feature} />

      <section
        aria-label="Product Navigation Links"
        className="bg-white py-16 md:py-24"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <SimilarProducts products={similarProducts} />
            <OtherProducts products={otherProducts} />
          </div>
        </div>
      </section>
    </main>
  );
}