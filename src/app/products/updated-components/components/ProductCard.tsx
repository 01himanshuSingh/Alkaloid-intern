"use client";

import { motion } from "framer-motion";
import { ProductDetail } from "../types/product";
import { fadeInUp } from "../lib/animations";

interface ProductCardProps {
  product: ProductDetail;
  index: number;
  onClick: (product: ProductDetail) => void;
}

export default function ProductCard({ product, index, onClick }: ProductCardProps) {
  return (
    <motion.article
      variants={fadeInUp}
      custom={index}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(30,64,120,0.12)" }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
      className="group bg-white border border-gray-200 rounded-sm cursor-pointer hover:border-[#1d4ed8]/30 transition-colors duration-200"
      onClick={() => onClick(product)}
      aria-label={`View details for ${product.name}`}
    >
      <button
        className="w-full text-left flex items-center gap-4 p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-inset rounded-sm"
        tabIndex={0}
        type="button"
      >
        {/* Name & certification */}
        <div className="flex-1 min-w-0">
          <h3 className="text-[12px]  md:text-base lg:text-[14px] 2xl:text-[18px] font-['Geologica'] font-semibold text-[#1d4ed8] leading-snug truncate group-hover:text-[#1e40af]">
            {product.name}
          </h3>
          {product.certification && (
            <p className="font-['Libre_Baskerville'] text-[9px] md:text-base lg:text-[14px] 2xl:text-[15px] text-gray-500 mt-0.5 truncate">{product.certification}</p>
          )}
        </div>

        {/* Chevron */}
        <motion.span
          className="flex-shrink-0 w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-[#1d4ed8] group-hover:text-[#1d4ed8] transition-colors duration-200"
          animate={{ x: 0 }}
          whileHover={{ x: 2 }}
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.span>
      </button>
    </motion.article>
  );
}
