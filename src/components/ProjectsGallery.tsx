
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    visits: "62,071",
    link: "https://vrchat.com/home/launch?worldId=wrld_7482338d-40b9-4c8d-92fb-bc1623e7122f"
  },
  {
    id: 2,
    slideshow: [
      "/lovable-uploads/9aae67c2-1f35-46a8-b5b4-e73acb6b1c60.png",
      "/lovable-uploads/3ee605d7-77cf-4ac4-8634-bcd14497e4c7.png"
    ],
    title: "The Writers Parlor",
    category: "VRChat Worlds",
    visits: "60,000",
    description: "Featured by VRChat for Spookality 2024",
    impressions: "Over 180k impressions on X",
    link: "https://vrchat.com/home/launch?worldId=wrld_4d0d9c56-716f-4abc-b832-63a80ab5f076"
  },
  { id: 3, src: "photo-1526374965328-7f61d4dc18c5", title: "Digital Abstract", category: "Free Tools" },
  { id: 4, src: "photo-1470813740244-df37b8c1edcb", title: "Neural Network Art", category: "Digital Marketplace" },
  { id: 5, src: "photo-1487058792275-0ad4aaf24ca7", title: "Virtual Reality Space", category: "Youtube Videos" },
];

export const ProjectsGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("VRChat Worlds");
  const [slideshowIndices, setSlideshowIndices] = useState<Record<number, number>>({});
  
  const categories = ["VRChat Worlds", "Free Tools", "Digital Marketplace", "Youtube Videos"];
  
  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  useEffect(() => {
    // Initialize slideshow indices
    const initialIndices: Record<number, number> = {};
    images.forEach(img => {
      if (img.slideshow) {
        initialIndices[img.id] = 0;
      }
    });
    setSlideshowIndices(initialIndices);
  }, []);

  // Function to handle slideshow rotation
  const startSlideshow = (imageId: number) => {
    if (!images.find(img => img.id === imageId)?.slideshow) return;
    
    const interval = setInterval(() => {
      setSlideshowIndices(prev => {
        const image = images.find(img => img.id === imageId);
        if (!image?.slideshow) return prev;
        
        const currentIndex = prev[imageId] || 0;
        const nextIndex = (currentIndex + 1) % image.slideshow.length;
        
        return { ...prev, [imageId]: nextIndex };
      });
    }, 2000);
    
    return () => clearInterval(interval);
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 py-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          Projects
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center flex-wrap gap-2 mb-10"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeCategory === category 
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/20" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {filteredImages.map((image, index) => (
            <motion.a
              key={image.id}
              href={image.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              onMouseEnter={() => {
                if (image.slideshow) {
                  startSlideshow(image.id);
                }
              }}
              className="cursor-pointer relative group"
            >
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-900 p-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg z-10" />
                
                {image.slideshow ? (
                  <img
                    src={image.slideshow[slideshowIndices[image.id] || 0]}
                    alt={image.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                ) : image.src ? (
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                ) : null}
                
                <div className="absolute inset-0 flex items-end justify-start p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="bg-black/70 backdrop-blur-sm p-2 rounded-md w-full">
                    <h3 className="text-sm font-medium text-white">{image.title}</h3>
                    {image.visits && (
                      <p className="text-xs text-gray-300">Player visits: {image.visits}</p>
                    )}
                    {image.description && (
                      <p className="text-xs text-purple-300">{image.description}</p>
                    )}
                    {image.impressions && (
                      <p className="text-xs text-gray-300">{image.impressions}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-md"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl w-full"
              >
                <img
                  src={`https://source.unsplash.com/${images.find(img => img.id === selectedImage)?.src}`}
                  alt={images.find(img => img.id === selectedImage)?.title}
                  className="w-full h-full object-contain rounded-lg"
                />
                <motion.button
                  className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 text-white"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.7)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
