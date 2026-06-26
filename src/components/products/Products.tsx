'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, ChevronRight, ChevronRightCircleIcon } from 'lucide-react'
import Container from '@/components/shared/Container'
import { PRODUCTS_DATA } from '@/data'
import type { ProductItem } from '@/types'
import type { Variants } from 'framer-motion'

const containerVariants : Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants : Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

export default function Products() {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: '#83afd1ff' }}>
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
            className="text-[18px] md:text-base lg:text-[28px] 2xl:text-[35px] font-semibold  text-white tracking-widest"
            style={{  letterSpacing: '1px' }}
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
      whileHover={{
        y: -6,
        boxShadow: '0 20px 50px rgba(0,0,0,0.18)',
      }}
      className="group relative overflow-hidden rounded-2xl bg-white transition-all duration-300"
    >
      {/* Product Image */}
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          fill
          priority={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between p-5">
        <div className="pr-4">
       <motion.h3
  initial={{ y: 25, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="text-[15px] lg:text-[18px] 2xl:text-[20px] font-bold leading-tight text-[#0B67B2]"
  style={{ letterSpacing: "0.5px" }}
>
  {product.title}
</motion.h3>
        </div>

        {/* Arrow */}
        <div
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full hover:cursor-pointer hover:bg-[#0B67B2] text-[#0B67B2] hover:text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-primaryBlue"
        >
          <ChevronRight
            size={15}
            className=""
          />
        </div>
      </div>
    </motion.article>
  )
}
