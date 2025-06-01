
import { motion } from "framer-motion";
import { Project } from "@/types/project";
import { Film } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index: number;
}

export const ProjectCard = ({ project, onSelect, index }: ProjectCardProps) => {
  const handleClick = (e: React.MouseEvent) => {
    // Don't trigger card click if clicking on a link or any of its children
    const target = e.target as HTMLElement;
    const isLink = target.tagName === 'A' || target.closest('a');
    
    if (isLink) {
      e.stopPropagation();
      return;
    }
    onSelect(project);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="block h-full"
      onClick={handleClick}
    >
      <motion.div
        className="rounded-xl overflow-hidden h-[420px] flex flex-col transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(255,0,255,0.8)] border border-gray-700 bg-gradient-to-br from-purple-900/20 to-blue-900/20 hover:from-purple-900/30 hover:to-blue-900/30"
        whileHover={{ scale: 1.02 }}
        style={{ transition: 'all 0.3s ease' }}
        animate={{
          borderColor: [
            'rgba(168, 85, 247, 0.7)',
            'rgba(59, 130, 246, 0.7)',
            'rgba(236, 72, 153, 0.7)',
            'rgba(168, 85, 247, 0.7)',
          ]
        }}
        transition={{
          borderColor: {
            duration: 6.67,
            ease: "linear",
            repeat: Infinity,
          },
          scale: {
            type: "spring",
            stiffness: 400,
            damping: 10
          }
        }}
      >
        <div className="relative h-44 flex-shrink-0">
          {project.videoId ? (
            <div className="w-full h-full cursor-pointer">
              {project.award && (
                <a
                  href={project.award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-1/2 right-4 w-40 z-50 -translate-y-1/2 transition-transform duration-200 hover:scale-125"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={project.award.image}
                    alt="Award"
                    className="w-full h-full"
                  />
                </a>
              )}
              <div className="relative w-full h-full">
                <iframe
                  src={`https://www.youtube.com/embed/${project.videoId}`}
                  title={project.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
                {/* Transparent overlay to make entire video clickable */}
                <div 
                  className="absolute inset-0 cursor-pointer z-10" 
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelect(project);
                  }}
                  aria-label={`Open ${project.title} in fullscreen`}
                />
              </div>
            </div>
          ) : project.slideshow ? (
            <img
              src={project.slideshow[0]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-purple-900/20">
              <Film className="text-purple-300" size={48} />
            </div>
          )}
          {/* Category tag positioned at bottom-left with less transparency */}
          <div className={`absolute bottom-2 left-2 px-3 py-1 rounded-full text-sm font-medium ${getCategoryStyles(project.category).tag}`}>
            {project.category}
          </div>
        </div>
        <div className="p-4 flex-grow flex flex-col justify-between min-h-0">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">{project.title}</h3>
            <div className="text-white space-y-2">
              {project.visits && (
                <p className="text-sm text-purple-400">Player visits: {project.visits}</p>
              )}
              {project.description && (
                <div className="text-white text-lg leading-relaxed" onClick={(e) => e.stopPropagation()}>
                  {typeof project.description === 'object' ? project.description : project.description}
                </div>
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
      return { tag: "bg-pink-500/70 text-pink-200 border border-pink-500/80" };
    case "Free Tools":
      return { tag: "bg-blue-500/70 text-blue-200 border border-blue-500/80" };
    case "Content Creation":
      return { tag: "bg-green-500/70 text-green-200 border border-green-500/80" };
    case "Community":
      return { tag: "bg-yellow-500/70 text-yellow-200 border border-yellow-500/80" };
    case "Music":
      return { tag: "bg-purple-900/70 text-purple-200 border border-purple-900/80" };
    default:
      return { tag: "bg-purple-500/70 text-purple-200 border border-purple-500/80" };
  }
};
