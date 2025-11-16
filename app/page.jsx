import Image from "next/image";
import React from "react";
import Home from "./home.jsx";
import WhyUs from "./whyus.jsx";
import Products from "./products.jsx";
import Navbar from '@/components/navbar';

export default function Page() {
  return (
    <div>
      <Navbar />
      <Home />
      <WhyUs />
      <Products />
    </div>
  );
}
