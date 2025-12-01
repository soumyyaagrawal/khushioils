// ServicesSection.tsx
"use client";
import { ArrowUpRight } from "lucide-react";

const services = [
  { title: "Furnaces", img: "/services/furnace.jpg", iconBg: "bg-yellow-400" },
  { title: "Central Air Conditioning", img: "/services/air.jpg", iconBg: "bg-red-900" },
  { title: "Tankless Water Heater", img: "/services/water.jpg", iconBg: "bg-red-900" },
  { title: "Underfloor Heating System", img: "/services/floor.jpg", iconBg: "bg-red-900" },
  { title: "New House Plumbing", img: "/services/plumbing.jpg", iconBg: "bg-red-900" },
];

export default function ChooseUs() {
  return (
    <section className="w-full px-12 py-20 bg-[#fdf9f8]">
      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        <div>
          <p className="text-sm uppercase tracking-wider text-gray-500">
            / Services We Offer
          </p>
          <h2 className="text-5xl font-bold leading-tight text-gray-900">
            Certified <br /> Excellence
          </h2>
        </div>

        <div className="mt-6 md:mt-0 max-w-sm text-right">
          <p className="text-gray-600 text-sm mb-3">
            From repairs and installations to preventative maintenance, we’ve got you
            covered. Choose reliability, choose Razor.
          </p>
          <div className="flex justify-end gap-6 text-red-700 font-medium cursor-pointer">
            <p className="hover:underline">View All Services →</p>
            <p className="hover:underline">Call For Booking →</p>
          </div>
        </div>
      </div>

      {/* SERVICE CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="relative group h-72 rounded-xl overflow-hidden bg-cover bg-center shadow-md"
            style={{ backgroundImage: `url(${service.img})` }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>

            {/* Title */}
            <h3 className="absolute bottom-6 left-6 text-white text-lg font-medium z-10">
              {service.title}
            </h3>

            {/* ICON BG CURVE */}
            <div
              className={`absolute bottom-0 right-0 w-14 h-14 rounded-tl-3xl flex items-center justify-center ${service.iconBg}`}
            >
              <ArrowUpRight className="text-white" size={20} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
