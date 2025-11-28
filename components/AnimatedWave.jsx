"use client";
import { motion } from "framer-motion";

export default function AnimatedWave({ scrollProgress }) {
  // 4 wave colors
  const colors = ["#FF0000", "#FF6A6A", "#FF8C00", "#FFD700"];

  // Determine color based on GSAP progress
  const colorIndex = Math.floor(scrollProgress * colors.length);
  const color = colors[Math.min(colorIndex, colors.length - 1)];

  // ARC height depends on scroll
  const arcHeight = 450 - scrollProgress * 200; // tweak

  // ARC path – white bottom, color above
  const path = `
    M0,0
    L0,${arcHeight + 200}
    Q720,900 1440,${arcHeight + 200}
    L1440,0
    Z
  `;

  return (
    <svg
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"  // ⬅ BG ONLY
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
    >
      <rect x="0" y="0" width="1440" height="900" fill={color} />  {/* TOP area */}
      <motion.path d={path} fill="white" transition={{ duration: 0.4 }} />  {/* bottom arc */}
    </svg>
  );
}
