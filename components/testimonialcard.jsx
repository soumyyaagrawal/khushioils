"use client";

import Image from "next/image";
import { Star } from "lucide-react";

export default function TestimonialCard({
  stars = 5,              // default 5 stars
  text,
  name,
  location,
  image,
}) {
  return (
    <div className="max-w-md p-6 bg-white rounded-2xl shadow-lg ml-8">
      {/* Stars */}
      <div className="flex gap-1 mb-3">
        {[...Array(stars)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 mb-6 leading-relaxed">{text}</p>

      {/* Profile Section */}
      <div className="flex items-center gap-3">
        <Image
          src={image}
          alt={name}
          width={60}       // LITTLE BIGGER IMAGE
          height={64}
          className="rounded-full object-cover"   // PERFECT CIRCLE
        />
        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
    </div>
  );
}
