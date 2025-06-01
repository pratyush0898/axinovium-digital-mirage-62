
import { useEffect, useState, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export const ParallaxBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden z-0"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Torch light effect */}
      <div 
        className="absolute"
        style={{
          width: isMobile ? '200px' : '300px',
          height: isMobile ? '200px' : '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 70%)',
          mixBlendMode: 'overlay',
          transform: 'translate(-50%, -50%)',
          left: mousePosition.x,
          top: mousePosition.y,
          opacity: 0.9,
          pointerEvents: 'none'
        }}
      />
      
      {/* Rainbow gradient overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(45deg, #f43f5e, #ec4899, #a855f7, #6366f1, #3b82f6, #06b6d4, #10b981, #84cc16, #facc15, #fb923c)',
          backgroundSize: '400% 400%',
          animation: 'gradient-animation 6.67s linear infinite',
          mixBlendMode: 'color',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};
