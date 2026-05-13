import { ArrowRightIcon } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface HexagonButtonProps {
  /** Icon size in px. Default: 18 */
  iconSize?: number;
  /** Outer SVG size in px. Default: 44 */
  size?: number;
  /** Brand blue. Default: "#0B67B2" */
  color?: string;
  /** Fill the hexagon with color instead of white */
  filled?: boolean;
  /** Accessible label */
  ariaLabel?: string;
  onClick?: () => void;
  className?: string;
}

// ─── Maths ───────────────────────────────────────────────────────────────────
//
// A flat-top regular hexagon centred at (cx, cy) with inradius r:
//   points at angles 90°, 30°, -30°, -90°, -150°, 150°
//
// For a pointy-top hexagon (what your design uses — vertex at top and bottom):
//   points at angles 90°, 30°, -30°, -90°, -150°, 150° rotated by 0°
//   i.e. top vertex at (cx, cy-r), then clockwise.
//
// Given viewBox size S and 2px stroke, safe inradius = (S/2) - strokeWidth - 1
//
function hexPoints(cx: number, cy: number, r: number): string {
  // 6 vertices of a pointy-top hexagon
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 180) * (60 * i - 90); // start at top vertex
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
  }).join(" ");
}

// ─── Component ───────────────────────────────────────────────────────────────

/**
 * HexagonButton
 *
 * Accessible icon button inside a mathematically perfect hexagon.
 *
 * Why SVG instead of clip-path:
 *   clip-path clips the element boundary — there's nothing outside it
 *   to render a stroke on. SVG draws the hexagon as a <polygon> with
 *   an explicit stroke, then composites the icon on top. The result
 *   is pixel-perfect at every size.
 *
 * @example
 * <HexagonButton ariaLabel="Next" onClick={handleNext} />
 * <HexagonButton size={56} filled ariaLabel="Go" />
 */
export function HexagonButton({
  iconSize = 14,
  size = 40,
  color = "#0B67B2",
  filled = false,
  ariaLabel = "Next",
  onClick,
  className = "",
}: HexagonButtonProps) {
  const cx = size / 2;
  const cy = size / 2;
  const strokeWidth = 2;
  // Inradius: leave 1px breathing room inside the viewBox edge
  const r = cx - strokeWidth - 1;
  const points = hexPoints(cx, cy, r);

  // Icon sits centred — offset from top-left
  const iconOffset = (size - iconSize) / 2;

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={[
        "group",
        "inline-flex items-center justify-center",
        "bg-transparent border-none p-0 cursor-pointer",
        "transition-transform duration-200",
        "hover:scale-110",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={
        { "--hex-color": color } as React.CSSProperties
      }
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Hexagon shape */}
        <polygon
          points={points}
          fill={filled ? color : "white"}
          stroke={color}
          strokeWidth={strokeWidth}
          className="transition-colors duration-200 group-hover:stroke-[color:var(--hex-color)]"
        />

        {/*
         * Icon — rendered as a foreignObject to keep Lucide's React component.
         * foreignObject is fully supported in modern browsers and in all
         * React SVG renderers. It lets us embed JSX inside SVG cleanly.
         */}
        <foreignObject
          x={iconOffset}
          y={iconOffset}
          width={iconSize}
          height={iconSize}
        >
          <ArrowRightIcon
            size={iconSize}
            color={filled ? "white" : color}
            strokeWidth={2.5}
          />
        </foreignObject>
      </svg>
    </button>
  );
}

// ─── Usage examples ───────────────────────────────────────────────────────────
//
// Default (white fill, blue border):
//   <HexagonButton ariaLabel="Next" />
//
// Filled (solid blue):
//   <HexagonButton filled ariaLabel="Next" />
//
// Custom size:
//   <HexagonButton size={56} iconSize={22} ariaLabel="Next" />
//
// Inside a group for parent hover:
//   <div className="group">
//     <HexagonButton ariaLabel="Next" />
//   </div>