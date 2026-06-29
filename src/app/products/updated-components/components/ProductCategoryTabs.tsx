"use client";

import { motion } from "framer-motion";
import { ProductCategory } from "../types/product";
import { PRODUCT_CATEGORIES } from "../constants/productCategories";
import CategoryIcon from "./CategoryIcon";

interface ProductCategoryTabsProps {
  activeCategory: ProductCategory;
  onCategoryChange: (category: ProductCategory) => void;
}

export default function ProductCategoryTabs({
  activeCategory,
  onCategoryChange,
}: ProductCategoryTabsProps) {
  return (
  <nav
  aria-label="Product categories"
  className="sticky top-0 z-30 bg-white/95 backdrop-blur-xl border-b border-slate-200"
>
  <div className="max-w-7xl mx-auto px-4 py-5">
    <div className="overflow-x-auto scrollbar-none">
      <ul
        role="tablist"
        className="inline-flex items-center gap-3 min-w-max rounded-sm bg-[#F8FAFC] p-2 border border-slate-200"
      >
        {PRODUCT_CATEGORIES.map((cat) => {
          const isActive = cat.id === activeCategory;

          return (
            <li
              key={cat.id}
              role="presentation"
              className="flex-shrink-0"
            >
             <button
  role="tab"
  aria-selected={isActive}
  aria-controls={`panel-${cat.id}`}
  id={`tab-${cat.id}`}
  onClick={() => onCategoryChange(cat.id)}
  className={`relative px-6 py-4 text-[15px] lg:text-[16px] font-semibold tracking-[0.3px] transition-all duration-300 whitespace-nowrap focus:outline-none ${isActive
        ? "text-[#0B67B2]"
        : "text-[#6B7280] hover:text-[#0B67B2]"
    }
  `}
>
  <span className="relative z-10">
    {cat.label}
  </span>

  {isActive && (
    <motion.span
      layoutId="activeUnderline"
      className="absolute left-0 bottom-0 h-[3px] w-full rounded-full bg-[#0B67B2]"
      transition={{
        type: "spring",
        stiffness: 450,
        damping: 35,
      }}
    />
  )}
</button>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
</nav>
  );
}
