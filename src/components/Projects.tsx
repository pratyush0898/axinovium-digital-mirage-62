import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ReactNode } from "react";
import { useToast } from "@/components/ui/use-toast";

export interface FeaturedProject {
  title: string;
  description: ReactNode;
  videoId: string;
  link: string;
  category?: string;
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

const featuredProjects: FeaturedProject[] = [
  {
    title: "Meshy 2-year Anniversary showcase",
    description: "A scene I created using community models submitted for the Meshy #AroundTheWorld# celebration event. Animated with AI.",
    videoId: "14Kcrj3iAH0",
    link: "https://www.youtube.com/watch?v=14Kcrj3iAH0",
    category: "Content Creation"
  },
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
    videoId: "undefined",
    slideshow: ["/lovable-uploads/babbec86-c371-48cb-9bc4-10e2748b9425.png"],
    link: "https://vrchat.com/home/launch?worldId=wrld_4d0d9c56-716f-4abc-b832-63a80ab5f076",
    category: "VRChat",
    visits: "60,000+",
    impressions: "Over 180k impressions on X",
    impressionsLink: "https://x.com/search?q=%22The%20Writers%20Parlor%22&src=typed_query&f=top"
  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate loading state for demonstration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent, project: FeaturedProject) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleProjectSelect(project);
    }
  };

  const handleProjectSelect = (project: FeaturedProject) => {
    try {
      // Always open the project in the modal dialog if it has a video
      if (project.videoId && project.videoId !== "undefined") {
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
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-gray-800 rounded-lg w-1/3 mx-auto"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-[700px] bg-gray-800 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-7xl font-bold text-center mb-8 py-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text"
          style={{
            backgroundSize: "200% 200%",
            animation: "gradient-animation 6.67s linear infinite",
          }}
        >
          Featured
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="min-h-[700px] transition-all duration-300 cursor-pointer" 
              onClick={() => handleProjectSelect(project)}
              onKeyDown={(e) => handleKeyPress(e, project)}
              role="button"
              tabIndex={0}
              aria-label={`View project: ${project.title}`}
            >
              <div className="relative h-full">
                <motion.div
                  className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#131313] via-[#1A1A1A] to-[#080808] h-full border-2 border-transparent hover:shadow-[0_0_25px_rgba(255,0,255,0.8)]"
                  whileHover={{ 
                    scale: 1.02, 
                    transition: { type: "spring", damping: 20 }
                  }}
                >
                  {/* Apply a pseudo-element for the animated border */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent"
                    style={{
                      background: "linear-gradient(to right, #a855f7, #3b82f6, #ec4899, #a855f7) border-box",
                      maskImage: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                      maskComposite: "exclude",
                      animation: "gradient-border-animation 6.67s linear infinite",
                    }}
                  ></div>
                  
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
                              setSelectedProject(project);
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
                    <a
                      href={selectedProject.award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-1/2 right-2 w-24 -translate-y-1/2 hover:scale-105 transition-transform duration-200 z-20"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img
                        src={selectedProject.award.image}
                        alt="Award"
                        className="w-full h-auto"
                      />
                    </a>
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

const getCategoryStyles = (category: string) => {
  switch (category) {
    case "VRChat Worlds":
    case "VRChat":
      return { tag: "bg-pink-500 text-pink-100 border border-pink-500" };
    case "Free Tools":
      return { tag: "bg-blue-500 text-blue-100 border border-blue-500" }; 
    case "Content Creation":
      return { tag: "bg-green-500 text-green-100 border border-green-500" }; 
    case "Community":
      return { tag: "bg-yellow-500 text-yellow-100 border border-yellow-500" }; 
    default:
      return { tag: "bg-purple-500 text-purple-100 border border-purple-500" }; 
  }
};
