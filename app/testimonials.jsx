"use client";
import { useEffect, useRef } from "react";
import AnimatedWave from "@/components/AnimatedWaves";

export default function Testimonials() {
  const panels = [
    { color: "#FF0000", text: "Bhagwati Oils — Pure & Trusted." },
    { color: "#FF6A6A", text: "Over 25 Years of Excellence." },
    { color: "#FF8C00", text: "Cold-Pressed & Natural Products." },
    { color: "#FFD700", text: "Delivering Health & Quality." }
  ];

  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const currentScrollRef = useRef(0);
  const tickingRef = useRef(false);
  const maxScrollRef = useRef(0);
  const activeRef = useRef(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const container = containerRef.current;
    if (!wrapper || !container) return;

    const updateMax = () => {
      const totalWidth = panels.length * window.innerWidth;
      maxScrollRef.current = Math.max(0, totalWidth - window.innerWidth);
    };
    updateMax();
    window.addEventListener("resize", updateMax);

    const applyTransform = () => {
      const max = maxScrollRef.current || 1;
      const px = Math.max(0, Math.min(currentScrollRef.current, max));
      const vwPercent = (px / window.innerWidth) * 100;
      wrapper.style.transform = `translateX(-${vwPercent}vw)`;
      tickingRef.current = false;
    };

    const wheelHandler = (e) => {
      if (!activeRef.current) return;

      const delta = e.deltaY;
      const atStart = currentScrollRef.current <= 0;
      const atEnd = currentScrollRef.current >= maxScrollRef.current;

      if (atStart && delta < 0) return;
      if (atEnd && delta > 0) return;

      e.preventDefault();
      currentScrollRef.current += delta;
      currentScrollRef.current = Math.max(
        0,
        Math.min(currentScrollRef.current, maxScrollRef.current)
      );

      if (!tickingRef.current) {
        tickingRef.current = true;
        requestAnimationFrame(applyTransform);
      }
    };

    // observer ensures entire section is visible before enabling horizontal mode
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.97) {
          activeRef.current = true; // now lock vertical scrolling
          window.addEventListener("wheel", wheelHandler, { passive: false });
        } else {
          activeRef.current = false; // release scrolling if section not fully visible
          window.removeEventListener("wheel", wheelHandler);
        }
      },
      { threshold: [0.3, 0.5, 0.75, 0.9, 0.97] }
    );

    observer.observe(container);

    return () => {
      window.removeEventListener("wheel", wheelHandler);
      window.removeEventListener("resize", updateMax);
      observer.disconnect();
    };
  }, [panels.length]);

  return (
    <div
      id="horizontal-section"
      ref={containerRef}
      className="relative w-screen min-h-screen overflow-hidden text-black"
    >
      <div
        style={{ height: `${panels.length * 100}vh` }}
        className="absolute w-screen top-0 left-0 pointer-events-none"
      />

      <div
        ref={wrapperRef}
        className="absolute top-0 left-0 flex w-fit h-screen will-change-transform z-[1]"
      >
        {panels.map((panel, i) => (
         <section
  key={i}
  className="w-screen h-screen flex justify-center items-center relative bg-blue-100"
>
  <AnimatedWave
    color={panel.color}
    progress={currentScrollRef.current / maxScrollRef.current}
  />
  <h1 className="relative z-30 text-4xl md:text-5xl font-semibold">
    {panel.text}
  </h1>
</section>


        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 opacity-25 pointer-events-none">
        <h1 className="text-[200px] md:text-[280px] font-bold leading-none">B</h1>
      </div>
    </div>
  );
}
