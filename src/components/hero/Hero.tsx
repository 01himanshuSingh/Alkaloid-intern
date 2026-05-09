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
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1600&auto=format&fit=crop&q=80"
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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6  lg:px-16 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="font-montserrat text-white whitespace-nowrap font-bold leading-none mb-6     text-5xl  lg:text-6xl xl:text-7xl 2xl:text-[110px]"
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
              className="font-inter text-white/85 text-xs lg:text-sm  2xl:text-base  leading-relaxed mb-8 pl-2 md:pl-6 max-w-sm"
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

          {/* Right — Play Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
            className="flex-shrink-0"
          >
            <button
              aria-label="Play company video"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 backdrop-blur-sm group"
            >
              <Play
                className="text-primaryBlue ml-1 group-hover:scale-110 transition-transform"
                size={30}
                fill="#0B67B2"
              />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
