"use client";
import React from "react";

export default function FlagshipCard({
  title,
  subtitle,
  description,
  features = [],
  imageSrc,
//   bgColor = "#FFF2CE",
  reverse = false, // 🟢 <— NEW PROP
}) {
  return (
    <div
      className={`w-[1600] h-[450px] rounded-xl shadow-lg flex items-center p-10 mb-12 gap-10 bg-amber-100
        ${reverse ? "md:flex-row-reverse" : "md:flex-row"} flex-col`}
      
    >
      {/* IMAGE */}
      <div className="w-full md:w-[40%] flex justify-center">
        <img
          src={imageSrc}
          alt={title}
          className="rounded-lg drop-shadow-xl w-120 h-120"
        />
      </div>

      {/* CONTENT */}
      <div className="w-full md:w-[60%]">
        <h1 className="text-4xl font-bold text-lime-800">{title}</h1>
        <h2 className="text-2xl text-yellow-500 font-semibold mb-4">{subtitle}</h2>

        <p className="text-gray-700 font-semibold mb-6 max-w-xl leading-relaxed">{description}</p>

        <h3 className="text-xl font-semibold mb-2">Key Features</h3>
        <ul className="space-y-2 text-gray-700">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✔</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
