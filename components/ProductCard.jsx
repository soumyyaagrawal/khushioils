"use client";

export default function ProductCard({ img, title, subtitle }) {
  return (
    <div className="relative group w-96 h-64 overflow-hidden rounded-lg [clip-path:inset(0_round_16px)]">

  {/* IMAGE */}
  <img
        src={img}
        alt={title}
        className="
          absolute inset-0
          w-full h-full
          object-cover block object-bottom
          transition-transform duration-500
          group-hover:scale-110 group-hover:brightness-65
        "
        style={{ transformOrigin: "center center" }}
      />

  {/* TEXT OVERLAY */}
  <div
    className="  absolute bottom-0 left-0 w-full p-4
          flex items-center justify-between
          translate-y-full opacity-0
          group-hover:translate-y-0 group-hover:opacity-100
          transition-all duration-500
          pointer-events-none "
  >
    <div className="text-gray-200 text-3xl pointer-events-auto">{title}</div>

    {/* <img src="/arrow-right.svg" className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1 pointer-events-auto"/> */}
  </div>

</div>
  );
}
