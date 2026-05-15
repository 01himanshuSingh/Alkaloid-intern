"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { defaultViewport, fadeUpVariants, slideLeftVariants, staggerContainerVariants } from "@/constant/animations";

interface GlobalAcceptanceSectionProps {
  data: any;
}

const SECTION_IMAGE = {
  src: "/PNG/Block-Facility-1536x910.webp",
  alt: "APL Alkaloids global export operations and team",
};

export default function GlobalAcceptanceSection({
  data,
}: GlobalAcceptanceSectionProps) {
  return (
    <section
      aria-labelledby="global-acceptance-heading"
      className="bg-[#F5F4EF] py-16 md:py-20 lg:py-28"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── LEFT: Image ── */}
          <motion.figure
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={slideLeftVariants}
            className="relative w-full overflow-hidden group h-[260px] sm:h-[320px] md:h-[400px] lg:min-h-[400px] order-2 lg:order-1"
          >
            <Image
              src={SECTION_IMAGE.src}
              alt={SECTION_IMAGE.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </motion.figure>

          {/* ── RIGHT: Content ── */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainerVariants}
            className="flex flex-col gap-6 order-1 lg:order-2"
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
              {data.paragraphs.map((para: any, idx: any) => (
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

              {/* Country pills */}
              <ul
                className="flex flex-wrap gap-2"
                aria-label="Countries APL serves"
              >
                {data.countries.map((country: any) => (
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