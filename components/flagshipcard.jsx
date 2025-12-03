"use client";
import React from "react";
import Image from 'next/image';

export default function FlagshipCard({
  title,
  subtitle,
  description,
  features = [],
  imageSrc,
  reverse = false,
}) {
  return (
    <div
      className={`
        bg-amber-100 rounded-xl shadow-lg p-6 sm:p-8 md:p-10
        flex flex-col 
        ${reverse ? "md:flex-row-reverse" : "md:flex-row"}
        items-center gap-8 md:gap-10 
        w-full md:h-[450px] mb-12
      `}
    >
      {/* IMAGE */}
      <div className="w-full md:w-[40%] flex justify-center">
        <div className="relative w-[85%] sm:w-[70%] md:w-100 h-100">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="rounded-lg drop-shadow-xl object-cover"
            sizes="(max-width: 640px) 85vw, (max-width: 768px) 70vw, 400px"
            priority={false}
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="w-full md:w-[60%] text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-lime-800">
          {title}
        </h1>

        <h2 className="text-xl sm:text-2xl text-yellow-500 font-semibold mb-4">
          {subtitle}
        </h2>

        <p className="text-gray-700 font-semibold mb-6 max-w-xl mx-auto md:mx-0 leading-relaxed text-sm sm:text-base">
          {description}
        </p>

        <h3 className="text-lg sm:text-xl font-semibold mb-2">Key Features</h3>

        <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 justify-start text-left md:justify-start">
              <span className="text-green-600 text-xl mt-[-2px]">✔</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
