"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { fadeUpVariants, staggerContainerVariants } from "@/constant/animations";
import { statNumberVariants, viewportConfig } from "@/app/history/constants/animations";

interface StatisticOverlayProps {
  value: string;
  label: string;
  sublabel?: string;
  className?: string;
}

export function StatisticOverlay({
  value,
  label,
  sublabel,
  className,
}: StatisticOverlayProps) {
  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={cn(
        "flex items-center gap-5 text-center",
        className
      )}
      aria-label={`${value} ${label} ${sublabel ?? ""}`}
    >
      {/* Number */}
      <motion.span
        variants={statNumberVariants}
        className="font-geologica text-white font-light leading-none select-none"
        style={{ fontSize: "clamp(5rem, 12vw, 9rem)" }}
      >
        {value}
      </motion.span>

      {/* Labels */}
      <motion.div
        variants={fadeUpVariants}
        className="flex flex-col items-start justify-center text-left"
      >
        <span
          className="font-geologica text-white font-light leading-tight"
          style={{ fontSize: "clamp(1.4rem, 3vw, 2.4rem)" }}
        >
          {label}
        </span>

        {sublabel && (
          <span
            className="font-geologica text-white font-light leading-tight"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2.4rem)" }}
          >
            {sublabel}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}