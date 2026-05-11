"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { StatisticOverlay } from "./Shared/StatisticOverlay";
import { imageScaleVariants, viewportConfig } from "../../constants/animations";
import { fadeInVariants } from "@/constant/animations";
import { StatisticItem } from "../../types/history";
interface OverlayImageCardProps {
  data: StatisticItem;
}

export function OverlayImageCard({ data }: OverlayImageCardProps) {
  return (
    <article
      aria-label={`${data.value} ${data.label} ${data.sublabel ?? ""}`}
      className="relative w-full overflow-hidden"
      style={{ minHeight: "360px", maxHeight: "560px", aspectRatio: "16/9" }}
    >
      <motion.div
        variants={imageScaleVariants}
        initial="rest"
        whileHover="hover"
        className="absolute inset-0"
      >
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="absolute inset-0"
        >
          <Image
            src={data.imageSrc}
            alt={data.imageAlt}
            fill
            sizes="100vw"
            className="object-cover object-center"
            quality={85}
          />
        </motion.div>
      </motion.div>

      {/* Cinematic overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.28) 50%, rgba(0,0,0,0.08) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Statistic — lower left */}
    <div className="absolute inset-0 z-10 flex items-center justify-center">
        <StatisticOverlay
          value={data.value}
          label={data.label}
          sublabel={data.sublabel}
        />
      </div>
    </article>
  );
}
