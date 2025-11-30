"use client";

import Navbar from "@/components/navbar";
import ProgressBar from "@/components/ProgressBar"; 
import ValuesSection from "@/components/valuessection";
import Availability from "@/components/Availability";
import Footer from "@/components/footer";

export default function Products() {
  return (
    <div className="min-h-screen bg-white">
        <Navbar />
      
      {/* ------- TOP BANNER IMAGE ------- */}
      <div className="w-full h-[40vh] relative overflow-hidden">
        <img
          src="/productshero.jpg"   // change image here
          alt="Products Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold tracking-wide">
            Products
          </h1>
        </div>
      </div>
      </div>)}