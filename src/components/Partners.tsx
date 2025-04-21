
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Particle component for the background
const Particle = ({ index }: { index: number }) => {
  const size = Math.random() * 2 + 1;
  const duration = Math.random() * 10 + 5;
  const initialX = Math.random() * 100;
  const initialY = Math.random() * 100;
  const delay = Math.random() * 3;

  return (
    <motion.div
      className="absolute rounded-full bg-purple-400/20"
      style={{
        width: size,
        height: size,
        left: `${initialX}%`,
        top: `${initialY}%`,
      }}
      animate={{
        y: [0, -20, 0],
        x: [0, Math.random() * 10 - 5, 0],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
};

const partners = [
  {
    name: "Telos Initiative",
    logo: "/lovable-uploads/2ac04193-85f6-4c6c-862a-438f48d4b051.png",
    description: "A visionary conversation group that hosts philosophical Salons and theatrical Situations in VRChat.",
    link: "https://vrchat.com/home/group/grp_c87607f7-1688-48dd-86b9-6e49519e92f7"
  },
  {
    name: "Meshy",
    logo: "/lovable-uploads/2d866918-3c58-48dd-9123-342a542c7b7d.png",
    description: "A revolutionary platform for AI-generated 3D assets and creative tools for digital artists.",
    link: "https://app.meshy.ai/?via=axinovium"
  }
];

export const Partners = () => {
  const particles = Array.from({ length: 30 }, (_, i) => i);

  return (
    <section className="py-12 bg-black relative overflow-hidden">
      {particles.map((i) => (
        <Particle key={i} index={i} />
      ))}
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-8 py-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text leading-relaxed"
        >
          Axinovium Partners
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
                className="glass-card p-8 flex items-center justify-center hover:shadow-[0_0_25px_rgba(255,0,255,0.8)] transition-all duration-300 h-48 group"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-32 object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300"
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
