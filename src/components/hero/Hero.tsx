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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="font-montserrat text-white font-bold leading-none mb-6"
              style={{
                fontSize: 'clamp(48px, 7vw, 80px)',
                letterSpacing: '-2px',
              }}
            >
              SINCE 1992
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="font-inter text-white/85 text-sm leading-relaxed mb-8 max-w-sm"
            >
              Specialising in Phyto-based APIs and Standard and Botanical
              Extract as APIs with a focus on Priority and Niche molecules,
              and Semi-Synthetic Alkaloids.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            >
              <a
                href="#about"
                className="inline-block font-inter font-600 text-xs tracking-widest uppercase px-7 py-3 bg-white text-primaryBlue rounded hover:bg-primaryBlue hover:text-white transition-all duration-300 shadow-lg"
              >
                READ MORE
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
