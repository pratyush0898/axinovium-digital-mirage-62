
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [typingText1, setTypingText1] = useState("");
  const [typingText2, setTypingText2] = useState("");
  
  const glitchText1 = "\"̸S̵y̷s̷t̵e̵m̴s̶ ̵i̵n̶i̴t̶i̸a̵l̴i̸z̴i̶n̴g̷…̸\"̵ ̶";
  const glitchText2 = "\"̵L̶e̷t̴'̷s̵ ̵u̸s̶ ̸c̸r̶e̷a̵t̷e̶ ̵t̶h̴e̴ ̴f̴u̴t̶u̸r̵e̷.̴.̶.̸\"̴ ̵";
  
  // Typing effect for glitch style text
  const handleMouseEnter = () => {
    setIsHovered(true);
    setTypingText1("");
    setTypingText2("");
    
    let currentText1 = "";
    let currentText2 = "";
    
    // First line typing effect
    const typeInterval1 = setInterval(() => {
      if (currentText1.length < glitchText1.length) {
        currentText1 += glitchText1[currentText1.length];
        setTypingText1(currentText1);
      } else {
        clearInterval(typeInterval1);
        
        // Start typing the second line after a delay
        setTimeout(() => {
          const typeInterval2 = setInterval(() => {
            if (currentText2.length < glitchText2.length) {
              currentText2 += glitchText2[currentText2.length];
              setTypingText2(currentText2);
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
  };
  
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
            <motion.h2 
              className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text"
              animate={{
                filter: [
                  'hue-rotate(0deg)',
                  'hue-rotate(90deg)',
                  'hue-rotate(180deg)',
                  'hue-rotate(270deg)',
                  'hue-rotate(360deg)',
                ]
              }}
              transition={{
                duration: 6.67, // Sped up from 10 to 6.67 (1.5x faster)
                ease: "linear",
                repeat: Infinity,
              }}
            >
              Axinovium.AI
            </motion.h2>
            <p className="text-gray-300 text-xl leading-relaxed mb-4">
              Independent AI Consultant.<br />
              Creative Technologist.<br /> 
              Reality Engineer.
            </p>
            <p className="text-gray-300 text-xl leading-relaxed">
              In an era defined by technological acceleration and adaptation, I move faster than anyone else — fusing mind, machine, and aesthetics to create the future.
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
                  className={`w-64 h-64 rounded-full ${isHovered ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500' : 'bg-gradient-to-r from-blue-500 to-purple-500'} p-1 relative`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <motion.img 
                      src="/lovable-uploads/b097f846-1de0-4406-b97b-0d93f5e4be35.png" 
                      alt="Axinovium Logo" 
                      className="w-48 h-48" 
                      animate={{
                        filter: [
                          'hue-rotate(0deg)',
                          'hue-rotate(90deg)',
                          'hue-rotate(180deg)',
                          'hue-rotate(270deg)',
                          'hue-rotate(360deg)',
                        ]
                      }}
                      transition={{
                        duration: 6.67, // Sped up from 10 to 6.67 (1.5x faster)
                        ease: "linear",
                        repeat: Infinity,
                      }}
                    />
                  </div>
                </motion.div>
                
                {/* Typing text animation with pre-glitched characters */}
                {isHovered && (
                  <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-full text-center flex flex-col gap-1">
                    <div className="relative">
                      <span className="text-pink-500 text-xl font-mono">
                        {typingText1}
                        {typingText1.length < glitchText1.length && (
                          <span className="animate-pulse">|</span>
                        )}
                      </span>
                    </div>
                    
                    {/* Second line */}
                    {typingText1.length === glitchText1.length && (
                      <div className="relative">
                        <span className="text-pink-500 text-xl font-mono">
                          {typingText2}
                          {typingText2.length < glitchText2.length && (
                            <span className="animate-pulse">|</span>
                          )}
                        </span>
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
