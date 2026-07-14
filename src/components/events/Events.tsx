'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Variants } from 'framer-motion'
import Container from '@/components/shared/Container'
import { EVENTS_DATA } from '@/data'
import type { EventItem } from '@/types'

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}
export default function Events() {   
  return (
    <section
      aria-labelledby="events-heading"
      className="bg-white py-10 md:py-20 lg:py-21"
    >
      <Container>
        {/* Section Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
        <p className=" text-[20px] md:text-[20px] lg:text-[29px] 2xl:text-[37px] font-semibold tracking-[2px] uppercase  text-[#0B67B2]">
  UPCOMING EVENTS & PARTICIPATION
</p>
          <h2
            id="events-heading"
            className="sr-only"
          >
            Upcoming Events and Participation
          </h2>

          <div className="w-12 h-0.5 bg-primaryBlue mx-auto mt-1 lg:mt-3" />
        </motion.header>

        {/* Events Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {EVENTS_DATA.map((event) => (
            <EventCard
              key={event.id}
              event={event}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

interface EventCardProps {
  event: EventItem
}

function EventCard({ event }: EventCardProps) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{
        y: -4,
        boxShadow: '0 12px 40px rgba(11,103,178,0.12)',
      }}
      className="rounded-xl p-6 lg:p-10 2xl:p-12 transition-all duration-300"
      style={{ backgroundColor: '#D1E5E4' }}
    >
      {/* Event Date */}
      <header className="mb-5">
        <time
        
          className="block"
        >
          <span
            className="block text-[#0B67B2] font-500 leading-none text-[20px] lg:text-[35px] 2xl:text-[42px]"
            style={{
              
              fontWeight: 500,
            }}
          >
            {event.day}
          </span>

          <span className=" text-[16] lg:text-[15px] 2xl:text-[20px] text-[#0B67B2] font-bold">
            {event.month}
          </span>
        </time>
      </header>

      {/* Divider */}
      <div className="mb-3 lg:mb-5 h-px w-full bg-primaryBlue/20" />

      {/* Event Content */}
      <div>
        <h3 className="mb-2 font-montserrat text-[15px] lg:text-[20px] 2xl:text-[24px] font-700 text-[#0B67B2]">
          {event.title}
        </h3>

        <p className="mb-1 font-['Libre_Baskerville',serif] text-[12px]  text-mutedText">
          {event.time}
        </p>

        <address className="mb-6 not-italic font-['Libre_Baskerville',serif] text-[12px] text-mutedText">
          {event.location}
        </address>
      </div>

      {/* CTA */}
     <Link
  href={event.href || '#'}
  aria-label={`Register for ${event.title}`}
  className="group relative inline-block  text-[12px] lg:text-[14px] 2xl:text-[15px] font-semibold uppercase tracking-[1px] text-[#0B67B2]"
>
  REGISTER NOW

  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[#0B67B2] transition-all duration-300 group-hover:w-full" />
</Link>
    </motion.article>
  )
}