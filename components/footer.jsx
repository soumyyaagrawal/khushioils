"use client";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Instagram, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-300 pt-20 pb-0 relative">

      {/* TOP SECTION: Brand Message */}
      <div className="container mx-auto px-8 md:px-14 lg:px-20 grid md:grid-cols-2 gap-8">
        {/* LEFT MESSAGE */}
        <div>
          <h2 className="text-4xl font-bold leading-snug text-white">
            Enrich by nature,<br /> trusted by families.
          </h2>
          <p className="mt-4 text-gray-400 max-w-md leading-relaxed">
            100% pure, cold-pressed oils — bringing health and authenticity to every kitchen.
          </p>
          <Link
            href="/Contactus"
            className="mt-6 inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-5 py-2 rounded-md font-medium transition-all"
          >
            Get In Touch
          </Link>
        </div>

        {/* RIGHT SECTION – LOCATION & CONTACT */}
        <div className="grid grid-cols-2 gap-8 mt-6 md:mt-0">

          <div>
            <h3 className="text-white font-semibold mb-2">Location</h3>
            <p className="text-sm leading-relaxed">
              Bhagwati Industries,<br /> Village - Bemsara,<br />
              Mahasamund (C.G.) – 493445
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">Contact</h3>
            <p className="flex gap-2 items-center text-sm"><Phone className="h-4 w-4" /> +91 9826161357</p>
            <p className="flex gap-2 items-center text-sm"><Mail className="h-4 w-4" /> bhagwati.solvents@gmail.com</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">Social</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="https://instagram.com" className="hover:text-white transition">Instagram</Link></li>
              <li><Link href="https://linkedin.com" className="hover:text-white transition">LinkedIn</Link></li>
              <li><Link href="https://facebook.com" className="hover:text-white transition">Facebook</Link></li>
            </ul>
          </div>

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
      <div className="border-t border-gray-700 my-8"></div>

      {/* COPYRIGHT SECTION */}
      <div className="flex justify-between items-center text-xs md:text-sm px-8 md:px-14 lg:px-20 pb-4">
        <p>© {new Date().getFullYear()} Bhagwati Food Oil. All Rights Reserved.</p>
        <p className="text-gray-500">Made with ♡ and Purity in India</p>
      </div>

     {/* BACKGROUND IMAGE SECTION */}
<div className="relative w-full h-[260px] md:h-[300px] overflow-hidden">
  <Image
    src="/bg.svg" // your background
    alt="Footer Background"
    fill
    className="object-cover brightness-[0.6] contrast-125"
  />

  {/* CROPPED TEXT (show a bit more) */}
  <h1
    className="absolute inset-0 flex justify-center items-start 
    text-[18vw] md:text-[14vw] font-bold tracking-widest 
    text-white/15 select-none translate-y-[50px]"
  >
    BHAGWATI
  </h1>
</div>



    </footer>
  );
}
