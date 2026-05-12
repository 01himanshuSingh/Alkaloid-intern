"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { imageScaleVariants, viewportConfig } from "../../constants/animations";
import { fadeInVariants, fadeUpVariants, staggerContainerVariants } from "@/constant/animations";



export function Pharmaceutical() {
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
            src="/History page/Copy of A Pharmaceutical Company’s Remarkable Journey.png"
            alt={'Pharmaceutical image'}
            fill
            sizes="100vw"
          className="object-cover object-center scale-[1.02] transition-transform duration-[2200ms] ease-out motion-safe:group-hover:scale-[1.05]"
            quality={85}
          />
        </motion.div>
      </motion.div>

      {/* Dark cinematic overlay */}
    

      {/* Editorial text — lower left */}
    
    </section>
  );
}
