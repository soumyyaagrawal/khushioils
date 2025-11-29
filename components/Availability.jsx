"use client"
import Image from "next/image";

const states = [
  { name: "Chhattisgarh", img: "/states/cg.svg" },
  { name: "Madhya Pradesh", img: "/states/mp.svg" },
  { name: "Odisha", img: "/states/odisha.svg" },
  { name: "Maharashtra", img: "/states/maha.svg" }
];

export default function Availability() {
  return (
    <section className="bg-[#FAF9F4] py-20">
      <h1 className="text-5xl font-bold text-center">Available Across India</h1>
      <p className="text-center max-w-2xl mx-auto mt-4 text-gray-600">
        Trusted by families across major states — now available on top e-commerce platforms.
      </p>

      {/* Horizontal Cards */}
      <div className="overflow-x-auto snap-x snap-mandatory flex gap-6 px-10 py-14">
        {states.map((state, i) => (
          <div
            key={i}
            className="snap-center min-w-[300px] bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-center"
          >
            <Image src={state.img} width={100} height={100} alt={state.name} />
            <h2 className="text-xl font-semibold mt-4">{state.name}</h2>
            <p className="text-gray-500 mt-2 text-center">
              Available in retail stores & online
            </p>
          </div>
        ))}
      </div>

      {/* Ecommerce Links */}
      <div className="text-center mt-10">
        <p className="text-gray-600 text-lg">Also available on</p>
        <div className="flex justify-center gap-6 mt-4">
          <Image src="/amazon.png" width={120} height={40} alt="Amazon" />
          <Image src="/flipkart.png" width={120} height={40} alt="Flipkart" />
        </div>
      </div>
    </section>
  );
}
