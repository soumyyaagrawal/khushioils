"use client";
import Navbar from "@/components/navbar";
import ProgressBar from "@/components/ProgressBar"; 
import ValuesSection from "@/components/valuessection";
import Availability from "@/components/Availability";
import Footer from "@/components/footer";

export default function Aboutus() {
  return (
    <div className="min-h-screen bg-white">
        <Navbar />
      
      {/* ------- TOP BANNER IMAGE ------- */}
      <div className="w-full h-[40vh] relative overflow-hidden">
        <img
          src="/Aboutus.jpg"   // change image here
          alt="About Us Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold tracking-wide">
            About Us
          </h1>
        </div>
      </div>

      {/* ------- MAIN FLEX SECTION ------- */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT: IMAGE */}
        <div className="flex justify-center">
          <img
            src="/Aboutus1.jpg"  // change image here
            alt="Our Team"
            className="rounded-xl shadow-lg w-[90%] h-auto"
          />
        </div>

        {/* RIGHT: TEXT CONTENT */}
        <div>
          {/* <h3 className="text-xl text-gray-500 mb-2">About Us</h3> */}
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            Crafting Purity Since 1978
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            At Bhagwati Industries, we believe in creating products that combine purity, innovation, and sustainability. Established with a vision to promote healthy living, we specialize in producing premium edible oils sourced from our state-of-the-art Integrated Rice Plant. Our journey is fueled by a commitment to quality and a dedication to delivering the best to every home.
          </p>

          {/* BUTTON */}
          <button className="mt-6 rounded-full bg-[#D0F348] px-6 py-3 text-lg font-semibold text-gray-900 align-middle">
                Explore Products <img src="/button.svg" className="inline-block ml-2 hover:animate-pulse hover:rotate-320"/>
            </button>
        </div>

      </section>


<div className="text-black md:px-12">
  {/* Heading + Description */}
  <div className="max-w-7xl ml-48 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
    
    {/* LEFT SIDE */}
    <div>
      <h2 className="text-4xl font-bold leading-tight mb-4">
        Vision and Mission <br /> of Bhagwati Industries
      </h2>
      <p className="text-gray-600 text-md leading-relaxed">
To become a trusted household name for premium edible oils, embodying health, quality, and sustainability.
      </p>
    </div>

    {/* RIGHT SIDE – STATS */}
    <div className="grid grid-cols-2 gap-y-10 text-center z-2">
      <div className="z-2">
        <h3 className="text-4xl font-extrabold">45+</h3>
        <p className="text-gray-600 text-sm mt-2">Years of Excellence</p>
      </div>
      <div>
        <h3 className="text-4xl font-extrabold">1000+</h3>
        <p className="text-gray-600 text-sm mt-2">Retail Store</p>
      </div>
      <div>
        <h3 className="text-4xl font-extrabold">4</h3>
        <p className="text-gray-600 text-sm mt-2">State Locations</p>
      </div>
      <div>
        <h3 className="text-4xl font-extrabold">2</h3>
        <p className="text-gray-600 text-sm mt-2">Process Units</p>
      </div>
    </div>

  </div>
</div>

<div>
      <ProgressBar />
    </div>

<ValuesSection />
<Availability />  
      <Footer />








    </div>
  );
}
