"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { scaleInVariants, defaultViewport } from "@/constant/animations";
import { cn } from "@/lib/utils";

interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  children?: React.ReactNode;
}

export default function ImageCard({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  children,
}: ImageCardProps) {
  return (
    <motion.figure
      className={cn(
        "relative overflow-hidden rounded-sm",
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={scaleInVariants}
    >
      <div className="group relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn(
            "object-cover transition-transform duration-700 ease-out",
            "group-hover:scale-[1.03]",
            imageClassName
          )}
        />
      </div>
      {children}
    </motion.figure>
  );
}
