"use cliet";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProcessSection from "@/components/ProcessSection";
import Button from "@/components/ButtonLink";
import Image from "next/image";
export default function Process() { return(
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="w-full h-[60vh] relative overflow-hidden">
        <Image
          src="/Process/process.webp"
          alt="Products Banner"
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold tracking-wide">
           Our Process
          </h1>
        </div>
      </div>
          <div className="grid grid-cols-1 mt-12 lg:grid-cols-2 gap-12 lg:gap-24 mb-8">
          
          {/* Left Column: Headline */}
          <div className="flex flex-col justify-center items-center">
            {/* Changed from h1 to h2 for section title semantics */}
            <h2 className="text-6xl ml-16 text-gray-900 leading-tight max-w-lg">
Our mission goes beyond mere product delivery            </h2>
          </div>

          {/* Right Column: Paragraph Text and Button */}
          <div className="flex flex-col max-w-xl justify-start text-lg text-gray-700">
            <p className="mb-4">
              It's about crafting edibles of excellence from start to finish.With modern Oil refineries, an advanced R&D centre, cutting-edge machinery and a skilled workforce. Bhagwati Industries procudes wide range of Rice Bran Oils under the brand name Khushi Rice Bran Oil and Anandam Rice Bran Oil.
            </p>
            
            
            {/* Learn More Button/Link */}
            <Button />
            
          </div>
        </div>
          <ProcessSection />
      <Footer/>
                </div>
            );}