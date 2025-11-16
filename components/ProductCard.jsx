"use client";

export default function ProductCard({ img, title, subtitle }) {
  return (
    <div className="relative group w-80 h-60 overflow-hidden rounded-xl">

  {/* IMAGE */}
  <img
    src={img}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
    alt="img"
  />

  {/* TEXT OVERLAY */}
  <div
    className="  absolute bottom-0 left-0 w-full p-4
    flex items-center justify-between
    translate-y-full opacity-0
    group-hover:translate-y-0 group-hover:opacity-100
    transition-all duration-500 "
  >
    <div className="text-gray-200 text-3xl">{title}</div>

    <img src="/arrow-right.svg" className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"/>
  </div>

</div>
  );
}
