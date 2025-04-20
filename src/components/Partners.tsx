
import { motion } from "framer-motion";

const partners = [
  {
    name: "Telos Initiative",
    logo: "/lovable-uploads/-BUApZ3Y_400x400",
    description: "A visionary conversation group that hosts philosophical Salons and theatrical Situations in VRChat.",
    link: "https://vrchat.com/home/group/grp_c87607f7-1688-48dd-86b9-6e49519e92f7"
  },
  {
    name: "Meshy",
    logo: "/lovable-uploads/3ee605d7-77cf-4ac4-8634-bcd14497e4c7.png",
    description: "A revolutionary platform for AI-generated 3D assets and creative tools for digital artists.",
    link: "https://app.meshy.ai/?via=axinovium"
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
            <motion.div
              key={partner.name}
              className="flex flex-col gap-4"
            >
              <motion.a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-8 flex items-center justify-center hover:shadow-[0_0_25px_rgba(255,0,255,0.8)] transition-all duration-300 h-48"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-32 object-contain filter brightness-100 hover:brightness-110 transition-all duration-300"
                />
              </motion.a>
              <p className="text-gray-300 text-center text-sm leading-relaxed font-light">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
