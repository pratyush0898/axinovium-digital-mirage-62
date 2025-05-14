
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ParallaxBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
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
        className="absolute top-0 left-1/4 w-32 h-32 bg-purple-500/5 rounded-full filter blur-3xl"
        style={{ y: y1 }}
      />
      
      {/* Medium moving background element */}
      <motion.div 
        className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl"
        style={{ y: y2 }}
      />
      
      {/* Fast moving background element */}
      <motion.div 
        className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-pink-500/5 rounded-full filter blur-3xl"
        style={{ y: y3 }}
      />
    </div>
  );
};
