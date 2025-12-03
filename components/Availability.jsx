"use client"
import Image from "next/image";

const states = [
  { name: "Chhattisgarh", img:"/Availibility/chhattisgarh.png" },
  { name: "Madhya Pradesh", img:"/Availibility/mp.png" },
  { name: "Odisha", img: "/Availibility/odisha.png" },
  { name: "Maharashtra", img:"/Availibility/maha.png" }
];

export default function Availability() {
  return (
    <section className="bg-[#FAF9F4] py-20">
      <h1 className="text-5xl font-bold text-center">Available Across India</h1>
      <p className="text-center max-w-2xl mx-auto mt-4 text-gray-600">
        Trusted by families across major states — now available on top e-commerce platforms.
      </p>

      {/* Horizontal Cards */}
<div className="overflow-x-auto snap-x snap-mandatory flex justify-center gap-6 px-10 py-14">
        {states.map((state, i) => (
          <div
            key={i}
            className="snap-center min-w-[300px] bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-center"
          >
            <Image src={state.img} loading="lazy" width={100} height={100} alt={state.name} />
            <h2 className="text-xl font-semibold mt-4">{state.name}</h2>
            <p className="text-gray-500 mt-2 text-center">
              Available in retail stores & online
            </p>
          </div>
        ))}
      </div>

      {/* Ecommerce Links */}
      <div className="text-center mt-10">

  <p className="text-gray-600 text-base sm:text-lg">
    Also available on
  </p>

  <div
    className="
      flex justify-center items-center gap-6 sm:gap-12 lg:gap-20 mt-4 flex-wrap"
  >
    <Image
      loading="lazy"
      src="/Availibility/amazon.png"
      alt="Amazon"
      width={280}
      height={30}
      className="w-[120px] sm:w-[180px] md:w-[220px] lg:w-[280px] h-auto"
    />

    <Image
      loading="lazy"
      src="/Availibility/flipkart.png"
      alt="Flipkart"
      width={120}
      height={30}
      className="w-[70px] sm:w-[90px] md:w-[110px] lg:w-[120px] h-auto"
    />
  </div>
</div>

    </section>
  );
}
  