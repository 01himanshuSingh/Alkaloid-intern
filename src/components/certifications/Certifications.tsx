'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/shared/Container'

const CERTIFICATIONS = [
  {
    id: 'fda',
    name: 'FDA Approved',
    imageSrc: '/PNG/fda.logo.png',
    width: 90,
    height: 50,
  },
  {
    id: 'who',
    name: 'WHO GMP Certified',
    imageSrc: '/PNG/gmplogo.jpg',
    width: 90,
    height: 50,
  },
  {
    id: 'edqm',
    name: 'EDQM Certified',
    imageSrc: '/PNG/edqmm2.png',
    width: 110,
    height: 50,
  },
  {
    id: 'aifa',
    name: 'AIFA Certified',
    imageSrc: '/PNG/Aifadummy.jpg',
    width: 90,
    height: 50,
  },
  {
    id: 'mfds',
    name: 'MFDS Korea',
    imageSrc: '/PNG/dummymfs.jpg',
    width: 120,
    height: 50,
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
 className="w-[140px] h-[80px] flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
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