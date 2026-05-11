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
      className="relative w-full min-h-screen overflow-hidden"
    >
      <Image
        src={data.imageSrc}
        alt={data.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Left-side gradient overlay for text readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"
      />

      <OverlayText text={data.headline} />
    </section>
  );
}
