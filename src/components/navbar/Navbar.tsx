'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/data'
import Container from '@/components/shared/Container'
import Image from 'next/image'

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

  // Prevent body scroll when mobile menu opens
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMobileOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 sm:h-[72px] lg:h-20 2xl:h-[110px]">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0 z-50"
          >
            <APLLogo />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8 xl:gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative font-['Geologica'] font-500 text-[15px] xl:text-[17px] 2xl:text-[24px]   text-gray-800 hover:text-primaryBlue transition-colors duration-300 group"
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
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md text-gray-700 hover:bg-gray-100 transition z-50"
            aria-label="Toggle navigation menu"
          >
            {isMobileOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-white transition-all duration-300 ease-in-out ${
          isMobileOpen
            ? 'translate-x-0 opacity-100'
            : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <Container className="pt-24 pb-8">
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block w-full font-['Geologica'] rounded-lg px-4 py-4 text-[16px] font-medium text-gray-700 hover:bg-gray-100 hover:text-primaryBlue transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </header>
  )
}

function APLLogo() {
  return (
    <div className="relative w-[200px]  md:w-[220px] lg:w-[340px]  2xl:w-[400px]  h-[100px]  md:h-[105px] lg:h-[140px] 2xl:h-[200px]">
      <Image
        src="/PNG/Copy of Alkaloids Logo Files-04.png"
        alt="APL Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  )
}