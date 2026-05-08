'use client'

import { motion } from 'framer-motion'
import Container from '@/components/shared/Container'
import { FEATURES_DATA } from '@/data'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Features() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {FEATURES_DATA.map((feature, idx) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="flex flex-col items-start"
            >
              {/* Chemical Structure Icon */}
              <div className="mb-5">
                <ChemicalIcon index={idx} />
              </div>

              {/* Title */}
              <h3
                className="font-montserrat font-700 text-primaryBlue mb-3 leading-tight"
                style={{ fontSize: '13px', letterSpacing: '1px', fontWeight: 700 }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-mutedText text-[13px] leading-[1.75]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

// SVG chemical structure icons matching the screenshot
function ChemicalIcon({ index }: { index: number }) {
  const icons = [
    // R&D: two connected hexagons + chain
    <svg key="rd" width="64" height="40" viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="14,2 26,2 32,12 26,22 14,22 8,12" stroke="#0B67B2" strokeWidth="1.5" fill="none"/>
      <polygon points="36,18 48,18 54,28 48,38 36,38 30,28" stroke="#0B67B2" strokeWidth="1.5" fill="none"/>
      <line x1="32" y1="12" x2="36" y2="18" stroke="#0B67B2" strokeWidth="1.5"/>
    </svg>,

    // Building Relationships: two hexagons side by side
    <svg key="br" width="68" height="36" viewBox="0 0 68 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="12,2 24,2 30,12 24,22 12,22 6,12" stroke="#0B67B2" strokeWidth="1.5" fill="none"/>
      <polygon points="36,2 48,2 54,12 48,22 36,22 30,12" stroke="#0B67B2" strokeWidth="1.5" fill="none"/>
      <line x1="54" y1="12" x2="62" y2="12" stroke="#0B67B2" strokeWidth="1.5"/>
      <circle cx="62" cy="12" r="1.5" fill="#0B67B2"/>
    </svg>,

    // SOPs: three connected hexagons
    <svg key="sop" width="76" height="36" viewBox="0 0 76 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="10,2 20,2 25,11 20,20 10,20 5,11" stroke="#0B67B2" strokeWidth="1.5" fill="none"/>
      <polygon points="30,2 40,2 45,11 40,20 30,20 25,11" stroke="#0B67B2" strokeWidth="1.5" fill="none"/>
      <polygon points="50,2 60,2 65,11 60,20 50,20 45,11" stroke="#0B67B2" strokeWidth="1.5" fill="none"/>
      <line x1="65" y1="11" x2="72" y2="11" stroke="#0B67B2" strokeWidth="1.5"/>
    </svg>,

    // Compliance: single tall hexagon + chain
    <svg key="comp" width="44" height="52" viewBox="0 0 44 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="22,2 38,11 38,29 22,38 6,29 6,11" stroke="#0B67B2" strokeWidth="1.5" fill="none"/>
      <line x1="22" y1="38" x2="22" y2="50" stroke="#0B67B2" strokeWidth="1.5"/>
      <circle cx="22" cy="50" r="1.5" fill="#0B67B2"/>
      <line x1="22" y1="2" x2="22" y2="0" stroke="#0B67B2" strokeWidth="1.5"/>
    </svg>,
  ]

  return <div className="text-primaryBlue">{icons[index]}</div>
}
