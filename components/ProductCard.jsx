"use client";

import Image from 'next/image';

export default function ProductCard({ img, title, subtitle }) {
  return (
    <div className="relative group w-96 h-64 overflow-hidden rounded-lg [clip-path:inset(0_round_16px)]">

      {/* IMAGE (Next.js Image) */}
      <div className="absolute inset-0">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover block object-bottom transition-transform duration-500 group-hover:scale-110 group-hover:brightness-65"
          sizes="(max-width: 768px) 100vw, 384px"
          style={{ transformOrigin: 'center center' }}
          priority={false}
        />
      </div>

      {/* TEXT OVERLAY */}
      <div
        className="absolute bottom-0 left-0 w-full p-4 flex items-center justify-between translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
      >
        <div className="text-gray-200 text-3xl pointer-events-auto">{title}</div>

        {/* <Image src="/arrow-right.svg" alt="arrow" width={24} height={24} className="transition-transform duration-500 group-hover:translate-x-1 pointer-events-auto"/> */}
      </div>

    </div>
  );
}
