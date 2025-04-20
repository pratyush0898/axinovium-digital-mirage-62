
import { motion } from "framer-motion";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index: number;
}

export const ProjectCard = ({ project, onSelect, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="block h-full"
      onClick={() => onSelect(project)}
    >
      <motion.div
        className="glass-card overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,0,255,0.8)]"
        whileHover={{ scale: 1.05 }}
      >
        <div className="relative aspect-video">
          {project.videoId ? (
            <div className="w-full h-full cursor-pointer">
              <iframe
                src={`https://www.youtube.com/embed/${project.videoId}`}
                title={project.title}
                className="w-full h-full pointer-events-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
              <div className="absolute inset-0 bg-transparent z-20" />
              {project.award && (
                <img
                  src={project.award.image}
                  alt="Award"
                  className="absolute top-1/2 right-2 w-1/4 hover:scale-105 transition-transform duration-200 z-10 -translate-y-1/2"
                />
              )}
            </div>
          ) : (
            <img
              src={project.slideshow?.[0]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${getCategoryStyles(project.category).tag}`}>
            {project.category}
          </div>
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-3xl font-semibold text-white mb-2">{project.title}</h3>
          <div className="flex flex-col justify-between flex-grow">
            <div className="text-white text-xl">
              {project.visits && (
                <p className="text-lg text-purple-400 mt-2">Player visits: {project.visits}</p>
              )}
              {project.description && (
                <div className="text-white mt-2">{project.description}</div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const getCategoryStyles = (category: string) => {
  switch (category) {
    case "VRChat Worlds":
      return { tag: "bg-pink-500/20 text-pink-200" };
    case "Free Tools":
      return { tag: "bg-blue-500/20 text-blue-200" };
    case "Content Creation":
      return { tag: "bg-green-500/20 text-green-200" };
    default:
      return { tag: "bg-purple-500/20 text-purple-200" };
  }
};
