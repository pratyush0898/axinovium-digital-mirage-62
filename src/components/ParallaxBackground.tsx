
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export const ParallaxBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Create different parallax speeds for different elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);  // Slowest
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);  // Medium
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);  // Fastest
  
  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Slow moving background element */}
      <motion.div 
        className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl"
        style={{ y: y1 }}
      />
      
      {/* Medium moving background element */}
      <motion.div 
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"
        style={{ y: y2 }}
      />
      
      {/* Fast moving background element */}
      <motion.div 
        className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/20 rounded-full filter blur-3xl"
        style={{ y: y3 }}
      />

      {/* Extra elements for more visual interest */}
      <motion.div 
        className="absolute top-2/3 right-1/3 w-48 h-48 bg-indigo-500/20 rounded-full filter blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -250]) }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 right-10 w-56 h-56 bg-teal-500/20 rounded-full filter blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
      />
    </div>
  );
};
