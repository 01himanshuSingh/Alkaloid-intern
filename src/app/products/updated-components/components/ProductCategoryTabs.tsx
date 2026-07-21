"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { ProductCategory } from "../types/product";
import { PRODUCT_CATEGORIES } from "../constants/productCategories";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface ProductCategoryTabsProps {
  activeCategory: ProductCategory;
  onCategoryChange: (category: ProductCategory) => void;
}

export default function ProductCategoryTabs({
  activeCategory,
  onCategoryChange,
}: ProductCategoryTabsProps) {
  const [open, setOpen] = useState(false);

  const activeLabel =
    PRODUCT_CATEGORIES.find((c) => c.id === activeCategory)?.label ?? "";

  return (
    <nav
      aria-label="Product categories"
      className="sticky top-0 z-30 bg-white/95 backdrop-blur-xl border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 py-5">

        {/* ================= MOBILE ================= */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="w-full flex items-center justify-between rounded-lg border border-slate-300 bg-white px-4 py-3 font-semibold text-[#0B67B2] shadow-sm"
              >
                <span>{activeLabel}</span>

                <ChevronDown size={20} />
              </button>
            </SheetTrigger>

            <SheetContent side="bottom" className="rounded-t-3xl">
              <SheetHeader>
                <SheetTitle>Select Product Category</SheetTitle>
              </SheetHeader>

              <div className="mt-6 space-y-2">
                {PRODUCT_CATEGORIES.map((cat) => {
                  const isActive = cat.id === activeCategory;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        onCategoryChange(cat.id);
                        setOpen(false);
                      }}
                      className={`w-full rounded-lg px-4 py-4 text-left transition font-medium

                        ${
                          isActive
                            ? "bg-[#0B67B2] text-white"
                            : "hover:bg-slate-100 text-slate-700"
                        }
                      `}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:block overflow-x-auto scrollbar-none">
          <ul
            role="tablist"
           className="inline-flex items-center gap-3 min-w-max p-0 border-0 bg-transparent"          >
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
                    className={`relative px-6 py-4 text-[15px] lg:text-[14px] 2xl:text-[16px] font-semibold tracking-[0.3px] transition-all duration-300 whitespace-nowrap focus:outline-none

                      ${
                        isActive
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