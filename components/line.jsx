"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LineGSAP() {
  const lineRef = useRef(null);

  useEffect(() => {
    const length = lineRef.current.getTotalLength();

    gsap.fromTo(
      lineRef.current,
      { strokeDasharray: length, strokeDashoffset: length },
      { strokeDashoffset: 0, duration: 2, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <svg width="300" height="10">
        {/* Dot */}
        <circle cx="5" cy="5" r="4" fill="#000" />

        {/* Animated Line */}
        <line
          ref={lineRef}
          x1="10"
          y1="5"
          x2="290"
          y2="5"
          stroke="#000"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
