// ServicesSection.tsx
"use client";
import { ArrowUpRight } from "lucide-react";

const services = [
  { title: "Good Oxidative Stability",text:"text-white" , icon: "/Chooseus/goodoxa.png", iconBg: "bg-[#1D5B37]" },
  { title: "Anti Ageing",text:"text-green-900" , icon: "/Chooseus/antiageing.png", iconBg: "bg-[#D0F348]" },
  { title: "Tasty Food",text:"text-white" , icon: "/Chooseus/goodfood.png", iconBg: "bg-[#1D5B37]" },
  { title: "Good Cholesterol", text:"text-green-900" ,icon: "/Chooseus/hdl.png", iconBg: "bg-[#D0F348]" },
  { title: "Good Phytosterols", text:"text-white" , icon: "/Chooseus/phy.png", iconBg: "bg-[#1D5B37]" },
];

export default function ChooseUs() {
  return (
    <section className="w-full px-12 py-20 bg-[#fdf9f8]">
      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        <div>
                <p className="text-md uppercase tracking-wider font-semibold text-gray-900">
                    Why Switch to 
                </p>
          <h2 className="text-5xl font-bold leading-tight text-gray-900">
            Khushi Gold
          </h2>
        </div>

        <div className="mt-6 md:mt-0 max-w-sm text-right">
          <p className="text-gray-600 text-lg font-semibold mb-3">
            Experience the Khushi Gold difference: purity, health, and taste in every drop.
          </p>
          {/* <div className="flex justify-end gap-6 text-red-700 font-medium cursor-pointer">
            <p className="hover:underline">View All Services →</p>
            <p className="hover:underline">Call For Booking →</p>
          </div> */}
        </div>
      </div>

      {/* SERVICE CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`relative group w-auto h-20 rounded-xl overflow-hidden bg-cover bg-center shadow-md  ${service.iconBg} `}
            
          >
            
            {/* Title */}
            <h3 className={`absolute bottom-6 left-6 ${service.text} text-lg font-extrabold z-10`}>
              {service.title}
            </h3>

            {/* ICON BG CURVE */}
            <div
              className={`absolute bottom-0 right-0 w-14 h-14 rounded-tl-3xl flex items-center justify-center bg-[#fdf9f8]`}
            >
              <img src={service.icon} alt={service.title} className="w-16 mb-3 h-16 object-contain" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
