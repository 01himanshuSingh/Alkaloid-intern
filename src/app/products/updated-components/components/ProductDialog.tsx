"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductDetail } from "../types/product";
import { dialogScale, backdropFade } from "../lib/animations";
import ProductDetails from "./ProductDetails";
import SimilarProducts from "./SimilarProducts";
import OtherProducts from "./OtherProducts";

interface ProductDialogProps {
  product: ProductDetail | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
  similarProducts: ProductDetail[];
  otherProducts: ProductDetail[];
}

export default function ProductDialog({
  product,
  isOpen,
  onClose,
  onNavigate,
  similarProducts,
  otherProducts,
}: ProductDialogProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); },
    [onClose]
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
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[3px]"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Dialog */}
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
              className="relative w-full max-w-6xl lg:max-w-5xl 2xl:max-w-7xl max-h-[80vh] lg:max-h-[90vh] 2xl:max-h-[98vh]   flex flex-col overflow-hidden rounded-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* ── Top section: sage-green bg matching screenshot ── */}
              <div
                className="relative overflow-y-auto flex-1"
                style={{ backgroundColor: "#e8eddc" }}
              >
                {/* Close button */}
                <button
                  onClick={onClose}
                  aria-label="Close dialog"
                  type="button"
                  className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/60 hover:bg-white flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8]"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                  </svg>
                </button>

                {/* Product info – matches screenshot layout */}
                <div className="px-8 py-10">
                  <ProductDetails product={product} />
                </div>

                {/* ── Bottom white section: Similar & Other ── */}
                {(similarProducts.length > 0 || otherProducts.length > 0) && (
                  <div className="bg-white px-8 py-7 lg:py-2 border-t border-gray-100">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      {similarProducts.length > 0 && (
                        <SimilarProducts products={similarProducts} onNavigate={onNavigate} />
                      )}
                      {otherProducts.length > 0 && (
                        <OtherProducts products={otherProducts} onNavigate={onNavigate} />
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
