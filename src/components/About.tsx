
import { motion } from "framer-motion";
import { useState } from "react";

export const About = () => {
  const [logoHovered, setLogoHovered] = useState(false);
  
  return (
    <section id="about" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 md:pr-10"
          >
            <motion.h2 
              className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text"
              animate={{
                filter: [
                  'hue-rotate(0deg)',
                  'hue-rotate(90deg)',
                  'hue-rotate(180deg)',
                  'hue-rotate(270deg)',
                  'hue-rotate(360deg)',
                ]
              }}
              transition={{
                duration: 6.67, // Sped up from 10 to 6.67 (1.5x faster)
                ease: "linear",
                repeat: Infinity,
              }}
              onMouseEnter={() => setLogoHovered(true)}
              onMouseLeave={() => setLogoHovered(false)}
            >
              Axinovium.AI
            </motion.h2>
            <p className="text-gray-300 text-xl leading-relaxed mb-4">
              Independent AI Consultant.<br />
              Creative Technologist.<br /> 
              Reality Engineer.
            </p>
            <p className="text-gray-300 text-xl leading-relaxed">
              In an era defined by technological acceleration and adaptation, I move faster than anyone else — fusing mind, machine, and aesthetics to create the future.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              {/* Logo without gradient border */}
              <div className="w-64 h-64 flex items-center justify-center">
                <motion.img 
                  src="/lovable-uploads/b097f846-1de0-4406-b97b-0d93f5e4be35.png" 
                  alt="Axinovium Logo" 
                  className="w-48 h-48" 
                  animate={{
                    filter: [
                      'hue-rotate(0deg)',
                      'hue-rotate(90deg)',
                      'hue-rotate(180deg)',
                      'hue-rotate(270deg)',
                      'hue-rotate(360deg)',
                    ],
                    scale: logoHovered ? 1.2 : 1
                  }}
                  transition={{
                    duration: 6.67, // Sped up from 10 to 6.67 (1.5x faster)
                    ease: "linear",
                    repeat: Infinity,
                    scale: {
                      duration: 0.3,
                      ease: "easeOut"
                    }
                  }}
                  onMouseEnter={() => setLogoHovered(true)}
                  onMouseLeave={() => setLogoHovered(false)}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
