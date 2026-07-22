"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HeroData } from "../../types/history";
import { fadeInVariants } from "@/constant/animations";
import { overlayTextVariants } from "../../constants/animations";
interface HistoryHeroProps {
  data: HeroData;
}

export function HistoryHero({ data }: HistoryHeroProps) {
  return (
    <section
      aria-label="History hero"
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: "16/9", minHeight: "420px", maxHeight: "640px" }}
    >
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0"
      >
        <Image
          src={data.imageSrc}
          alt={data.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={90}
        />
      </motion.div>

      {/* Gradient overlay — darkens right side for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to left, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.18) 50%, rgba(0,0,0,0.04) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Logo — top left */}
      {/* <div className="absolute top-5 left-5 sm:top-7 sm:left-8 z-10">
        <Image
          src={data.logoSrc}
          alt={data.logoAlt}
          width={140}
          height={52}
          className="w-24 sm:w-32 md:w-36 h-auto object-contain"
          priority
        />
      </div> */}

      {/* Editorial heading — top right */}
      <motion.header
        variants={overlayTextVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-24 right-6 sm:top-10 sm:right-10 md:top-12 lg:top-28 2xl:top-32 md:right-14 z-10 text-right max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl "
      >
      <h1
  className="font-geologica text-white font-light leading-[1.05] tracking-tight "
  style={{ fontSize: "clamp(1.6rem, 4.5vw, 3.2rem)" }}
>
          {data.heading.split("\n").map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>
      </motion.header>
    </section>
  );
}
