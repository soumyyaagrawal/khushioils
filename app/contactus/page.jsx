"use client";
import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export default function Contactus() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* ─────── TOP BANNER ─────── */}
      <div className="relative w-full h-[45vh] overflow-hidden">
        <Image
          src="/ContactusPage/Contactus.webp"
          alt="Contact Us Banner"
          fill
          className="object-cover"
          sizes="100vw"
          priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-white text-5xl md:text-6xl font-bold">Contact Us</h1>
            <p className="text-gray-200 mt-3 max-w-lg mx-auto">
              We’re ready to provide the right solution for your needs.
            </p>
          </div>
        </div>
      </div>

      {/* ─────── CONTACT CARD (FLOATING) ─────── */}
      <div className="w-full flex justify-center -mt-24 px-6 mb-32">
        <div className="w-full z-30 max-w-6xl bg-white shadow-2xl rounded-2xl p-12 md:p-16 flex flex-col md:flex-row gap-12">

          {/* LEFT SIDE — INFO */}
          <div className="md:w-1/2 border-b md:border-b-0 md:border-r border-gray-200 pb-10 md:pb-0 md:pr-10">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Get in touch</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
We're here to answer your questions and discuss how we can serve you better.            </p>

            {/* Details */}
            <div className="space-y-6 text-gray-700">

              {/* Office */}
              <div className="flex gap-4">
                <div className="bg-green-100 h-12 text-blue-600 p-3 rounded-full">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="font-bold">Head Office</p>
                  <p className="text-sm text-gray-600">Bhagwati Industries,<br />
Village - Bemsara,<br />
Mahasamund (C.G.) – 493445</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="bg-green-100 h-12 text-blue-600 p-3 rounded-full">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="font-bold">Email Us</p>
                  <p className="text-sm text-gray-600">bhagwati.solvents@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="bg-green-100 h-12 text-blue-600 p-3 rounded-full">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="font-bold">Call Us</p>
                  <p className="text-sm text-gray-600">+91 9826161357</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-10">
              <p className="font-semibold text-gray-900 mb-3">Follow our social media</p>
              <div className="flex gap-5 text-gray-700 text-xl">
                <Instagram className="hover:text-blue-600 cursor-pointer" />
                <Facebook className="hover:text-blue-600 cursor-pointer" />
                <Twitter className="hover:text-blue-600 cursor-pointer" />
                <Youtube className="hover:text-blue-600 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — FORM */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Send us a message</h2>

            <form className="space-y-5">
              {/* Two Column Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="input-style" />
                <input type="text" placeholder="Company" className="input-style" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Phone" className="input-style" />
                <input type="email" placeholder="Email" className="input-style" />
              </div>

              <input type="text" placeholder="Subject" className="input-style" />
              <textarea rows="4" placeholder="Message" className="input-style" />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:scale-105 transition-transform text-white py-3 rounded-full font-medium">
                Send Message →
              </button>

              <a
  href="https://wa.me/9826161357?text=Hello%20Bhagwati%20Industries,%20I%20would%20like%20to%20inquire%20about%20your%20products."
  target="_blank"
  className="w-400 bg-gradient-to-r from-green-500 to-green-700 hover:scale-105 transition-transform text-white py-3 px-9 mb-16 rounded-full font-medium"
>
  Book a call →
</a>

            </form>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
}
