// 'use client'

// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import { ArrowRight } from 'lucide-react'
// import Container from '@/components/shared/Container'

// export default function Manufacturing() {
//   return (
//     <section className="py-16 md:py-24" style={{ backgroundColor: '#DCE8C5' }}>
//       <Container>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           {/* Left — Text Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, ease: 'easeOut' }}
//           >
//             <h2
//               className="font-montserrat font-700 leading-tight mb-8"
//               style={{
//                 fontSize: 'clamp(32px, 4vw, 48px)',
//                 letterSpacing: '-1px',
//                 color: '#3A5C1E',
//                 fontWeight: 700,
//               }}
//             >
//               MANUFACTURING
//               <br />
//               AND SOURCING
//             </h2>

//             <p className="font-inter text-gray-700 text-[15px] leading-[1.85] mb-6">
//               For over three decades, our manufacturing facility has been operating in full compliance
//               with ICH cGMP guidelines and other regulatory standards. Engineered for precision, it has
//               dedicated blocks for extraction, isolation, reaction, purification and finalisation, all
//               within a clean pharma environment.
//             </p>

//             <p className="font-inter text-gray-700 text-[15px] leading-[1.85] mb-8">
//               Our supply chain starts at the source, with raw materials procured from our own farms and
//               through trusted partnerships, ensuring consistency, reliability and uncompromised quality.
//             </p>

//             <a
//               href="#"
//               className="inline-flex items-center gap-1.5 font-inter font-600 text-[11px] tracking-[2px] uppercase text-green-800 hover:text-green-600 transition-colors duration-200 border-b border-green-700 hover:border-green-500 pb-0.5"
//             >
//               LEARN MORE
//               <ArrowRight size={12} />
//             </a>
//           </motion.div>

//           {/* Right — Hexagon Images */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
//             className="relative flex flex-col items-center"
//           >
//             <HexagonImages />
//           </motion.div>
//         </div>
//       </Container>
//     </section>
//   )
// }

// function HexagonImages() {
//   return (
//     <div className="relative w-full max-w-sm mx-auto">
//       {/* Top hexagon — factory interior */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.85 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7, delay: 0.3 }}
//         className="relative ml-auto mr-8"
//         style={{ width: '220px', height: '248px' }}
//       >
//         <HexBorder>
//           <Image
//             src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&auto=format&fit=crop"
//             alt="Manufacturing facility interior with industrial equipment"
//             fill
//             className="object-cover"
//             sizes="220px"
//           />
//         </HexBorder>
//       </motion.div>

//       {/* Bottom hexagon — scientists / workers — overlapping */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.85 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7, delay: 0.5 }}
//         className="relative mt-[-60px] ml-6"
//         style={{ width: '200px', height: '226px' }}
//       >
//         <HexBorder>
//           <Image
//             src="https://images.unsplash.com/photo-1532094349884-543559c6f5a9?w=400&auto=format&fit=crop"
//             alt="Pharmaceutical scientists in manufacturing plant"
//             fill
//             className="object-cover"
//             sizes="200px"
//           />
//         </HexBorder>
//       </motion.div>
//     </div>
//   )
// }

// function HexBorder({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="relative w-full h-full">
//       {/* Green border layer */}
//       <div
//         className="absolute inset-0"
//         style={{
//           clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
//           backgroundColor: '#8AB04A',
//           transform: 'scale(1.04)',
//         }}
//       />
//       {/* Image layer */}
//       <div
//         className="absolute inset-0 overflow-hidden"
//         style={{
//           clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
//         }}
//       >
//         {children}
//       </div>
//     </div>
//   )
// }
