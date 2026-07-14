'use client'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { useRef, useEffect, useState } from "react";
import Image from 'next/image'
import Container from '@/components/shared/Container'

const HEXAGON_CLIP_PATH =
  'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)'

const IMAGE_ANIMATION = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1 },
}

export default function Manufacturing() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 40%", "end 10%"],
  });

  const topY = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    [-60, 0, 0, 40]   // desktop only — not used on mobile
  );

  const bottomY = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    [60, 0, 0, -30]   // desktop only — not used on mobile
  );

  const topScale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    [0.94, 1, 1, 0.96]
  );

  const bottomScale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    [0.94, 1, 1, 0.96]
  );

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#DCE8C5' }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2
              className="font-['Geologica'] font-medium leading-tight mb-8"
              style={{
                fontSize: 'clamp(25px, 4vw, 48px)',
                letterSpacing: '-1px',
                color: '#88A933',
              }}
            >
              MANUFACTURING
              <br />
              AND SOURCING
            </h2>

            <div>
              <p className="text-gray-700 font-800 text-[12px] lg:text-[15px] 2xl:text-[17px] font-body leading-[1.85] mb-6">
                For over three decades, our manufacturing facility has been operating in full compliance
                with ICH cGMP guidelines and other regulatory standards. Engineered for precision, it has
                dedicated blocks for extraction, isolation, reaction, purification and finalisation, all
                within a clean pharma environment.
              </p>

              <p className="text-gray-700 font-body font-600 text-[12px] lg:text-[15px] 2xl:text-[17px] leading-[1.85] mb-8">
                Our supply chain starts at the source, with raw materials procured from our own farms and
                through trusted partnerships, ensuring consistency, reliability and uncompromised quality.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-1.5 font-bold font-600 text-[11px] tracking-[2px] uppercase text-[#88A933] hover:text-green-600 transition-colors duration-200 border-b border-green-700 hover:border-green-500 pb-0.5"
              >
                LEARN MORE
              </a>
            </div>
          </motion.div>

          {/* Right — Hexagon Images */}
          <motion.section
            ref={sectionRef}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="relative flex flex-col items-center"
            aria-label="Manufacturing facility gallery"
          >
            <div
  className="relative mx-auto w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[460px] 2xl:max-w-[560px]"
>
              {/* Top Hexagon */}
             <HexagonCard
  imageSrc="/Homepage/manufacturing and sourcing 1.png"
  imageAlt="Alkaloids pharmaceutical manufacturing facility interior"
  widthClass="w-[220px] sm:w-[260px] md:w-[300px] lg:w-[300px] 2xl:w-[350px]"
  heightClass="h-[240px] sm:h-[280px] md:h-[330px] lg:h-[330px] 2xl:h-[400px]"
  positionClass="ml-auto mr-0 sm:mr-2 md:mr-4 lg:mr-8 2xl:mr-12"
  y={isMobile ? undefined : topY}
  scale={isMobile ? undefined : topScale}
  priority
/>

<HexagonCard
  imageSrc="/Homepage/manufacturing and sourcing 2.png"
  imageAlt="Pharmaceutical manufacturing experts inspecting production line"
  widthClass="w-[220px] sm:w-[260px] md:w-[300px] lg:w-[300px] 2xl:w-[350px]"
  heightClass="h-[240px] sm:h-[280px] md:h-[330px] lg:h-[330px] 2xl:h-[400px]"
  positionClass="ml-2 sm:ml-4 md:ml-6 mt-4 sm:mt-5 md:mt-6 lg:ml-8 lg:-mt-[75px] 2xl:ml-10 2xl:-mt-[95px]"
  y={isMobile ? undefined : bottomY}
  scale={isMobile ? undefined : bottomScale}
/>            </div>
          </motion.section>
        </div>
      </Container>
    </section>
  )
}

interface HexagonCardProps {
  imageSrc: string;
  imageAlt: string;
  widthClass: string;
  heightClass: string;
  positionClass?: string;
  priority?: boolean;
  y?: MotionValue<number>;
  scale?: MotionValue<number>;
}

function HexagonCard({
  imageSrc,
  imageAlt,
  widthClass,
  heightClass,
  positionClass,
  priority = false,
  y,
  scale,
}: HexagonCardProps) {
  return (
    <motion.figure
      // FIX: only apply style when motion values are actually provided (desktop)
      // On mobile, style is undefined so no transform shifts the layout
      style={y || scale ? { y, scale } : undefined}
      variants={IMAGE_ANIMATION}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className={`relative overflow-hidden  ${widthClass} ${heightClass} ${positionClass}`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 320px"
        className="object-contain brightness-[1.08] contrast-[1.02] transition-transform duration-700 hover:scale-105"
        style={{ objectFit: 'contain' }}
      />
    </motion.figure>
  )
}