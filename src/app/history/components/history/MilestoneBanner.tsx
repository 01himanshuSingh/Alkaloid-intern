"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MilestoneBannerData } from "../../types/history";
import { imageScaleVariants, viewportConfig } from "../../constants/animations";
import { fadeInVariants, fadeUpVariants, staggerContainerVariants } from "@/constant/animations";


interface MilestoneBannerProps {
  data: MilestoneBannerData;
}

export function MilestoneBanner({ data }: MilestoneBannerProps) {
  return (
    <section
      aria-labelledby="milestone-heading"
      className="relative  w-full overflow-hidden"
      style={{ minHeight: "440px" }}
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

      {/* Dark cinematic overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.38) 60%, rgba(0,0,0,0.18) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Editorial text — lower left */}
      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="relative z-10 flex items-end h-full min-h-[440px] px-8 py-12 sm:px-12 sm:py-14 md:px-16 md:py-16"
      >
        <motion.blockquote variants={fadeUpVariants} className="max-w-lg md:max-w-xl lg:max-w-md 2xl:max-w-lg">
          <p
            id="milestone-heading"
            className="font-geologica text-white font-light leading-snug"
            style={{ fontSize: "clamp(1rem, 2.8vw, 1.5rem)" }}
          >
            {data.text}
          </p>
        </motion.blockquote>
      </motion.div>
    </section>
  );
}
