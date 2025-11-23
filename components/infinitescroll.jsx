"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useMemo, useRef } from "react";
import { twMerge } from "tailwind-merge";

// import basket from "../../public/infinite_scroll/basket.svg";
// import Eye from "../../public/infinite_scroll/Eye.svg";
// import Flag from "../../public/infinite_scroll/Flag.svg";
// import globe from "../../public/infinite_scroll/globe.svg";
// import people from "../../public/infinite_scroll/people.svg";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// const TECHNOLOGY_ICONS = [basket, Eye, Flag, globe, people];
const LABELS = [
  "40+ Years of Excellence",
  "5M+ Happy Families",
  "100% Natural & Pure",
  "Eco-Friendly & Sustainable",
  "15+ Industry Awards",
];
const ELEMENTS = LABELS.map((icon, i) => ({
 
  label: LABELS[i],
}));
const DOUBLE_ELEMENTS = [...ELEMENTS, ...ELEMENTS];

const InfiniteScroll = ({ isReversed = false, className }) => {
  const movingContainer = useRef(null);
  const timeline = useRef();

  useGSAP(
    () => {
      const setupInfiniteMarqueeTimeline = () => {
        gsap.set(movingContainer.current, {
          xPercent: isReversed ? -50 : 0,
        });
        timeline.current = gsap
          .timeline({ defaults: { ease: "none", repeat: -1 } })
          .to(movingContainer.current, {
            xPercent: isReversed ? 0 : -50,
            duration: 20,
          })
          .set(movingContainer.current, { xPercent: 0 });
      };
      setupInfiniteMarqueeTimeline();
    },
    { dependencies: [isReversed] }
  );

  let timelineTimeScaleTween = useRef();
  const onPointerEnter = () => {
    if (!timeline.current) return;
    timelineTimeScaleTween.current?.kill();
    timelineTimeScaleTween.current = gsap.to(timeline.current, {
      timeScale: 0.25,
      duration: 0.4,
    });
  };
  const onPointerLeave = () => {
    if (!timeline.current) return;
    timelineTimeScaleTween.current?.kill();
    timelineTimeScaleTween.current = gsap.to(timeline.current, {
      timeScale: 0.75 ,
      duration: 0.2,
    });
  };

  const list = useMemo(
    () => (
      <div className="flex w-fit items-center gap-14 px-10">
        {DOUBLE_ELEMENTS.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 mt-2 text-white text-xl font-medium w-[250px] text-center leading-tight"
            style={{
              whiteSpace: "normal", // ✅ allow wrapping
              wordWrap: "break-word", // ✅ break long words cleanly
            }}
          >
            {/* <Image
              src={item.icon}
              alt={item.label}
              height={34}
              width={34}
              className="object-contain"
            /> */}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    ),
    []
  );

  return (
    <div
      className={twMerge(
        "relative w-full overflow-hidden h-[90px] select-none z-20 py-2 sm:py-4 px-6 sm:px-8", // ✅ padding added here
        className
      )}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      style={{
        position: "relative",
        // top: "60px", // moved slightly lower
        backgroundColor: "#1D5B37",
        // transform: "rotate(-1deg)",
        transformOrigin: "center",
        boxShadow: "0 4px 25px rgba(0,0,0,0.3)",
        // maskImage:
        //   "linear-gradient(to right, transparent 1%, black 15%, black 85%, transparent 100%)",
        // borderRadius: "12px", // optional for smoother edges
      }}
    >
      <div
        ref={movingContainer}
        className="flex w-fit items-center gap-4 sm:gap-14 px-8 sm:px-10"
        style={{
          height: ["40px", "80px"], // Adjust height for different screen sizes
        }}
      >
        {list}
      </div>
    </div>
  );
};

export default InfiniteScroll;
