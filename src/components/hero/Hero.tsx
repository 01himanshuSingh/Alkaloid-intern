'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'

export default function Hero() {
  // ─── State & Refs ─────────────────────────────────────────────────────────
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [showControls, setShowControls] = useState(true)

  // Ref-based timer — avoids window globals and is GC-safe
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // ─── Helpers ──────────────────────────────────────────────────────────────
  const resetHideTimer = useCallback(() => {
    if (hideTimer.current) clearTimeout(hideTimer.current)
    setShowControls(true)
    hideTimer.current = setTimeout(() => setShowControls(false), 3000)
  }, [])

  // ─── Effects ──────────────────────────────────────────────────────────────
  // Auto-hide controls 3 s after mount
  useEffect(() => {
    hideTimer.current = setTimeout(() => setShowControls(false), 3000)
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current)
    }
  }, [])

  // ─── Handlers ─────────────────────────────────────────────────────────────
  const togglePlay = useCallback(async () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      try {
        await video.play()
        setIsPlaying(true)
      } catch (err) {
        console.error('Video play failed:', err)
      }
    } else {
      video.pause()
      setIsPlaying(false)
    }

    resetHideTimer()
  }, [resetHideTimer])

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <section
      className="relative w-full min-h-screen flex items-center overflow-hidden cursor-pointer"
      onClick={togglePlay}
      onMouseMove={resetHideTimer}
      onTouchStart={resetHideTimer}
    >
      {/* ── Background video layer (z-0) ───────────────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/Homepage/cover image.png"
        >
          <source src="/Homepage/homepage.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlays — pointer-events-none so clicks pass through */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/20 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
      </div>

      {/* ── Floating play/pause button (z-30) ──────────────────────────── */}
      <motion.div
        initial={false}
        animate={{ opacity: showControls ? 1 : 0, scale: showControls ? 1 : 0.92 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="
          absolute z-30 pointer-events-none
          top-54 left-1/2 -translate-x-1/2
          md:top-1/2 md:left-auto md:right-8
          lg:right-12 xl:right-16 2xl:right-24
          md:-translate-y-1/2 md:translate-x-0
          flex items-center justify-center
        "
      >
        <button
          onClick={(e) => {
            // Prevent double-firing: the section onClick would also trigger
            e.stopPropagation()
            togglePlay()
          }}
          aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
          className="
            pointer-events-auto
            group relative flex items-center justify-center
            w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20
            lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32
            rounded-full
            bg-white/90 backdrop-blur-xl
            shadow-[0_15px_40px_rgba(0,0,0,0.35)]
            transition-all duration-300
            hover:scale-110 hover:bg-white active:scale-95
          "
        >
          {/* Outer ring */}
          <span className="absolute inset-0 rounded-full border border-white/40" />
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full animate-ping bg-white/10" />

          {isPlaying ? (
            <Pause size={34} strokeWidth={2} className="relative z-10 text-[#0B67B2]" />
          ) : (
            <Play size={34} fill="currentColor" strokeWidth={2} className="relative z-10 text-[#0B67B2] ml-1" />
          )}
        </button>
      </motion.div>

      {/* ── Hero content (z-20) — stopPropagation prevents text clicks from toggling video ── */}
      <div
        className="relative z-20 w-full max-w-7xl lg:max-w-7xl 2xl:max-w-[1690px] mx-auto px-6 lg:px-16 pt-20 cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="flex-1 max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="font-montserrat text-white/90 whitespace-nowrap font-bold leading-none mb-6 text-5xl lg:text-6xl xl:text-7xl 2xl:text-[110px]"
              style={{ letterSpacing: '-2px' }}
            >
              SINCE 1992
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="font-['Libre_Baskerville',serif] text-white/75 text-xs lg:text-sm 2xl:text-[20px] leading-relaxed mb-8 pl-2 md:pl-6 max-w-sm lg:max-w-lg 2xl:max-w-4xl"
            >
              Specialising in Phyto-based APIs and Standard and Botanical Extract as APIs with a
              focus on Priority and Niche molecules, and Semi-Synthetic.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="pl-4 md:pl-6"
            >
              <Link
                href="/about-us"
                className="inline-block font-inter font-600 text-xs tracking-widest uppercase text-white relative group transition-all duration-300"
              >
                READ MORE
                <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-white transition-all duration-300 group-hover:w-0" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
