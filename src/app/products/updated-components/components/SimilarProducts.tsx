"use client";

import { ProductDetail } from "../types/product";

interface SimilarProductsProps {
  products: ProductDetail[];
  onNavigate: (id: string) => void;
  label?: string;
  icon?: "similar" | "other";
}

export default function SimilarProducts({
  products,
  onNavigate,
  label = "Similar Products",
  icon = "similar",
}: SimilarProductsProps) {
  if (products.length === 0) return null;

  return (
    <section aria-labelledby={`section-${label.replace(/\s+/g, "-").toLowerCase()}`} className="mt-6">
      <div className="flex items-center justify-between mb-3">
        <h3
          id={`section-${label.replace(/\s+/g, "-").toLowerCase()}`}
          className="text-[14px] lg:text-[14px]  font-[Geologica] 2xl:text-[18px] font-semibold text-[#1d4ed8] flex items-center gap-2"
        >
          <span className="w-7 h-7 rounded-full bg-[#1d4ed8]/10 flex items-center justify-center text-[#1d4ed8]">
            {icon === "similar" ? (
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
            ) : (
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v4l3 3" strokeLinecap="round" />
              </svg>
            )}
          </span>
          {label}
        </h3>
        <span className="lg:text-[14px] text-[12px] text-[#1d4ed8] cursor-pointer hover:underline">View All &rsaquo;</span>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
        {products.map((p) => (
          <button
            key={p.id}
            onClick={() => onNavigate(p.id)}
            className="flex-shrink-0 w-44 text-left border border-gray-200 rounded-sm p-3 hover:border-[#1d4ed8]/40 hover:bg-blue-50/30 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8]"
            type="button"
          >
            <p className="text-[11px] lg:text-[12px]  font-[Geologica] 2xl:text-[14px] font-semibold text-gray-800 leading-snug line-clamp-2">{p.name}</p>
            <p className="text-[10px] lg:text-[12px] 2xl:text-[14px] font-[Libre_Baskerville] text-gray-400 mt-1 truncate">{p.certification}</p>
          </button>
        ))}
        {/* Peek arrow */}
        <button
          className="flex-shrink-0 w-8 self-stretch border border-gray-200 rounded-sm flex items-center justify-center text-gray-400 hover:text-[#1d4ed8] hover:border-[#1d4ed8]/40 transition-colors"
          aria-label="Scroll for more"
          type="button"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
