
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX + window.scrollX,
        y: e.clientY + window.scrollY
      });
      setIsVisible(true);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Mouse idle detection
    let idleTimeout: number;
    const handleActivity = () => {
      setIsVisible(true);
      clearTimeout(idleTimeout);
      
      idleTimeout = window.setTimeout(() => {
        setIsVisible(false);
      }, 2000); // Hide after 2 seconds of inactivity
    };
    
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('mousedown', handleActivity);
    
    // Initial activity trigger
    handleActivity();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('mousedown', handleActivity);
      clearTimeout(idleTimeout);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Simple spotlight overlay effect */}
      <motion.div
        className="fixed w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, 
            rgba(217, 70, 239, 0.4) 0%, 
            rgba(217, 70, 239, 0.1) 30%, 
            rgba(0, 0, 0, 0) 70%
          )`,
          mixBlendMode: "screen",
          top: mousePosition.y - window.scrollY - 350,
          left: mousePosition.x - window.scrollX - 350,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease',
          zIndex: 1
        }}
      />
    </div>
  );
};
