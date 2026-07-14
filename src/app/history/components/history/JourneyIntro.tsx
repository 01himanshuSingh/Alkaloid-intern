"use client";

import { EditorialTextBlock } from "./Shared/EditorialTextBlock";
import { JourneyIntroData } from "../../types/history";

interface JourneyIntroProps {
  data: JourneyIntroData;
}

export function JourneyIntro({ data }: JourneyIntroProps) {
  return (
    <section
      aria-labelledby="journey-intro-heading"
      className="bg-[#ffff] w-full"
    >
     <div className="relative overflow-hidden">

  {/* Light Blue Tint */}
  <div
    className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-[#D9EEF9] opacity-40 blur-[90px] pointer-events-none"
  />

  {/* Light Green Tint */}
  <div
    className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-[#DCE8C5] opacity-40 blur-[100px] pointer-events-none"
  />

  <div className="relative mx-auto max-w-2xl lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl px-6 py-10 sm:py-20 md:py-22">

    <EditorialTextBlock
      heading={data.heading}
      paragraph={data.paragraph}
      headingClassName="text-[#0B67B2] text-[18px] sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl"
      paragraphClassName="text-[#6B7280] font-['Libre_Baskerville',serif] text-[12px] md:text-[0.9rem] lg:text-[14px] 2xl:text-[20px] max-w-xl lg:max-w-3xl 2xl:max-w-6xl"
    />

  </div>
</div>
    </section>
  );
}
