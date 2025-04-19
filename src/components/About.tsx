
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
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              About Axinovium
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Axinovium is an experimental digital studio at the intersection of technology and creativity. 
              We craft immersive experiences, develop AI-powered tools, and push the boundaries of digital art. 
              Our mission is to blend cutting-edge technology with artistic vision to create unforgettable digital experiences.
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
              <motion.div 
                className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1"
                animate={{ rotateZ: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <img src="/lovable-uploads/36e2fa8a-1319-475a-a816-0ab0a910a3d5.png" alt="Axinovium Logo" className="w-20 h-20" />
                </div>
              </motion.div>
              
              {/* Pulsing rings */}
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border-2 border-purple-500/30"
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ scale: 1 + i * 0.3, opacity: [0, 0.5, 0] }}
                  transition={{ 
                    duration: 3, 
                    delay: i * 0.6, 
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
