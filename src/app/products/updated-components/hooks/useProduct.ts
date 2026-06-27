"use client";

import { useState, useCallback } from "react";
import { ProductCategory, ProductDetail } from "../types/product";
import { PRODUCTS } from "../data/products";
import { PRODUCT_CATEGORIES } from "../constants/productCategories";

export function useProduct() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>(
    PRODUCT_CATEGORIES[0].id
  );
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const productsInCategory = PRODUCTS.filter(
    (p) => p.category === activeCategory
  );

  const openProduct = useCallback((product: ProductDetail) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  }, []);

  const closeDialog = useCallback(() => {
    setIsDialogOpen(false);
    // slight delay so exit animation plays before clearing state
    setTimeout(() => setSelectedProduct(null), 300);
  }, []);

  const navigateToProduct = useCallback((id: string) => {
    const product = PRODUCTS.find((p) => p.id === id);
    if (product) setSelectedProduct(product);
  }, []);

  const similarProducts = selectedProduct
    ? selectedProduct.similarProductIds
        .map((id) => PRODUCTS.find((p) => p.id === id))
        .filter(Boolean) as ProductDetail[]
    : [];

  const otherProducts = selectedProduct
    ? selectedProduct.otherProductIds
        .map((id) => PRODUCTS.find((p) => p.id === id))
        .filter(Boolean) as ProductDetail[]
    : [];

  return {
    activeCategory,
    setActiveCategory,
    productsInCategory,
    selectedProduct,
    isDialogOpen,
    openProduct,
    closeDialog,
    navigateToProduct,
    similarProducts,
    otherProducts,
  };
}
