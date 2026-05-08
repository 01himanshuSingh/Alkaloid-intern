'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Container from '@/components/shared/Container'
import { EVENTS_DATA } from '@/data'
import type { EventItem } from '@/types'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Events() {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-montserrat font-700 text-primaryBlue text-sm tracking-[3px] uppercase mb-2">
            UPCOMING EVENTS & PARTICIPATION
          </p>
          <div className="w-12 h-0.5 bg-primaryBlue mx-auto mt-3" />
        </motion.div>

        {/* Event Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {EVENTS_DATA.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

function EventCard({ event }: { event: EventItem }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(11,103,178,0.12)' }}
      className="rounded-xl p-6 cursor-pointer transition-all duration-300"
      style={{ backgroundColor: '#DDEFF8' }}
    >
      {/* Date */}
      <div className="mb-5">
        <span
          className="font-montserrat font-700 leading-none block"
          style={{ fontSize: '42px', color: '#1F2937', fontWeight: 700 }}
        >
          {event.day}
        </span>
        <span className="font-inter text-mutedText text-sm">{event.month}</span>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-primaryBlue/20 mb-5" />

      {/* Event Info */}
      <h3 className="font-montserrat font-600 text-darkText text-[17px] mb-2">{event.title}</h3>
      <p className="font-inter text-mutedText text-[13px] mb-1">{event.time}</p>
      <p className="font-inter text-mutedText text-[13px] mb-6">{event.location}</p>

      {/* CTA */}
      <a
        href="#"
        className="inline-flex items-center gap-1.5 font-inter font-600 text-[11px] tracking-[2px] uppercase text-primaryBlue hover:gap-3 transition-all duration-200"
      >
        REGISTER NOW
        <ArrowRight size={12} />
      </a>
    </motion.div>
  )
}
