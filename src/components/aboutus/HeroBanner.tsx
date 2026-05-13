"use client";

import Image from "next/image";
import OverlayText from "./shared/OverlayText";
import type { HeroBannerData } from "@/types/about";

interface HeroBannerProps {
  data: HeroBannerData;
}

export default function HeroBanner({ data }: HeroBannerProps) {
  return (
    <section
      aria-label="About page hero banner"
      className="relative w-full h-[85vh] sm:h-[92vh] lg:min-h-screen overflow-hidden">
      {/* Banner Image */}
      <Image
        src={data.imageSrc}
        alt={data.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[68%_center] sm:object-center lg:object-center scale-105 lg:scale-100 transition-transform duration-700"/>

      {/* Professional Mobile Overlay */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"/>

      {/* Content */}
      <div
        className="relative z-10 flex items-center h-full px-5 sm:px-8 lg:px-0 pt-16 sm:pt-20 lg:pt-0"
      >
        <OverlayText text={data.headline} />
      </div>
    </section>
  );
}