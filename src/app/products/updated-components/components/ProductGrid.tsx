"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ProductCategory, ProductDetail } from "../types/product";
import { PRODUCT_CATEGORIES } from "../constants/productCategories";
import ProductCard from "./ProductCard";
import { categorySlide } from "../lib/animations";

interface ProductGridProps {
  activeCategory: ProductCategory;
  products: ProductDetail[];
  onProductClick: (product: ProductDetail) => void;
}

export default function ProductGrid({
  activeCategory,
  products,
  onProductClick,
}: ProductGridProps) {
  const meta = PRODUCT_CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={activeCategory}
        variants={categorySlide}
        initial="hidden"
        animate="visible"
        exit="exit"
        id={`panel-${activeCategory}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeCategory}`}
        className="px-5 py-4 lg:px-8 lg:py-5"
      >
        {/* Category heading */}
        <header className="mb-6">
          <h2 className="font-['Geologica'] text-[24px] md:text-5xl lg:text-4xl 2xl:text-5xl pb-2 lg:pb-0 font-semibold text-[#0B67B2] leading-tight">{meta?.label}</h2>
         
        </header>

        {products.length === 0 ? (
          <p className="text-gray-400 font-['Libre_Baskerville'] text-[12px] md:text-base lg:text-[14px] 2xl:text-[18px]">
            No products listed in this category yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-3">
            {products.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                index={i}
                onClick={onProductClick}
              />
            ))}
          </div>
        )}
      </motion.section>
    </AnimatePresence>
  );
}
