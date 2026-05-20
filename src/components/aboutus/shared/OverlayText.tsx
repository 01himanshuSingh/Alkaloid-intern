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
      <div className="max-w-xs md:max-w-sm lg:max-w-md 2xl:max-w-[730px]">
        <p
          className={cn(
            "font-200 font-light",
            "text-white   leading-relaxed",
            "text-base md:text-lg lg:text-[27px]  2xl:text-[38px]",
            "drop-shadow-md"
          )}
        >
          {text}
        </p>
      </div>
    </motion.div>
  );
}
