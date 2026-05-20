"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/shared/Container";

// ─── Types ────────────────────────────────────────────────────────────────────

interface CSRInitiative {
  text: string;
}

interface CSRCategory {
  index: string;
  label: string;
  heading: string[];       // lines of the heading; last line renders in italic serif
  description: string;
  initiatives: CSRInitiative[];

}

// ─── Data ─────────────────────────────────────────────────────────────────────

const CSR_DATA: CSRCategory[] = [
  {
    index: "01",
    label: "Education",
    heading: ["Educational", "Infrastructure"],
    description:
      "Actively supporting development of educational infrastructure, APL has invested in building foundational learning institutions across India.",
    initiatives: [
      {
        text: "Provided financial aid to the Ramakrishna Mission at Narendrapur for constructing a primary school building",
      },
      {
        text: "Been a key contributor to the construction of a school building in the suburbs of Kolkata, administered by Lions International",
      },
    ],
  },
  {
    index: "02",
    label: "Healthcare",
    heading: ["Healthcare", "Aid"],
    description:
      "APL has been backing various healthcare organisations across India, enabling access to life-saving medical care and critical diagnostic resources.",
    initiatives: [
      {
        text: "Supporting the Extra Mile Foundation, providing affordable healthcare to newborns and helping prevent loss of life and suffering",
      },
      {
        text: "Funding vital testing instruments at a blood bank in Kolkata",
      },
      {
        text: "Contributing a fully equipped examination room to an eye hospital in Hyderabad",
      },
    ],
  },
  {
    index: "03",
    label: "Healthcare",
    heading: ["Healthcare", "Infrastructure"],
    description:
      "APL has contributed to strengthening healthcare infrastructure through development of key facilities, expanding access to quality inpatient care.",
    initiatives: [
      {
        text: "An 8-bed gynaecology ward, a 32-bed surgical ward, and a 48-bed general ward at a leading hospital in central Kolkata",
      },
      {
        text: "47 bathrooms at a community care centre for individuals with disabilities",
      },
    ],
  },
  {
    index: "04",
    label: "Animal Welfare",
    heading: ["Animal", "Welfare"],
    description:
      "The Group's CSR initiatives are not confined to human welfare. APL has extended its commitment to compassion beyond people — recognising all life as worthy of care and dignity.",
    initiatives: [
      {
        text: "Creating shelters in Rajasthan for abandoned, infertile, disabled, and aging cows — providing safe refuge and sustained care for vulnerable animals",
      },
    ],
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function CSRItem({ item, itemIndex }: { item: CSRCategory; itemIndex: number }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      aria-labelledby={`csr-heading-${item.index}`}
      custom={0}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUpVariants}
      className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8 md:gap-12 py-12 md:py-14 border-b border-stone-200/70 last:border-b-0"
    >
      {/* Left Column: Label + Heading */}
      <div>
      

      <h2
  id={`csr-heading-${item.index}`}
  className="font-['Geologica'] text-[24px] md:text-2xl lg:text-[35px] 2xl:text-[42px] font-semibold leading-[1.1] tracking-tight text-[#0B67B2] 2xl:flex 2xl:gap-3"
>
  {item.heading.map((line, i) =>
    i === item.heading.length - 1 ? (
      <span
        key={i}
        className="block 2xl:inline text-[#0B67B2]"
      >
        {line}
      </span>
    ) : (
      <span
        key={i}
        className="block 2xl:inline"
      >
        {line}
      </span>
    )
  )}
</h2>
      </div>

      {/* Right Column: Description + Initiatives */}
      <div>
        <p className="text-sm lg:text-[20px] 2xl:text-[24px] font-['Geologica'] leading-[1.5] text-[#0B67B2] mb-6">
          {item.description}
        </p>

        <ul
          className="space-y-0 divide-y divide-stone-100"
          aria-label={`${item.heading.join(" ")} initiatives`}
        >
          {item.initiatives.map((initiative, i) => (
            <li
              key={i}
              className="flex items-start gap-3 font-['Libre_Baskerville'] text-[12px] md:text-base lg:text-[14px] 2xl:text-[18px] leading-[1.8] text-stone-800 font-light py-3"
            >
              <span
                className="w-1 h-1 rounded-full   bg-stone-300 flex-shrink-0 mt-[0.6rem]"
                aria-hidden="true"
              />
              <span>{initiative.text} </span>
            </li>
          ))} 
        </ul>
      </div>
    </motion.article>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function CSRSection2() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section
      aria-label="CSR Initiatives — Alkaloids Private Limited"
      className="bg-white min-h-screen font-sans"
    >
<Container>

      {/* ── Header ─────────────────────────────────────────────────── */}
      {/* <div
        ref={headerRef}
        className="px-6 md:px-10 pt-14 pb-8 border-b border-stone-200/60 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
      >
        <motion.div
          custom={0}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={fadeUpVariants}
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-3">
            Alkaloids Private Limited
          </p>
          <h1 className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] font-normal leading-[1.05] tracking-tight text-stone-900">
            CSR
            <br />
            <em className="italic text-stone-500">Initiatives</em>
          </h1>
        </motion.div>

        <motion.div
          custom={0.15}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={fadeUpVariants}
          className="text-[11px] text-stone-400 tracking-wide leading-relaxed md:text-right"
        >
          Corporate Social
          <br />
          Responsibility Report
          <br />
          <span className="font-serif text-[13px] text-stone-300">FY 2025–26</span>
        </motion.div>
      </div> */}

      {/* ── CSR Items ─────────────────────────────────────────────── */}
      <main className="px-6 md:px-10 pb-12">
        {CSR_DATA.map((item, index) => (
          <CSRItem key={item.index} item={item} itemIndex={index} />
        ))}
      </main>

      {/* ── Footer ────────────────────────────────────────────────── */}
     
</Container>
    </section>
  );
}