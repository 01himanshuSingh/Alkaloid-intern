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
     className="relative w-full overflow-hidden min-h-[420px] sm:min-h-[520px] md:min-h-[620px] lg:min-h-[720px] 2xl:min-h-[860px]"

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
          className="object-cover object-center scale-[1.02] transition-transform duration-[2200ms] ease-out motion-safe:group-hover:scale-[1.05]"
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
        <motion.blockquote variants={fadeUpVariants} className="max-w-lg md:max-w-xl lg:max-w-sm 2xl:max-w-lg">
          <p
            id="milestone-heading"
            className="font-geologica text-white font-light leading-snug text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] 2xl:text-[32px]"
            
          >
            {data.text}
          </p>
<a
  href="https://ascentialabs.com/"
  aria-disabled="true"
  onClick={(e) => e.preventDefault()}
  className="
    pointer-events-none
    cursor-default
    select-none
    text-transparent
    no-underline
  "
>
  Home
</a>
        </motion.blockquote>
      </motion.div>
    </section>
  );
}
