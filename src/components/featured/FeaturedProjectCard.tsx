
import { motion } from "framer-motion";
import { FeaturedProject } from "./types";
import { getCategoryStyles } from "./utils";

interface FeaturedProjectCardProps {
  project: FeaturedProject;
  onSelect: (project: FeaturedProject) => void;
}

export const FeaturedProjectCard = ({ project, onSelect }: FeaturedProjectCardProps) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(project);
    }
  };

  // Special rendering for Chromatic Frequency award description
  const renderDescription = () => {
    if (project.title === "Chromatic Frequency" && project.award) {
      return (
        <a 
          href={project.award.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:underline"
        >
          {project.description}
        </a>
      );
    }
    
    return project.description;
  };

  return (
    <div className="relative h-full">
      <motion.div
        className="relative overflow-hidden rounded-xl bg-[#1A1A1A] h-full border-2 hover:shadow-[0_0_25px_rgba(255,0,255,0.8)]"
        whileHover={{ 
          scale: 1.02, 
          transition: { type: "spring", damping: 20 }
        }}
        onClick={() => onSelect(project)}
        onKeyDown={handleKeyPress}
        role="button"
        tabIndex={0}
        aria-label={`View project: ${project.title}`}
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
        <div className="relative p-6 rounded-lg h-full flex flex-col">
          <div className="relative aspect-video rounded-lg overflow-hidden mb-4 h-[400px]">
            {project.videoId && project.videoId !== "undefined" ? (
              <div className="relative h-full">
                <iframe
                  src={`https://www.youtube.com/embed/${project.videoId}`}
                  title={project.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                {/* Transparent overlay to make entire video clickable to open modal */}
                <div 
                  className="absolute inset-0 cursor-pointer z-10" 
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelect(project);
                  }}
                  aria-label={`Open ${project.title} in fullscreen`}
                />
                {project.award && (
                  <a 
                    href={project.award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-1/2 right-2 w-1/4 -translate-y-1/2 hover:scale-105 transition-transform duration-200 z-20"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={project.award.image}
                      alt="Award"
                      className="w-full h-auto"
                    />
                  </a>
                )}
              </div>
            ) : project.slideshow && project.slideshow.length > 0 ? (
              <img
                src={project.slideshow[0]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : null}
            {project.category && (
              <div className={`absolute bottom-2 left-2 px-3 py-1 rounded-full text-sm font-medium ${getCategoryStyles(project.category).tag}`}>
                {project.category}
              </div>
            )}
          </div>
          <div className="flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-semibold text-white mb-2">{project.title}</h3>
              <div className="text-white text-xl" onClick={(e) => e.stopPropagation()}>
                {renderDescription()}
              </div>
              {project.longDescription && (
                <p className="text-lg text-gray-300 mt-2">{project.longDescription}</p>
              )}
            </div>
            <div className="mt-4">
              {project.visits && (
                <p className="text-lg text-purple-400">Player visits: {project.visits}</p>
              )}
              {project.impressions && (
                <p className="text-lg font-bold text-[#0FA0CE]">
                  <a 
                    href={project.impressionsLink || "#"}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.impressions}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
