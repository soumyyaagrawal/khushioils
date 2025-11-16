import InfiniteScroll from "@/components/infinitescroll";
import ShowcaseWrapper from "@/components/cardshowcase";
    export default function Intro() {
  return (
    // 1. Main padding and background
     <>
         <InfiniteScroll />

    <div className="py-20 bg-white"> 

      {/* 2. Content Container: Constrains width and centers the entire section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3. Top Section (Headline and Body Text) using a Grid (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
          
          {/* Left Column: Headline */}
          <div className="flex flex-col justify-start">
            {/* Changed from h1 to h2 for section title semantics */}
            <h2 className="text-6xl text-gray-900 leading-tight max-w-lg">
Enriched with Nature, Trusted by Families            </h2>
          </div>

          {/* Right Column: Paragraph Text and Button */}
          <div className="flex flex-col justify-start text-lg text-gray-700">
            <p className="mb-6">
              At Bhagwati Industries, we believe in creating products that combine purity, innovation, and sustainability. Established with a vision to promote healthy living, we specialize in producing premium edible oils sourced from our state-of-the-art Integrated Rice Plant. Our journey is fueled by a commitment to quality and a dedication to delivering the best to every home.
            </p>
            
            
            {/* Learn More Button/Link */}
            <button className="mt-6 rounded-full bg-[#D0F348] px-6 py-3 text-lg font-semibold text-gray-900 align-middle w-[280px]">
                Explore Products <img src="/button.svg" className="inline-block ml-8 hover:animate-pulse hover:rotate-320"/>
            </button>
          </div>

          
        </div>

        {/* --- Separator Line --- */}
        <div className="border-t border-gray-300 mt-10 mb-10"></div>
        
        {/* 4. Bottom Section (Stats/Metrics) using a Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 pt-10  ">
          
          {/* Stat 1: 100% */}
          <div>
            <img src="/olive-oil (1).png" alt="Satisfaction Icon" className="h-20 w-20  mb-4"/>
            <div className="text-xl font-semibold text-gray-900 mb-2">100% Natural Oils</div>
            <p className="text-sm text-gray-600">
              Our oils are extracted from the finest natural sources, ensuring purity and authentic taste in every drop.
            </p>
          </div>

          {/* Stat 2: 20+ */}
          <div>
            <img src="/leaves.png" alt="leaves Icon" className="h-20 w-20 mb-4"/>
            <div className="text-xl font-semibold text-gray-900 mb-2">Cold Processed Oil</div>
            <p className="text-sm text-gray-600">
             Traditional cold-pressed method preserves natural nutrients, vitamins, and the rich flavor of our oils.
            </p>
            {/* <div className="w-8 h-1 bg-blue-500 mt-6"></div> Bottom Divider */}
          </div>
          
          {/* Stat 3: 160K */}
          <div>
            <img src="/approved.png" alt="Farmer Icon" className="h-20 w-20 mb-4"/>
            <div className="text-xl font-semibold text-gray-900 mb-2">Trusted Since 1985</div>
            <p className="text-sm text-gray-600">
              Four decades of excellence and trust, serving families across India with premium quality cooking oils.
            </p>
          </div>
        </div>
      </div>

       
        
    </div>
    </>
  );
}           