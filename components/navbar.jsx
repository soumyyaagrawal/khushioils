// components/Navbar.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Navbar with background luminance detection.
 * Desktop view unchanged. Mobile view improved.
 */

export default function Navbar() {
  const [isWhiteBg, setIsWhiteBg] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef(null);
  let rafIdRef = useRef(null);

  // ---- ALL YOUR SAMPLING & LOGIC (UNCHANGED) ----
  function parseRgbString(rgbString) {
    if (!rgbString) return null;
    const s = rgbString.trim();
    if (s === "transparent") return { r: 0, g: 0, b: 0, a: 0 };
    const m = s.match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const parts = m[1].split(",").map((p) => p.trim());
    return {
      r: parseInt(parts[0], 10) || 0,
      g: parseInt(parts[1], 10) || 0,
      b: parseInt(parts[2], 10) || 0,
      a: parts[3] !== undefined ? parseFloat(parts[3]) : 1,
    };
  }

  function luminance({ r, g, b }) {
    const srgb = [r / 255, g / 255, b / 255].map((v) =>
      v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
    );
    return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
  }

  async function samplePixelFromImageElement(el, pageX, pageY) {
    try {
      let src = null;
      if (el.tagName === "IMG") {
        src = el.currentSrc || el.src;
      } else {
        const style = window.getComputedStyle(el);
        const bg = style.backgroundImage || "";
        const m = bg.match(/url\(["']?(.*?)["']?\)/);
        if (m?.[1]) src = m[1];
      }

      if (!src) return null;

      const image = new Image();
      image.crossOrigin = "Anonymous";

      const loaded = await new Promise((resolve) => {
        image.onload = () => resolve(true);
        image.onerror = () => resolve(false);
        image.src = src;
      });
      if (!loaded) return null;

      const rect = el.getBoundingClientRect();
      const relX = pageX - rect.left;
      const relY = pageY - rect.top;

      const canvas = document.createElement("canvas");
      canvas.width = Math.round(rect.width);
      canvas.height = Math.round(rect.height);

      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      const px = Math.round(Math.max(0, Math.min(canvas.width - 1, relX)));
      const py = Math.round(Math.max(0, Math.min(canvas.height - 1, relY)));

      const data = ctx.getImageData(px, py, 1, 1).data;
      return { r: data[0], g: data[1], b: data[2], a: +(data[3] / 255).toFixed(2) };
    } catch {
      return null;
    }
  }

  async function checkBackground() {
    const navEl = navRef.current;
    if (!navEl) return;

    const rect = navEl.getBoundingClientRect();
    const sampleX = Math.round(window.innerWidth / 2);
    const sampleY = Math.min(Math.round(rect.bottom + 4), window.innerHeight - 1);

    const elements = document.elementsFromPoint(sampleX, sampleY);

    for (const el of elements) {
      if (navEl.contains(el)) continue;

      let color = null;
      const style = window.getComputedStyle(el);
      const bgImage = style.backgroundImage !== "none";

      if (el.tagName === "IMG" || bgImage) {
        color = await samplePixelFromImageElement(el, sampleX, sampleY);
      }

      if (!color) {
        const parsed = parseRgbString(style.backgroundColor);
        if (parsed?.a > 0.03) color = parsed;
      }

      if (!color) continue;

      const lum = luminance(color);
      setIsWhiteBg(lum > 0.55);
      return;
    }

    setIsWhiteBg(false);
  }

  useEffect(() => {
    const handler = () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(checkBackground);
    };

    checkBackground();

    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/Aboutus" },
    { name: "Products", href: "/Products" },
    { name: "Process", href: "/Process" },
  ];

  return (
    <>
      {/* NAVBAR WRAPPER (Desktop unchanged) */}
      <nav
        ref={navRef}
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-50 px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto flex h-20 items-center justify-between bg-transparent backdrop-blur-md shadow-md rounded-[40px] px-6">
          
          {/* LOGO */}
          <Link href="/" className="cursor-pointer">
            <img src="/BhagwatiLogo.png" alt="Logo" className="h-10 w-auto" />
          </Link>

          {/* DESKTOP LINKS (unchanged) */}
          <div className="hidden md:flex flex-grow justify-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg font-medium transition duration-200 ${
                  isWhiteBg
                    ? "text-gray-900 hover:text-gray-500"
                    : "text-white hover:text-gray-300"
                } ${pathname === link.href ? "underline underline-offset-4" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* DESKTOP CONTACT BTN (unchanged) */}
          <Link
            href="/Contactus"
            className={`hidden md:block rounded-full border px-6 py-2 text-base font-medium transition duration-200 ${
              isWhiteBg
                ? "border-gray-800 text-gray-900 hover:bg-gray-900 hover:text-white"
                : "border-white text-white hover:bg-white hover:text-gray-900"
            }`}
          >
            Contact Us
          </Link>

          {/* MOBILE HAMBURGER */}
          <button
            className={`md:hidden p-2 rounded-lg ${
              isWhiteBg ? "text-gray-900" : "text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-black/40 backdrop-blur-sm">
          <div className="absolute left-1/2 -translate-x-1/2 mt-24 w-[calc(100%-2rem)] max-w-6xl bg-white/95 rounded-2xl p-6 shadow-xl">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-900 text-lg py-2"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/Contactus"
                onClick={() => setMobileOpen(false)}
                className="text-center mt-4 rounded-full border border-gray-800 px-4 py-2"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
