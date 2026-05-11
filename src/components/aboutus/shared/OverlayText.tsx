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
      <div className="max-w-xs md:max-w-sm lg:max-w-md">
        <p
          className={cn(
            "font-['Geologica',sans-serif] font-light",
            "text-white leading-snug",
            "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
            "drop-shadow-md"
          )}
        >
          {text}
        </p>
      </div>
    </motion.div>
  );
}
