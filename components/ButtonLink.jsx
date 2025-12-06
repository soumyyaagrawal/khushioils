"use client";
import Link from "next/link";
import Image from "next/image";

export default function Button() {
  return (
    <Link href="/products">
      <button className="mt-6 rounded-full bg-[#D0F348] px-6 py-3 text-lg font-semibold text-gray-900 align-middle w-auto">
        Explore Products
        <Image
                  src="/Button.svg"
                  alt="Footer Background"
                 width={36} // Intrinsic width in pixels
      height={36}
          className="inline-block ml-8 hover:animate-pulse hover:rotate-320"
        />
      </button>
    </Link>
  );
}
