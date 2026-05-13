import Link from 'next/link'
import Container from '@/components/shared/Container'
import { QUICK_LINKS } from '@/data'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#005A9C' }} className="py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 lg:gap-10">
          {/* Logo Column */}
          <div className="flex flex-col">
            <APLLogoWhite />
          </div>

          {/* Our Office */}
          <div>
            <h4 className="font-montserrat font-700 text-white text-sm md:text-[0.9rem] lg:text-[24px] 2xl:text-[28px] tracking-[2px] uppercase mb-4">
              OUR OFFICE
            </h4>
            <address className="not-italic font-[Libre_Baskerville] text-white/70 text-[12px] md:text-[0.9rem] lg:text-[13px] 2xl:text-[15px] leading-[1.9]">
              Alkaloids Private Limited, 706,<br />
              Gowra Fountainhead, HUDA<br />
              Techno Enclave, Madhapur,<br />
              500 081 Hyderabad,<br />
              Telangana, India
            </address>
          </div>

          {/* Our Factory */}
          <div>
            <h4 className="font-montserrat font-700 text-white text-[15px] md:text-[0.9rem] lg:text-[24px] 2xl:text-[28px] tracking-[2px] uppercase mb-4">
              OUR FACTORY
            </h4>
            <address className="not-italic font-[Libre_Baskerville] text-white/70 text-[12px] md:text-[0.9rem] lg:text-[13px] 2xl:text-[15px] leading-[1.9]">
              Survey No 25/3, Shop No 5,<br />
              Medical, 99, Gundla<br />
              Pochampalli Village Road,<br />
              Gundlapochampally, 500 100<br />
              Hyderabad, Telangana, India
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-700 text-[#88A933] text-[14px] md:text-[0.9rem] lg:text-[24px] 2xl:text-[28px] tracking-[2px] uppercase mb-4">
              QUICK LINKS
            </h4>
            <nav>
              <ul className="flex flex-col gap-2">
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-[Libre_Baskerville] text-[#88A933] text-[13px] md:text-[0.9rem] lg:text-[13px] 2xl:text-[15px] hover:text-white transition-colors duration-200"
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
          <p className="font-inter text-white/50 text-[12px] lg:text-[13px] 2xl:text-[15px] text-center">
            © {new Date().getFullYear()} Alkaloids Private Limited. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}

function APLLogoWhite() {
  return (
    <div className="relative w-[120px] sm:w-[220px] md:w-[260px] lg:w-[300px] xl:w-[340px] 2xl:w-[400px] h-[70px] sm:h-[75px] md:h-[85px] lg:h-[100px] xl:h-[115px]">
      <Image
        src="/PNG/Copy of Icon 2 Black.png"
        alt="Alkaloids Private Limited Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  )
}