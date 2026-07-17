'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Pause, Play, Volume2, VolumeX } from 'lucide-react'

// ─── Custom Hooks ──────────────────────────────────────────────────────────

function useHeroControls() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleVolumeChange = () => setIsMuted(video.muted)

    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    video.addEventListener('volumechange', handleVolumeChange)

    // Sync initial state
    setIsPlaying(!video.paused)
    setIsMuted(video.muted)

    return () => {
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      video.removeEventListener('volumechange', handleVolumeChange)
    }
  }, [])

  const togglePlay = useCallback(async () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      try {
        await video.play()
      } catch (err) {
        console.error('Video play failed:', err)
      }
    } else {
      video.pause()
    }
  }, [])

  const toggleMute = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
  }, [])

  return {
    videoRef,
    isPlaying,
    isMuted,
    togglePlay,
    toggleMute
  }
}

function useHeroOverlay(isPlaying: boolean) {
  const [isVisible, setIsVisible] = useState(true)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const prefersReducedMotion = useReducedMotion()

  const showOverlay = useCallback(() => {
    setIsVisible(true)

    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    // Only auto-hide if playing and reduced motion is not preferred
    if (isPlaying && !prefersReducedMotion) {
      timerRef.current = setTimeout(() => {
        setIsVisible(false)
      }, 4000)
    }
  }, [isPlaying, prefersReducedMotion])

  useEffect(() => {
    showOverlay()
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [showOverlay])

  return { isVisible, showOverlay, prefersReducedMotion }
}

// ─── Component ─────────────────────────────────────────────────────────────

export default function Hero() {
  const { videoRef, isPlaying, isMuted, togglePlay, toggleMute } = useHeroControls()
  const { isVisible, showOverlay, prefersReducedMotion } = useHeroOverlay(isPlaying)

  const handleInteraction = useCallback(() => {
    showOverlay()
  }, [showOverlay])

  const handleTogglePlay = useCallback(
    (e?: React.SyntheticEvent) => {
      if (e) e.stopPropagation()
      togglePlay()
      showOverlay()
    },
    [togglePlay, showOverlay]
  )

  const handleToggleMute = useCallback(
    (e: React.SyntheticEvent) => {
      e.stopPropagation()
      toggleMute()
      showOverlay()
    },
    [toggleMute, showOverlay]
  )

  const transition = {
    duration: prefersReducedMotion ? 0 : 0.7,
    ease: 'easeOut' as const,
  }
  const pointerEventsClass = isVisible ? 'pointer-events-auto' : 'pointer-events-none'

  return (
    <section
      className="relative w-full min-h-screen flex items-center overflow-hidden cursor-pointer"
      onClick={handleTogglePlay}
      onMouseMove={handleInteraction}
      onTouchStart={handleInteraction}
    >
      {/* ── Background video layer (z-0) ───────────────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/Homepage/cover image.png"
        >
          <source
            src="https://res.cloudinary.com/dafbio15x/video/upload/f_auto,q_auto/v1784272384/Alkaloids_Video_V1_2_ybutvc.mp4"
            type="video/mp4"
          />
        </video>

        {/* Gradient overlays — pointer-events-none so clicks pass through */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/20 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
      </div>

      {/* ── Floating play/pause button (z-30) ──────────────────────────── */}
      <motion.div
        initial={false}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.92 }}
        transition={transition}
        className="absolute z-30 pointer-events-none top-54 left-1/2 -translate-x-1/2 md:top-1/2 md:left-auto md:right-8 lg:right-12 xl:right-16 2xl:right-24 md:-translate-y-1/2 md:translate-x-0 flex items-center justify-center"
      >
        <button
          onClick={handleTogglePlay}
          aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
          className={`group relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 rounded-full bg-white/90 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out hover:scale-[1.08] hover:bg-white active:scale-[0.98] ${pointerEventsClass}`}
        >
          {/* Outer ring */}
          <span className="absolute inset-0 rounded-full border border-white/40" />
          {/* Pulse ring */}
          <span className={`absolute inset-0 rounded-full bg-white/10 ${isPlaying ? 'animate-ping' : ''}`} />

          {isPlaying ? (
            <Pause size={34} strokeWidth={2} className="relative z-10 text-[#0B67B2]" />
          ) : (
            <Play size={34} fill="currentColor" strokeWidth={2} className="relative z-10 text-[#0B67B2] ml-1" />
          )}
        </button>
      </motion.div>

      {/* ── Mute button (z-30) ─────────────────────────────────────────── */}
      <motion.div
        initial={false}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
        transition={transition}
        className="absolute z-30 pointer-events-none bottom-8 right-8 md:bottom-10 md:right-10 flex items-center justify-center"
      >
        <div className={`relative group flex items-center justify-center ${pointerEventsClass}`}>
          <button
            onClick={handleToggleMute}
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-black/35 backdrop-blur-xl border border-white/20 text-white transition-all duration-300 ease-out hover:bg-white/15 hover:scale-[1.08] active:scale-[0.98]"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          
          {/* Tooltip */}
          <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap text-[11px] font-medium text-white bg-black/60 px-2.5 py-1.5 rounded-md backdrop-blur-sm shadow-lg">
            {isMuted ? 'Tap for sound' : 'Sound On'}
          </div>
        </div>
      </motion.div>

      {/* ── Hero content (z-20) ────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={transition}
        className={`relative z-20 w-full max-w-7xl lg:max-w-7xl 2xl:max-w-[1690px] mx-auto px-6 lg:px-16 pt-20 cursor-default ${pointerEventsClass}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="flex-1 max-w-xl">
            <h1
              className="font-montserrat text-white/90 whitespace-nowrap font-bold leading-none mb-6 text-5xl lg:text-6xl xl:text-7xl 2xl:text-[110px]"
              style={{ letterSpacing: '-2px' }}
            >
              SINCE 1992
            </h1>

            <p className="font-['Libre_Baskerville',serif] text-white/75 text-xs lg:text-sm 2xl:text-[20px] leading-relaxed mb-8 pl-2 md:pl-6 max-w-sm lg:max-w-lg 2xl:max-w-4xl">
              Specialising in Phyto-based APIs and Standard and Botanical Extract as APIs with a
              focus on Priority and Niche molecules, and Semi-Synthetic.
            </p>

            <div className="pl-4 md:pl-6">
              <Link
                href="/about-us"
                className="inline-block font-inter font-600 text-xs tracking-widest uppercase text-white relative group transition-all duration-300"
              >
                READ MORE
                <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-white transition-all duration-300 group-hover:w-0" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
