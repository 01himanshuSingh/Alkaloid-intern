"use client";

import { motion } from "framer-motion";
import { VIEWPORT_ONCE, fadeUpVariants } from "../constant/animations";

interface InfoItem {
  label: string;
  value: string;
}

interface ProductInfoPanelProps {
  items: InfoItem[];
  className?: string;
}

export default function ProductInfoPanel({ items, className }: ProductInfoPanelProps) {
  return (
    <motion.dl
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      className={className}
    >
      {items.map(({ label, value }) => (
        <div key={label} className="mb-4">
          <dt className="font-['Geologica'] text-[10px] uppercase tracking-widest text-[#6B7280] font-bold mb-0.5">
            {label}
          </dt>
          <dd className="font-['Libre_Baskerville'] text-sm text-[#374151]">
            {value}
          </dd>
        </div>
      ))}
    </motion.dl>
  );
}
