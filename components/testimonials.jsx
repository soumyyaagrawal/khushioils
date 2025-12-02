"use client";
import GlassDiv from "@/components/glassdiv";
import { Oxanium, Montserrat } from "next/font/google";
import { useState } from "react";
import TestimonialCard from "@/components/testimonialcard";

const oxanium = Oxanium({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

const achievementsData = [
  { id: 1, imageUrl: "https://picsum.photos/seed/person1/300" },
  { id: 2, imageUrl: "https://picsum.photos/seed/person2/300" },
  { id: 3, imageUrl: "https://picsum.photos/seed/person3/300" },
  { id: 4, imageUrl: "https://picsum.photos/seed/person4/300" },
  { id: 5, imageUrl: "https://picsum.photos/seed/person5/300" },
  { id: 6, imageUrl: "https://picsum.photos/seed/person6/300" },
  { id: 7, imageUrl: "https://picsum.photos/seed/person7/300" },
  { id: 8, imageUrl: "https://picsum.photos/seed/person8/300" },
  { id: 9, imageUrl: "https://picsum.photos/seed/person9/300" },
  { id: 10, imageUrl: "https://picsum.photos/seed/person10/300" },
  { id: 11, imageUrl: "https://picsum.photos/seed/person11/300" },
  { id: 12, imageUrl: "https://picsum.photos/seed/person12/300" },
  { id: 13, imageUrl: "https://picsum.photos/seed/person13/300" },
  { id: 14, imageUrl: "https://picsum.photos/seed/person14/300" },
  { id: 15, imageUrl: "https://picsum.photos/seed/person15/300" },
  { id: 16, imageUrl: "https://picsum.photos/seed/person16/300" },
];

const AchievementCard = ({ imageUrl, gridClass }) => {
  return (
    <div className={`${gridClass} relative w-full h-full`}>
      <div className="absolute top-[10px] left-[-10px] w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-[20px] overflow-hidden z-[5]">
        <img src={imageUrl} className="w-full h-full object-cover block" />
      </div>
    </div>
  );
};

export default function Testimonials() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="flex flex-col w-full bg-white antialiased">

      {/* ---------------------------------------------------------------------- */}
      {/* ⭐ MOBILE + TABLET VERSION (clean stacked grid, no overlaps) */}
      {/* ---------------------------------------------------------------------- */}

      <section className="lg:hidden w-full py-6 px-4">
        <h1 className="text-2xl font-bold text-center mb-6 text-black">
          Loved by Families across India
        </h1>

        {/* Responsive 3-column grid for mobile/tablet */}
        <div className="grid grid-cols-3 gap-4">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="w-full h-28 rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={item.imageUrl}
                className="w-full h-full object-cover"
                alt="Achievement"
              />
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm mt-4 font-semibold">
          Stories of Trust & Experience.
        </p>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* ⭐ DESKTOP VERSION — EXACTLY YOUR ORIGINAL CODE (unchanged) */}
      {/* ---------------------------------------------------------------------- */}

      <section className="hidden lg:block w-full">
        <div className="w-full py-[40px] px-[20px] flex justify-center">
          <div className="grid grid-flow-col grid-cols-9 auto-rows-[60.188px] auto-cols-[120.102px] gap-[20px] mx-auto max-w-[1560px] w-full relative">

            {/* ---- ORIGINAL TOP DECORATIONS (UNCHANGED) ---- */}
            <div className="col-start-1 col-span-1 row-start-1 row-span-2 bg-gray-100 rounded-[20px]"></div>
            <div className="col-start-2 col-span-1 row-start-1 row-span-1 bg-gray-100 rounded-[20px]"></div>
            <div className="col-start-3 col-span-1 row-start-1 row-span-2 bg-gray-100 rounded-[20px]"></div>
            <div className="col-start-4 col-span-1 row-start-1 row-span-1 bg-gray-100 rounded-[20px]"></div>
            <div className="col-start-5 col-span-1 row-start-1 row-span-2 bg-gray-100 rounded-[20px]"></div>
            <div className="col-start-6 col-span-1 row-start-1 row-span-1 bg-gray-100 rounded-[20px]"></div>
            <div className="col-start-7 col-span-1 row-start-1 row-span-2 bg-gray-100 rounded-[20px]"></div>
            <div className="col-start-8 col-span-1 row-start-1 row-span-1 bg-gray-100 rounded-[20px]"></div>
            <div className="col-start-9 col-span-1 row-start-1 row-span-2 bg-gray-100 rounded-[20px]"></div>

            {/* ---- ORIGINAL ACHIEVEMENT CARDS (UNCHANGED) ---- */}
            <AchievementCard imageUrl={achievementsData[0].imageUrl} gridClass="col-start-1 col-span-1 row-start-3 row-span-3" />
            <AchievementCard imageUrl={achievementsData[1].imageUrl} gridClass="col-start-2 col-span-1 row-start-2 row-span-3" />
            <AchievementCard imageUrl={achievementsData[2].imageUrl} gridClass="col-start-3 col-span-1 row-start-3 row-span-3" />
            <AchievementCard imageUrl={achievementsData[3].imageUrl} gridClass="col-start-4 col-span-1 row-start-2 row-span-3" />
            <AchievementCard imageUrl={achievementsData[4].imageUrl} gridClass="col-start-5 col-span-1 row-start-3 row-span-3" />
            <AchievementCard imageUrl={achievementsData[5].imageUrl} gridClass="col-start-6 col-span-1 row-start-2 row-span-3" />
            <AchievementCard imageUrl={achievementsData[6].imageUrl} gridClass="col-start-7 col-span-1 row-start-3 row-span-3" />
            <AchievementCard imageUrl={achievementsData[7].imageUrl} gridClass="col-start-8 col-span-1 row-start-2 row-span-3" />
            <AchievementCard imageUrl={achievementsData[8].imageUrl} gridClass="col-start-9 col-span-1 row-start-3 row-span-3" />
            <AchievementCard imageUrl={achievementsData[9].imageUrl} gridClass="col-start-1 col-span-1 row-start-6 row-span-3" />
            <AchievementCard imageUrl={achievementsData[10].imageUrl} gridClass="col-start-2 col-span-1 row-start-5 row-span-3" />
            <AchievementCard imageUrl={achievementsData[11].imageUrl} gridClass="col-start-8 col-span-1 row-start-5 row-span-3" />
            <AchievementCard imageUrl={achievementsData[12].imageUrl} gridClass="col-start-9 col-span-1 row-start-6 row-span-3" />

            {/* ---- ORIGINAL CENTER TEXT BLOCK (UNCHANGED) ---- */}
            <div className="col-start-4 col-span-3 row-start-6 row-span-2 text-black text-center flex flex-col justify-center items-center z-[10] pointer-events-none">
              <h1 className="m-0 leading-[1.2] text-[3.2rem] font-bold whitespace-nowrap">
                Loved by Families across India
              </h1>
              <p className="text-[1.2rem] opacity-80 max-w-[300px] mt-[15px] whitespace-nowrap font-extrabold text-gray-800">
                Stories of Trust & Experience.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* ⭐ TESTIMONIAL CARDS (responsive) */}
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
