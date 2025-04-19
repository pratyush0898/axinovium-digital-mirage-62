
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  { id: 1, src: "photo-1518770660439-4636190af475", title: "AI Generated Landscape" },
  { id: 2, src: "photo-1526374965328-7f61d4dc18c5", title: "Digital Abstract" },
  { id: 3, src: "photo-1470813740244-df37b8c1edcb", title: "Neural Network Art" },
  { id: 4, src: "photo-1487058792275-0ad4aaf24ca7", title: "Virtual Reality Space" },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          Visual Highlights
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={`https://source.unsplash.com/${image.src}`}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
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
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
