
import { motion } from "framer-motion";

const services = {
  technology: [
    { title: "AI Consulting and Strategy" },
    { title: "AI Systems Architecture" },
    { title: "AI Automation" },
    { title: "Custom Unity Game Dev Tooling" },
  ],
  content: [
    { title: "Digital Asset Sales" },
    { title: "Video Content Creation" },
    { title: "Tutorial Creation" },
    { title: "Event design, Management and Execution" },
  ],
};

export const Services = () => {
  return (
    <div className="py-16 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text leading-relaxed"
        >
          Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">Technology & Strategy</h3>
            <div className="grid gap-4">
              {services.technology.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="glass-card px-6 py-4 rounded-xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 hover:border-purple-500/40 shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300"
                >
                  <p className="text-white font-medium">{service.title}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">Content & Community</h3>
            <div className="grid gap-4">
              {services.content.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="glass-card px-6 py-4 rounded-xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 hover:border-purple-500/40 shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300"
                >
                  <p className="text-white font-medium">{service.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
