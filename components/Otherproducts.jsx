"use client";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OtherProducts() {

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

  const images = [
    "/boiledrice.jpg",
    "/boiledswarnarice.jpg",
    "/brokenwhiterice.jpg",
    "/whiterice.jpg",
    "/maize.jpg",
    "/ricebranextract.png",
  ];

  const names = [
    "Boiled Rice",
    "Boiled Swarna Rice",
    "Broken White Rice",
    "White Rice",
    "Maize",
    "Rice Bran Extract",
  ];

  return (
    <section className="page white relative min-h-full py-4 pb-12 overflow-visible">
      <div className="w-full text-black">
        <div className="flex flex-col justify-center items-center mt-0 ">
          <h1 className="text-6xl font-black z-10 p-8 font-semibold">
            Our Other Products
          </h1>
          <h3 className="text-2xl mb-4 text-black font-semibold text-center z-10">
            Explore our complete range of quality products
          </h3>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
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
    </section>
  );
}
