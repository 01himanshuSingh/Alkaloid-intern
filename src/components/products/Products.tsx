'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import Container from '@/components/shared/Container'
import { PRODUCTS_DATA } from '@/data'
import type { ProductItem } from '@/types'
import type { Variants } from 'framer-motion'

const premiumEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

interface AnimatedTextProps {
  text: string
  className?: string
}

function AnimatedText({
  text,
  className,
}: AnimatedTextProps) {
  const shouldReduceMotion = useReducedMotion()

  const words = text.split(' ')

 const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: shouldReduceMotion ? 0 : 0.15, // was 0.08
      delayChildren: 0.2,
    },
  },
}

const word: Variants = {
  hidden: {
    opacity: 0,
    x: shouldReduceMotion ? 0 : -30,
    filter: shouldReduceMotion ? 'blur(0px)' : 'blur(2px)',
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8, // was 0.45
      ease: [0.22, 1, 0.36, 1],
    },
  },
}
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {words.map((wordText, index) => (
        <motion.span
          key={index}
          variants={word}
          className="inline-block mr-2"
        >
          {wordText}
        </motion.span>
      ))}
    </motion.div>
  )
}



export default function Products() {
  const shouldReduceMotion = useReducedMotion()

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: premiumEase } 
    }
  }

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: premiumEase } 
    }
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delayChildren: 0.1, 
        staggerChildren: 0.15 
      } 
    },
  }

  return (
    <motion.section 
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-16 md:py-20" 
      style={{ backgroundColor: '#83afd1ff' }}
    >
      <Container>
        {/* Section Heading */}
        <motion.div
          variants={headingVariants}
          className="text-center mb-12"
        >
          <h2
            className="text-[18px] md:text-base lg:text-[28px] 2xl:text-[35px] font-medium text-white tracking-widest"
            style={{ letterSpacing: '1px' }}
          >
            OUR PRODUCTS
          </h2>
          <div className="w-10 h-0.5 bg-white/60 mx-auto mt-3" />
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {PRODUCTS_DATA.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </Container>
    </motion.section>
  )
}

function ProductCard({ product }: { product: ProductItem }) {
  const shouldReduceMotion = useReducedMotion()

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 40,
      scale: shouldReduceMotion ? 1 : 0.97,
      filter: shouldReduceMotion ? 'blur(0px)' : 'blur(8px)'
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: premiumEase } 
    },
    hover: shouldReduceMotion ? {} : {
      y: -8,
      scale: 1.02,
      boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
      transition: { duration: 0.25, ease: 'easeOut' }
    }
  }

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { delay: 0.15, duration: 0.45, ease: premiumEase } 
    }
  }

  return (
    <motion.article
      variants={cardVariants}
      whileHover="hover"
      className="group relative overflow-hidden rounded-2xl bg-white"
    >
      {/* Product Image */}
      <div className="relative aspect-[4/5] w-full mb-15 overflow-hidden">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          fill
          priority={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
        />
        {/* Overlay */}
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between p-5   ">
        <div className="pr-4">
         <AnimatedText
  text={product.title}
  className="text-[15px] lg:text-[18px] 2xl:text-[20px] font-medium leading-tight text-[#0B67B2]"
/>
        </div>

        {/* Arrow */}
        <div
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full backdrop-blur-sm transition-all duration-200 ease-out hover:cursor-pointer text-[#0B67B2] group-hover:bg-[#0B67B2] group-hover:text-white"
        >
          <ChevronRight
            size={15}
            className="transition-transform duration-200 ease-out group-hover:translate-x-1"
          />
        </div>
      </div>
    </motion.article>
  )
}
