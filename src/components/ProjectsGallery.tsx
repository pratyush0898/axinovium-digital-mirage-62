
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

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
    description: "🏆 Featured by VRChat for Spookality 2024",
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
    description: <span>🏆 <a href="https://www.meshy.ai/collections/Colorful-Furry-ChristmasAdventure-collection-by-Axinovium-0193ccb2-3938-738c-8195-1050793c29f5" className="text-purple-400 hover:text-purple-300 underline" target="_blank" rel="noopener noreferrer">Winner Meshy 2024 Christmas Adventure event</a></span>,
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
    description: <span>A tropical beach with white sand and sparkling opal-like water <br/><span className="font-bold text-[#0FA0CE]"><a href="https://twitter.com/axinovium" target="_blank" rel="noopener noreferrer" className="hover:underline">200k+ Impressions on X</a></span></span>,
    link: "https://vrchat.com/home/launch?worldId=wrld_eca2ddde-f794-4c59-ae3a-4dd5881eb18b"
  }
];

export const ProjectsGallery = () => {
  const [activeCategory, setActiveCategory] = useState("VRChat Worlds");
  const [slideshowIndices, setSlideshowIndices] = useState<Record<number, number>>({});
  const [slideshowActive, setSlideshowActive] = useState<Record<number, boolean>>({});
  
  const slideshowIntervals = useRef<Record<number, NodeJS.Timeout>>({});
  
  const categories = ["VRChat Worlds", "Free Tools", "Digital Marketplace", "Content Creation"];
  
  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  useEffect(() => {
    // Clear all intervals when category changes
    Object.values(slideshowIntervals.current).forEach(interval => {
      clearInterval(interval);
    });
    
    setSlideshowIndices({});
    setSlideshowActive({});
    
    return () => {
      // Clean up all intervals on unmount
      Object.values(slideshowIntervals.current).forEach(interval => {
        clearInterval(interval);
      });
    };
  }, [activeCategory]);

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
    
    // Start with the first image
    setSlideshowIndices(prev => ({
      ...prev,
      [imageId]: 0
    }));
    
    // Set up interval for transitions
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
    
    // Reset to first image
    setSlideshowIndices(prev => ({
      ...prev,
      [imageId]: 0
    }));
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text leading-relaxed"
          id="projects"
        >
          Projects
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
          {filteredImages.map((project) => (
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
              <div className="glass-card hover-glow overflow-hidden h-full flex flex-col">
                <div className="relative aspect-video">
                  <img
                    src={project.slideshow ? 
                      (slideshowActive[project.id] ? 
                        project.slideshow[slideshowIndices[project.id] || 0] : 
                        project.slideshow[0]
                      ) : 
                      project.slideshow?.[0]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <div className="flex flex-col justify-between flex-grow">
                    <div>
                      {project.visits && (
                        <p className="text-sm text-purple-400">Player visits: {project.visits}</p>
                      )}
                      {project.description && (
                        <div className="text-sm text-gray-300 mt-2">{project.description}</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
          
          {filteredImages.length === 0 && activeCategory !== "VRChat Worlds" && (
            <div className="col-span-3 text-center py-10">
              <p className="text-gray-400 text-lg">Coming soon! Check back later for {activeCategory} projects.</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
