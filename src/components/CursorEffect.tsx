
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const matrixCharsRef = useRef<HTMLElement[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const throttleTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Matrix characters pool
  const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?";
  
  // Initialize matrix background
  useEffect(() => {
    const initializeMatrix = () => {
      if (!containerRef.current) return;
      
      // Clear existing content
      containerRef.current.innerHTML = '';
      
      // Calculate matrix dimensions with larger cell size for better performance
      const cellSize = 40; // Large cells for better performance
      const columns = Math.ceil(window.innerWidth / cellSize);
      const rows = Math.ceil(window.innerHeight / cellSize);
      
      // Create matrix character elements
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
          const char = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
          const element = document.createElement('div');
          
          element.className = 'absolute text-3xl font-bold';
          element.style.left = `${j * cellSize}px`;
          element.style.top = `${i * cellSize}px`;
          element.style.color = '#D946EF'; // Pink color
          element.style.opacity = '0.01'; // Almost invisible by default
          element.style.transition = 'text-shadow 0.1s ease-out';
          element.textContent = char;
          
          fragment.appendChild(element);
        }
      }
      
      containerRef.current.appendChild(fragment);
      
      // Store references to characters
      matrixCharsRef.current = Array.from(containerRef.current.children) as HTMLElement[];
    };
    
    // Initialize
    initializeMatrix();
    
    // Handle window resize with debounce
    const handleResize = debounce(() => {
      initializeMatrix();
    }, 500);
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle mouse movements
      if (throttleTimerRef.current) return;
      
      throttleTimerRef.current = setTimeout(() => {
        setMousePosition({
          x: e.clientX + window.scrollX,
          y: e.clientY + window.scrollY
        });
        setIsVisible(true);
        
        // Clear throttle
        throttleTimerRef.current = null;
      }, 16); // About 60fps
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (throttleTimerRef.current) {
        clearTimeout(throttleTimerRef.current);
      }
    };
  }, []);
  
  // Animation loop using requestAnimationFrame
  useEffect(() => {
    const updateSpotlightEffect = () => {
      if (!isVisible || !matrixCharsRef.current.length) {
        animationFrameRef.current = requestAnimationFrame(updateSpotlightEffect);
        return;
      }
      
      const { x, y } = mousePosition;
      const spotlightRadius = 350; // Large spotlight radius
      
      // Viewport boundaries with margin for better performance
      const viewportMargin = 400;
      const viewportLeft = window.scrollX - viewportMargin;
      const viewportRight = window.scrollX + window.innerWidth + viewportMargin;
      const viewportTop = window.scrollY - viewportMargin;
      const viewportBottom = window.scrollY + window.innerHeight + viewportMargin;
      
      // Reset any fading characters first
      matrixCharsRef.current.forEach(char => {
        if (char.dataset.fading === 'true') {
          char.style.opacity = '0.01';
          char.style.textShadow = 'none';
          delete char.dataset.fading;
        }
      });
      
      // Process characters within viewport only
      matrixCharsRef.current.forEach(char => {
        const rect = char.getBoundingClientRect();
        const charX = rect.left + window.scrollX + (rect.width / 2);
        const charY = rect.top + window.scrollY + (rect.height / 2);
        
        // Skip if outside viewport plus margin
        if (
          charX < viewportLeft || 
          charX > viewportRight || 
          charY < viewportTop || 
          charY > viewportBottom
        ) {
          return;
        }
        
        // Calculate distance from cursor
        const distance = Math.sqrt(
          Math.pow(charX - x, 2) + 
          Math.pow(charY - y, 2)
        );
        
        // Spotlight effect with smooth falloff
        if (distance < spotlightRadius) {
          const normalizedDistance = distance / spotlightRadius;
          const opacity = Math.max(0.1, 1 - normalizedDistance);
          const glowIntensity = Math.max(5, 15 * (1 - normalizedDistance));
          
          char.style.opacity = opacity.toString();
          char.style.textShadow = `0 0 ${glowIntensity}px #D946EF`;
          
          // Mark for fading
          if (!char.dataset.fading) {
            char.dataset.fading = 'true';
          }
        }
      });
      
      animationFrameRef.current = requestAnimationFrame(updateSpotlightEffect);
    };
    
    // Start animation loop
    animationFrameRef.current = requestAnimationFrame(updateSpotlightEffect);
    
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
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('mousedown', handleActivity);
      clearTimeout(idleTimeout);
    };
  }, [isVisible, mousePosition]);
  
  // Utility function for debounce
  function debounce(func: Function, wait: number) {
    let timeout: ReturnType<typeof setTimeout> | null = null;
    return function(...args: any[]) {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }
  
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Matrix container */}
      <div ref={containerRef} className="absolute inset-0 overflow-hidden"></div>
      
      {/* Spotlight overlay effect */}
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
        }}
      />
    </motion.div>
  );
};
