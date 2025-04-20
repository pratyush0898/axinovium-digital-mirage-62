
import { motion } from "framer-motion";

const partners = [
  {
    name: "Telos Initiative",
    logo: "/lovable-uploads/fed1fc4b-34d3-404e-8cbf-93ad713a5a50.png",
    link: "https://www.telosinitiative.org/"
  },
  {
    name: "Meshy",
    logo: "/lovable-uploads/3ee605d7-77cf-4ac4-8634-bcd14497e4c7.png",
    link: "https://www.meshy.ai/"
  }
];

export const Partners = () => {
  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-7xl font-bold text-center mb-8 py-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text leading-relaxed"
        >
          Our Partners
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {partners.map((partner) => (
            <motion.a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-8 flex items-center justify-center hover:shadow-[0_0_25px_rgba(255,0,255,0.8)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-24 object-contain filter brightness-100 hover:brightness-110 transition-all duration-300"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
