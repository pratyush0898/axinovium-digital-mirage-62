
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useIsMobile } from "@/hooks/use-mobile";
import { Youtube } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Particle component for the background
const Particle = ({ index }: { index: number }) => {
  const size = Math.random() * 2 + 1;
  const duration = Math.random() * 15 + 10;
  const initialX = Math.random() * 100;
  const initialY = Math.random() * 100;
  const delay = Math.random() * 5;

  return (
    <motion.div
      className="absolute rounded-full bg-purple-400"
      style={{
        width: size,
        height: size,
        left: `${initialX}%`,
        top: `${initialY}%`,
        opacity: 0.3,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, Math.random() * 20 - 10, 0],
        opacity: [0.2, 0.6, 0.2],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
};

interface HeroProps {
  hideSubtitle?: boolean;
  buttonText?: string;
}

export const Hero = ({ hideSubtitle = false, buttonText = "Explore the Showcase" }: HeroProps) => {
  const particles = Array.from({ length: 30 }, (_, i) => i); // Reduced particle count
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollToSection } = useSmoothScroll();
  const isMobile = useIsMobile();
  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false);

  // Function to open YouTube in a dialog
  const openYoutubeDialog = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsVideoDialogOpen(true);
  };

  useEffect(() => {
    // Set up YouTube API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <>
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-black">
        {particles.map((i) => (
          <Particle key={i} index={i} />
        ))}
        
        {/* Background video overlay - solid black background to block matrix effect */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
          {/* Changed to bg-black/30 for a lighter overlay to make the video more visible */}
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <iframe 
            className="w-full h-full scale-[1.5] object-cover" 
            src="https://www.youtube.com/embed/h13kD1Bga6M?autoplay=1&mute=1&controls=0&loop=1&playlist=h13kD1Bga6M&showinfo=0&rel=0&modestbranding=1" 
            title="Background Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        
        {/* YouTube button - moved outside the video container and elevated z-index to ensure clickability */}
        <a 
          href="#"
          onClick={openYoutubeDialog}
          className="absolute bottom-4 right-4 z-30 flex items-center gap-2 bg-black/40 hover:bg-black/60 text-white px-3 py-2 rounded-full backdrop-blur-sm transition-all duration-300 text-sm border border-white/10 cursor-pointer"
        >
          <Youtube size={16} className="text-red-500" />
          <span>View Showcase on YouTube</span>
        </a>
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent z-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center z-20"
        >
          {/* Logo container */}
          <div className={`${isMobile ? 'w-64 h-64' : 'w-96 h-96'} mx-auto mb-8 relative`}>
            <div className="w-full h-full flex items-center justify-center">
              <motion.img 
                src="/lovable-uploads/b097f846-1de0-4406-b97b-0d93f5e4be35.png" 
                alt="Axinovium Logo" 
                className={`${isMobile ? 'w-64 h-64' : 'w-96 h-96'}`}
                animate={{
                  filter: [
                    'hue-rotate(0deg)',
                    'hue-rotate(90deg)',
                    'hue-rotate(180deg)',
                    'hue-rotate(270deg)',
                    'hue-rotate(360deg)',
                  ]
                }}
                transition={{
                  duration: 6.67, // Sped up from 10 to 6.67 (1.5x faster)
                  ease: "linear",
                  repeat: Infinity,
                }}
              />
            </div>
          </div>
          
          {!hideSubtitle && (
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              AI strategy, immersive virtual spaces, and bold event execution - Let's create the future together.
            </motion.p>
          )}
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-base md:text-lg hover:shadow-lg hover:shadow-purple-500/30 relative overflow-hidden group"
            onClick={() => scrollToSection('about')}
          >
            <span className="relative z-10">{buttonText}</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.button>
        </motion.div>
      </section>

      {/* YouTube Video Dialog */}
      <Dialog open={isVideoDialogOpen} onOpenChange={setIsVideoDialogOpen}>
        <DialogContent className="max-w-[90vw] w-[1200px] bg-black/95 border-gray-800">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-4">Axinovium Worlds Showcase</h2>
              <div className="relative">
                <iframe
                  src={`https://www.youtube.com/embed/h13kD1Bga6M?autoplay=1`}
                  title="Axinovium Worlds Showcase"
                  className="w-full aspect-video rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
};
