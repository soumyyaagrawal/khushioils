'use client';
import GlassDiv from "@/components/glassdiv";
import { Oxanium, Montserrat } from "next/font/google";
import { useState } from "react";
import TestimonialCard from "@/components/testimonialcard";



const oxanium = Oxanium({
  subsets: ["latin"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
});

// --- DATA ---
const achievementsData = [
  { id: 1, imageUrl: 'https://picsum.photos/seed/person1/300' },
  { id: 2, imageUrl: 'https://picsum.photos/seed/person2/300' },
  { id: 3, imageUrl: 'https://picsum.photos/seed/person3/300' },
  { id: 4, imageUrl: 'https://picsum.photos/seed/person4/300' },
  { id: 5, imageUrl: 'https://picsum.photos/seed/person5/300' },
  { id: 6, imageUrl: 'https://picsum.photos/seed/person6/300' },
  { id: 7, imageUrl: 'https://picsum.photos/seed/person7/300' },
  { id: 8, imageUrl: 'https://picsum.photos/seed/person8/300' },
  { id: 9, imageUrl: 'https://picsum.photos/seed/person9/300' },
  { id: 10, imageUrl: 'https://picsum.photos/seed/person10/300' },
  { id: 11, imageUrl: 'https://picsum.photos/seed/person11/300' },
  { id: 12, imageUrl: 'https://picsum.photos/seed/person12/300' },
  { id: 13, imageUrl: 'https://picsum.photos/seed/person13/300' },
  { id: 14, imageUrl: 'https://picsum.photos/seed/person14/300' },
  { id: 15, imageUrl: 'https://picsum.photos/seed/person15/300' },
  { id: 16, imageUrl: 'https://picsum.photos/seed/person16/300' },
];



// --- Reusable Image Card Component (for Achievements) ---
const AchievementCard = ({ imageUrl, gridClass }) => {
  return (
    <div className={`${gridClass} relative w-full h-full`}>
      {/* <div className="absolute inset-0 bg-white rounded-[20px] transition-transform duration-300 ease z-[2]"></div> */}
      <div className="absolute top-[10px] left-[-10px] w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-[20px] overflow-hidden z-[5]">
        <img src={imageUrl} alt="Achievement" className="w-full h-full object-cover block" />
      </div>
    </div>
  );
};






 const LinkedinIcon = () => (
    <svg className="w-5 h-5 block flex-shrink-0 opacity-85 hover:opacity-100 transition-opacity duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  );
  const InstagramIcon = () => (
    <svg className="w-5 h-5 block flex-shrink-0 opacity-85 hover:opacity-100 transition-opacity duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.5" y1="6.5" y2="6.5"/></svg>
  );






// --- Main App Component ---
export default function Testimonials() {


const [selectedCard, setSelectedCard] = useState(null);



  return (
    <div className={`flex flex-col w-full bg-white antialiased`}>
      {/* SECTION 1: The Image Grid */}
      <section className="w-full block">
        <div className="w-full py-[40px] px-[20px] flex justify-center">
          <div className="grid grid-flow-col grid-cols-9 auto-rows-[60.188px] auto-cols-[120.102px] gap-[20px] mx-auto max-w-[1560px] w-full relative">
            {/* Top row "shadow-only" decorations */}
            <div className="col-start-1 col-span-1 row-start-1 row-span-2 bg-gray-100 rounded-[20px] w-full h-full"></div>
            <div className="col-start-2 col-span-1 row-start-1 row-span-1 bg-gray-100 rounded-[20px] w-full h-full"></div>
            <div className="col-start-3 col-span-1 row-start-1 row-span-2 bg-gray-100 rounded-[20px] w-full h-full"></div>
            <div className="col-start-4 col-span-1 row-start-1 row-span-1 bg-gray-100 rounded-[20px] w-full h-full"></div>
            <div className="col-start-5 col-span-1 row-start-1 row-span-2 bg-gray-100 rounded-[20px] w-full h-full"></div>
            <div className="col-start-6 col-span-1 row-start-1 row-span-1 bg-gray-100 rounded-[20px] w-full h-full"></div>
            <div className="col-start-7 col-span-1 row-start-1 row-span-2 bg-gray-100 rounded-[20px] w-full h-full"></div>
            <div className="col-start-8 col-span-1 row-start-1 row-span-1 bg-gray-100 rounded-[20px] w-full h-full"></div>
            <div className="col-start-9 col-span-1 row-start-1 row-span-2 bg-gray-100 rounded-[20px] w-full h-full"></div>

            {/* Achievement cards */}
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
            {/* <AchievementCard imageUrl={achievementsData[13].imageUrl} gridClass="col-start-5 col-span-1 row-start-5 row-span-3" />
            <AchievementCard imageUrl={achievementsData[14].imageUrl} gridClass="col-start-6 col-span-1 row-start-5 row-span-3" />
            <AchievementCard imageUrl={achievementsData[15].imageUrl} gridClass="col-start-7 col-span-1 row-start-5 row-span-3" /> */}

            {/* Central text block */}
            <div className="col-start-4 col-span-3 row-start-6 row-span-2 text-white text-center flex flex-col justify-center items-center z-[10] pointer-events-none">
            
              <h1 className={` m-0 leading-[1.2] text-[3.2rem] text-black font-bold whitespace-nowrap`}>Loved by Families across India</h1>
              <p className={`text-[1.2rem] opacity-80 max-w-[300px] mt-[15px] whitespace-nowrap font-extrabold text-gray-800`}>
                Stories of Trust & Experience.
              </p>
             



            </div>
          </div>

        </div>
                     

      </section>



      <div className="flex flex-row overflow-x-auto space-x-6 py-8 px-4 md:px-8 lg:px-16">

 <TestimonialCard
        stars={5}
        text="WorkNook makes finding a coworking space so easy! I can book a desk in minutes and get straight to work. Highly recommend!"
        name="Anjani Patel"
        location="Bhilai"
        image="/jao.png"
      />

      <TestimonialCard
        stars={5}
        text="Very friendly staff and quick booking. Loved the ambiance!"
        name="Rahul Sharma"
        location="Mumbai"
        image="/jao.png"
      />

      <TestimonialCard
        stars={5}
        text="Very friendly staff and quick booking. Loved the ambiance!"
        name="Rahul Sharma"
        location="Mumbai"
        image="/jao.png"
      />
      
      
</div>








</div>
)}




