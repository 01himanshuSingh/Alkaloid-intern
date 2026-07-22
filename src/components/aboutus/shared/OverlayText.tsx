"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, defaultViewport } from "@/constant/animations";
import { cn } from "@/lib/utils";

interface OverlayTextProps {
  text: string;
  className?: string;
}

export default function OverlayText({ text, className }: OverlayTextProps) {
  return (
    <motion.div
      className={cn(
        "absolute inset-0 flex items-center",
        "px-8 md:px-14 lg:px-20",
        className
      )}
      initial="hidden"
      animate="visible"
      variants={fadeUpVariants}
    >
      <div className="max-w-sm md:max-w-lg lg:max-w-[520px] 2xl:max-w-[680px]">
      <p
  className={cn(
    // Typography
    "font-light tracking-normal",

    // Color
    "text-white",

    // Line height (reduced)
    "leading-[1.2] md:leading-[1.18] lg:leading-[1]",

    // Font sizes
    "text-base md:text-lg lg:text-[27px] 2xl:text-[38px]",

    // Softer shadow
    "drop-shadow-sm"
  )}
>
  {text}
</p>
      </div>
    </motion.div>
  );
}
