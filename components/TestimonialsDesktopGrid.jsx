"use client";
import Image from "next/image";

const AchievementCard = ({ imageUrl, gridClass }) => (
  <div className={`${gridClass} relative w-full h-full`}>
    <div className="absolute top-[10px] left-[-10px] w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-[20px] overflow-hidden z-[5]">
      <Image
        src={imageUrl}
        alt="Achievement"
        width={300}
        height={300}
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
);

export default function TestimonialsDesktopGrid({ achievementsData }) {
  return (
    <section className="w-full hidden lg:block">
      <div className="w-full py-[40px] px-[20px] flex justify-center">
        <div className="grid grid-flow-col grid-cols-9 auto-rows-[60.188px] auto-cols-[120.102px] gap-[20px] mx-auto max-w-[1560px] w-full relative">

          {/* decorations (same as your code) */}
          <div className="col-start-1 col-span-1 row-start-1 row-span-2 bg-gray-100 rounded-[20px]"></div>
          <div className="col-start-2 col-span-1 row-start-1 row-span-1 bg-gray-100 rounded-[20px]"></div>
          <div className="col-start-3 col-span-1 row-start-1 row-span-2 bg-gray-100 rounded-[20px]"></div>
          <div className="col-start-4 col-span-1 row-start-1 row-span-1 bg-gray-100 rounded-[20px]"></div>
          <div className="col-start-5 col-span-1 row-start-1 row-span-2 bg-gray-100 rounded-[20px]"></div>
          <div className="col-start-6 col-span-1 row-start-1 row-span-1 bg-gray-100 rounded-[20px]"></div>
          <div className="col-start-7 col-span-1 row-start-1 row-span-2 bg-gray-100 rounded-[20px]"></div>
          <div className="col-start-8 col-span-1 row-start-1 row-span-1 bg-gray-100 rounded-[20px]"></div>
          <div className="col-start-9 col-span-1 row-start-1 row-span-2 bg-gray-100 rounded-[20px]"></div>

          {/* achievement cards */}
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

          {/* center text block */}
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
  );
}
