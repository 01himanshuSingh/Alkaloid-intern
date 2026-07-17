'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

import { NAV_LINKS } from '@/data'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMobileOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/85 backdrop-blur-xl shadow-md border-b border-white/20'
          : 'bg-white/40 backdrop-blur-md'
      )}
    >
      {/* Custom Container */}
      <div className="w-full max-w-[1800px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-14 2xl:px-20">
        <nav className="flex items-center justify-between h-[74px] sm:h-[82px] lg:h-[86px] xl:h-[80px] 2xl:h-[125px]">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0"
          >
            <APLLogo />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-10 xl:gap-14 2xl:gap-16">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative font-['Geologica'] text-[16px] xl:text-[17px] 2xl:text-[20px] font-medium tracking-[0.2px] text-slate-900 transition-all duration-300 hover:text-primaryBlue group"
                >
                  {link.label}

                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primaryBlue transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg hover:bg-white/50 transition"
          >
            {isMobileOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'lg:hidden fixed top-0 right-0 h-screen w-full bg-white transition-all duration-300',
          isMobileOpen
            ? 'translate-x-0 opacity-100'
            : 'translate-x-full opacity-0 pointer-events-none'
        )}
      >
        <div className="w-full px-6 pt-28">
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block rounded-xl px-5 py-4 text-lg font-medium text-slate-800 hover:bg-slate-100 hover:text-primaryBlue transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

function APLLogo() {
  return (
    <div className="relative w-[290px]  md:w-[320px] lg:w-[450px] xl:w-[450px] 2xl:w-[620px] h-[90px]  md:h-[90px] lg:h-[110px] xl:h-[120px] 2xl:h-[130px]">
      <Image
        src="/PNG/Copy of Alkaloids Logo Files-04.png"
        alt="APL Logo"
        fill
        priority
        className="object-contain object-left scale-110 "
      />
    </div>
  )
}