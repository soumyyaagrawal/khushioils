import React from "react";
import Home from "./home.jsx";
import Navbar from '@/components/navbar';
import Footer from "@/components/footer.jsx";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
