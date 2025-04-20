import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Project {
  title: string;
  description: string;
  videoId?: string;
  image?: string;
  link: string;
  category: string;
  award?: {
    image: string;
    link: string;
  };
  longDescription?: string;
  visits?: string;
  impressions?: string;
  slideshow?: string[];
}

const projects: Project[] = [
  {
    title: "Chromatic Frequency",
    description: "🏆 Featured at the Venice Film Festival 2024, Best of Worlds",
    longDescription: "This \"digital acid trip\" takes the viewer on a journey through a strange, flooded chasm filled with geometric bismuth-like structures.",
    videoId: "Y8yyFeVs1gs",
    link: "#",
    category: "VRChat",
    award: {
      image: "/lovable-uploads/84a09bb2-7dc3-44e9-9ef6-bbf3a1258b17.png",
      link: "https://www.labiennale.org/en/cinema/2024/venice-immersive/chromatic-frequency"
    }
  },
  {
    title: "The Writers Parlor",
    description: "A commissioned world showcasing VRChat's literary community",
    longDescription: "Contains fully interactive VR typewriters and books written by the members.",
    image: "/lovable-uploads/babbec86-c371-48cb-9bc4-10e2748b9425.png",
    link: "https://vrchat.com/home/launch?worldId=wrld_4d0d9c56-716f-48abc-b832-63a80ab5f076",
    category: "VRChat",
    visits: "60,000+",
    impressions: "Over 180k impressions on X"
  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-black/95">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text leading-relaxed"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="h-[500px] shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300"
            >
              <div className="relative h-full">
                <motion.div
                  className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-1 h-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <div className="relative bg-gray-900 p-6 rounded-lg h-full flex flex-col">
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                      <div 
                        className="absolute inset-0 z-10 cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                      />
                      {project.videoId ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${project.videoId}`}
                          title={project.title}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <img
                          src={project.image || (project.slideshow && project.slideshow[0])}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                      {project.award && (
                        <a 
                          href={project.award.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute bottom-16 right-4 w-1/4 hover:scale-105 transition-transform duration-200"
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
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-400">{project.description}</p>
                        {project.longDescription && (
                          <p className="text-sm text-gray-500 mt-2">{project.longDescription}</p>
                        )}
                      </div>
                      <div className="mt-auto">
                        {project.visits && (
                          <p className="text-sm text-purple-400 mt-2">Player visits: {project.visits}</p>
                        )}
                        {project.impressions && (
                          <p className="text-sm font-bold text-[#0FA0CE] mt-1">
                            <a 
                              href="https://twitter.com/axinovium" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:underline"
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
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-[90vw] w-[1200px] bg-black/95 border-gray-800">
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <div className="relative">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedProject.videoId}?autoplay=1`}
                  title={selectedProject.title}
                  className="w-full aspect-video rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                {selectedProject.award && (
                  <a 
                    href={selectedProject.award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-16 right-4 w-1/5 hover:scale-105 transition-transform duration-200"
                  >
                    <img
                      src={selectedProject.award.image}
                      alt="Award"
                      className="w-full h-auto"
                    />
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
