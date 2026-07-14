"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  imageScaleVariants,
  viewportConfig,
} from "../../constants/animations";
import { fadeInVariants } from "@/constant/animations";

export function Pharmaceutical() {
  return (
    <section
      aria-labelledby="milestone-heading"
      className="py-12 md:py-16 lg:py-20 bg-white"
    >
      {/* Custom Content Container */}
      <div className="w-full max-w-[1800px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        <motion.div
          variants={imageScaleVariants}
          initial="rest"
          whileHover="hover"
          className="relative overflow-hidden rounded-xl h-[260px] sm:h-[360px] md:h-[480px] lg:h-[580px] xl:h-[650px] 2xl:h-[760px]"
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
              alt="Pharmaceutical image"
              fill
              quality={90}
              sizes="(max-width:768px)100vw,(max-width:1200px)90vw,1600px"
              className="object-cover transition-transform duration-2200 ease-out hover:scale-[1.03]"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}