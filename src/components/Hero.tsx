
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

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

// Cursor ripple effect
const CursorRipple = () => {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newRipple = {
        x: e.clientX,
        y: e.clientY,
        id: nextId,
      };
      setRipples((prev) => [...prev, newRipple]);
      setNextId((prev) => prev + 1);

      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
      }, 1000);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [nextId]);

  return (
    <>
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="fixed pointer-events-none w-4 h-4 rounded-full bg-purple-400 -translate-x-1/2 -translate-y-1/2 z-50"
          initial={{ opacity: 0.8, scale: 0 }}
          animate={{ opacity: 0, scale: 4 }}
          transition={{ duration: 1 }}
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
        />
      ))}
    </>
  );
};

export const Hero = () => {
  const particles = Array.from({ length: 50 }, (_, i) => i);
  const videoRef = useRef<HTMLVideoElement>(null);

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
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-transparent">
      <CursorRipple />
      {particles.map((i) => (
        <Particle key={i} index={i} />
      ))}
      
      {/* Background video overlay - updated to be darker */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Using bg-black/60 for a darker overlay on the main background video */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <iframe 
          className="w-full h-full scale-[1.5] object-cover" 
          src="https://www.youtube.com/embed/h13kD1Bga6M?autoplay=1&mute=1&controls=0&loop=1&playlist=h13kD1Bga6M&showinfo=0&rel=0&modestbranding=1" 
          title="Background Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent z-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center z-20"
      >
        {/* Logo container - increased size by 400% */}
        <div className="w-96 h-96 mx-auto mb-8 relative">
          <div className="w-full h-full flex items-center justify-center">
            <img src="/lovable-uploads/b097f846-1de0-4406-b97b-0d93f5e4be35.png" alt="Axinovium Logo" className="w-96 h-96" />
          </div>
        </div>
        
        {/* Removed the Axinovium text header */}
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          AI strategy, immersive virtual spaces, and bold event execution - Let's create the future together.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/30 relative overflow-hidden group"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="relative z-10">Explore the Showcase</span>
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </motion.button>
      </motion.div>
    </section>
  );
};
