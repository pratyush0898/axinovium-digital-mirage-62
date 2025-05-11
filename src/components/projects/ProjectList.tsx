
import { motion } from "framer-motion";
import { Project } from "@/types/project";
import { ProjectCard } from "@/components/ProjectCard";

interface ProjectListProps {
  projects: Project[];
  onSelect: (project: Project) => void;
}

export const ProjectList = ({ projects, onSelect }: ProjectListProps) => {
  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          onSelect={onSelect}
          index={index}
          animate={true} // Add animate prop to enable hue shift on borders
        />
      ))}
    </motion.div>
  );
};
