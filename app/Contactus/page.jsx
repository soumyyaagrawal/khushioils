import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";   

export default function Contactus() {
  return (
    <div className="min-h-screen bg-white">
        <Navbar />
      
      {/* ------- TOP BANNER IMAGE ------- */}
      <div className="w-full h-[40vh] relative overflow-hidden">
        <img
          src="/ContactusPage/Contactus.webp"   // change image here
          alt="Contact Us Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold tracking-wide">
            Contact Us
          </h1>
        </div>
      </div>
<Footer />
      </div>)};
        