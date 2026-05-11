"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeUpVariants,
  staggerContainerVariants,
  defaultViewport,
} from "@/constant/animations";
import type { MarketsSectionData } from "@/types/about";

interface MarketsSectionProps {
  data: MarketsSectionData;
}

export default function MarketsSection({ data }: MarketsSectionProps) {
  return (
    <section
      aria-labelledby="markets-heading"
      className="bg-[#AFC9DB] py-16 md:py-20 lg:py-28"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Heading block */}
        <motion.header
          className="text-center mb-10 md:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainerVariants}
        >
          <motion.h2
            id="markets-heading"
            variants={fadeUpVariants}
            className="font-['Geologica',sans-serif] font-bold tracking-[0.18em] uppercase text-white text-2xl md:text-3xl lg:text-4xl mb-4"
          >
            {data.heading}
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="font-['Libre_Baskerville',serif] text-white/90 text-sm md:text-base leading-relaxed max-w-md mx-auto"
          >
            {data.subtitle}
          </motion.p>
        </motion.header>

        {/* Map with region labels */}
        <motion.div
          className="relative w-full max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeUpVariants}
        >
          {/* Map image */}
          <div className="relative w-full aspect-[16/9]">
            <Image
              src={data.mapImageSrc}
              alt={data.mapImageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 64rem"
              className="object-contain"
            />

            {/* Region labels — absolute-positioned */}
            {/* {data.regions.map((region) => (
              <div
                key={region.id}
                className="absolute flex flex-col items-center gap-1"
                style={{ top: region.position.top, left: region.position.left }}
                aria-label={`Market region: ${region.label.replace("\n", " ")}`}
              >
                <span className="w-2 h-2 rounded-full bg-[#0B67B2] shadow-sm" aria-hidden="true" />
                <span
                  className={[
                    "font-['Geologica',sans-serif] font-semibold tracking-widest uppercase",
                    "text-[#0B67B2] text-[9px] md:text-[10px] lg:text-xs",
                    "text-center leading-tight whitespace-pre-line",
                  ].join(" ")}
                >
                  {region.label}
                </span>
              </div>
            ))} */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
