'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const CERTIFICATIONS = [
  {
    id: 'fda',
    name: 'FDA Approved',
    imageSrc: '/Homepage/Certifications- FDA.png',
  },
  {
    id: 'who',
    name: 'WHO GMP Certified',
    imageSrc: '/Homepage/Certifications- CDSCO.png',
  },
  {
    id: 'edqm',
    name: 'EDQM Certified',
    imageSrc: '/Homepage/Certifications- Edqm.png',
  },
  {
    id: 'aifa',
    name: 'AIFA Certified',
    imageSrc: '/Homepage/Certifications- Aifa.png',
  },
  {
    id: 'mfds',
    name: 'MFDS Korea',
    imageSrc: '/Homepage/Certifications-Ministry of public safety and security.png',
  },
]

export default function Certifications() {
  return (
    <section className="bg-white py-12 lg:py-8 ">
 
      {/* Custom Container */}
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-8 md:px-10 xl:px-14 lg:pt-5">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}

          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-6 md:gap-x-8 lg:gap-x-10 xl:gap-x-12"
        >
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: idx * 0.08,
              }}

              className=" flex items-center justify-center w-[150px] h-[70px] sm:w-[170px] sm:h-[80px] md:w-[190px] md:h-[90px] lg:w-[180px] lg:h-[90px] xl:w-[180px] xl:h-[100px] 2xl:w-[270px] 2xl:h-[140px] transition-transform duration-300 hover:scale-105">
              <Image
                src={cert.imageSrc}
                alt={cert.name}
                width={220}
                height={110}
                className="object-contain w-full h-full"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}