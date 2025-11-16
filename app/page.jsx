import Image from "next/image";
import React from "react";
import Home from "./home.jsx";
import Intro from "./intro.jsx";
import Products from "./products.jsx";
import Navbar from '@/components/navbar';
import Whyus from "./whyus.jsx";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Home />
      <Intro />
      <Products />
      <Whyus />
    </div>
  );
}
