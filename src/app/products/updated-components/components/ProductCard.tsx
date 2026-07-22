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
    zIndex: 10,
  }}
  transition={{
    duration: 0.25,
    ease: "easeOut",
  }}
 className="group relative bg-white border-b border-[#D9D9D9] transition-colors duration-300"
    onClick={() => onClick(product)}
>
<div
className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#88A933] transition-all duration-300 group-hover:w-full"
/>
   <button
        type="button"
        className="w-full text-left focus:outline-none"
      >
        <div
  className="flex items-center justify-between gap-5 px-0 py-4 lg:px-5 lg:py-5 2xl:px-8"
>

          {/* Product Name */}
          <div className="flex-1 min-w-0">
           <h3
  className="font-['Libre_Baskerville'] text-[17px] lg:text-[18px] 2xl:text-[20px] font-normal text-[#1D1D1D] leading-normal"
>
  {product.name}
</h3>
          </div>

          {/* Certification */}
          <div
            className="hidden md:block w-[170px] lg:w-[190px] 2xl:w-[210px] text-left shrink-0"
          >
            <p
              className="font-['Libre_Baskerville'] text-[15px] lg:text-[16px] 2xl:text-[17px] text-[#333]"
            >
              {product.certification}
            </p>
          </div>

          {/* Hexagon */}
          <motion.div
           
            transition={{ duration: 0.25 }}
            className="shrink-0"
          >
        <svg
    width="30"
    height="32"
    viewBox="0 0 28 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
    d="M15 1.8L27 8.5V25.5L15 32.2L3 25.5V8.5L15 1.8Z"
    className="fill-transparent stroke-[#9CB050] stroke-[1.3] transition-all duration-200 group-hover:fill-[#9CB050]"
  />

  <path
    d="M15 10V22"
    className="stroke-[#9CB050] stroke-[1.7] transition-colors duration-200 group-hover:stroke-white"
    strokeLinecap="round"
  />

  <path
    d="M9.5 16H20.5"
    className="stroke-[#9CB050] stroke-[1.7] transition-colors duration-200 group-hover:stroke-white"
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