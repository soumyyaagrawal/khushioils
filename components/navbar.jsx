// components/Navbar.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Navbar that switches text color depending on the visible background below it.
 *
 * Behavior:
 * - If sampled background is light (luminance > 0.55) => set isWhiteBg = true => dark nav text (gray-900)
 * - If sampled background is dark => isWhiteBg = false => white nav text
 *
 * Tries to sample color from:
 * 1) topmost elements returned by document.elementsFromPoint(sampleX, sampleY)
 * 2) if element is an <img> or has background-image, attempt to draw image to canvas and sample a pixel
 * 3) fallback to computed backgroundColor if sampling not possible
 *
 * Note: sampling images can fail due to cross-origin; in that case we fallback gracefully.
 */

export default function Navbar() {
  const [isWhiteBg, setIsWhiteBg] = useState(false);
  const pathname = usePathname();
  const navRef = useRef(null);
  let rafIdRef = useRef(null);

  // parse "rgb(...)" or "rgba(...)" or "transparent"
  function parseRgbString(rgbString) {
    if (!rgbString) return null;
    const s = rgbString.trim();

    if (s === "transparent") return { r: 0, g: 0, b: 0, a: 0 };

    const m = s.match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const parts = m[1].split(",").map((p) => p.trim());
    const r = parseInt(parts[0], 10) || 0;
    const g = parseInt(parts[1], 10) || 0;
    const b = parseInt(parts[2], 10) || 0;
    const a = parts[3] !== undefined ? parseFloat(parts[3]) : 1;
    return { r, g, b, a };
  }

  // perceived luminance (0 = black, 1 = white)
  function luminance({ r, g, b }) {
    const srgb = [r / 255, g / 255, b / 255].map((v) =>
      v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
    );
    return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
  }

  // Attempts to sample a pixel color from an <img> element or a CSS background-image.
  // Returns { r,g,b,a } or null on failure.
  async function samplePixelFromImageElement(el, pageX, pageY) {
    try {
      // Resolve image source and coordinates inside the image
      let src = null;
      let imgEl = null;
      if (el.tagName === "IMG") {
        imgEl = el;
        src = el.currentSrc || el.src;
      } else {
        // try CSS background-image url(...)
        const style = window.getComputedStyle(el);
        const bg = style.backgroundImage || "";
        const m = bg.match(/url\(["']?(.*?)["']?\)/);
        if (m && m[1]) {
          src = m[1];
        }
      }

      if (!src) return null;

      // Create an HTMLImageElement we can draw to canvas.
      // Use crossOrigin = 'Anonymous' to attempt CORS-friendly fetch; it will fail for cross-origin images without CORS.
      const image = new Image();
      image.crossOrigin = "Anonymous";
      const loaded = await new Promise((resolve, reject) => {
        image.onload = () => resolve(true);
        image.onerror = () => resolve(false); // resolve false if cannot load due to CORS or 404
        image.src = src;
      });

      if (!loaded) return null;

      // Compute point relative to the element's box so we know where inside the image to sample
      const elRect = el.getBoundingClientRect();
      // pageX/pageY are client coords already when called; clamp
      const clientX = Math.max(0, Math.min(window.innerWidth - 1, pageX));
      const clientY = Math.max(0, Math.min(window.innerHeight - 1, pageY));
      const relX = clientX - elRect.left;
      const relY = clientY - elRect.top;

      // compute scale / object-fit mapping (we assume 'cover' / center; if background-size/position different, sampling may not match exactly)
      // We'll draw the full image to canvas sized to element width/height and sample the mapped position.
      const canvas = document.createElement("canvas");
      const cw = Math.max(1, Math.round(elRect.width));
      const ch = Math.max(1, Math.round(elRect.height));
      canvas.width = cw;
      canvas.height = ch;
      const ctx = canvas.getContext("2d");

      // draw image stretched to element size (this mirrors object-fit:cover imperfectly but is useful)
      // For <img> elements, better mapping could be done; this approach is a robust fallback.
      ctx.drawImage(image, 0, 0, cw, ch);

      // clamp relX/relY to pixel coords
      const px = Math.round(Math.max(0, Math.min(cw - 1, relX)));
      const py = Math.round(Math.max(0, Math.min(ch - 1, relY)));

      const data = ctx.getImageData(px, py, 1, 1).data;
      return { r: data[0], g: data[1], b: data[2], a: +(data[3] / 255).toFixed(2) };
    } catch (e) {
      // Could fail due to CORS or security restrictions
      return null;
    }
  }

  // Main check function
  async function checkBackground() {
    const navEl = navRef.current;
    if (!navEl || !document.elementsFromPoint) {
      setIsWhiteBg(false);
      return;
    }

    const rect = navEl.getBoundingClientRect();

    // sample at center X of viewport and just below the navbar bottom
    const sampleX = Math.round(window.innerWidth / 2);
    const sampleY = Math.min(Math.round(rect.bottom + 4), window.innerHeight - 1);

    const elements = document.elementsFromPoint(sampleX, sampleY);

    // Iterate through stacked elements to find the first visible meaningful background
    for (const el of elements) {
      // Skip the navbar itself
      if (navEl.contains(el) || el === navEl) continue;

      // Try sampling images/background-image first (best chance to detect dark/light)
      let color = null;

      // If element has background-image or is an IMG, try sampling
      const style = window.getComputedStyle(el);
      const bgImage = style.backgroundImage && style.backgroundImage !== "none";

      if (el.tagName === "IMG" || bgImage) {
        color = await samplePixelFromImageElement(el, sampleX, sampleY);
      }

      // If sampling failed, fallback to computed background-color (solid color or gradient fallback)
      if (!color) {
        try {
          const bg = style.backgroundColor;
          const parsed = parseRgbString(bg);
          if (parsed && parsed.a > 0.03) {
            color = parsed;
          }
        } catch (e) {
          // ignore
        }
      }

      // If we still don't have a useful color, continue to next stacked element
      if (!color) continue;

      // Now decide light vs dark using luminance
      const lum = luminance(color); // 0..1
      // threshold controls when we consider "light". 0.55 is a balanced mid-point.
      const isLight = lum > 0.55;

      setIsWhiteBg(isLight);
      return;
    }

    // If nothing useful found, default to dark-bg (white nav text)
    setIsWhiteBg(false);
  }

  useEffect(() => {
    // Throttled/debounced via requestAnimationFrame
    const onScrollResize = () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(() => {
        checkBackground();
      });
    };

    // initial check
    checkBackground();

    window.addEventListener("scroll", onScrollResize, { passive: true });
    window.addEventListener("resize", onScrollResize);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener("scroll", onScrollResize);
      window.removeEventListener("resize", onScrollResize);
    };
    // re-run when pathname changes
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/Aboutus" },
    { name: "Products", href: "/Products" },
    { name: "Process", href: "/process" },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-50 px-4 sm:px-6 lg:px-8"
    >
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
              } ${pathname === link.href ? "underline underline-offset-4" : ""}`}
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
