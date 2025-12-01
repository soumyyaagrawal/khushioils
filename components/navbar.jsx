// components/Navbar.jsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isWhiteBg, setIsWhiteBg] = useState(false);
  const pathname = usePathname();

  // Change navbar text color based on the background behind it
  useEffect(() => {
    const checkBackground = () => {
      const elementBelow = document.elementFromPoint(window.innerWidth / 2, 10); // element under navbar

      if (elementBelow) {
        const bgColor = window.getComputedStyle(elementBelow).backgroundColor;
        // Detect if background is light (white / light gray)
        const isLight = bgColor.includes("255, 255, 255") || bgColor.includes("250, 250, 250");
        setIsWhiteBg(isLight);
      }
    };

    checkBackground();
    window.addEventListener("scroll", checkBackground);
    window.addEventListener("resize", checkBackground);

    return () => {
      window.removeEventListener("scroll", checkBackground);
      window.removeEventListener("resize", checkBackground);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/Aboutus" }, // your intro.jsx page
    { name: "Products", href: "/Products" },
    { name: "Process", href: "/process" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex h-20 items-center justify-between bg-transparent backdrop-blur-md shadow-md rounded-[40px] px-6">
        
        {/* LOGO */}
        <Link href="/" className="cursor-pointer">
          <img src="/BhagwatiLogo.svg" alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* CENTER NAV LINKS */}
        <div className="hidden md:flex flex-grow justify-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-lg font-medium transition duration-200 ${
                isWhiteBg ? "text-gray-900 hover:text-gray-500" : "text-white hover:text-gray-300"
              } ${
                pathname === link.href ? "underline underline-offset-4" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CONTACT BUTTON */}
        <Link
          href="/Contactus"
          className={`rounded-full border px-6 py-2 text-base font-medium transition duration-200 ${
            isWhiteBg
              ? "border-gray-800 text-gray-900 hover:bg-gray-900 hover:text-white"
              : "border-white text-white hover:bg-white hover:text-gray-900"
          }`}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
