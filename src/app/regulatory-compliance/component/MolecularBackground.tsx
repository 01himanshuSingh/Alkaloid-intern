export default function MolecularBackground() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0B67B2" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0B67B2" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Connection lines */}
      {[
        { x1: 80,  y1: 60,  x2: 180, y2: 130 },
        { x1: 180, y1: 130, x2: 310, y2: 80  },
        { x1: 310, y1: 80,  x2: 420, y2: 180 },
        { x1: 420, y1: 180, x2: 560, y2: 110 },
        { x1: 560, y1: 110, x2: 680, y2: 200 },
        { x1: 680, y1: 200, x2: 780, y2: 90  },
        { x1: 180, y1: 130, x2: 240, y2: 240 },
        { x1: 240, y1: 240, x2: 360, y2: 290 },
        { x1: 420, y1: 180, x2: 380, y2: 290 },
        { x1: 560, y1: 110, x2: 620, y2: 240 },
        { x1: 620, y1: 240, x2: 720, y2: 300 },
        { x1: 50,  y1: 220, x2: 180, y2: 130 },
        { x1: 50,  y1: 220, x2: 240, y2: 240 },
        { x1: 730, y1: 150, x2: 680, y2: 200 },
        { x1: 730, y1: 150, x2: 780, y2: 90  },
      ].map((line, i) => (
        <line
          key={i}
          x1={`${(line.x1 / 860) * 100}%`}
          y1={`${(line.y1 / 360) * 100}%`}
          x2={`${(line.x2 / 860) * 100}%`}
          y2={`${(line.y2 / 360) * 100}%`}
          stroke="#0B67B2"
          strokeOpacity="0.14"
          strokeWidth="1.2"
        />
      ))}

      {/* Nodes */}
      {[
        { cx: 80,  cy: 60,  r: 5  },
        { cx: 180, cy: 130, r: 8  },
        { cx: 310, cy: 80,  r: 4  },
        { cx: 420, cy: 180, r: 7  },
        { cx: 560, cy: 110, r: 5  },
        { cx: 680, cy: 200, r: 9  },
        { cx: 780, cy: 90,  r: 4  },
        { cx: 240, cy: 240, r: 6  },
        { cx: 360, cy: 290, r: 4  },
        { cx: 380, cy: 290, r: 3  },
        { cx: 620, cy: 240, r: 5  },
        { cx: 720, cy: 300, r: 4  },
        { cx: 50,  cy: 220, r: 5  },
        { cx: 730, cy: 150, r: 6  },
      ].map((node, i) => (
        <circle
          key={i}
          cx={`${(node.cx / 860) * 100}%`}
          cy={`${(node.cy / 360) * 100}%`}
          r={node.r}
          fill="#0B67B2"
          fillOpacity="0.20"
        />
      ))}
    </svg>
  );
}