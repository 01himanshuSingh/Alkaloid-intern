'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/shared/Container'

const CERTIFICATIONS = [
  {
    id: 'fda',
    name: 'FDA Approved',
    imageSrc: '/Homepage/Certifications- FDA.png',
    width: 90,
    height: 50,
  },
  {
    id: 'who',
    name: 'WHO GMP Certified',
    imageSrc: '/Homepage/Certifications- CDSCO.png',
    width: 90,
    height: 50,
  },
  {
    id: 'edqm',
    name: 'EDQM Certified',
    imageSrc: '/Homepage/Certifications- Edqm.png',
    width: 110,
    height: 50,
  },
  {
    id: 'aifa',
    name: 'AIFA Certified',
    imageSrc: '/Homepage/Certifications- Aifa.png',
    width: 90,
    height: 50,
  },
  {
    id: 'mfds',
    name: 'MFDS Korea',
    imageSrc: '/Homepage/Certifications-Ministry of public safety and security.png',
    width: 120,
    height: 50,
  },
]

export default function Certifications() {
  return (
    <section className="bg-white py-10 ">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-6 2xl:gap-4"
        >
          {CERTIFICATIONS.map((cert, idx) => (
         <motion.div
  key={cert.id}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: idx * 0.1 }}
 className="w-[150px] h-[90px] lg:w-[140px] lg:h-[80px] 2xl:w-[270px] 2xl:h-[140px] flex items-center justify-center opacity-100 lg:grayscale lg:opacity-70 lg:hover:grayscale-0 lg:hover:opacity-100 transition-all duration-300 mx-auto"
>
  <Image
    src={cert.imageSrc}
    alt={cert.name}
    width={120}
    height={60}
    className="object-contain max-w-full max-h-full"
  />
</motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}