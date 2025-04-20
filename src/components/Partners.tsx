
import { motion } from "framer-motion";

const partners = [
  {
    name: "Telos Initiative",
    description: "The Telos Initiative hosts philosophical salons and theatrical Situations in VRChat.",
    image: "/lovable-uploads/a1bcc2f3-650e-4782-8511-c8fcb30cd6a5.png",
    link: "https://vrchat.com/home/group/grp_c87607f7-1688-48dd-86b9-6e49519e92f7"
  },
  {
    name: "Meshy AI",
    description: "A revolutionary platform for AI-generated 3D assets and creative tools for digital artists.",
    image: "/lovable-uploads/e3c42ec4-7a9d-43e4-9d10-14fdbf7dd3c4.png"
  }
];

export const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gradient"
        >
          Our Partners
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {partners.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-6 hover-glow"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <motion.div 
                  className="w-24 h-24 relative flex-shrink-0 mb-4 md:mb-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <motion.img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                    initial={{ filter: "brightness(0.8)" }}
                    whileHover={{ filter: "brightness(1.2)" }}
                  />
                  <motion.div 
                    className="absolute inset-0 rounded-full border-2 border-purple-500/50"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{partner.name}</h3>
                  <p className="text-gray-300">{partner.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
