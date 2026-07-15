"use client";

import { motion } from "framer-motion";
import { ProductDetail } from "../types/product";
import { fadeInUp } from "../lib/animations";

interface ProductCardProps {
  product: ProductDetail;
  index: number;
  onClick: (product: ProductDetail) => void;
}

export default function ProductCard({
  product,
  index,
  onClick,
}: ProductCardProps) {
  return (
   <motion.article
  variants={fadeInUp}
  custom={index}
  initial="hidden"
  animate="visible"
  whileHover={{
    scale: 1.01,
    zIndex: 10,
  }}
  transition={{
    duration: 0.25,
    ease: "easeOut",
  }}
  className="group relative bg-white border-b border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-[#88A933]"
    onClick={() => onClick(product)}
>
<div
  className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#88A933] transition-all duration-300 group-hover:w-full"
/>
   <button
        type="button"
        className="w-full text-left focus:outline-none"
      >
        <div className="flex items-center justify-between gap-5 py-7 lg:py-8">

          {/* Product Name */}
          <div className="flex-1 min-w-0">
           <h3
  className="font-['Libre_Baskerville'] text-[15px] lg:text-[22px] 2xl:text-[28px] text-[#222] font-normal leading-snug"
>
  {product.name}
</h3>
          </div>

          {/* Certification */}
          <div
            className="hidden md:block w-[180px] lg:w-[240px] 2xl:w-[280px] text-left shrink-0"
          >
            <p
              className="font-['Libre_Baskerville'] text-[14px] lg:text-[18px] 2xl:text-[22px] text-[#333]"
            >
              {product.certification}
            </p>
          </div>

          {/* Hexagon */}
          <motion.div
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.25 }}
            className="shrink-0"
          >
            <svg
              width="42"
              height="48"
              viewBox="0 0 42 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-all duration-300"
            >
              <path
                d="M21 2L38 12V36L21 46L4 36V12L21 2Z"
                stroke="#88A933"
                strokeWidth="1.5"
                className="group-hover:fill-[#88A933]/10"
              />

              <path
                d="M21 16V30"
                stroke="#88A933"
                strokeWidth="2"
                strokeLinecap="round"
              />

              <path
                d="M14 23H28"
                stroke="#88A933"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>

        </div>

        {/* Mobile Certification */}
        <div className="md:hidden pb-6">
          <p className="font-['Libre_Baskerville'] text-[12px] text-gray-500">
            {product.certification}
          </p>
        </div>

      </button>
    </motion.article>
  );
}