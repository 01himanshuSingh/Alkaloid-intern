'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/shared/Container'

const HEXAGON_CLIP_PATH =
  'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)'

const IMAGE_ANIMATION = {
  hidden: {
    opacity: 0,
    scale: 0.88,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
}

export default function Manufacturing() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#DCE8C5' }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text Content */}
        <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, ease: 'easeOut' }}
>
  <h2
    className="font-montserrat font-500 leading-tight mb-8"
    style={{
      fontSize: 'clamp(32px, 4vw, 48px)',
      letterSpacing: '-1px',
      color: '#88A933',
      fontWeight: 500,
    }}
  >
    MANUFACTURING
    <br />
    AND SOURCING
  </h2>

  <div className="pl-4 md:pl-6">
    <p className="text-gray-700 font-800 text-[15px] lg:text-[15px] 2xl:text-[17px] font-body leading-[1.85] mb-6">
      For over three decades, our manufacturing facility has been operating in full compliance
      with ICH cGMP guidelines and other regulatory standards. Engineered for precision, it has
      dedicated blocks for extraction, isolation, reaction, purification and finalisation, all
      within a clean pharma environment.
    </p>

    <p className="text-gray-700 font-body font-600 text-[15px] lg:text-[15px] 2xl:text-[17px] leading-[1.85] mb-8">
      Our supply chain starts at the source, with raw materials procured from our own farms and
      through trusted partnerships, ensuring consistency, reliability and uncompromised quality.
    </p>

    <a
      href="#"
      className="inline-flex items-center gap-1.5 font-bold font-600 text-[11px] tracking-[2px] uppercase text-[#88A933] hover:text-green-600 transition-colors  duration-200 border-b border-green-700 hover:border-green-500 pb-0.5"
    >
      LEARN MORE
    </a>
  </div>
</motion.div>

          {/* Right — Hexagon Images */}
         <motion.section
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
      className="relative flex flex-col items-center"
      aria-label="Manufacturing facility gallery"
    >
      <div className="relative mx-auto w-full max-w-sm">
        {/* Top Hexagon */}
        <HexagonCard
          imageSrc="/PNG/Screenshot 2026-05-09 165134.png"
          imageAlt="Alkaloids pharmaceutical manufacturing facility interior"
          widthClass="w-[220px]"
          heightClass="h-[248px]"
          positionClass="ml-auto mr-8"
          priority
        />

        {/* Bottom Hexagon */}
        <HexagonCard
          imageSrc="/PNG/Screenshot 2026-05-09 165134.png"
          imageAlt="Pharmaceutical manufacturing experts inspecting production line"
          widthClass="w-[200px]"
          heightClass="h-[226px]"
        positionClass="ml-4 mt-2 md:ml-6 md:-mt-[60px]"
        />
      </div>
    </motion.section>
        </div>
      </Container>
    </section>
  )
}



function HexBorder({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-full">
      {/* Green border layer */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
          backgroundColor: '#8AB04A',
          transform: 'scale(1.04)',
        }}
      />
      {/* Image layer */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
        }}
      >
        {children}
      </div>
    </div>
  )
}


interface HexagonCardProps {
  imageSrc: string
  imageAlt: string
  widthClass: string
  heightClass: string
  positionClass?: string
  priority?: boolean
}

function HexagonCard({
  imageSrc,
  imageAlt,
  widthClass,
  heightClass,
  positionClass,
  priority = false,
}: HexagonCardProps) {
  return (
    <motion.figure
      variants={IMAGE_ANIMATION}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className={`relative ${widthClass} ${heightClass} ${positionClass}`}
    >
      {/* Border Layer */}
      <div
        aria-hidden="true"
        className="absolute inset-0 scale-[1.04] bg-[#88A933]"
        style={{
          clipPath: HEXAGON_CLIP_PATH,
        }}
      />

      {/* Image Layer */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath: HEXAGON_CLIP_PATH,
        }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 220px, 300px"
          className="object-cover"
        />
      </div>
    </motion.figure>
  )
}