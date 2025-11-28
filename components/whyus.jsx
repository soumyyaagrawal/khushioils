import CountUp from "@/components/CountUp.jsx";
import GlassDiv from "@/components/glassdiv";
import WaveDivider from "@/components/wavedivider.jsx";

export default function Whyus() {
  return (
<div>
    <WaveDivider />
    <section id="green" className="page green w-full h-[100vh] bg-gradient-to-br from-green-800 to-green-100 relative">
        

<h1 className="font-semibold text-6xl p-8 ml-126 text-white ">What Sets Us Apart 
   {/* <div className="w-28 h-[3px] my-6 rounded-full bg-gradient-to-r from-green-200 to-green-800 z-10" ></div> */}
</h1>

    <div className="flex flex-row justify-center gap-4 mt-4 ml-0 "> 

  <div 
  // Main card styling: relative for the absolute drop
  className="relative w-100 h-84 p-8 mt-4 bg-gray-200 rounded-4xl shadow-sm hover:shadow-2xl transition-shadow duration-300 overflow-hidden font-semibold"
>
  {/* Content Layer (z-index 10) */}
  <div className="relative z-10 text-gray-900">
    
    {/* Heading */}
    <span className="text-4xl font-bold">
      <CountUp to={1000} />+
    </span>
    Certification
    <br />
    <span className="text-xl font-bold">Certified Quality Standards</span> 
    <br />
    <br />

    {/* Description */}
    <div className="font-semibold"> 
      FSSAI certified and ISO compliant processing ensures every bottle meets the highest quality benchmarks.
      <br/> 
      <br/>

      {/* List (z-index 10 by being in the relative content div) */}
      <ul className="list-disc list-inside text-sm font-semibold">
        <li>FSSAI Approved.</li>
        <li>ISO 22000 Certified.</li>
        <li>GMP Compliant</li>
      </ul>
    </div>
  </div>

  {/* Drop Image Layer (z-index 0) */}
  <img 
    src="/drop.png" 
    alt="A drop of oil" 
    className="
      absolute            
      bottom-3            
      right-0             
      h-[200px]           
      w-auto             
      z-0                 
      opacity-70          
      blur-[5px]             
      scale-150           
      translate-x-1/4     
      translate-y-1/4     
    "
  />
</div>





      <div className="flex flex-col items-center"> 


       <div 
  // Main card styling: relative for the absolute drop
  className="relative w-100 h-32 p-8 mt-4 bg-[#D0F348] rounded-4xl shadow-sm hover:shadow-2xl transition-shadow duration-300 font-bold overflow-hidden"
>
  {/* Content Layer (z-index 10) */}
  <div className="relative z-10 text-gray-900">
    
    {/* Heading */}
    <span className="text-2xl font-bold">
      <CountUp to={1000} />+ 
    </span>
  Farmers
    <br />
    
    <span className="text-3xl font-bold">Farm to Family</span> 
    <br />
    <br />
  </div>

  {/* Drop Image Layer (z-index 0) */}
  <img 
    src="/crop.png" 
    alt="A drop of oil" 
    className="
      absolute            
      bottom-6           
      right-10             
      h-[80px]           
      w-auto             
      z-0                 
      opacity-70          
      blur-[1.5px]             
      scale-150           
      translate-x-1/4     
      translate-y-1/4     
    "
  />
</div>



       <div className="w-100 h-48 p-8 m-4 bg-gray-900 rounded-4xl shadow-sm hover:shadow-2xl transition-shadow duration-300 text-white font-semibold">
<span className="text-4xl font-bold mt-2">
      <CountUp to={500} />+  
    </span>
     Awards
    <br />
    <span className="text-lg font-bold w-70%">Industrial Recognition</span> 
    <br />
    <ul className="list-disc list-inside text-sm">
        <li>Excellence Awards.</li>
        <li>Innovative Leaded.</li>
        <li>Industry Pioneer.</li>
      </ul>

       </div>


      </div>


    <div className="flex flex-col items-center"> 

       <div className="w-100 h-48 p-8 mt-4 bg-[url('/oildrop.png')] bg-cover bg-[position:left_108px_center] font-semibold rounded-4xl shadow-sm text-black hover:shadow-2xl transition-shadow duration-300">
        <span className="text-4xl font-bold mt-2">
      <CountUp to={15} />+ 
    </span>
    Tests
    <br />
    <span className="text-lg font-bold">Rigorous Quality Checks</span> 
    <br />

    <ul className="list-disc list-inside text-sm">
        <li>Purity Analysis.</li>
        <li>Nutritional Testing.</li>
        <li>Quality Control.</li>
      </ul>

       </div>

       
       <div 
  // Main card styling: relative for the absolute drop
  className="relative w-100 h-32 p-8 mt-4 bg-[#D0F348] rounded-4xl shadow-sm hover:shadow-2xl transition-shadow duration-300 font-bold overflow-hidden"
>
  {/* Content Layer (z-index 10) */}
  <div className="relative z-10 text-gray-900">
    
    {/* Heading */}
    <span className="text-2xl font-bold">
      <CountUp to={40} />+ 
    </span>
  Years of Legacy
    <br />
    
    <span className="text-xl font-bold">Trusted by Millions of Families</span> 
    <br />
    <br />
  </div>

  
</div>

      </div>


     

       </div>

        <div className="relative w-318 h-44 p-8 ml-51 mt-2 bg-[#1D5B37] bg-cover bg-[position:bottom_4px_center] rounded-4xl shadow-sm text-white hover:shadow-2xl transition-shadow duration-300">
        <span className="text-4xl font-bold mt-2">
     <span  className="font-semibold">Zero Wastage</span> 
    </span>
    <br />
    <span className="text-lg font-bold">Sustainable Practice</span> 
    <br />
{/* e4bf6e */}
     
<GlassDiv bottom="bottom-8" right="right-17">
  Solar Panel
</GlassDiv>

      <GlassDiv bottom="bottom-8" right="right-57">
  Biofuel Burner
</GlassDiv>

    <GlassDiv bottom=" bottom-20" right="right-38">
  Waste Composting
</GlassDiv>

     <GlassDiv bottom=" bottom-20" right="right-9">
  EV
</GlassDiv>


  
<GlassDiv bottom=" bottom-32" right="right-20">
  Smart Energy
</GlassDiv>




    <ul className="list-disc list-inside text-sm font-semibold">
        <li>Eco-Friendly.</li>
        <li>Carbon Neutral.</li>
        <li>Green Energy.</li>
      </ul>

    

</div>
<br/>
          
    
 </section>
 </div>
  );
}


