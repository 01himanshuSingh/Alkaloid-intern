"use client";

import { motion } from "framer-motion";
import { VIEWPORT_ONCE, slideLeftVariants } from "../constant/animations";
import { cn } from "../lib/product-utils";
interface ProductSidebarProps {
  children: React.ReactNode;
  className?: string;
}

export default function ProductSidebar({ children, className }: ProductSidebarProps) {
  return (
    <motion.aside
      variants={slideLeftVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      className={cn(
        "bg-white border border-gray-100 rounded-sm p-6 shadow-sm",
        className
      )}
      aria-label="Product sidebar"
    >
      {children}
    </motion.aside>
  );
}
