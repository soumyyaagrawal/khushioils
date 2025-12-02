"use client";
import Link from "next/link";
import Image from "next/image";

export default function ButtonLink({ href, children }) {
  return (
    <Link href={href}>
      <button className="mt-6 rounded-full bg-[#D0F348] px-6 py-3 text-lg font-semibold text-gray-900 align-middle w-[280px] flex items-center justify-between">
        <span>{children}</span>

        <Image
          src="/button.svg"
          alt="arrow"
          width={22}
          height={22}
          className="ml-4 transition-all hover:scale-110 hover:rotate-12"
        />
      </button>
    </Link>
  );
}
