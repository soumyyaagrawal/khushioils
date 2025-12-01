"use client";
import Image from "next/image";
export default function Sustainibility() {
  return (
    <div className="w-full min-h-[100vh] bg-white py-16 px-4">


<h1 className="text-5xl font-bold text-center mb-6">Our Commitment to Sustainability</h1>
<h2 className="text-3xl text-green-700 font-semibold text-center mb-4">Powering a Greener Future</h2>
<div className="flex ml-16 mt-9 justify-center items-center mb-12">
    <img src="/sustainibility.webp" loading="lazy" alt="Sustainability Image" className="loading=lazy rounded-xl shadow-lg w-[40%] h-[58vh]"/>
<p className="text-center font-semibold max-w-2xl mx-auto text-gray-700 mb-12">
 At Bhagwati Industries, sustainability is at the core of our operations. We are dedicated to minimizing our environmental impact through responsible sourcing, energy-efficient processes, and waste reduction initiatives. Our Integrated Rice Plant is designed to optimize resource use while ensuring the highest quality standards for our edible oils. We believe that true purity extends beyond our products to include our commitment to the planet and future generations.
</p>
</div>


        </div>
  );
}