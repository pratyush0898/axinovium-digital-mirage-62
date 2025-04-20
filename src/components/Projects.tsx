
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ReactNode } from "react";
import { useToast } from "@/components/ui/use-toast";

interface Project {
  title: string;
  description: ReactNode;
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
  impressionsLink?: string;
  slideshow?: string[];
}

const projects: Project[] = [
  {
    title: "Chromatic Frequency",
    description: <><a href="https://www.labiennale.org/en/cinema/2024/venice-immersive/chromatic-frequency" target="_blank" rel="noopener noreferrer" className="hover:underline">🏆 Featured at the Venice Film Festival 2024, Best of Worlds</a></>,
    longDescription: "This \"digital acid trip\" takes the viewer on a journey through a strange, flooded chasm filled with geometric bismuth-like structures.",
    videoId: "Y8yyFeVs1gs",
    link: "https://vrchat.com/home/launch?worldId=wrld_bff9ded4-af0a-4783-8d24-e0df9625bd79",
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
    link: "https://vrchat.com/home/launch?worldId=wrld_4d0d9c56-716f-4abc-b832-63a80ab5f076",
    category: "VRChat",
    visits: "60,000+",
    impressions: "Over 180k impressions on X",
    impressionsLink: "https://x.com/search?q=%22The%20Writers%20Parlor%22&src=typed_query&f=top"
  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate loading state for demonstration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent, project: Project) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleProjectSelect(project);
    }
  };

  const handleProjectSelect = (project: Project) => {
    try {
      if (project.videoId) {
        setSelectedProject(project);
      } else {
        window.open(project.link, '_blank');
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to open project. Please try again.",
      });
    }
  };

  if (isLoading) {
    return (
      <section className="py-12 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-gray-800 rounded-lg w-1/3 mx-auto"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="h-[500px] bg-gray-800 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-12 bg-black/95">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-7xl font-bold text-center mb-8 py-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text leading-relaxed"
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
              className="min-h-[500px] transition-all duration-300 cursor-pointer"
              onClick={() => handleProjectSelect(project)}
              onKeyDown={(e) => handleKeyPress(e, project)}
              role="button"
              tabIndex={0}
              aria-label={`View project: ${project.title}`}
            >
              <div className="relative h-full">
                <motion.div
                  className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 h-full hover:shadow-[0_0_25px_rgba(255,0,255,0.8)]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <div className="relative bg-gray-900 p-6 rounded-lg h-full flex flex-col">
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-4 h-[300px]">
                      {project.videoId ? (
                        <div className="relative h-full">
                          <div className="absolute inset-0 z-10" />
                          <iframe
                            src={`https://www.youtube.com/embed/${project.videoId}`}
                            title={project.title}
                            className="w-full h-full pointer-events-none"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                          {project.award && (
                            <img
                              src={project.award.image}
                              alt="Award"
                              className="absolute top-1/2 right-2 w-1/4 -translate-y-1/2 hover:scale-105 transition-transform duration-200 z-10"
                            />
                          )}
                        </div>
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-3xl font-semibold text-white mb-2">{project.title}</h3>
                        <div className="text-white text-xl">
                          {project.description}
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
                <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
                <div className="relative">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedProject.videoId}?autoplay=1`}
                    title={selectedProject.title}
                    className="w-full aspect-video rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  {selectedProject.award && (
                    <img
                      src={selectedProject.award.image}
                      alt="Award"
                      className="absolute top-1/2 right-2 w-24 -translate-y-1/2 hover:scale-105 transition-transform duration-200"
                    />
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
