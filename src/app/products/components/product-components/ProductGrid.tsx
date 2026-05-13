"use client";

import { motion } from "framer-motion";
import { GridProduct } from "../types/product";
import { VIEWPORT_ONCE, staggerContainerVariants } from "../constant/animations";
import HexagonCard from "./HexagonCard";

interface ProductGridProps {
  products: GridProduct[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const rows: GridProduct[][] = [];
  for (let i = 0; i < products.length; i += 3) {
    rows.push(products.slice(i, i + 3));
  }

  return (
    <section
      aria-label="Product Grid"
      className="w-full bg-white py-8 md:py-20 lg:py-7"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-10">
        {rows.map((row, rowIdx) => (
          <motion.div
            key={rowIdx}
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 justify-items-center"
          >
            {row.map((product) => (
              <HexagonCard key={product.id} product={product} />
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
