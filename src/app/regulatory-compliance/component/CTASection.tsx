"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import MolecularBackground from "./MolecularBackground";
import { defaultViewport, fadeUpVariants, staggerContainerVariants } from "@/constant/animations";

interface CTASectionProps {
  data: any;
}

export default function CTASection({ data }: CTASectionProps) {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-[#EEF0F2] py-20 md:py-24 lg:py-32"
    >
      {/* Molecular network SVG background */}
      <MolecularBackground />

      {/* Vignette overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/40 pointer-events-none"
      />

      <div className="relative z-10 max-w-screen-sm mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainerVariants}
          className="flex flex-col items-center gap-6"
        >
          {/* Heading */}
          <motion.h2
            id="cta-heading"
            variants={fadeUpVariants}
            className="font-['Geologica',sans-serif] font-bold text-[#1a2e44] text-3xl md:text-4xl lg:text-[2.6rem] leading-tight"
          >
            {data.heading}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeUpVariants}
            className="font-['Libre_Baskerville',serif] text-gray-500 text-sm md:text-base leading-relaxed max-w-xs mx-auto"
          >
            {data.subtitle}
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={staggerContainerVariants}
            className="flex flex-col w-full max-w-xs gap-4 mt-2"
          >
            {data.buttons.map((btn:any) => (
              <motion.div key={btn.id} variants={fadeUpVariants}>
                <Link
                  href={btn.href}
                  className={[
                    "block w-full text-center",
                    "font-['Geologica',sans-serif] font-medium text-sm tracking-widest uppercase",
                    "bg-[#88A933] text-white",
                    "rounded-sm px-8 py-4",
                    "transition-all duration-300 ease-out",
                    "hover:bg-[#6e8a28] hover:shadow-lg hover:shadow-[#88A933]/30",
                    "hover:-translate-y-0.5",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88A933] focus-visible:ring-offset-2",
                  ].join(" ")}
                >
                  {btn.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}