"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import TestimonialCard from "@/components/testimonialcard";

// Dynamically import desktop grid (not loaded on mobile)
const DesktopGrid = dynamic(() => import("./TestimonialsDesktopGrid"), {
  ssr: false,
  loading: () => null, // avoid flicker
});

// Images
const achievementsData = [
  { id: 1, imageUrl: "/Testimonials/adults-enjoying-mexican-food.jpg" },
  { id: 2, imageUrl: "/Testimonials/young-girl-holding-posing-with-kitchen-utensils-spatula-grey-wall.webp" },
  { id: 3, imageUrl: "/Testimonials/woman-drinking-healthy-tea.jpg" },
  { id: 4, imageUrl: "/Testimonials/smiling-chef-preparing-dish-modern-kitchen.jpg" },
  { id: 5, imageUrl: "/Testimonials/pleased-young-male-cook-wearing-chef-uniform-glasses-holding-plate-isolated-yellow-wall.jpg" },
  { id: 6, imageUrl: "/Testimonials/photo-chef.webp" },
  { id: 7, imageUrl: "/Testimonials/mother-adorable-daughter-cutting-apple-kitchen-indian-pakistani-model.webp" },
  { id: 8, imageUrl: "/Testimonials/medium-shot-people-celebrating-eid-al-fitr (1).webp" },
  { id: 9, imageUrl: "/Testimonials/large-indian-family-featuring-young-people-elders.jpg" },
  { id: 10, imageUrl: "/Testimonials/large-indian-family-featuring-young-people-elders (1).jpg" },
  { id: 11, imageUrl: "/Testimonials/intimate-labh-pancham-activities-celebrations.webp" },
  { id: 12, imageUrl: "/Testimonials/indian-woman-cooking-kitchen-with-steam-rising-from-pot-morning-light.webp" },
  { id: 13, imageUrl: "/Testimonials/indian-senior-women-cooking-south-asian-food-adult-street-food.webp" },
  { id: 14, imageUrl: "/Testimonials/breakfast-is-ready.webp" },
  { id: 15, imageUrl: "/Testimonials/arabic-man-apron-holding-pan-with-pan-pans-it-white-background.jpg" },
  { id: 16, imageUrl: "/Testimonials/adults-enjoying-mexican-food.jpg" },
];

export default function Testimonials() {
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect device width on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDesktop(window.innerWidth >= 1024);

      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 1024);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="flex flex-col w-full bg-white antialiased">

      {/* ---------------------------------------------------------------------- */}
      {/* 📱 MOBILE + TABLET VERSION */}
      {/* ---------------------------------------------------------------------- */}
      {!isDesktop && (
        <section className="w-full py-6 px-4 lg:hidden">
          <h1 className="text-2xl font-bold text-center mb-6 text-black">
            Loved by Families across India
          </h1>

          <div className="grid grid-cols-3 gap-4">
            {achievementsData.map((item) => (
              <div
                key={item.id}
                className="w-full h-28 rounded-xl overflow-hidden shadow-md"
              >
                <Image
                  src={item.imageUrl}
                  alt="Achievement"
                  width={300}
                  height={300}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 text-sm mt-4 font-semibold">
            Stories of Trust & Experience.
          </p>
        </section>
      )}

      {/* ---------------------------------------------------------------------- */}
      {/* 🖥 DESKTOP VERSION (Dynamically loaded) */}
      {/* ---------------------------------------------------------------------- */}
      {isDesktop && (
        <DesktopGrid achievementsData={achievementsData} />
      )}

      {/* ---------------------------------------------------------------------- */}
      {/* ⭐ TESTIMONIAL CARDS */}
      {/* ---------------------------------------------------------------------- */}
      <div className="flex flex-col md:flex-row md:space-x-6 justify-center items-center py-8 px-4 md:px-8 lg:px-16 space-y-6 md:space-y-0">
        <TestimonialCard
          stars={5}
          text="Bhagwati oils have been a staple in our kitchen for over 10 years. The authentic taste and purity is unmatched."
          name="Anjani Patel"
          location="Bhilai"
          image="/jao.png"
        />

        <TestimonialCard
          stars={5}
          text="The quality speaks for itself. My family trusts Bhagwati for all our cooking needs. Highly recommended!"
          name="Vijay Agrawal"
          location="Raipur"
          image="/jao.png"
        />

        <TestimonialCard
          stars={5}
          text="Pure, natural, and healthy - exactly what every family needs. Thank you Bhagwati for maintaining such high standards."
          name="Rajesh Sharma"
          location="Nagpur"
          image="/jao.png"
        />
      </div>
    </div>
  );
}
