"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "../lib/product-utils";
import { slideLeftVariants, staggerContainerVariants, VIEWPORT_ONCE, fadeUpVariants } from "../constant/animations";
import HexagonImage from "../shared/HexagonImage";
import { ProductCategory } from "../types/product";
import { HexagonButton } from "../shared/ArrowCircleIcon";


interface ProductCategorySectionProps {
  category: ProductCategory;
  reverse?: boolean;
}

export default function ProductCategorySection3({
  category,
  reverse = false,
}: ProductCategorySectionProps) {
  return (
    <section
      aria-label={`Product category ${category.id}`}
      className="w-full py-8 md:py-20 lg:py-7 2xl:py-15 last:border-0"
    >
      <div
        className={cn(
          "max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-10 flex flex-col gap-10 items-center",
          "md:flex-row md:gap-16",
          reverse && "md:flex-row-reverse"
        )}
      >
      <motion.div
  variants={slideLeftVariants}
  initial="hidden"
  whileInView="visible"
  viewport={VIEWPORT_ONCE}
  className="flex-shrink-0 flex justify-center w-full max-w-[190px] sm:max-w-[220px] md:max-w-[240px] lg:max-w-[310px] 2xl:max-w-[420px]">
  <HexagonImage
    src={category.hexagonImage}
    alt={category.imageAlt}
    width={340}
    height={340}
    sizes="(max-width: 640px) 180px,(max-width: 768px) 220px,(max-width: 1024px) 240px,(max-width: 1536px) 260px,300px"
    animate={false}
    className="w-full h-auto object-contain"
  />
</motion.div>

        <motion.nav
          aria-label={`Products in ${category.id}`}
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="flex-1 min-w-0 max-w-[190px] sm:max-w-[220px] md:max-w-[240px] lg:max-w-[560px] 2xl:max-w-[800px]"
        >
          <ul role="list" className="space-y-1">
            {category.products.map((product:any) => (
              <motion.li key={product.slug} variants={fadeUpVariants}>
              <p
  className="group flex items-start gap-3 py-3 border-b border-gray-100 last:border-0 transition-colors">
  <HexagonButton
    size={22}
    className="mt-0.5 shrink-0 text-[#0B67B2] group-hover:scale-110 transition-transform duration-200"/>

  <span
    className="font-['Geologica'] text-[14px] md:text-base lg:text-[22px] 2xl:text-[32px] font-medium tracking-wider text-[#0B67B2] uppercase group-hover:text-[#88A933] transition-colors leading-snug"
  >
    {product.name}
  </span>
</p>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </section>
  );
}
