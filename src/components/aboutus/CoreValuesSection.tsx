"use client";

import { motion } from "framer-motion";
import {
  fadeUpVariants,
  staggerContainerVariants,
  slideLeftVariants,
  slideRightVariants,
  defaultViewport,
} from "@/constant/animations";
import ImageCard from "./shared/ImageCard";
import type { CoreValuesSectionData } from "@/types/about";

interface CoreValuesSectionProps {
  data: CoreValuesSectionData;
}

export default function CoreValuesSection({ data }: CoreValuesSectionProps) {
  return (
    <section
      aria-labelledby="core-values-heading"
      className="bg-white py-16 md:py-20 lg:py-20"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Image with vertical label */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={slideLeftVariants}
          >
            <div className="flex items-stretch gap-0">
              {/* Vertical "CORE VALUES" label */}
              <div className="flex items-center justify-center bg-white/80 py-4 px-2 rounded-l-sm shrink-0">
                <span
                  id="core-values-heading"
                  className="font-['Geologica',sans-serif] text-[10px] md:text-xs font-semibold tracking-[0.3em] text-gray-600 uppercase"
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  CORE VALUES
                </span>
              </div>

              {/* Image */}
              <div className="relative w-full aspect-[3/4] min-h-[360px] md:min-h-[440px]">
                <ImageCard
                  src={data.imageSrc}
                  alt={data.imageAlt}
                  className="absolute inset-0 w-full h-full rounded-none rounded-r-sm"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Editorial content */}
          <motion.article
            className="flex flex-col gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainerVariants}
          >
            {/* Blue highlighted intro */}
            <motion.p
              variants={fadeUpVariants}
              className=" text-[#0B67B2] text-sm md:text-base lg:text-[19px] 2xl:text-[21px] leading-relaxed font-normal"
            >
              {data.highlightParagraph}
            </motion.p>

            {/* Body paragraph */}
            {data.bodyParagraphs.map((para, idx) => (
              <motion.p
                key={idx}
                variants={fadeUpVariants}
                className="font-['Libre_Baskerville',serif] text-gray-700 text-sm md:text-[0.9rem] lg:text-[15px] 2xl:text-[17px] leading-loose"
              >
                {para}
              </motion.p>
            ))}

            {/* Bullet list */}
            <motion.ul
              variants={staggerContainerVariants}
              className="flex flex-col gap-2 pl-1"
              aria-label="Core value commitments"
            >
              {data.bulletPoints.map((item) => (
                <motion.li
                  key={item.id}
                  variants={fadeUpVariants}
                  className="flex items-start gap-3 font-['Libre_Baskerville',serif] text-gray-700 text-sm md:text-[0.9rem] lg:text-[15px] 2xl:text-[17px] leading-loose"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[6px] shrink-0 w-2 h-2 rounded-full bg-[#88A933]"
                  />
                  {item.text}
                </motion.li>
              ))}
            </motion.ul>

            {/* Closing paragraph */}
            <motion.p
              variants={fadeUpVariants}
              className="font-['Libre_Baskerville',serif] text-gray-700 text-sm md:text-[0.9rem] lg:text-[15px] 2xl:text-[17px] leading-loose"
            >
              {data.closingParagraph}
            </motion.p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
