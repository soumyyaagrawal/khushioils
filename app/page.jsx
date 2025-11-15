import Image from "next/image";
import React from "react";
import Home from "./home.jsx";
import WhyUs from "./whyus.jsx";
import Products from "./products.jsx";

export default function Page() {
  return (
    <div>
      <Home />
      <WhyUs />
      <Products />
    </div>
  );
}
