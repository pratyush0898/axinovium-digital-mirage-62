
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
    image: "/lovable-uploads/fed1fc4b-34d3-404e-8cbf-93ad713a5a50.png",
    link: "https://app.meshy.ai/?via=axinovium"
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
          className="text-6xl font-bold text-center mb-12 py-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text shadow-[0_0_20px_rgba(255,0,255,0.4)]"
        >
          Partners
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {partners.map((partner) => (
            <motion.a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,0,255,0.8)]"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 relative flex-shrink-0 mb-4 md:mb-0">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{partner.name}</h3>
                  <p className="text-white text-lg">{partner.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
