"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/src/lib/utils";

const WAVE_AMPLITUDE = 2.5; // Height of the crests/troughs
const STROKE_WIDTH = 0.9; // Thinner lines
const STRAIGHT_LINE_LENGTH = 0.2; // Set this to 0 for no straight line, or higher for a longer one
const CHEVRON_Y_OFFSET = 0.4; // Positive value pulls the chevron down, negative pulls it up

const TOTAL_LENGTH = 58 + STRAIGHT_LINE_LENGTH;

// Generate a long continuous wave.
// Node spacing = 4px (higher frequency / tighter squiggles)
const generateWavePath = () => {
  // It is extremely important that the wave starts at y=12 so it remains 
  // mathematically symmetrical and perfectly aligns with the chevron.
  let d = `M 0 12 Q 2 ${12 - WAVE_AMPLITUDE}, 4 12`;
  for (let x = 8; x <= 52; x += 4) {
    d += ` T ${x} 12`;
  }
  
  // At x=52, the wave arrives with a downward slope.
  // We use a mathematically calculated cubic bezier to seamlessly flatten 
  // the wave out so it arrives exactly horizontal at x=58, y=12.
  d += ` C 53.33 13.67, 56.67 12, 58 12`;
  
  // A straight horizontal line at the end
  d += ` L ${TOTAL_LENGTH} 12`;
  
  return d;
};

interface WavyArrowProps {
  className?: string;
  initialWidth?: number;
  extendedWidth?: number;
  animated?: boolean;
  isHovered?: boolean;
}

export default function WavyArrow({
  className,
  initialWidth = 16,
  extendedWidth = 22,
  animated = true,
  isHovered: externalIsHovered,
}: WavyArrowProps) {
  const [internalIsHovered, setInternalIsHovered] = useState(false);
  const isHovered = externalIsHovered !== undefined ? externalIsHovered : internalIsHovered;

  // We animate the width of the container. 
  // By using preserveAspectRatio="xMaxYMid slice", the right side (chevron) stays pinned,
  // and the left side of the wave seamlessly "grows" out of the text.
  return (
    <motion.div
      className={cn("inline-flex items-center justify-center overflow-hidden h-[24px]", className)}
      initial={{ width: initialWidth }}
      animate={{ width: animated && isHovered ? extendedWidth : initialWidth }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      onMouseEnter={() => setInternalIsHovered(true)}
      onMouseLeave={() => setInternalIsHovered(false)}
    >
      <svg
        viewBox={`0 0 ${TOTAL_LENGTH} 23`}
        preserveAspectRatio="xMaxYMid slice"
        className="w-full h-full text-current shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth={STROKE_WIDTH}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={generateWavePath()} />

        {/* Perfectly centered standard chevron at the end of the arrow */}
        <path d={`M ${TOTAL_LENGTH - 2.5} ${9 + CHEVRON_Y_OFFSET} L ${TOTAL_LENGTH} ${12 + CHEVRON_Y_OFFSET} L ${TOTAL_LENGTH - 2.5} ${15 + CHEVRON_Y_OFFSET}`} />
      </svg>
    </motion.div>
  );
}
