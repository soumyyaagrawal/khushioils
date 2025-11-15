// import HorizontalScrollerWrapper from "@/components/horizontalscrollerwrapper";
// import HorizontalScroller from "@/components/HorizontalScroller";

// export default function Products() {
//     return (
//     <main>
//       {/* small intro block is fine; don't place a giant minHeight above the scroller */}
//       <section style={{ height: "40vh" }} />

// {/* <HorizontalScroller height={500}>
//   <img src="/Screenshot 2025-11-14 002831.png" width={400} />
//   <img src="/Screenshot 2025-11-14 002831.png" width={400} />
//   <img src="/Screenshot 2025-11-14 002831.png" width={400} />
// </HorizontalScroller> */}

//         <HorizontalScrollerWrapper />

//       {/* page continues */}
//       <section style={{ height: "80vh" }} />
//     </main>
//     );
// }


"use client";
import EventsDiv from "@/components/EventsDiv";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Products() {
  const eventsContainerRef = useRef(null);
  const eventsSectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const eventsData = [
    {
      eventName: "OIL",
      eventDate: "September 2025",
      imageUrl: "/Frame73.svg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.ss"
    },
    {
      eventName: "OIL",
      eventDate: "September 2025",
      imageUrl: "/Frame73.svg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.ss"
    },
    {
      eventName: "OIL",
      eventDate: "September 2025",
      imageUrl: "/Frame73.svg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.ss"
    },
    {
      eventName: "OIL",
      eventDate: "September 2025",
      imageUrl: "/Frame73.svg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.ss"
    },
    {
      eventName: "OIL",
      eventDate: "September 2025",
      imageUrl: "/Frame73.svg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.ss"
    }
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
            ease: "fadeInOut"
          },
          onUpdate: (self) => {
            const progress = self.progress;
            const currentIndex = Math.round(progress * (numberOfEvents - 1));
            setActiveIndex(currentIndex);
          }
        }
      });
    });
  }, [eventsData.length]);

  return (
    <div style={{ position: "relative" }}>
      <section ref={eventsSectionRef} className="bg-[#FFF2CE] w-full overflow-hidden flex-col justify-center items-center pt-[5vh] pb-[16vh]">
        <h2 className="pb-20 text-center justify-start text-5xl font-bold text-black font-['Oxanium']    ">
          Featured Products
        </h2>
        <div ref={eventsContainerRef} className="events w-full flex flex-row justify-flex-start items-center pl-[170px] pr-[100px]">
          {eventsData.map((event, index) => (
            <EventsDiv
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