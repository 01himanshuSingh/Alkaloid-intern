'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Background Image with zoom animation */}
      <div className="absolute inset-0 z-0">
        <div className="hero-bg-animate w-full h-full">
          <Image
            src="/Homepage/cover image.png"
            alt="Alkaloids pharmaceutical manufacturing facility"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl lg:max-w-7xl 2xl:max-w-[1690px] mx-auto px-6  lg:px-16 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="font-montserrat text-white/90 whitespace-nowrap font-bold leading-none mb-6     text-5xl  lg:text-6xl xl:text-7xl 2xl:text-[110px]"
              style={{
               
                letterSpacing: '-2px',
              }}
            >
              SINCE 1992
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="font-['Libre_Baskerville',serif] text-white/75 text-xs lg:text-sm  2xl:text-[20px]  leading-relaxed mb-8 pl-2 md:pl-6 max-w-sm lg:max-w-lg 2xl:max-w-4xl"
            >
              Specialising in Phyto-based APIs and Standard and Botanical
              Extract as APIs with a focus on Priority and Niche molecules,
              and Semi-Synthetic Alkaloids.
            </motion.p>

         <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }} 
  className="pl-4 md:pl-6"
>
  <a
    href="#about"
    className="inline-block font-inter font-600 text-xs tracking-widest uppercase text-white relative group transition-all  duration-300"
  >
    READ MORE

    <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-white transition-all duration-300 group-hover:w-0" />
  </a>
</motion.div>
          </div>

    
        </div>
      </div>
    </section>
  )
}
