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
      className="bg-[#F5F4EF] w-full"
    >
      <div className="mx-auto max-w-2xl lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl px-6 py-16 sm:py-20 md:py-24">
        <EditorialTextBlock
          heading={data.heading}
          paragraph={data.paragraph}
          headingClassName="text-[#0B67B2] text-xl sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl  "
          paragraphClassName="text-[#6B7280]  font-['Libre_Baskerville',serif] text-sm md:text-[0.9rem] lg:text-[14px] 2xl:text-[20px] max-w-xl lg:max-w-3xl 2xl:max-w-6xl"
        />
      </div>
    </section>
  );
}
