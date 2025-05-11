
import { motion } from "framer-motion";

export const About = () => {
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
            <h2 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text">
              Axinovium.AI
            </h2>
            <p className="text-gray-300 text-xl leading-relaxed mb-4">
              Independent AI Consultant.<br />
              Creative technologist.<br /> 
              Reality engineer.
            </p>
            <p className="text-gray-300 text-xl leading-relaxed">
              I design intelligent systems and immersive experiences - fusing mind, machine and aesthetics.
            </p>
            <p className="text-gray-300 text-xl leading-relaxed mt-4">
              Based in New Zealand. Operating globally.
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
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <img src="/lovable-uploads/b097f846-1de0-4406-b97b-0d93f5e4be35.png" alt="Axinovium Logo" className="w-20 h-20" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
