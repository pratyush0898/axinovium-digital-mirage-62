
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const matrixRef = useRef<HTMLDivElement>(null);
  const matrixCharsRef = useRef<HTMLElement[]>([]);
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);
  const throttledMouseMoveRef = useRef<NodeJS.Timeout | null>(null);
  
  // Matrix characters
  const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?";

  useEffect(() => {
    // Create matrix effect in background
    const createMatrixBackground = () => {
      if (!matrixRef.current) return;
      
      // Significantly reduce density for better performance
      const cellSize = 40; // Doubled cell size
      const columns = Math.floor(window.innerWidth / cellSize);
      const rows = Math.floor(window.innerHeight / cellSize);
      
      let matrixHTML = '';
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
          const char = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
          const opacity = 0.01; // Nearly invisible by default
          const left = j * cellSize;
          const top = i * cellSize;
          matrixHTML += `<div class="matrix-char absolute text-2xl" style="left: ${left}px; top: ${top}px; opacity: ${opacity}; color: #D946EF;">${char}</div>`;
        }
      }
      
      if (matrixRef.current) {
        matrixRef.current.innerHTML = matrixHTML;
        // Store references to all matrix characters
        matrixCharsRef.current = Array.from(matrixRef.current.getElementsByClassName('matrix-char') as HTMLCollectionOf<HTMLElement>);
      }
    };
    
    createMatrixBackground();
    
    const debouncedResize = debounce(() => {
      createMatrixBackground();
    }, 500); // Increased debounce time
    
    window.addEventListener('resize', debouncedResize);
    
    return () => {
      window.removeEventListener('resize', debouncedResize);
      if (throttledMouseMoveRef.current) {
        clearTimeout(throttledMouseMoveRef.current);
      }
    };
  }, []);

  // Debounce function to limit expensive operations
  function debounce(func: Function, wait: number) {
    let timeout: ReturnType<typeof setTimeout> | null = null;
    return function(...args: any[]) {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }

  // Animation frame based cursor effect
  const animateMatrixChars = (time: number) => {
    if (previousTimeRef.current === null) {
      previousTimeRef.current = time;
    }
    
    const deltaTime = time - previousTimeRef.current;
    
    // Only update every 50ms for better performance
    if (deltaTime > 50) {
      previousTimeRef.current = time;
      
      const { x, y } = mousePosition;
      if (!isVisible || !matrixCharsRef.current.length) return;
      
      // Only process visible characters in viewport + margin
      const viewportMargin = 200;
      const viewportLeft = window.scrollX - viewportMargin;
      const viewportRight = window.scrollX + window.innerWidth + viewportMargin;
      const viewportTop = window.scrollY - viewportMargin;
      const viewportBottom = window.scrollY + window.innerHeight + viewportMargin;
      
      // Process all characters at once with a larger radius
      const highlightRadius = 300; // Larger highlight radius for broader effect
      
      // Reset all characters to nearly invisible first
      matrixCharsRef.current.forEach(char => {
        if (char.style.opacity !== '0.01' && !char.dataset.highlighted) {
          char.style.opacity = '0.01';
          char.style.textShadow = 'none';
        }
      });
      
      // Highlight characters within radius of cursor (process all at once)
      matrixCharsRef.current.forEach(char => {
        const rect = char.getBoundingClientRect();
        const charX = rect.left + window.scrollX + (rect.width / 2);
        const charY = rect.top + window.scrollY + (rect.height / 2);
        
        // Skip if outside viewport
        if (
          charX < viewportLeft || 
          charX > viewportRight || 
          charY < viewportTop || 
          charY > viewportBottom
        ) {
          return;
        }
        
        // Calculate distance to cursor
        const distance = Math.sqrt(
          Math.pow(charX - x, 2) + 
          Math.pow(charY - y, 2)
        );
        
        // Highlight characters within radius of cursor
        if (distance < highlightRadius) {
          const opacity = 1 - (distance / highlightRadius);
          char.style.opacity = opacity.toString();
          char.style.textShadow = `0 0 ${5 * opacity}px #D946EF`;
          
          // Mark as highlighted and set a timer to fade it out
          if (!char.dataset.highlighted) {
            char.dataset.highlighted = "true";
            setTimeout(() => {
              if (char) {
                delete char.dataset.highlighted;
                char.style.opacity = '0.01';
                char.style.textShadow = 'none';
              }
            }, 200); // Reduce fade time to 200ms for faster disappearance
          }
        }
      });
    }
    
    requestRef.current = requestAnimationFrame(animateMatrixChars);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle mouse move updates
      if (throttledMouseMoveRef.current) return;
      
      throttledMouseMoveRef.current = setTimeout(() => {
        setMousePosition({
          x: e.clientX + window.scrollX,
          y: e.clientY + window.scrollY
        });
        
        if (!isVisible) {
          setIsVisible(true);
        }
        
        throttledMouseMoveRef.current = null;
      }, 16); // ~60fps
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Start animation frame loop
    requestRef.current = requestAnimationFrame(animateMatrixChars);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
      if (throttledMouseMoveRef.current) {
        clearTimeout(throttledMouseMoveRef.current);
      }
    };
  }, [isVisible, mousePosition]);

  // Hide when mouse is idle
  useEffect(() => {
    let timeout: number;
    
    const handleMouseActivity = () => {
      setIsVisible(true);
      clearTimeout(timeout);
      
      timeout = window.setTimeout(() => {
        setIsVisible(false);
      }, 3000); // Reduce idle timeout to 3 seconds
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
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Matrix background characters */}
      <div ref={matrixRef} className="absolute inset-0 overflow-hidden"></div>
      
      {/* Spotlight highlight effect */}
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, 
            rgba(217, 70, 239, 0.3) 0%, 
            rgba(217, 70, 239, 0.1) 40%, 
            rgba(0, 0, 0, 0) 70%
          )`,
          mixBlendMode: "screen",
          top: mousePosition.y - window.scrollY - 192,
          left: mousePosition.x - window.scrollX - 192,
        }}
      />
    </motion.div>
  );
};
