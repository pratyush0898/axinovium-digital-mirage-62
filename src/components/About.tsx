
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [typingText1, setTypingText1] = useState("");
  const [typingText2, setTypingText2] = useState("");
  const [glitchEffect, setGlitchEffect] = useState(false);
  
  const fullText1 = "Systems initializing...";
  const fullText2 = "Let's create the future...";
  
  // Typing effect with glitchy behavior
  const handleMouseEnter = () => {
    setIsHovered(true);
    setTypingText1("");
    setTypingText2("");
    
    let currentText1 = "";
    let currentText2 = "";
    let glitchCounter = 0;
    
    // First line typing effect
    const typeInterval1 = setInterval(() => {
      if (currentText1.length < fullText1.length) {
        // Add random glitch effect occasionally
        if (Math.random() < 0.15) {
          const randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
          setTypingText1(currentText1 + randomChar);
          
          // Remove the random character after a short delay
          setTimeout(() => {
            currentText1 += fullText1[currentText1.length];
            setTypingText1(currentText1);
          }, 50);
        } else {
          currentText1 += fullText1[currentText1.length];
          setTypingText1(currentText1);
        }
        
        // Create glitchy visual effect
        glitchCounter++;
        if (glitchCounter % 3 === 0) {
          setGlitchEffect(true);
          setTimeout(() => setGlitchEffect(false), 50);
        }
      } else {
        clearInterval(typeInterval1);
        
        // Start typing the second line after a delay
        setTimeout(() => {
          const typeInterval2 = setInterval(() => {
            if (currentText2.length < fullText2.length) {
              // Add random glitch effect occasionally
              if (Math.random() < 0.15) {
                const randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
                setTypingText2(currentText2 + randomChar);
                
                // Remove the random character after a short delay
                setTimeout(() => {
                  currentText2 += fullText2[currentText2.length];
                  setTypingText2(currentText2);
                }, 50);
              } else {
                currentText2 += fullText2[currentText2.length];
                setTypingText2(currentText2);
              }
              
              // Create glitchy visual effect
              glitchCounter++;
              if (glitchCounter % 3 === 0) {
                setGlitchEffect(true);
                setTimeout(() => setGlitchEffect(false), 50);
              }
            } else {
              clearInterval(typeInterval2);
            }
          }, 80);
        }, 500); // Delay before starting the second line
      }
    }, 80);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTypingText1("");
    setTypingText2("");
    setGlitchEffect(false);
  };
  
  // Effect to create random glitch after initial rendering
  useEffect(() => {
    if (isHovered) {
      const glitchInterval = setInterval(() => {
        if (Math.random() < 0.3) {
          setGlitchEffect(true);
          setTimeout(() => setGlitchEffect(false), 50 + Math.random() * 100);
        }
      }, 1000);
      
      return () => clearInterval(glitchInterval);
    }
  }, [isHovered]);
  
  return (
    <section id="about" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 md:pr-10"
          >
            <h2 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text">
              Axinovium.AI
            </h2>
            <p className="text-gray-300 text-xl leading-relaxed mb-4">
              Independent AI Consultant.<br />
              Creative technologist.<br /> 
              Reality engineer.
            </p>
            <p className="text-gray-300 text-xl leading-relaxed">
              I design intelligent systems and immersive experiences - fusing mind, machine and aesthetics.
            </p>
            <p className="text-gray-300 text-xl leading-relaxed mt-4">
              Based in New Zealand. Operating globally.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              {/* Logo with gradient border on hover */}
              <div 
                className="relative w-64 h-64"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <motion.div 
                  className={`w-64 h-64 rounded-full ${isHovered ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500' : 'bg-gradient-to-r from-blue-500 to-purple-500'} p-1 relative ${glitchEffect ? 'translate-x-[1px]' : ''}`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <img src="/lovable-uploads/b097f846-1de0-4406-b97b-0d93f5e4be35.png" alt="Axinovium Logo" className="w-48 h-48" />
                  </div>
                </motion.div>
                
                {/* Typing text animation with glitch effect */}
                {isHovered && (
                  <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-full text-center flex flex-col gap-1">
                    <div className={`relative ${glitchEffect ? 'translate-x-[0.5px] translate-y-[0.5px]' : ''}`}>
                      <span className="text-pink-500 text-xl font-mono">
                        {typingText1}
                        {typingText1.length < fullText1.length && (
                          <span className="animate-pulse">|</span>
                        )}
                      </span>
                      
                      {/* Random characters that occasionally appear and disappear for glitch effect */}
                      {glitchEffect && (
                        <span className="absolute top-0 left-0 text-pink-500 text-xl font-mono opacity-70 translate-x-[1px]">
                          {typingText1.substring(0, typingText1.length - 1) + (Math.random() > 0.5 ? '/' : '_')}
                        </span>
                      )}
                    </div>
                    
                    {/* Second line */}
                    {typingText1.length === fullText1.length && (
                      <div className={`relative ${glitchEffect ? 'translate-x-[0.5px] translate-y-[-0.5px]' : ''}`}>
                        <span className="text-pink-500 text-xl font-mono">
                          {typingText2}
                          {typingText2.length < fullText2.length && (
                            <span className="animate-pulse">|</span>
                          )}
                        </span>
                        
                        {/* Random characters for glitch effect */}
                        {glitchEffect && (
                          <span className="absolute top-0 left-0 text-pink-500 text-xl font-mono opacity-70 translate-x-[-1px]">
                            {typingText2.substring(0, typingText2.length - 1) + (Math.random() > 0.5 ? '/' : '_')}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
