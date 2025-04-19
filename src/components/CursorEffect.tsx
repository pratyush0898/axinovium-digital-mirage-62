
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
      
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, [isVisible]);

  // Hide when mouse is idle
  useEffect(() => {
    let timeout: number;
    
    const handleMouseActivity = () => {
      setIsVisible(true);
      clearTimeout(timeout);
      
      timeout = window.setTimeout(() => {
        setIsVisible(false);
      }, 5000); // Hide after 5 seconds of inactivity
    };
    
    window.addEventListener('mousemove', handleMouseActivity);
    window.addEventListener('mousedown', handleMouseActivity);
    
    // Initial timeout
    handleMouseActivity();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseActivity);
      window.removeEventListener('mousedown', handleMouseActivity);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="fixed w-40 h-40 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, 
            rgba(139, 92, 246, 0.3) 0%, 
            rgba(79, 70, 229, 0.15) 40%, 
            rgba(219, 39, 119, 0.1) 60%, 
            rgba(0, 0, 0, 0) 70%
          )`,
          backgroundSize: "400% 400%",
          backgroundPosition: "center",
          mixBlendMode: "soft-light",
          top: mousePosition.y - 80,
          left: mousePosition.x - 80,
        }}
        animate={{
          background: [
            `radial-gradient(circle, 
              rgba(139, 92, 246, 0.3) 0%, 
              rgba(79, 70, 229, 0.15) 40%, 
              rgba(219, 39, 119, 0.1) 60%, 
              rgba(0, 0, 0, 0) 70%
            )`,
            `radial-gradient(circle, 
              rgba(219, 39, 119, 0.3) 0%, 
              rgba(139, 92, 246, 0.15) 40%, 
              rgba(79, 70, 229, 0.1) 60%, 
              rgba(0, 0, 0, 0) 70%
            )`,
            `radial-gradient(circle, 
              rgba(79, 70, 229, 0.3) 0%, 
              rgba(219, 39, 119, 0.15) 40%, 
              rgba(139, 92, 246, 0.1) 60%, 
              rgba(0, 0, 0, 0) 70%
            )`,
            `radial-gradient(circle, 
              rgba(139, 92, 246, 0.3) 0%, 
              rgba(79, 70, 229, 0.15) 40%, 
              rgba(219, 39, 119, 0.1) 60%, 
              rgba(0, 0, 0, 0) 70%
            )`,
          ],
        }}
        transition={{
          background: {
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          },
        }}
      />
    </motion.div>
  );
};
