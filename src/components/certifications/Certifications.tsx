'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/shared/Container'

const CERTIFICATIONS = [
  {
    id: 'fda',
    name: 'FDA',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/US-FoodAndDrugAdministration-Logo.svg/200px-US-FoodAndDrugAdministration-Logo.svg.png',
    width: 80,
    height: 40,
  },
  {
    id: 'who',
    name: 'WHO GMP',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/World_Health_Organization_Logo.svg/200px-World_Health_Organization_Logo.svg.png',
    width: 60,
    height: 60,
  },
  {
    id: 'edqm',
    name: 'EDQM',
    imageSrc: 'https://www.edqm.eu/sites/default/files/edqm_logo_en.png',
    width: 100,
    height: 40,
  },
  {
    id: 'aifa',
    name: 'AIFA',
    imageSrc: 'https://picsum.photos/seed/aifa/120/50',
    width: 90,
    height: 40,
  },
  {
    id: 'mfds',
    name: 'Ministry of Food and Drug Safety',
    imageSrc: 'https://picsum.photos/seed/mfds/120/50',
    width: 110,
    height: 40,
  },
]

export default function Certifications() {
  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16"
        >
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              {/* Placeholder cert logos using styled divs */}
              <CertLogo name={cert.name} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

function CertLogo({ name }: { name: string }) {
  const colors: Record<string, { bg: string; text: string; border: string }> = {
    FDA: { bg: '#003087', text: 'white', border: '#003087' },
    'WHO GMP': { bg: '#f5f5f5', text: '#444', border: '#ccc' },
    EDQM: { bg: '#0052a5', text: 'white', border: '#0052a5' },
    AIFA: { bg: '#fff', text: '#c00', border: '#c00' },
    'Ministry of Food and Drug Safety': { bg: '#fff', text: '#0B67B2', border: '#0B67B2' },
  }

  const style = colors[name] || { bg: '#eee', text: '#333', border: '#ccc' }

  if (name === 'WHO GMP') {
    return (
      <div className="flex flex-col items-center justify-center w-16 h-16 rounded-full border-2 border-gray-300 bg-gray-50">
        <span className="text-[8px] font-bold text-gray-600 font-montserrat tracking-tight text-center leading-tight">WHO GMP</span>
      </div>
    )
  }

  if (name === 'Ministry of Food and Drug Safety') {
    return (
      <div className="flex flex-col items-center justify-center gap-1">
        <div className="w-8 h-8 rounded-full border-2 border-primaryBlue flex items-center justify-center">
          <span className="text-[6px] text-primaryBlue font-bold">🇰🇷</span>
        </div>
        <span className="text-[8px] text-gray-500 text-center leading-tight max-w-[70px]">Ministry of Food and Drug Safety</span>
      </div>
    )
  }

  if (name === 'AIFA') {
    return (
      <div className="flex items-center gap-1 border border-red-400 px-3 py-1.5 rounded">
        <span className="text-blue-800 font-bold text-xs">◎</span>
        <span className="font-bold text-red-600 text-sm font-montserrat tracking-wide">AIFA</span>
      </div>
    )
  }

  return (
    <div
      className="px-4 py-2 rounded font-montserrat font-bold text-sm tracking-wide"
      style={{ backgroundColor: style.bg, color: style.text, border: `2px solid ${style.border}` }}
    >
      {name}
    </div>
  )
}
