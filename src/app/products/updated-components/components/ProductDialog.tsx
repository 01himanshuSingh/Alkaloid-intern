"use client";

import { useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { ProductDetail } from "../types/product";
import { dialogScale, backdropFade } from "../lib/animations";
import ProductDetails from "./ProductDetails";
import SynonymsSection from "./SynonymsSection ";

interface ProductDialogProps {
  product: ProductDetail | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
  productsInCategory: ProductDetail[];
}

export default function ProductDialog({
  product,
  isOpen,
  onClose,
  onNavigate,
  productsInCategory,
}: ProductDialogProps) {
  const currentIndex = useMemo(
    () => productsInCategory.findIndex((p) => p.id === product?.id),
    [productsInCategory, product]
  );

  const prevProduct =
    currentIndex > 0 ? productsInCategory[currentIndex - 1] : null;
  const nextProduct =
    currentIndex >= 0 && currentIndex < productsInCategory.length - 1
      ? productsInCategory[currentIndex + 1]
      : null;

  const goPrev = useCallback(() => {
    if (prevProduct) onNavigate(prevProduct.id);
  }, [prevProduct, onNavigate]);

  const goNext = useCallback(() => {
    if (nextProduct) onNavigate(nextProduct.id);
  }, [nextProduct, onNavigate]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    },
    [onClose, goPrev, goNext]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && product && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            variants={backdropFade}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px]"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Dialog wrapper */}
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              key="dialog"
              variants={dialogScale}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-4xl lg:max-w-5xl 2xl:max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
             <button
  onClick={onClose}
  aria-label="Close dialog"
  type="button"
  className="absolute -top-4 -right-4 sm:top-4 sm:right-4 z-20 w-12 h-12 flex items-center justify-center bg-white text-black shadow-xl transition-all duration-300 hover:scale-110 hover:bg-gray-400 hover:text-white active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
  style={{
    clipPath:
      "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
  }}
>
  {/* Inner Border */}
  <span
    className="absolute inset-[2px] border border-gray-200 group-hover:border-white/30"
    style={{
      clipPath:
        "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
    }}
  />

  <X
    size={19}
    strokeWidth={2.5}
    className="relative z-10"
  />
</button>

              {/* Previous Button */}
             {prevProduct && (
  <button
    onClick={(e) => {
      e.stopPropagation();
      goPrev();
    }}
    aria-label="Previous product"
    type="button"
    className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-black/5 text-[#8A9A46] transition-all duration-300 ease-out hover:scale-110 hover:bg-[#F5F8EC] hover:shadow-xl hover:text-[#8A9A46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A9A46]"
  >
    <ChevronLeft size={22} />
  </button>
)}

              {/* Next Button */}
             {nextProduct && (
  <button
    onClick={(e) => {
      e.stopPropagation();
      goNext();
    }}
    aria-label="Next product"
    type="button"
    className="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-black/5 text-[#8A9A46] transition-all duration-300 ease-out hover:scale-110 hover:bg-[#F5F8EC] hover:shadow-xl hover:text-[#8A9A46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A9A46]"
  >
    <ChevronRight size={22} />
  </button>
)}

              {/* Card */}
              <div className="relative overflow-hidden rounded-md shadow-2xl max-h-[85vh] flex flex-col">
                <div className="overflow-y-auto flex-1 bg-white">
                  <div className="px-6 py-8 sm:px-10 sm:py-10">
                    <ProductDetails product={product} />
                  </div>

                  {/* Synonyms - full width olive-green section below */}
                  <div
                    className="px-6 py-6 sm:px-10 sm:py-7"
                    style={{ backgroundColor: "#9CB050" }}
                  >
                    <SynonymsSection product={product} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}