import Link from 'next/link'
import Container from '@/components/shared/Container'
import { QUICK_LINKS } from '@/data'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#005A9C' }} className="py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo Column */}
          <div className="flex flex-col">
            <APLLogoWhite />
          </div>

          {/* Our Office */}
          <div>
            <h4 className="font-montserrat font-700 text-white text-[12px] tracking-[2px] uppercase mb-4">
              OUR OFFICE
            </h4>
            <address className="not-italic font-inter text-white/70 text-[12px] leading-[1.9]">
              Alkaloids Private Limited, 706,<br />
              Geeva Fountainhead, H.UDA<br />
              Techno Enclave, Madhapur,<br />
              500 081 Hyderabad,<br />
              Telangana, India
            </address>
          </div>

          {/* Our Factory */}
          <div>
            <h4 className="font-montserrat font-700 text-white text-[12px] tracking-[2px] uppercase mb-4">
              OUR FACTORY
            </h4>
            <address className="not-italic font-inter text-white/70 text-[12px] leading-[1.9]">
              Survey No 25/3, Shop No 3,<br />
              Medical, 99, Gandhi<br />
              Pochampudi Village Road,<br />
              Gandallaposchampally, 500110<br />
              Hyderabad, Telangana, India
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-700 text-white text-[12px] tracking-[2px] uppercase mb-4">
              QUICK LINKS
            </h4>
            <nav>
              <ul className="flex flex-col gap-2">
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-inter text-white/70 text-[12px] hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/15">
          <p className="font-inter text-white/50 text-[11px] text-center">
            © {new Date().getFullYear()} Alkaloids Private Limited. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}

function APLLogoWhite() {
  return (
    <div className="flex flex-col items-start">
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-3"
        style={{ backgroundColor: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.3)' }}
      >
        <span className="font-montserrat font-800 text-white text-[17px] tracking-tight">apl</span>
      </div>
      <span className="font-montserrat font-600 text-white text-[13px]">Alkaloids</span>
      <span className="font-inter text-white/60 text-[11px]">Private Limited</span>
    </div>
  )
}
