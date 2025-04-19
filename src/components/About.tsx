
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
              <img src="/lovable-uploads/36e2fa8a-1319-475a-a816-0ab0a910a3d5.png" alt="Axinovium Logo" className="w-16 h-16" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            About Axinovium
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Axinovium is an experimental digital studio at the intersection of technology and creativity. 
            We craft immersive experiences, develop AI-powered tools, and push the boundaries of digital art. 
            Our mission is to blend cutting-edge technology with artistic vision to create unforgettable digital experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
