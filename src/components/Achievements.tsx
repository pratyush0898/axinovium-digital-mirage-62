
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const achievements = [
  { title: "Award-Winning Projects" },
  { title: "Over 600k Player World Visits" },
  { title: "Digital Asset Sales" },
  { title: "AI Consulting and Strategy" },
  { title: "Video Content Creation" },
  { title: "Custom Game Development Tooling" },
  { title: "Proven Event Management and Execution" },
  { title: "Tutorial Creation" },
  { title: "AI Automation" },
  { title: "AI Systems Architecture" },
];

export const Achievements = () => {
  return (
    <div className="py-10 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex-shrink-0 glass-card px-6 py-4 rounded-xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 cursor-pointer"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-purple-500/20 p-2">
                  <Check className="w-5 h-5 text-purple-400" />
                </div>
                <p className="text-white font-medium">{achievement.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
