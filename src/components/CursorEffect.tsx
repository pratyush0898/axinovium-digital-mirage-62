
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const matrixRef = useRef<HTMLDivElement>(null);
  
  // Matrix characters
  const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?";

  useEffect(() => {
    // Create matrix effect in background
    const createMatrixBackground = () => {
      if (!matrixRef.current) return;
      
      const columns = Math.floor(window.innerWidth / 20);
      const rows = Math.floor(window.innerHeight / 20);
      
      let matrixHTML = '';
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
          const char = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
          const opacity = Math.random() * 0.1; // Very faint by default
          const left = j * 20;
          const top = i * 20;
          matrixHTML += `<div class="absolute text-sm" style="left: ${left}px; top: ${top}px; opacity: ${opacity}; color: #D946EF;">${char}</div>`;
        }
      }
      
      if (matrixRef.current) {
        matrixRef.current.innerHTML = matrixHTML;
      }
    };
    
    createMatrixBackground();
    window.addEventListener('resize', createMatrixBackground);
    
    return () => {
      window.removeEventListener('resize', createMatrixBackground);
    };
  }, []);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
      
      if (!isVisible) {
        setIsVisible(true);
      }
      
      // Highlight matrix characters near the cursor
      if (matrixRef.current) {
        const characters = matrixRef.current.children;
        for (let i = 0; i < characters.length; i++) {
          const char = characters[i] as HTMLElement;
          const charRect = char.getBoundingClientRect();
          const charX = charRect.left + (charRect.width / 2);
          const charY = charRect.top + (charRect.height / 2);
          
          // Calculate distance to cursor
          const distance = Math.sqrt(
            Math.pow(charX - e.clientX, 2) + 
            Math.pow(charY - e.clientY, 2)
          );
          
          // Highlight characters within 100px of cursor
          if (distance < 100) {
            const opacity = 1 - (distance / 100);
            char.style.opacity = opacity.toString();
            char.style.textShadow = `0 0 ${5 * opacity}px #D946EF`;
          } else {
            char.style.opacity = '0.05';
            char.style.textShadow = 'none';
          }
        }
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
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Matrix background characters */}
      <div ref={matrixRef} className="absolute inset-0 overflow-hidden"></div>
      
      {/* Spotlight highlight effect */}
      <motion.div
        className="fixed w-60 h-60 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, 
            rgba(217, 70, 239, 0.3) 0%, 
            rgba(217, 70, 239, 0.1) 40%, 
            rgba(0, 0, 0, 0) 70%
          )`,
          mixBlendMode: "screen",
          top: mousePosition.y - 120,
          left: mousePosition.x - 120,
        }}
      />
    </motion.div>
  );
};
