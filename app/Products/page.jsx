"use client";

import Navbar from "@/components/navbar";
import FlagshipCard from "@/components/flagshipcard";
import Footer from "@/components/footer";
import OtherProducts from "@/components/Otherproducts";
import ChooseUs from "@/components/chooseus";


export default function Products() {
  return (
    <div className="min-h-screen bg-white">
        <Navbar />
      
      {/* ------- TOP BANNER IMAGE ------- */}
      <div className="w-full h-[60vh] relative overflow-hidden">
        <img
          src="/Products/productshero.jpg"   // change image here
          alt="Products Banner"
          className="w-full h-full object-cover rounded-3xl"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold tracking-wide">
           Our Premium Products
          </h1>
        </div>
      </div>

<h1 className="text-6xl mt-6 font-semibold text-center">Flagship Products</h1>
<h2 className="text-gray-700 font-semibold text-center max-w-8xl mb-12 ml-6 mt-4">Discover our range of premium edible oils, crafted with care for your family's health.</h2>

        <div className="flex flex-col items-center justify-center md:px-12">
<FlagshipCard
  title="Anandam"
  subtitle="Rice Bran Oil"
  imageSrc="/Products/anandRicebran.png"
  features={["Supports heart health and cholesterol management",
"Delicate flavor that enhances any cuisine",
"Lightweight and free from harmful fats"]}
  description="Perfect harmony of taste and health

With a focus on purity, it is carefully extracted and refined to preserve its natural goodness."
/>

<FlagshipCard
  title="Khushi Gold"
  subtitle="Sunflower Oil"
  imageSrc="/Products/KhushiGoldsunflower.png"
  features={[ "Enriched with Omega 6 and Vitamins A, D, and E for heart health, immunity, and vitality",
"Free from harmful argemone oil, ensuring safety for your family",
"Light, non-sticky, and supports healthy cholesterol levels",
"Advanced refining and antioxidant protection for premium quality and longer shelf life"        ]}
  description="Pure, light, and naturally enriched for your well-being

Made with 100% refined sunflower oil and antioxidants for health, strong bones, and healthy skin"
  reverse={true}  
/>

<FlagshipCard
  title="Khushi Gold"
  subtitle="Rice Bran Oil"
  imageSrc="/Products/KhushiRicebran.png"
  features={["Heart-friendly with good cholesterol properties",
"Rich in antioxidants and phytosterols",
"Anti-ageing benefits for a healthy lifestyle",
"High smoke point, ideal for all types of cooking"]}
  description="Our flagship product designed for the modern Indian kitchen. Double-refined and enriched with oryzanol (13,000 ppm), offering unmatched health benefits while enhancing the taste of every dish."
/>

</div>
<ChooseUs />
<OtherProducts />
<Footer />

      </div>)}