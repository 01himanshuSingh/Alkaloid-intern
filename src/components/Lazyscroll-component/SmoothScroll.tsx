"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * SmoothScroll
 *
 * Initialises Lenis smooth scrolling once, globally.
 * Drop this into app/layout.tsx — it renders nothing to the DOM.
 *
 * Why this is better than the naive version:
 * ─────────────────────────────────────────
 * 1. useRef stores the Lenis instance — no re-creation on re-renders.
 * 2. cancelAnimationFrame on cleanup — no rAF loop leak after HMR or unmount.
 * 3. document.documentElement gets `data-lenis-smooth` so you can target it in CSS.
 * 4. Respects prefers-reduced-motion — disables smooth scroll for accessibility.
 * 5. Guards against SSR — window check before initialising.
 */
export default function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // SSR guard — Lenis touches window/document, skip on server
    if (typeof window === "undefined") return;

    // Respect user's OS-level reduced-motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // Native scroll is already accessible — do nothing
      return;
    }

    // Initialise Lenis
    const lenis = new Lenis({
      duration: 1.2,          // how long a scroll gesture takes to settle (seconds)
      easing: (t:any) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo ease-out
      smoothWheel: true,      // smooth mouse wheel
      touchMultiplier: 1.5,   // slightly faster on touch devices
      infinite: false,        // standard finite page scroll
    });

    lenisRef.current = lenis;

    // Signal to CSS that smooth scroll is active (useful for anchor offset fixes)
    document.documentElement.setAttribute("data-lenis-smooth", "true");

    // rAF loop — the only correct way to drive Lenis
    const raf = (time: number) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };
    rafRef.current = requestAnimationFrame(raf);

    return () => {
      // Cancel the rAF loop before destroying — prevents double-tick after HMR
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lenis.destroy();
      lenisRef.current = null;
      document.documentElement.removeAttribute("data-lenis-smooth");
    };
  }, []); // empty — run once on mount, clean up on unmount

  return null; // renders nothing — purely behavioural
}