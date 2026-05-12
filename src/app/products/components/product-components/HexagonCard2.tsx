"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GridProduct } from "../types/product";
import { fadeUpVariants } from "@/constant/animations";
import HexagonImage from "../shared/HexagonImage";
import ArrowCircleIcon from "../shared/ArrowCircleIcon";

interface HexagonCardProps {
  product: GridProduct;
}

export default function HexagonCard2({ product }: HexagonCardProps) {
  return (
    <motion.article
      variants={fadeUpVariants}
      className="flex flex-col items-center text-center group"
      aria-label={product.name}
    >
    <div className="group flex flex-col items-center gap-4 ">
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    className="w-[180px] md:w-[210px] lg:w-[280px] "
  >
    <HexagonImage
      src={product.hexagonImage}
      alt={product.imageAlt}
      width={210}
      height={242}
      sizes="(max-width: 768px) 180px, 210px"
      animate={false}
    />
  </motion.div>

  <h3
    className="font-['Geologica'] text-sm md:text-base lg:text-[18px] 2xl:text-[28px] font-semibold uppercase tracking-widest text-[#374151] leading-snug max-w-[160px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[280px] 2xl:max-w-[220px] text-center group-hover:text-[#0B67B2] transition-colors">
    {product.name}
  </h3>

  <ArrowCircleIcon
    size={24}
    className="text-[#0B67B2] group-hover:scale-110 transition-transform duration-200"/>
</div>
    </motion.article>
  );
}
