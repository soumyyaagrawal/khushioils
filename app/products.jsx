"use client";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import Image from "next/image";


export default function Products() {

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};


const images = ["/boiledrice.jpg","/boiledswarnarice.jpg","/brokenwhiterice.jpg","/whiterice.jpg","/maize.jpg","/ricebranextract.png"];

const names =["Boiled Rice","Boiled Swarna Rice","Broken White Rice","White Rice","Maize","Rice Bran Extract"];

  return (



    <div className="bg-white relative h-[750px] py-20 overflow-visible">
      <div className=" w-full text-black">
        {/* <Image
          src="/industry.webp"
          alt="background"
          height={800}
          width={800}
          className="absolute  top-0 left-0 w-full h-full object-cover opacity-60  blur-[2px] pointer-events-none z-0"
        /> */}

        <div className="flex flex-col justify-center items-center space-y-3">
          <h1 className="text-4xl font-black font-['plusJakartaSans'] z-10 ">
            Our Other Products
            <div className="w-28 h-[3px] mx-auto my-6 rounded-full bg-gradient-to-r from-green-200 to-green-800 z-10" ></div>
          </h1>
          <h3 className="text-2xl text-black font-bold font-['plusJakartaSans'] text-center z-10 ">
            Explore our complete range of quality products
          </h3>
          
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4"
            variants={containerVariants} // 🔥 using variants
            initial="hidden" // 🔥 start state
            whileInView="visible" // 🔥 animate on scroll
            viewport={{ once: false, amount: 0.2 }} // 🔥 THIS GOES HERE
          >

          {names.map((name, index) => (
  <motion.div
    key={index}
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut", delay: index * 0.1 },
      },
    }}
  >
    <ProductCard
      img={images[index]}
      title={name}
      subtitle="Premium quality product"
    />
  </motion.div>
))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
