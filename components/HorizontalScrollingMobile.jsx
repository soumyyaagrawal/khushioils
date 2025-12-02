// components/HorizontalScrollingMobile.jsx
"use client";

import React, { useRef, useEffect } from "react";

/**
 * Mobile / Tablet snap carousel (no GSAP).
 * Lightweight, reserves image space, adds dynamic padding to center first/last.
 */

export default function HorizontalScrollingMobile({ eventsData = [] }) {
  const carouselRef = useRef(null);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    el.style.webkitOverflowScrolling = "touch";
    el.style.scrollBehavior = "smooth";
    el.style.willChange = "transform";

    const adjust = () => {
      const first = el.querySelector("[data-snap-item]");
      if (!first) return;
      const cardRect = first.getBoundingClientRect();
      const cardW = Math.round(cardRect.width);
      const vw = window.innerWidth;
      const offset = Math.max(12, Math.round((vw - cardW) / 2));
      el.style.paddingLeft = `${offset}px`;
      el.style.paddingRight = `${offset}px`;
      el.style.scrollPaddingInline = `${offset}px`;
    };

    adjust();
    window.addEventListener("resize", adjust);
    window.addEventListener("orientationchange", adjust);
    return () => {
      window.removeEventListener("resize", adjust);
      window.removeEventListener("orientationchange", adjust);
      if (el) el.style.willChange = "";
    };
  }, [eventsData.length]);

  if (!eventsData || eventsData.length === 0) return null;

  return (
    <section className="w-full bg-gradient-to-r from-[#FFF2CE] via-[#ffe396] to-[#ffe294] py-8">
      <h2 className="text-3xl font-black px-4 mb-6 text-center">Featured Products</h2>

      <div
        ref={carouselRef}
        className="flex overflow-x-auto gap-6 px-4 snap-x snap-mandatory touch-pan-x scrollbar-hide"
        role="list"
        aria-label="Featured products carousel"
      >
        {eventsData.map((event, i) => (
          <article
  key={i}
  data-snap-item
  role="listitem"
  className="
    snap-center shrink-0 
    w-sm bg-white/95 rounded-2xl p-4
    overflow-y-auto
    max-h-[85vh]
  "
  style={{
    touchAction: "pan-y pan-x",
    WebkitOverflowScrolling: "touch",
    boxShadow: "0 6px 18px rgba(16,24,40,0.08)",
    transform: "translateZ(0)",
  }}
>


            <div style={{ width: "100%", aspectRatio: "1 / 0.9", overflow: "hidden", borderRadius: 12 }}>
              <img
                src={event.imageUrl}
                alt={event.eventName}
                // loading="lazy"
                width="800"
                height="720"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-4">{event.eventName}</h3>
            <p className="text-lg text-gray-700 font-medium mt-2">{event.eventDate}</p>
            <p className="text-gray-600 text-base leading-relaxed mt-3">{event.description}</p>
          </article>
        ))}

        {/* extra spacer to avoid snap-edge issues on some browsers */}
        <div style={{ width: "calc(50vw - 20%)", flex: "0 0 auto" }} aria-hidden />
      </div>
    </section>
  );
}
