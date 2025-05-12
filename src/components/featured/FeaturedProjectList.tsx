
import { motion } from "framer-motion";
import { FeaturedProject } from "./types";
import { FeaturedProjectCard } from "./FeaturedProjectCard";

interface FeaturedProjectListProps {
  projects: FeaturedProject[];
  onProjectSelect: (project: FeaturedProject) => void;
}

export const FeaturedProjectList = ({ projects, onProjectSelect }: FeaturedProjectListProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="min-h-[700px] transition-all duration-300"
        >
          <FeaturedProjectCard 
            project={project} 
            onSelect={onProjectSelect} 
          />
        </motion.div>
      ))}
    </div>
  );
};
