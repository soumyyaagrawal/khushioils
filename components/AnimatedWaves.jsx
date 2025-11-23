"use client";
import { motion } from "framer-motion";

export default function AnimatedWave({ color, progress }) {
  // Define the Y-coordinate for the deepest point of the arc (the 'dip').
  // A higher Y-value (e.g., 700) pulls the white curve down (shallower dip).
  const arcDipY = 500 + progress * 200; 

  // PATH FOR THE WHITE CUTOUT AREA
  const path = `
    M0,900
    L1440,900
    Q720,${arcDipY} 0,900
    Z
  `;

  return (
    <svg
      // IMPORTANT: Remove absolute positioning and size if it conflicts with existing layout
      // Adjust class to ensure it's positioned correctly below your header
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-[5]"
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
    >
      {/* // REMOVED: <rect> filled with {color}. 
      // This was making the entire SVG red and covering your content.
      */}

      {/* ARC BOTTOM = WHITE CUTOUT */}
      {/* This draws the large white shape, creating the concave cutout from the red area above it. */}
      <motion.path
        d={path}
        fill={color}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </svg>
  );
}