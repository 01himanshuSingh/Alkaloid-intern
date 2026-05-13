"use client";

import { motion } from "framer-motion";
import { ProductLink } from "../types/product";
import { slideRightVariants } from "@/constant/animations";
import { VIEWPORT_ONCE } from "../constant/animations";
import ProductList from "../shared/ProductList";

interface OtherProductsProps {
  products: ProductLink[];
}

export default function OtherProducts({ products }: OtherProductsProps) {
  return (
    <motion.section
      variants={slideRightVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      aria-label="Other Products"
    >
      <h2 className="font-['Geologica'] text-[14px] md:text-base lg:text-[20px] 2xl:text-[30px]  uppercase tracking-widest font-bold text-[#374151] mb-5">
        Other Products
      </h2>
      <ProductList items={products} />
    </motion.section>
  );
}
