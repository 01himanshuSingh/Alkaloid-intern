"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/aboutus/SectionHeading";

import type { ObjectivesSectionData } from "@/types/about";
import { defaultViewport, fadeUpVariants, slideRightVariants, staggerContainerVariants } from "@/constant/animations";
import ImageCard from "./shared/ImageCard";

interface ObjectivesSectionProps {
  data: ObjectivesSectionData;
}

export default function ObjectivesSection({ data }: ObjectivesSectionProps) {
  return (
    <section
      aria-labelledby="objectives-heading"
      className="bg-white py-16 md:py-20 lg:py-18"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Text content */}
          <motion.article
            className="flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainerVariants}
          >
            <motion.div variants={fadeUpVariants}>
              <SectionHeading
                as="h2"
                id="objectives-heading"
                variant="olive"
                className="text-[20px] font-semibold  lg:text-[28px] 2xl:text-[35px] leading-relaxed"
              >
                OBJECTIVES
                <br className="hidden lg:block" />
                &amp; PRINCIPLES
              </SectionHeading>
            </motion.div>

            <div className="flex flex-col gap-4 mt-2">
              {data.objectives.map((obj) => (
                <motion.p
                  key={obj.id}
                  variants={fadeUpVariants}
                  className="font-['Libre_Baskerville',serif] text-[12px] md:text-[0.9rem] lg:text-[15px] 2xl:text-[17px]  leading-loose"
                >
                  {obj.paragraph}
                </motion.p>
              ))}
            </div>
          </motion.article>

          {/* Right: Image */}
          <motion.div
            className="relative w-full aspect-[4/3] min-h-[300px] md:min-h-[380px]"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={slideRightVariants}
          >
            <ImageCard
              src={data.imageSrc}
              alt={data.imageAlt}
              className="absolute inset-0 w-full h-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
