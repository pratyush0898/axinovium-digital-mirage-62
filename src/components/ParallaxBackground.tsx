
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export const ParallaxBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        // Get position relative to the container
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
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      style={{ 
        background: 'black',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.95)), url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'circuit\' patternUnits=\'userSpaceOnUse\' width=\'100\' height=\'100\'%3E%3Cpath d=\'M10,10 L90,10 M90,10 L90,30 M90,30 L50,30 M50,30 L50,50 M50,50 L10,50 M10,50 L10,90 M10,90 L30,90 M30,90 L30,70 M30,70 L70,70 M70,70 L70,90 M70,90 L90,90\' stroke=\'%23a855f7\' stroke-width=\'2\' fill=\'none\'/%3E%3Ccircle cx=\'10\' cy=\'10\' r=\'3\' fill=\'%23f472b6\'/%3E%3Ccircle cx=\'90\' cy=\'10\' r=\'3\' fill=\'%236366f1\'/%3E%3Ccircle cx=\'90\' cy=\'30\' r=\'3\' fill=\'%2306b6d4\'/%3E%3Ccircle cx=\'50\' cy=\'30\' r=\'3\' fill=\'%23f59e0b\'/%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'3\' fill=\'%23d946ef\'/%3E%3Ccircle cx=\'10\' cy=\'50\' r=\'3\' fill=\'%2310b981\'/%3E%3Ccircle cx=\'10\' cy=\'90\' r=\'3\' fill=\'%23f43f5e\'/%3E%3Ccircle cx=\'30\' cy=\'90\' r=\'3\' fill=\'%2360a5fa\'/%3E%3Ccircle cx=\'30\' cy=\'70\' r=\'3\' fill=\'%2334d399\'/%3E%3Ccircle cx=\'70\' cy=\'70\' r=\'3\' fill=\'%23c084fc\'/%3E%3Ccircle cx=\'70\' cy=\'90\' r=\'3\' fill=\'%23fb923c\'/%3E%3Ccircle cx=\'90\' cy=\'90\' r=\'3\' fill=\'%23facc15\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23circuit)\'/%3E%3C/svg%3E")',
        backgroundSize: '400px 400px'
      }}
    >
      {/* Torch light effect */}
      <div 
        className="absolute pointer-events-none"
        style={{
          width: isMobile ? '200px' : '300px',
          height: isMobile ? '200px' : '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 70%)',
          mixBlendMode: 'overlay',
          transform: 'translate(-50%, -50%)',
          left: mousePosition.x,
          top: mousePosition.y,
          opacity: 0.9
        }}
      />
      
      {/* Rainbow gradient overlay for the circuit pattern */}
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
