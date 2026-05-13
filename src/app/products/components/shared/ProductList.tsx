"use client";

import { motion } from "framer-motion";
import { ProductLink } from "../types/product";
import { VIEWPORT_ONCE, fadeUpVariants, staggerContainerVariants } from "../constant/animations";
import { HexagonButton } from "./ArrowCircleIcon";


interface ProductListProps {
  items: ProductLink[];
  className?: string;
}

export default function ProductList({ items, className }: ProductListProps) {
  return (
    <motion.ul
      role="list"
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      className={className}
    >
      {items.map((item) => (
        <motion.li key={item.slug} variants={fadeUpVariants}>
        <div className="group flex items-start gap-3 py-2.5 transition-colors hover:text-[#0B67B2]">
  <HexagonButton 
    className="mt-0.5 shrink-0 text-[#0B67B2] group-hover:scale-110 transition-transform duration-200 "/>

  <span
    className="font-['Libre_Baskerville'] text-[12px] md:text-base lg:text-[14px] 2xl:text-[24px] text-[#374151] leading-snug group-hover:text-[#0B67B2] transition-colors">
    {item.label}
  </span>
</div>
        </motion.li>
      ))}
    </motion.ul>
  );
}
