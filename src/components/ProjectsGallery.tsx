
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

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
    description: "Featured by VRChat for Spookality 2024",
    link: "https://vrchat.com/home/launch?worldId=wrld_7482338d-40b9-4c8d-92fb-bc1623e7122f"
  }
];

export const ProjectsGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("VRChat Worlds");
  const [slideshowIndices, setSlideshowIndices] = useState<Record<number, number>>({});
  const [currentImages, setCurrentImages] = useState<Record<number, string>>({});
  const [previousImages, setPreviousImages] = useState<Record<number, string>>({});
  const [isFading, setIsFading] = useState<Record<number, boolean>>({});
  
  const slideshowIntervals = useRef<Record<number, NodeJS.Timeout>>({});
  
  const categories = ["VRChat Worlds", "Free Tools", "Digital Marketplace", "Content Creation"];
  
  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  useEffect(() => {
    const initialIndices: Record<number, number> = {};
    const initialCurrentImages: Record<number, string> = {};
    
    images.forEach(img => {
      if (img.slideshow && img.slideshow.length > 0) {
        initialIndices[img.id] = 0;
        initialCurrentImages[img.id] = img.slideshow[0];
      }
    });
    
    setSlideshowIndices(initialIndices);
    setCurrentImages(initialCurrentImages);
    
    return () => {
      Object.values(slideshowIntervals.current).forEach(interval => {
        clearInterval(interval);
      });
    };
  }, []);

  const startSlideshow = (imageId: number) => {
    if (slideshowIntervals.current[imageId]) {
      clearInterval(slideshowIntervals.current[imageId]);
    }
    
    const image = images.find(img => img.id === imageId);
    if (!image?.slideshow || image.slideshow.length <= 1) return;
    
    // Trigger first transition immediately
    setSlideshowIndices(prev => {
      const currentIndex = prev[imageId] || 0;
      const nextIndex = (currentIndex + 1) % image.slideshow!.length;
      
      setPreviousImages(prev => ({
        ...prev,
        [imageId]: image.slideshow![currentIndex]
      }));
      
      setIsFading(prev => ({
        ...prev,
        [imageId]: true
      }));
      
      setCurrentImages(prev => ({
        ...prev,
        [imageId]: image.slideshow![nextIndex]
      }));
      
      setTimeout(() => {
        setIsFading(prev => ({
          ...prev,
          [imageId]: false
        }));
      }, 500);
      
      return { ...prev, [imageId]: nextIndex };
    });
    
    // Set up interval for subsequent transitions
    slideshowIntervals.current[imageId] = setInterval(() => {
      setSlideshowIndices(prev => {
        const currentIndex = prev[imageId] || 0;
        const nextIndex = (currentIndex + 1) % image.slideshow!.length;
        
        setPreviousImages(prev => ({
          ...prev,
          [imageId]: image.slideshow![currentIndex]
        }));
        
        setIsFading(prev => ({
          ...prev,
          [imageId]: true
        }));
        
        setCurrentImages(prev => ({
          ...prev,
          [imageId]: image.slideshow![nextIndex]
        }));
        
        setTimeout(() => {
          setIsFading(prev => ({
            ...prev,
            [imageId]: false
          }));
        }, 500);
        
        return { ...prev, [imageId]: nextIndex };
      });
    }, 2000);
  };

  const stopSlideshow = (imageId: number) => {
    if (slideshowIntervals.current[imageId]) {
      clearInterval(slideshowIntervals.current[imageId]);
      delete slideshowIntervals.current[imageId];
    }
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text leading-relaxed"
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
              className="block"
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
              <div className="glass-card hover-glow overflow-hidden">
                <div className="relative aspect-video">
                  {currentImages[project.id] && (
                    <img
                      src={currentImages[project.id]}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-opacity duration-500 ${
                        isFading[project.id] ? 'opacity-0' : 'opacity-100'
                      }`}
                    />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  {project.visits && (
                    <p className="text-sm text-purple-400">Player visits: {project.visits}</p>
                  )}
                  {project.description && (
                    <p className="text-sm text-gray-300 mt-2">{project.description}</p>
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
