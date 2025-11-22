"use client";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function WaveDivider() {

  useEffect(() => {
    gsap.to("#divider-path", {
      attr: { d: "M0,20 C300,100 900,40 1200,20 L1200,120 L0,120 Z" },
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "easeInOut"
    });
  }, []);

  return (
   <div className="w-full overflow-hidden">
  <svg
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
    className="w-full h-[120px]"
  >
    <defs>
      <linearGradient id="waveGradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#166534" />  
        <stop offset="100%" stop-color="#DCFCE7" /> 
      </linearGradient>
    </defs>

    <path
      d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z"
      fill="url(#waveGradient)"
    />
  </svg>
</div>

  );
}
