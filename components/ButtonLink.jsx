"use client";
import Link from "next/link";

export default function Button() {
  return (
    <Link href="/Products">
      <button className="mt-6 rounded-full bg-[#D0F348] px-6 py-3 text-lg font-semibold text-gray-900 align-middle w-auto">
        Explore Products
        <img
          src="/button.svg"
          className="inline-block ml-8 hover:animate-pulse hover:rotate-320"
        />
      </button>
    </Link>
  );
}
