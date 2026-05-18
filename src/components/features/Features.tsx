'use client'

import { motion } from 'framer-motion'
import Container from '@/components/shared/Container'
import { FEATURES_DATA } from '@/data'
import type { Variants } from 'framer-motion'

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Features() {
  return (
   <section className="bg-white py-16 md:py-24">
  <Container>
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
     className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-10 lg:gap-x-12"
    >
      {FEATURES_DATA.map((feature) => (
        <motion.article
          key={feature.id}
          variants={itemVariants}
          className="flex flex-col items-center h-full "
        >
          {/* Image */}
          <div className="mb-8 lg:mb-12   flex h-[72px] items-center justify-center ">
            <img
              src={feature.imageSrc}
              alt={feature.title}
              className="h-auto max-h-[100px]  w-auto object-contain"
              loading="lazy"
            />
          </div>

          {/* Title */}
          <h3
           className="mb-4 text-[16px] font-semibold text-center lg:text-[18px] 2xl:text-[20px] leading-tight text-[#004C8C]"
            style={{
              letterSpacing: '1px',
              fontWeight:600
            }}
          >
            {feature.title}
          </h3>

          {/* Description */}
          <p
           className="font-body text-center text-[12px] lg:text-[14px] 2xl:text-[15px] leading-[1.85] text-mutedText"
          >
            {feature.description}
          </p>
        </motion.article>
      ))}
    </motion.div>
  </Container>
</section>
  )
}


