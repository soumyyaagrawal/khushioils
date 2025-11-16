"use client";

export default function ProductCard({ img, title, subtitle }) {
  return (
    <div className="w-full h-[400px] max-w-sm rounded-3xl shadow-lg bg-[gray-200] overflow-hidden transition-all duration-300 hover:shadow-2xl">
      
      {/* Image wrapper for overflow hidden & zoom on hover */}
      <div className="overflow-hidden rounded-3xl mt-2">
        <img
          src={img}
          alt={title}
          className="w-full h-64 object-cover rounded-3xl overflow-hidden transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Text Section */}
      <div className="p-4">
        <h2 className="text-2xl text-green-800">{title}</h2>
        <p className="text-gray-900 text-lg mt-2">{subtitle}</p>
      </div>

    </div>
  );
}
