import { motion } from "framer-motion";

const stats = [
  { label: "100% Quality Testing", icon: "/test.png" },
  { label: "Sustainably Produced", icon: "/tea-leaves.png" },
  { label: "Trusted by Millions", icon: "/trust.png" },
  { label: "Advanced Manufacturing", icon: "/factory.png" },
];

export default function ValuesSection() {
  return (
    <section className="bg-white py-16 text-center">
      <p className="max-w-2xl mx-auto text-gray-600 text-lg mb-12">
        Bhagwati Industries is built on the foundation of quality, sustainability, and trust. 
        From our state-of-the-art facilities to your kitchen, every step is carefully monitored 
        to deliver excellence that families across India have trusted for decades.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <div className="relative w-40 h-40 rounded-full border-2 border-gray-300 flex items-center justify-center">
              <motion.div
                className="absolute inset-0 border-1 border-gray-300 rounded-full"
                style={{ clipPath: "inset(0% 0 0 0)" }} // small arc
              />
              <img src={item.icon} alt="" className="w-16 h-16" />
            </div>
            <p className="mt-3 text-gray-700 font-semibold">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
