
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
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text shadow-[0_0_10px_rgba(255,0,255,0.4)]">
              About Axinovium.AI
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              We are an experimental think-tank operating from within virtual reality—united as a global team of futurists, developers, artists, philosophers, and creatives.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Together, we design and execute visionary projects that harness the full potential of AI to construct entirely new realities.
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
                  <img src="/lovable-uploads/36e2fa8a-1319-475a-a816-0ab0a910a3d5.png" alt="Axinovium Logo" className="w-20 h-20" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
