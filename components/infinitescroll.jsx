"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useMemo, useRef } from "react";
import { twMerge } from "tailwind-merge";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const LABELS = [
  "40+ Years of Excellence",
  "5M+ Happy Families",
  "100% Natural & Pure",
  "Eco-Friendly & Sustainable",
  "15+ Industry Awards",
];

// Directly duplicate array (no extra mapping needed)
const DOUBLE_LABELS = [...LABELS, ...LABELS];

const InfiniteScroll = ({ isReversed = false, className }) => {
  const movingContainer = useRef(null);
  const timeline = useRef();
  const tweenRef = useRef();

  // GSAP infinite scroll animation
  useGSAP(
    () => {
      gsap.set(movingContainer.current, {
        xPercent: isReversed ? -50 : 0,
      });

      timeline.current = gsap
        .timeline({ ease: "none", repeat: -1 })
        .to(movingContainer.current, {
          xPercent: isReversed ? 0 : -50,
          duration: 20,
        })
        .set(movingContainer.current, { xPercent: 0 });
    },
    { dependencies: [isReversed] }
  );

  // Hover slowdown effect
  const onPointerEnter = () => {
    if (!timeline.current) return;
    tweenRef.current?.kill();
    tweenRef.current = gsap.to(timeline.current, {
      timeScale: 0.25,
      duration: 0.4,
    });
  };

  const onPointerLeave = () => {
    if (!timeline.current) return;
    tweenRef.current?.kill();
    tweenRef.current = gsap.to(timeline.current, {
      timeScale: 0.75,
      duration: 0.2,
    });
  };

  // Render list
  const list = useMemo(
    () => (
      <div className="flex w-fit items-center gap-14 px-10">
        {DOUBLE_LABELS.map((label, index) => (
          <div
            key={index}
            className="flex items-center gap-2 mt-2 text-white text-xl font-medium w-[250px] text-center leading-tight"
            style={{
              whiteSpace: "normal",
              wordWrap: "break-word",
            }}
          >
            <span>{label}</span>
          </div>
        ))}
      </div>
    ),
    []
  );

  return (
    <div
      className={twMerge(
        "relative w-full overflow-hidden h-[90px] select-none z-20 py-2 sm:py-0 px-6 sm:px-8 bg-[#1D5B37]",
        className
      )}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      style={{
        position: "relative",
        boxShadow: "0 4px 25px rgba(0,0,0,0.3)",
      }}
    >
      <div
        ref={movingContainer}
        className="flex w-fit items-center gap-4 sm:gap-14 px-8 sm:px-10 h-[40px] sm:h-[80px]"
      >
        {list}
      </div>
    </div>
  );
};

export default InfiniteScroll;
