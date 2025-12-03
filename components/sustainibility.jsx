"use client";
import Image from "next/image";

export default function Sustainibility() {
  return (
    <div className="w-full min-h-[100vh] bg-white py-16 px-4">

      {/* HEADINGS */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6">
        Our Commitment to Sustainability
      </h1>

      <h2 className="text-2xl sm:text-3xl text-green-700 font-semibold text-center mb-4">
        Powering a Greener Future
      </h2>

      {/* IMAGE + TEXT */}
      <div
        className="
          flex flex-col lg:flex-row 
          justify-center items-center 
          gap-8 lg:gap-12 
          mt-9 mb-12
        "
      >
        {/* IMAGE */}
        <Image
          src="/sustainibility.webp"
          alt="Sustainability Image"
          width={600}
          height={700}
          className="
            rounded-xl shadow-lg
            w-full sm:w-[80%] md:w-[60%] lg:w-[40%] 
            h-auto lg:h-[58vh] 
            object-cover
          "
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 60vw, 40vw"
          priority={false}
        />

        {/* TEXT */}
        <p
          className="
            font-semibold text-gray-700 
            text-center lg:text-left 
            max-w-2xl 
            mx-auto lg:mx-0
            px-2 sm:px-4
          "
        >
          At Bhagwati Industries, sustainability is at the core of our
          operations. We are dedicated to minimizing our environmental
          impact through responsible sourcing, energy-efficient processes, and
          waste reduction initiatives. Our Integrated Rice Plant is designed to
          optimize resource use while ensuring the highest quality standards 
          for our edible oils. We believe that true purity extends beyond our 
          products to include our commitment to the planet and future 
          generations.
        </p>
      </div>

    </div>
  );
}
