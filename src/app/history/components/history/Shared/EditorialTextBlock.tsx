"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUpVariants } from "@/constant/animations";
import { viewportConfig } from "@/app/history/constants/animations";

interface EditorialTextBlockProps {
  heading: string;
  paragraph: string;
  headingClassName?: string;
  paragraphClassName?: string;
  className?: string;
}

export function EditorialTextBlock({
  heading,
  paragraph,
  headingClassName,
  paragraphClassName,
  className,
}: EditorialTextBlockProps) {
  return (
    <div className={cn("flex flex-col items-center gap-6", className)}>
      <motion.h2
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className={cn(
          "font-geologica text-center font-medium leading-snug tracking-tight",
          headingClassName
        )}
      >
        {heading.split("\n").map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </motion.h2>
      <motion.p
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className={cn(
          "font-[Baskerville] text-center leading-relaxed",
          paragraphClassName
        )}
      >
        {paragraph}
      </motion.p>
    </div>
  );
}
