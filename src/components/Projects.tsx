
import { motion } from "framer-motion";
import { Project } from "@/types/project";

interface ProjectsProps {
  featuredProjects?: Project[];
}

export const Projects = ({ featuredProjects }: ProjectsProps) => {
  if (!featuredProjects || featuredProjects.length === 0) return null;

  return (
    <section id="featured-project" className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-12 py-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text leading-relaxed"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900 rounded-xl overflow-hidden border-2 border-purple-700/70 shadow-lg hover:shadow-[0_0_25px_rgba(255,0,255,0.8)] h-full flex flex-col"
            >
              <div className="relative aspect-video">
                {project.videoId && (
                  <div className="w-full h-full">
                    <iframe
                      src={`https://www.youtube.com/embed/${project.videoId}`}
                      title={project.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                    <div className="absolute inset-0 bg-transparent z-10" />
                  </div>
                )}
                {/* Category tag positioned at bottom right of the video */}
                <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full text-sm font-medium bg-purple-500/20 text-purple-200 border border-purple-500/30">
                  {project.category}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-semibold text-white mb-4">{project.title}</h3>
                <div className="text-white flex-grow mb-4">
                  {project.description && (
                    <div className="text-white">
                      {typeof project.description === 'object' ? project.description : project.description}
                    </div>
                  )}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded transition-colors mt-auto"
                >
                  Watch Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
