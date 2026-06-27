"use client";

import { useProduct } from "../hooks/useProduct";
import ProductCategoryTabs from "./ProductCategoryTabs";
import ProductGrid from "./ProductGrid";
import ProductDialog from "./ProductDialog";

export default function ProductsShell() {
  const {
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
  } = useProduct();

  return (
    <>
      <ProductCategoryTabs
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <ProductGrid
          activeCategory={activeCategory}
          products={productsInCategory}
          onProductClick={openProduct}
        />
      </div>

      <ProductDialog
        product={selectedProduct}
        isOpen={isDialogOpen}
        onClose={closeDialog}
        onNavigate={navigateToProduct}
        similarProducts={similarProducts}
        otherProducts={otherProducts}
      />
    </>
  );
}
