
import { motion } from "framer-motion";
import { Project } from "@/types/project";

interface ProjectsProps {
  featuredProject?: Project;
}

export const Projects = ({ featuredProject }: ProjectsProps) => {
  if (!featuredProject) return null;

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
          Featured Project
        </motion.h2>
        
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 rounded-xl overflow-hidden border-2 border-purple-700/70 shadow-lg hover:shadow-[0_0_25px_rgba(255,0,255,0.8)]"
          >
            <div className="relative aspect-video">
              {featuredProject.videoId && (
                <div className="w-full h-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${featuredProject.videoId}`}
                    title={featuredProject.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                  <div className="absolute inset-0 bg-transparent z-10" />
                </div>
              )}
              {/* Category tag positioned at bottom right of the video */}
              <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full text-sm font-medium bg-purple-500/20 text-purple-200 border border-purple-500/30">
                {featuredProject.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-semibold text-white mb-4">{featuredProject.title}</h3>
              <div className="text-white text-xl mb-4">
                {featuredProject.description && (
                  <div className="text-white">
                    {typeof featuredProject.description === 'object' ? featuredProject.description : featuredProject.description}
                  </div>
                )}
              </div>
              <a 
                href={featuredProject.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded transition-colors"
              >
                Watch Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
