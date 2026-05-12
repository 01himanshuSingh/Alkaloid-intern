"use client";

import { motion } from "framer-motion";
import { VIEWPORT_ONCE, fadeUpVariants } from "../constant/animations";
import { cn } from "../lib/product-utils";


interface ProductHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
  variant?: "primary" | "feature";
}

export default function ProductHeading({
  children,
  className,
  as: Tag = "h2",
  variant = "primary",
}: ProductHeadingProps) {
  return (
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
    >
      <Tag
        className={cn(
          "font-['Geologica'] tracking-wide",
          variant === "primary" && "text-[#0B67B2] text-2xl font-semibold uppercase",
          variant === "feature" && "text-[#0B67B2] text-4xl md:text-5xl font-bold leading-tight",
          className
        )}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
