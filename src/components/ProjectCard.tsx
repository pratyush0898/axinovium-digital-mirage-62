
import { motion } from "framer-motion";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index: number;
  animate?: boolean;
}

export const ProjectCard = ({ project, onSelect, index, animate = false }: ProjectCardProps) => {
  const getThumbnail = () => {
    if (project.slideshow && project.slideshow.length > 0) {
      return project.slideshow[0];
    } else if (project.videoId) {
      return `https://img.youtube.com/vi/${project.videoId}/mqdefault.jpg`;
    }
    return "/placeholder.svg";
  };

  const containerVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1
      }
    }
  };

  const borderAnimation = animate ? {
    animate: {
      boxShadow: [
        '0 0 0 2px rgba(139, 92, 246, 0.5)',
        '0 0 0 2px rgba(59, 130, 246, 0.5)',
        '0 0 0 2px rgba(236, 72, 153, 0.5)',
        '0 0 0 2px rgba(16, 185, 129, 0.5)',
        '0 0 0 2px rgba(139, 92, 246, 0.5)',
      ],
    },
    transition: {
      duration: 6.67,
      ease: "linear",
      repeat: Infinity,
    }
  } : {};

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      onClick={() => onSelect(project)}
      className="cursor-pointer bg-gradient-to-br from-[#131313] via-[#1A1A1A] to-[#080808] rounded-xl border border-purple-500/30 hover:shadow-[0_0_25px_rgba(255,0,255,0.3)] transition-shadow duration-300 overflow-hidden"
      {...borderAnimation}
    >
      <div className="aspect-video overflow-hidden relative">
        <img
          src={getThumbnail()}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        
        {project.category && (
          <div className="absolute bottom-2 left-2 px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-xs rounded-full">
            {project.category}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-xl text-white mb-2 line-clamp-1">
          {project.title}
        </h3>
        <div className="text-gray-300 text-sm line-clamp-2">
          {typeof project.description === 'string' ? project.description : 'View project details'}
        </div>
      </div>
    </motion.div>
  );
};
