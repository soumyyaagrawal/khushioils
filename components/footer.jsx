"use client";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
<footer className="relative py-16 mt-20 text-gray-200 text-lg overflow-hidden">
      {/* Footer BG */}
      <Image
  src="/bg.svg"
  alt="Footer background"
  fill
  className="object-cover blur-[7px] absolute inset-0 scale-110 -z-10"
  priority={false}
/>


      <div className="container mx-auto px-8 md:px-14 lg:px-20 relative z-10">

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* LEFT COLUMN – LOGO & TAGLINE */}
          <div className="max-w-sm">
            <Image
              src="/BhagwatiLogo.svg"  // change this
              alt="Bhagwati Oils Logo"
              width={400}
              height={400}
              className="object-contain mb-4"
            />

            <h3 className="text-lg text-yellow-400 font-semibold mt-12 mb-2">
              Enrich by nature, trusted by families
            </h3>

            <p className="text-sm leading-relaxed mb-6">
              100% pure, cold-pressed oils — bringing health and authenticity to every kitchen.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4">
              <Link href="https://instagram.com" target="_blank">
                <Instagram className="w-6 h-6 hover:text-white transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="w-6 h-6 hover:text-white transition-colors" />
              </Link>
              <Link href="https://facebook.com" target="_blank">
                <Facebook className="w-6 h-6 hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          {/* PRODUCTS */}
          <div className="ml-16 ">
            <h3 className="font-semibold text-yellow-400 mb-4">PRODUCTS</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/bhagwati-tin" className="text-[16px] hover:text-white transition-colors">Bhagwati Khushi Tin</Link></li>
              <li><Link href="/anandam-tin" className="text-[16px] hover:text-white transition-colors">Anandam Tin</Link></li>
              <li><Link href="/refined-pouch" className="text-[16px] hover:text-white transition-colors">Refined Oil Pouch</Link></li>
              <li><Link href="/refined-bottle" className="text-[16px] hover:text-white transition-colors">Refined Oil Bottle</Link></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold text-yellow-400 mb-4">COMPANY</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-[16px] hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/our-products" className="text-[16px] hover:text-white transition-colors">Our Products</Link></li>
              <li><Link href="/process" className="text-[16px] hover:text-white transition-colors">Our Process</Link></li>
            </ul>
          </div>

          {/* GET IN TOUCH */}
          <div>
            <h3 className="font-semibold text-yellow-400 mb-4">GET IN TOUCH</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-[16px]">
                <Phone className="w-5 h-5" />
                +91 9826161357
              </li>
              <li className="flex items-center gap-2 text-[16px]">
                <Mail className="w-5 h-5" />
                bhagwati.solvents@gmail.com
              </li>
              <li className="flex items-start gap-2 leading-snug max-w-xs text-[16px]">
                <MapPin className="w-9 h-9" />
                Bhagwati Industries, Village - Bemsara,  
                Mahasamund (C.G.) – 493445
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER LINE */}
        <div className="border-t border-gray-300 mt-10 pt-6 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} Bhagwati Food Oil. All Rights Reserved.  
          
        </div>
      </div>
    </footer>
  );
}
