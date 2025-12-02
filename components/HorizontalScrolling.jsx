"use client";
import ProductDiv from "@/components/ProductDiv";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import AnimatedWave from "@/components/AnimatedWave";

gsap.registerPlugin(ScrollTrigger, useGSAP);



export default function HorizontalScrolling() {
  const eventsContainerRef = useRef(null);
  const eventsSectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);


  const eventsData = [
    {
      eventName: "Khushi Gold",
      eventDate: "Rice Bran Oil",
      imageUrl: "/Products/KhushiRicebran.png",
      description:
        "Created for the evolving Indian household, our flagship oil stands out with its double-refined purity and a remarkable 13,000 ppm of oryzanol. This rich nutrient profile provides unmatched heart-friendly benefits, making everyday cooking both healthier and tastier. It transforms every dish with clean flavour while supporting your family’s long-term well-being.",
    },
    {
      eventName: "Khushi Gold",
      eventDate: "Sunflower Oil",
      imageUrl: "/Products/KhushiGoldsunflower.png",
      description:
        "Khushi Gold Sunflower Oil is enriched with Omega-6 and a blend of Vitamins A, D, and E to help boost immunity, strengthen bones, and promote radiant, healthy skin. Extracted from premium sunflower seeds and refined to perfection, it carries natural antioxidants that safeguard purity and freshness. It’s a clean, light, and heart-friendly oil you can trust for your family’s long-term health.",
    },
    {
      eventName: "Anandam",
      eventDate: "Rice Bran Oil",
      imageUrl: "/Products/anandRicebran.png",
      description:
        "Anandam Rice Bran Oil is where purity meets nourishment and taste meets trust. Made from the richest layers of rice bran, it undergoes a meticulous extraction process that protects its natural vitamins, oryzanol, and heart-friendly properties. Smooth, light, and wholesome, it elevates every dish while becoming a daily choice for a healthier lifestyle.",
    },
    // {
    //   eventName: "OIL",
    //   eventDate: "September 2025",
    //   imageUrl: "/Frame73.svg",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.ss"
    // },
    // {
    //   eventName: "OIL",
    //   eventDate: "September 2025",
    //   imageUrl: "/Frame73.svg",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.ss"
    // }
  ];

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const eventsContainer = eventsContainerRef.current;
      const eventsSection = eventsSectionRef.current;

      if (!eventsContainer || !eventsSection) return;

      const numberOfEvents = eventsData.length;
      const viewportWidth = window.innerWidth;
      const paddingLeft = 170;
      const paddingRight = 100;

      const availableWidth = viewportWidth - paddingLeft - paddingRight;

      const scrollDistance = (numberOfEvents - 1) * availableWidth;

      const snapPoints = [];
      for (let i = 0; i < numberOfEvents; i++) {
        snapPoints.push(i / (numberOfEvents - 1));
      }

      gsap.to(eventsContainer, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: eventsSection,
          scroller: "body",
          start: "top -5%",
          end: "top -100%",
          pin: true,
          scrub: 1,
          snap: {
            snapTo: snapPoints,
            duration: 0.1,
            delay: 0,
            ease: "fadeInOut",
          },
          onUpdate: (self) => {
            const progress = self.progress;
            const currentIndex = Math.round(progress * (numberOfEvents - 1));
            setActiveIndex(currentIndex);
              setScrollProgress(progress);  // ⬅ add this

          },
        },
      });
    });
  }, [eventsData.length]);

  return (
    <div style={{ position: "relative" }}>
      <section
        ref={eventsSectionRef}
        className="bg-gradient-to-r from-[#FFF2CE] via-[#ffe396] to-[#ffe294] w-full overflow-hidden flex-col justify-center items-center pt-[5vh] pb-[15vh]"
      >

{/* <AnimatedWave scrollProgress={scrollProgress} />           */}
<h1 className="text-6xl font-black z-10 p-8 font-semibold mt-16 ml-120">
            Featured Products
          </h1>

        <div
          ref={eventsContainerRef}
          className="events w-full flex flex-row justify-flex-start items-center pl-[170px] pr-[100px]"
        >
          {eventsData.map((event, index) => (
            <ProductDiv
              key={index}
              eventName={event.eventName}
              eventDate={event.eventDate}
              imageUrl={event.imageUrl}
              description={event.description}
              isLast={index === eventsData.length - 1}
              isActive={index === activeIndex}
            />
          ))}
        </div>
      </section>
     
    </div>
  );
}