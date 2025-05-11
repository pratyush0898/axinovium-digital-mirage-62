
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const services = {
  technology: [
    { title: "AI Consulting and Strategy" },
    { title: "AI Systems Architecture" },
    { title: "AI Automation" },
    { title: "Custom Unity Game Dev Tooling" },
  ],
  content: [
    { title: "Digital Asset Sale Consulting" },
    { title: "Video & Tutorial Content Creation" },
    { title: "Event design, Management and Execution" },
    { title: "AI Education and user training" },
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
          className="text-7xl font-bold text-center mb-12 py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text leading-relaxed"
        >
          Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
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
                  className="glass-card px-6 py-4 rounded-xl bg-gradient-to-r from-purple-900/20 to-blue-900/20"
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
                  className="glass-card px-6 py-4 rounded-xl bg-gradient-to-r from-purple-900/20 to-blue-900/20"
                >
                  <p className="text-white font-medium">{service.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 glass-card px-8 py-4"
          >
            <img
              src="/lovable-uploads/84a09bb2-7dc3-44e9-9ef6-bbf3a1258b17.png"
              alt="Venice Award"
              className="w-12 h-12 object-contain"
            />
            <span className="text-white font-semibold">Multi-award winning creativity</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 glass-card px-8 py-4"
          >
            <Check className="w-8 h-8 text-green-500" />
            <span className="text-white font-semibold">700k+ Player World Visits</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
