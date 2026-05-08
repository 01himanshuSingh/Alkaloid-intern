'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Container from '@/components/shared/Container'
import { PRODUCTS_DATA } from '@/data'
import type { ProductItem } from '@/types'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

export default function Products() {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: '#4A90C4' }}>
      <Container>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="font-montserrat font-700 text-white tracking-widest"
            style={{ fontSize: '14px', letterSpacing: '4px' }}
          >
            OUR PRODUCTS
          </h2>
          <div className="w-10 h-0.5 bg-white/60 mx-auto mt-3" />
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {PRODUCTS_DATA.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

function ProductCard({ product }: { product: ProductItem }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(0,0,0,0.18)' }}
      className="group relative rounded-xl overflow-hidden bg-white cursor-pointer transition-all duration-300"
      style={{ minHeight: '280px' }}
    >
      {/* Product Image */}
      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Subtle gradient at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Card Footer */}
      <div className="flex items-end justify-between p-4">
        <div>
          <h3
            className="font-montserrat font-700 text-darkText leading-tight"
            style={{ fontSize: '13px', letterSpacing: '0.5px', fontWeight: 700 }}
          >
            {product.title}
          </h3>
          {product.subtitle && (
            <span
              className="font-montserrat font-700 text-darkText"
              style={{ fontSize: '13px', letterSpacing: '0.5px', fontWeight: 700 }}
            >
              {product.subtitle}
            </span>
          )}
        </div>

        {/* Arrow button */}
        <div className="w-8 h-8 rounded-full bg-primaryBlue flex items-center justify-center flex-shrink-0 group-hover:bg-blue-700 transition-colors">
          <ArrowRight size={14} className="text-white" />
        </div>
      </div>
    </motion.article>
  )
}
