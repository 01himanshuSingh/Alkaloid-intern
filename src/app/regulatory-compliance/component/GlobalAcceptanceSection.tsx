"use client";

import { motion } from "framer-motion";
import { GlobalAcceptanceSectionData } from "../types/regulatory";
import { defaultViewport, fadeUpVariants, staggerContainerVariants } from "@/constant/animations";

interface GlobalAcceptanceSectionProps {
  data: GlobalAcceptanceSectionData;
}

export default function GlobalAcceptanceSection({
  data,
}: GlobalAcceptanceSectionProps) {
  return (
    <section
      aria-labelledby="global-acceptance-heading"
      className="bg-[#F5F4EF] py-16 md:py-20 lg:py-28"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Asymmetric layout: empty left + content right on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left spacer — decorative border line on desktop */}
          <div
            aria-hidden="true"
            className="hidden lg:flex items-center justify-center"
          >
            <div className="w-px h-full min-h-[260px] bg-gradient-to-b from-transparent via-[#0B67B2]/20 to-transparent" />
          </div>

          {/* Right: Content */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainerVariants}
            className="flex flex-col gap-6"
          >
            {/* Heading */}
            <motion.div variants={fadeUpVariants}>
              <h2
                id="global-acceptance-heading"
                className="font-['Geologica',sans-serif] font-bold text-[#0B67B2] text-3xl md:text-4xl lg:text-[2.6rem] leading-tight"
              >
                {data.heading}
              </h2>
            </motion.div>

            {/* Body paragraphs */}
            <div className="flex flex-col gap-4">
              {data.paragraphs.map((para, idx) => (
                <motion.p
                  key={idx}
                  variants={fadeUpVariants}
                  className="font-['Libre_Baskerville',serif] text-gray-600 text-sm md:text-base leading-loose"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Countries block */}
            <motion.div variants={fadeUpVariants} className="mt-2">
              <p className="font-['Libre_Baskerville',serif] text-gray-600 text-sm md:text-base leading-loose mb-4">
                {data.countriesLabel}
              </p>

              {/* Country pills grid */}
              <ul
                className="flex flex-wrap gap-2"
                aria-label="Countries APL serves"
              >
                {data.countries.map((country) => (
                  <motion.li
                    key={country}
                    variants={fadeUpVariants}
                    className={[
                      "font-['Geologica',sans-serif] text-xs font-medium",
                      "px-3 py-1.5 rounded-full border border-[#0B67B2]/25",
                      "bg-white text-[#0B67B2]",
                      "transition-all duration-300",
                      "hover:bg-[#0B67B2] hover:text-white hover:border-[#0B67B2]",
                      "cursor-default select-none",
                    ].join(" ")}
                  >
                    {country}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.article>

        </div>
      </div>
    </section>
  );
}