"use client";
import ProductDiv from "@/components/ProductDiv";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";


gsap.registerPlugin(ScrollTrigger, useGSAP);


const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};




export default function Products()



{
  const eventsContainerRef = useRef(null);
  const eventsSectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const eventsData = [
    {
      eventName: "Khushi Gold",
      eventDate: "Rice Bran Oil",
      imageUrl: "/Frame73.svg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.ss"
    },
    {
      eventName: "Khushi Gold",
      eventDate: "Sunflower Oil",
      imageUrl: "/Frame73.svg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.ss"
    },
    {
      eventName: "Anandam",
      eventDate: "Rice Bran Oil",
      imageUrl: "/Frame73.svg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.ss"
    }
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
        <h2 className="pb-20 text-center justify-start text-5xl font-bold text-black font-['Oxanium']">
          Featured Products
        </h2>
        <div ref={eventsContainerRef} className="events w-full flex flex-row justify-flex-start items-center pl-[170px] pr-[100px]">
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





<div className="bg-white w-full h-[100vh] text-black">

<div className="flex flex-col justify-center items-center pt-20 space-y-6">

  <h2 className="text-4xl mt-1 font-['plusJakartaSans'] ">
    Our Other Products
  </h2>
  <h3 className="text-xl text-gray-600 font-['plusJakartaSans'] text-center mt-0  ">
    Explore our complete range of quality products
     <div className="w-28 h-[3px] mx-auto my-6 rounded-full bg-gradient-to-r from-green-200 to-green-800"></div>
  </h3>
 

  <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10"
        variants={containerVariants}          // 🔥 using variants
        initial="hidden"                      // 🔥 start state
        whileInView="visible"                 // 🔥 animate on scroll
        viewport={{ once: false, amount: 0.2 }} // 🔥 THIS GOES HERE
      >
      
      <motion.div
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  }}
>
  <ProductCard
    img="/rice1.svg"
    title="Boiled Rice"
    subtitle="Premium quality product"
  />
</motion.div>



      <motion.div
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  }}
>
  <ProductCard
    img="/rice1.svg"
    title="Boiled Rice"
    subtitle="Premium quality product"
  />
</motion.div>



     <motion.div
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  }}
>
  <ProductCard
    img="/rice1.svg"
    title="Boiled Rice"
    subtitle="Premium quality product"
  />
</motion.div>

 <motion.div
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  }}
>
  <ProductCard
    img="/rice1.svg"
    title="Boiled Rice"
    subtitle="Premium quality product"
  />
</motion.div>


      <motion.div
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  }}
>
  <ProductCard
    img="/rice1.svg"
    title="Boiled Rice"
    subtitle="Premium quality product"
  />
</motion.div>


      <motion.div
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  }}
>
  <ProductCard
    img="/rice1.svg"
    title="Boiled Rice"
    subtitle="Premium quality product"
  />
</motion.div>




</motion.div>


  </div>
          

  


  










</div>
    </div>
  );
}