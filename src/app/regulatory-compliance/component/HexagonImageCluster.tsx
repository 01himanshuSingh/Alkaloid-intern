"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { defaultViewport } from "@/constant/animations";

interface HexImage {
  src: string;
  alt: string;
}

interface HexagonImageClusterProps {
  images: HexImage[];
}

const hexClipPath =
  "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)";

const clusterItems = [
  {
    top: "0%",
    left: "38%",
    size: 200,
    delay: 0,
    zIndex: 10,
  },
  {
    top: "30%",
    left: "0%",
    size: 200,
    delay: 0.12,
    zIndex: 20,
  },
  {
    top: "22%",
    left: "42%",
    size: 170,
    delay: 0.24,
    zIndex: 30,
  },
];

export default function HexagonImageCluster({ images }: HexagonImageClusterProps) {
  return (
    <div className="relative w-full h-[340px] md:h-[400px] select-none" aria-hidden="false">
      {clusterItems.map((item, idx) => {
        const img = images[idx % images.length];
        return (
          <motion.div
            key={idx}
            className="absolute group"
            style={{
              top: item.top,
              left: item.left,
              width: item.size,
              height: item.size,
              zIndex: item.zIndex,
            }}
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={defaultViewport}
            transition={{
              duration: 0.65,
              delay: item.delay,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Outer green border hexagon */}
            <div
              className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]"
              style={{
                clipPath: hexClipPath,
                background: "linear-gradient(135deg, #88A933 0%, #a8c94a 100%)",
                padding: "3px",
              }}
            >
              {/* Inner image hexagon */}
              <div
                className="w-full h-full overflow-hidden"
                style={{ clipPath: hexClipPath }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="220px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}