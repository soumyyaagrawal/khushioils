import React from "react";
import Home from "./home.jsx";
import Intro from "./Aboutus.jsx";
import Products from "./products.jsx";
import Navbar from '@/components/navbar';
import Whyus from "./whyus.jsx";
import HorizontalScrolling from "@/components/HorizontalScrolling.jsx";
import Testimonials from "./testimonials.jsx";
import Footer from "@/components/footer.jsx";
import Certification from "./certification.jsx";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
