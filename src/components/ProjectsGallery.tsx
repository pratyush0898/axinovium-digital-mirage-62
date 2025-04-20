
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Define the Project type that was missing
type Project = {
  id: number;
  slideshow?: string[];
  title: string;
  category: string;
  visits?: string;
  description?: React.ReactNode;
  link: string;
  videoId?: string;
};

const images = [
  {
    id: 1,
    slideshow: [
      "/lovable-uploads/3fc501d4-453c-48bc-a4dc-47ccc1cda170.png",
      "/lovable-uploads/27556d3b-f65b-4216-a1f8-08448be0a811.png",
      "/lovable-uploads/582f1fc5-4d6e-461e-a7fc-1e7c84c65309.png"
    ],
    title: "The Old Cemetery",
    category: "VRChat Worlds",
    visits: "60,000+",
    description: <>🏆 Featured by VRChat for Spookality 2024 <br/><span className="font-bold text-[#0FA0CE]"><a href="https://x.com/search?q=%22The%20Old%20Cemetery%22%20Axinovium&src=typed_query" target="_blank" rel="noopener noreferrer" className="hover:underline">100k+ Impressions on X</a></span></>,
    link: "https://vrchat.com/home/launch?worldId=wrld_7482338d-40b9-4c8d-92fb-bc1623e7122f"
  },
  {
    id: 2,
    slideshow: [
      "/lovable-uploads/ee2ba1d7-900b-4495-8621-807c6c03310f.png",
      "/lovable-uploads/debfe5e2-da8f-4175-a8f5-5dcbb4a5c8cb.png",
      "/lovable-uploads/2a27a6d8-18b1-4d2a-b0b9-61c26b2264ce.png",
      "/lovable-uploads/5d81b536-e241-4f42-b786-9e325dec7fa5.png",
      "/lovable-uploads/ddaf6bbf-4c95-4d6a-b0f9-80363e46330d.png"
    ],
    title: "Warm With You",
    category: "VRChat Worlds",
    description: <>A cozy Christmas bedroom in the Swiss Alps<br/>🏆 <a href="https://www.meshy.ai/collections/Colorful-Furry-ChristmasAdventure-collection-by-Axinovium-0193ccb2-3938-738c-8195-1050793c29f5" className="text-purple-400 hover:text-purple-300 underline" target="_blank" rel="noopener noreferrer">Winner Meshy 2024 Christmas Adventure event</a></>,
    link: "https://vrchat.com/home/launch?worldId=wrld_741c199d-ee56-46b4-9488-e99150847974"
  },
  {
    id: 3,
    slideshow: [
      "/lovable-uploads/ebc49ac0-e46c-401c-8b0a-d49a5619172c.png",
      "/lovable-uploads/85f7aef3-6107-482b-be4f-e4dc90559920.png",
      "/lovable-uploads/c9b972bd-0fa4-4763-a0cf-3ed848552340.png",
      "/lovable-uploads/da08b244-37ce-4683-81c7-aa7621bdf289.png"
    ],
    title: "Opal Bay",
    category: "VRChat Worlds",
    visits: "130k",
    description: <span>A tropical beach with white sand and sparkling opal-like water <br/><span className="font-bold text-[#0FA0CE]"><a href="https://x.com/search?q=%22Opal%20Bay%22%20Axinovium&src=typed_query" target="_blank" rel="noopener noreferrer" className="hover:underline">200k+ Impressions on X</a></span></span>,
    link: "https://vrchat.com/home/launch?worldId=wrld_eca2ddde-f794-4c59-ae3a-4dd5881eb18b"
  },
  {
    id: 4,
    slideshow: [
      "/lovable-uploads/946741e4-08ba-4910-a127-6a40c8e086bf.png",
      "/lovable-uploads/afa862c3-b65c-4c43-aea1-085ff0a409c7.png",
      "/lovable-uploads/b338aed7-e9b7-41cd-87b6-7ee5562c3d14.png",
      "/lovable-uploads/4d599d75-cedc-4c1c-a0e3-765d43163e6a.png"
    ],
    title: "Meshy Fanhub",
    category: "VRChat Worlds",
    description: <>A commissioned world showcasing Meshy AI 3D Model Gen for VRChat Avatars and Worlds, with examples and tutorials.<br/><a href="https://www.youtube.com/watch?v=-V_93GThVdU" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">Showcase video link</a></>,
    link: "https://vrchat.com/home/launch"
  }
];

export const ProjectsGallery = () => {
  const [activeCategory, setActiveCategory] = useState("VRChat Worlds");
  const [slideshowIndices, setSlideshowIndices] = useState<Record<number, number>>({});
  const [slideshowActive, setSlideshowActive] = useState<Record<number, boolean>>({});
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const slideshowIntervals = useRef<Record<number, NodeJS.Timeout>>({});

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "VRChat Worlds":
        return {
          border: "border-pink-500/30",
          tag: "bg-pink-500/20 text-pink-200",
          hover: "hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]"
        };
      case "Free Tools":
        return {
          border: "border-blue-500/30",
          tag: "bg-blue-500/20 text-blue-200",
          hover: "hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
        };
      case "Content Creation":
        return {
          border: "border-green-500/30",
          tag: "bg-green-500/20 text-green-200",
          hover: "hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]"
        };
      default:
        return {
          border: "border-purple-500/30",
          tag: "bg-purple-500/20 text-purple-200",
          hover: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]"
        };
    }
  };

  const categories = ["VRChat Worlds", "Free Tools", "Digital Marketplace", "Content Creation"];

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const startSlideshow = (imageId: number) => {
    if (slideshowIntervals.current[imageId]) {
      clearInterval(slideshowIntervals.current[imageId]);
    }
    
    const image = images.find(img => img.id === imageId);
    if (!image?.slideshow || image.slideshow.length <= 1) return;
    
    setSlideshowActive(prev => ({
      ...prev,
      [imageId]: true
    }));
    
    setSlideshowIndices(prev => ({
      ...prev,
      [imageId]: 0
    }));
    
    slideshowIntervals.current[imageId] = setInterval(() => {
      setSlideshowIndices(prev => {
        const currentIndex = prev[imageId] || 0;
        const nextIndex = (currentIndex + 1) % image.slideshow!.length;
        return { ...prev, [imageId]: nextIndex };
      });
    }, 2000);
  };

  const stopSlideshow = (imageId: number) => {
    if (slideshowIntervals.current[imageId]) {
      clearInterval(slideshowIntervals.current[imageId]);
      delete slideshowIntervals.current[imageId];
    }
    
    setSlideshowActive(prev => ({
      ...prev,
      [imageId]: false
    }));
    
    setSlideshowIndices(prev => ({
      ...prev,
      [imageId]: 0
    }));
  };

  useEffect(() => {
    Object.values(slideshowIntervals.current).forEach(interval => {
      clearInterval(interval);
    });
    
    setSlideshowIndices({});
    setSlideshowActive({});
    
    return () => {
      Object.values(slideshowIntervals.current).forEach(interval => {
        clearInterval(interval);
      });
    };
  }, [activeCategory]);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text leading-relaxed"
          id="our-projects"
        >
          Our Projects
        </motion.h2>

        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {filteredImages.map((project) => {
            const categoryStyles = getCategoryStyles(project.category);
            
            return (
              <motion.a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => {
                  if (project.slideshow && project.slideshow.length > 1) {
                    startSlideshow(project.id);
                  }
                }}
                onMouseLeave={() => {
                  if (project.slideshow) {
                    stopSlideshow(project.id);
                  }
                }}
              >
                <div className={`glass-card overflow-hidden h-full flex flex-col shadow-[0_0_15px_rgba(139,92,246,0.2)] ${categoryStyles.hover} ${categoryStyles.border} transition-all duration-300`}>
                  <div className="relative aspect-video">
                    <img
                      src={project.slideshow ? 
                        (slideshowActive[project.id] ? 
                          project.slideshow[slideshowIndices[project.id] || 0] : 
                          project.slideshow[0]
                        ) : 
                        project.slideshow?.[0]}
                      alt={project.title}
                      className="w-full h-full object-cover transition-opacity duration-300"
                    />
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${categoryStyles.tag}`}>
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col min-h-[200px]">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <div className="flex flex-col justify-between flex-grow">
                      <div className="text-white text-base">
                        {project.visits && (
                          <p className="text-sm text-purple-400 mt-2">Player visits: {project.visits}</p>
                        )}
                        {project.description && (
                          <div className="text-white mt-2">{project.description}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
          
          {filteredImages.length === 0 && activeCategory !== "VRChat Worlds" && (
            <div className="col-span-3 text-center py-10">
              <p className="text-gray-400 text-lg">Coming soon! Check back later for {activeCategory} projects.</p>
            </div>
          )}
        </motion.div>
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
                <h2 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h2>
                {selectedProject.videoId && (
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedProject.videoId}?autoplay=1`}
                    title={selectedProject.title}
                    className="w-full aspect-video rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
