
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