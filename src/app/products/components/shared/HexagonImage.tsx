"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { scaleInVariants, VIEWPORT_ONCE } from "../constant/animations";
import { cn } from "../lib/product-utils";

interface HexagonImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  animate?: boolean;
}

export default function HexagonImage({
  src,
  alt,
  width = 260,
  height = 300,
  className,
  sizes = "(max-width: 768px) 180px, 260px",
  priority = false,
  animate = true,
}: HexagonImageProps) {
  const Wrapper = animate ? motion.figure : "figure";
  const motionProps = animate
    ? {
        variants: scaleInVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: VIEWPORT_ONCE,
        whileHover: { scale: 1.04 },
        transition: { duration: 0.35 },
      }
    : {};

  return (
    <Wrapper
      {...(motionProps as object)}
      className={cn("relative inline-block select-none", className)}
      aria-label={alt}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        className="w-full h-auto object-contain drop-shadow-md"
        draggable={false}
      />
    </Wrapper>
  );
}
