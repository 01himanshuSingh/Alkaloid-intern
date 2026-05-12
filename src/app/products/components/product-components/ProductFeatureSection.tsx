"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { VIEWPORT_ONCE, fadeUpVariants, slideLeftVariants, slideRightVariants, staggerContainerVariants } from "../constant/animations";
import { ProductFeatureData } from "../types/product";


interface ProductFeatureSectionProps {
  feature: ProductFeatureData;
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-0.5">
      <p className="font-['Geologica'] text-sm md:text-base lg:text-[16px] 2xl:text-[20px] uppercase tracking-widest text-[#6B7280] font-bold">
        {label}
      </p>
      <p className="font-['Libre_Baskerville'] text-sm md:text-base lg:text-[16px] 2xl:text-[20px] text-[#374151] leading-relaxed">
        {value}
      </p>
    </div>
  );
}

export default function ProductFeatureSection({ feature }: ProductFeatureSectionProps) {
  const halfCerts = Math.ceil(feature.certificates.length / 2);
  const certsLeft = feature.certificates.slice(0, halfCerts);
  const certsRight = feature.certificates.slice(halfCerts);

  return (
    <section
      aria-label={`${feature.title} feature details`}
      className="w-full bg-[#E8EDD9] py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
       
          <motion.div
            variants={slideLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="flex-1 min-w-0 space-y-8"
          >
            <h2 className="font-['Geologica'] text-4xl md:text-5xl lg:text-5xl 2xl:text-6xl font-semibold text-[#0B67B2] leading-tight">
              {feature.title}
            </h2>

            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="space-y-6"
            >
                <div className="flex flex-row gap-6 lg:gap-[98px] 2xl:gap-[100px]">

               
              <motion.div variants={fadeUpVariants} className="space-y-2">
                <p className="font-['Geologica'] text-[10px] text-sm md:text-base lg:text-[18px] 2xl:text-[24px] uppercase tracking-widest text-[#6B7280] font-bold">
                  Synonyms
                </p>
                <ul role="list" className="space-y-0.5">
                  {feature.synonyms.map((syn: string) => (
                    <li
                      key={syn}
                      className="font-['Libre_Baskerville'] text-sm md:text-base lg:text-[16px] 2xl:text-[20px] text-[#374151]"
                    >
                      {syn}
                    </li>
                  ))}
                </ul>
              </motion.div>

<div className="space-y-4">
              <InfoRow label="CAS No." value={feature.casNumber} />
              {feature.dmfAvailable && (
                <InfoRow label="DMF" value="DMF Available" />
              )}
              <InfoRow label="Therapeutic Use" value={feature.therapeuticUse} />
              <InfoRow label={feature.plantPartUsed} value={feature.plantName} />
            </div>
 </div>

              <motion.div variants={fadeUpVariants} className="space-y-3">
                <p className="font-['Geologica']  text-sm md:text-base lg:text-[18px] 2xl:text-[24px] uppercase tracking-widest text-[#6B7280] font-bold">
                  Certificates Available
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                  <ul role="list" className="space-y-1">
                    {certsLeft.map((cert: any) => (
                      <li
                        key={cert.name}
                        className="font-['Libre_Baskerville'] text-sm md:text-base lg:text-[16px] 2xl:text-[20px] text-[#374151]"
                      >
                        {cert.name}
                      </li>
                    ))}
                  </ul>
                  <ul role="list" className="space-y-1">
                    {certsRight.map((cert: any) => (
                      <li
                        key={cert.name}
                        className="font-['Libre_Baskerville'] text-sm md:text-base lg:text-[16px] 2xl:text-[20px] text-[#374151]"
                      >
                        {cert.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        

          <motion.div
            variants={slideRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="flex-shrink-0 flex flex-col gap-8 w-full md:w-[280px] lg:w-[320px]"
          >
            <motion.figure
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
              aria-label={`${feature.title} product image`}
            >
              <Image
                src={feature.hexagonImage}
                alt={`${feature.title} pharmaceutical product`}
                width={320}
                height={370}
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 260px, 320px"
                className="w-full h-auto object-contain drop-shadow-md"
                priority={false}
              />
            </motion.figure>
          </motion.div>
        </div>
      </div>
    </section>
  );
}