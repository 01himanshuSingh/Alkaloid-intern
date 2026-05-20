"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ComplianceSectionData } from "./type/regulatory";
import { defaultViewport, fadeUpVariants, slideRightVariants, staggerContainerVariants } from "@/constant/animations";


interface RegulatoryComplianceSectionProps {
  data: ComplianceSectionData;
}

export default function RegulatoryComplianceSection({
  data,
}: RegulatoryComplianceSectionProps) {
  return (
    <section
      aria-labelledby="regulatory-heading"
      className="bg-white py-20 md:py-25 lg:py-28"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── LEFT: Text Content ── */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainerVariants}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeUpVariants}>
              <h1
                id="regulatory-heading"
                className="font-['Geologica',sans-serif] font-bold text-[#0B67B2] text-3xl md:text-4xl lg:text-5xl leading-tight whitespace-pre-line"
              >
                {data.heading}
              </h1>
            </motion.div>

            <motion.p
              variants={fadeUpVariants}
              className="font-['Libre_Baskerville',serif] text-gray-600 text-sm md:text-base leading-loose"
            >
              {data.introParagraph}
            </motion.p>

            <motion.ul
              variants={staggerContainerVariants}
              className="flex flex-col gap-3 mt-1"
              aria-label="Regulatory compliance highlights"
            >
              {data.highlights.map((item) => (
                <motion.li
                  key={item.id}
                  variants={fadeUpVariants}
                  className="flex items-start gap-3 font-['Libre_Baskerville',serif] text-gray-600 text-sm md:text-base leading-relaxed"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[7px] shrink-0 w-2 h-2 rounded-full bg-[#88A933]"
                  />
                  {item.text}
                </motion.li>
              ))}
            </motion.ul>
          </motion.article>

          {/* ── RIGHT: Responsive Square Image ── */}
        <motion.figure
  initial="hidden"
  whileInView="visible"
  viewport={defaultViewport}
  variants={slideRightVariants}
  className="relative w-full overflow-hidden group rounded-xl bg-white h-[320px] sm:h-[420px] md:h-[520px] lg:h-[420px] 2xl:h-[560px]">
  <Image
    src={data.images[0].src}
    alt={data.images[0].alt}
    fill
    priority
    quality={90}
    sizes="
      (max-width: 640px) 100vw,
      (max-width: 1024px) 100vw,
      50vw
    "
    className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"/>
</motion.figure>

        </div>
      </div>
    </section>
  );
}