
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
];

export const Achievements = () => {
  return (
    <div className="py-20 bg-black overflow-hidden">
      <div className="relative">
        <motion.div
          animate={{
            x: [0, -50],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          className="flex gap-6 mb-6"
        >
          {[...achievements, ...achievements].map((achievement, index) => (
            <div
              key={index}
              className="flex-shrink-0 glass-card px-6 py-4 rounded-xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-purple-500/20 p-2">
                  <Check className="w-5 h-5 text-purple-400" />
                </div>
                <p className="text-white font-medium">{achievement.title}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
