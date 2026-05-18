"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInVariants, fadeUpVariants } from "../constant/animations";

interface ProductHeroProps {
  heroImage: string;
}

export default function ProductHero({ heroImage }: ProductHeroProps) {
  return (
    <section
      aria-label="Our Products Hero"
      className="relative w-full h-[360px] md:h-[440px] lg:h-screen overflow-hidden"
    >
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0"
      >
        <Image
          src={heroImage}
          alt="Botanical pharmaceutical hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
      </motion.div>

      <header className="relative z-10 flex flex-col items-center justify-center h-full px-4">
       

        <motion.h1
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="font-['Geologica'] text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest text-white/90 drop-shadow-lg text-center"
        >
          Our Products
        </motion.h1>
      </header>
    </section>
  );
}
