// components/HorizontalScrollingWrapper.jsx
"use client";

import { useEffect, useState } from "react";
import HorizontalScrollingMobile from "./HorizontalScrollingMobile";
import HorizontalScrolling from "./HorizontalScrolling"; // your existing GSAP file

// Copy your eventsData here exactly as in your desktop file (or import from a shared data file)
const eventsData = [
  {
    eventName: "Khushi Gold",
    eventDate: "Rice Bran Oil",
    imageUrl: "/Products/KhushiRicebran.webp",
    description: "Created for the evolving Indian household..."
  },
  {
    eventName: "Khushi Gold",
    eventDate: "Sunflower Oil",
    imageUrl: "/Products/KhushiGoldsunflower.webp",
    description: "Khushi Gold Sunflower Oil is enriched..."
  },
  {
    eventName: "Anandam",
    eventDate: "Rice Bran Oil",
    imageUrl: "/Products/anandRicebran.webp",
    description: "Anandam Rice Bran Oil is where purity meets..."
  }
];

export default function HorizontalScrollingWrapper(props) {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(null);

  useEffect(() => {
    const check = () => setIsMobileOrTablet(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // avoid SSR hydration mismatch: return nothing until we know width
  if (isMobileOrTablet === null) return null;

  return isMobileOrTablet ? (
    <HorizontalScrollingMobile eventsData={eventsData} {...props} />
  ) : (
    <HorizontalScrolling {...props} />
  );
}
