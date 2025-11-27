"use client";

import Image from "next/image";
import { Star } from "lucide-react"; // For stars (uses lucide-react)

export default function TestimonialCard() {
  return (
    <div className="max-w-md p-6 bg-white rounded-2xl shadow-lg ml-8">
      {/* Stars */}
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 mb-6 leading-relaxed">
        "WorkNook makes finding a coworking space so easy! I can book a desk in minutes and get
        straight to work. Highly recommend!"
      </p>

      {/* Profile Section */}
      <div className="flex items-center gap-3">
        <Image
          src="/user-placeholder.jpg" // change this to your real image
          alt="Joao M"
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <h3 className="font-semibold text-gray-900">Joao M.</h3>
          <p className="text-sm text-gray-500">Startup Founder</p>
        </div>
      </div>
    </div>
  );
}
