"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  const [year, setYear] = useState(null);
   useEffect(() => {
    setYear(new Date().getFullYear()); // Runs only on client
  }, []);
  return (
    <footer className="bg-[#111] text-gray-300 pt-16 pb-0 relative">

      {/* TOP SECTION */}
      <div
        className="
          container mx-auto 
          px-6 md:px-10 lg:px-20 
          grid grid-cols-1 md:grid-cols-2 
          gap-12 md:gap-8
        "
      >
        {/* LEFT MESSAGE */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-white">
            Enrich by nature,<br /> trusted by families.
          </h2>

          <p className="mt-4 text-gray-400 max-w-md mx-auto md:mx-0 leading-relaxed text-sm md:text-base">
            100% pure, cold-pressed oils — bringing health and authenticity to every kitchen.
          </p>

          <Link
            href="/Contactus"
            className="
              mt-6 inline-block 
              bg-yellow-500 hover:bg-yellow-600 
              text-black px-5 py-2 rounded-md 
              font-medium transition-all
              text-sm md:text-base
            "
          >
            Get In Touch
          </Link>
        </div>

        {/* RIGHT SECTION (GRID) */}
        <div
          className="
            grid 
            grid-cols-1 sm:grid-cols-2 
            gap-10 md:gap-8 
            text-center sm:text-left
          "
        >
          {/* LOCATION */}
          <div>
            <h3 className="text-white font-semibold mb-2">Location</h3>
            <p className="text-sm leading-relaxed">
              Bhagwati Industries,<br />
              Village - Bemsara,<br />
              Mahasamund (C.G.) – 493445
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold mb-2">Contact</h3>
            <p className="flex justify-center sm:justify-start gap-2 items-center text-sm">
              <Phone className="h-4 w-4" /> +91 9826161357
            </p>
            <p className="flex justify-center sm:justify-start gap-2 items-center text-sm mt-1">
              <Mail className="h-4 w-4" /> bhagwati.solvents@gmail.com
            </p>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-white font-semibold mb-2">Social</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="https://instagram.com" className="hover:text-white transition">Instagram</Link></li>
              <li><Link href="https://linkedin.com" className="hover:text-white transition">LinkedIn</Link></li>
              <li><Link href="https://facebook.com" className="hover:text-white transition">Facebook</Link></li>
            </ul>
          </div>

          {/* HELPFUL LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-2">Helpful Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/Aboutus" className="hover:text-white transition">About</Link></li>
              <li><Link href="/Products" className="hover:text-white transition">Products</Link></li>
              <li><Link href="/Process" className="hover:text-white transition">Process</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-700 my-8 mx-6 md:mx-10 lg:mx-20"></div>

      {/* COPYRIGHT */}
      <div
        className="
          flex flex-col md:flex-row 
          justify-between items-center 
          text-xs md:text-sm 
          px-6 md:px-10 lg:px-20 
          pb-4 gap-2 md:gap-0
          text-center md:text-left
        "
      >
        <p>© {year ?? "2025"} Bhagwati Industries. All Rights Reserved.</p>
        <p className="text-gray-500">Made with ♡ and Purity in India</p>
      </div>

      {/* BACKGROUND IMAGE */}
      <div className="relative w-full h-[200px] sm:h-[230px] md:h-[300px] overflow-hidden">
        <Image
          src="/bg.svg"
          alt="Footer Background"
          fill
          className="object-cover brightness-[0.6] contrast-125"
        />

        <h1
          className="
            absolute inset-0 flex justify-center items-start 
            text-[20vw] md:text-[14vw] 
            font-bold tracking-widest 
            text-white/15 select-none 
            translate-y-[40px] md:translate-y-[50px]
          "
        >
          BHAGWATI
        </h1>
      </div>
    </footer>
  );
}
