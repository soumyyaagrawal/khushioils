"use client";

import { useState } from "react";

export default function ProcessSection() {
  const [active, setActive] = useState(null);
  const [hovered, setHovered] = useState(null);

  const panels = [
    { id: 1, title: "Seed Selection", text: "We carefully select the finest quality seeds from trusted farmers across India, ensuring only the best raw materials for our oils.", img: "/machine.jpg" },
    { id: 2, title: "Cold-Pressed", text: "Our state-of-the-art cold-pressing technology preserves natural nutrients, flavor, and aroma without using heat or chemicals.", img: "/your2.jpg" },
    { id: 3, title: "Quality Testing", text: "Every batch undergoes rigorous laboratory testing to ensure purity, safety, and compliance with international standards.", img: "/your3.jpg" },
    { id: 4, title: "Natural Filtering", text: "We use natural filtration methods to remove impurities while maintaining the oil's nutritional value and authentic taste.", img: "/your4.jpg" },
    { id: 5, title: "Hygienic Packaging", text: "Our oils are packaged in food-grade containers in a sterile environment to maintain freshness and extend shelf life.", img: "/your5.jpg" },
    { id: 6, title: "Quality Assurance", text: "Final quality checks ensure every bottle meets our strict standards before reaching your kitchen with complete traceability.", img: "/your6.jpg" },
  ];

  const expandedIndex = hovered ?? active;

  return (
    <section className="w-full bg-black text-white py-10">
      <div className="flex w-full h-[500px] overflow-hidden rounded-xl">
        {panels.map((p, i) => {
          const isExpanded = expandedIndex === i;
          const anyExpanded = expandedIndex !== null;

          const flexVal = anyExpanded ? (isExpanded ? 4 : 1) : 1;

          return (
            <div
              key={p.id}
              className="relative flex transition-all duration-500 ease-[cubic-bezier(.25,.8,.25,1)] cursor-pointer"
              style={{ flex: flexVal, minWidth: 0 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setActive(active === i ? null : i)}
            >
              {/* Background Image */}
              <img
                src={p.img}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-500"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 transition-all duration-500 ${
                  isExpanded ? "bg-black/60" : "bg-black/20"
                }`}
              />

              {/* ⭐ NUMBER (BOTTOM LEFT) — disappears when expanded */}
              <div
                className={`
                  absolute bottom-4 left-4
                  text-[80px] md:text-[110px] font-extrabold leading-none
                  text-transparent bg-clip-text
                  bg-gradient-to-br from-[#b4ff57] to-[#73ffbf]
                  drop-shadow-[0_0_20px_rgba(180,255,87,0.35)]
                  transition-all duration-500 
                  pointer-events-none
                  ${isExpanded ? "opacity-0" : "opacity-40"}
                `}
                style={{
                  WebkitTextStroke: "2px rgba(180,255,87,0.8)",
                }}
              >
                {p.id}
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-between p-6 w-full h-full">
                <h2 className="text-xl font-extrabold">{p.title}</h2>

                <div
                  className={`transition-all duration-500 ${
                    isExpanded
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  <p className="text-gray-100 text-lg font-semibold leading-relaxed">{p.text}</p>
                </div>
              </div>

              {/* Accent Line */}
              <div
                className={`absolute right-0 top-0 h-full w-[3px] transition-all duration-500 ${
                  isExpanded ? "bg-[#b4ff57]" : "bg-transparent"
                }`}
              ></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
