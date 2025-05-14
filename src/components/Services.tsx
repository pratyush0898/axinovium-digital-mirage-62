
import { motion } from "framer-motion";
import { useState } from "react";
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible";

export const Services = () => {
  const [openService, setOpenService] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setOpenService(openService === id ? null : id);
  };

  const services = [
    {
      id: "ai-consulting",
      title: "AI Consulting & Strategy",
      description: "Custom AI solutions tailored to your business needs.",
      details: "Comprehensive AI strategy development, implementation planning, and ROI analysis. We help businesses identify the most impactful AI opportunities and create roadmaps for successful adoption.",
      icon: "/lovable-uploads/2ac04193-85f6-4c6c-862a-438f48d4b051.png"
    },
    {
      id: "machine-learning",
      title: "Machine Learning & Computer Vision",
      description: "Building intelligent systems that see, learn, and adapt.",
      details: "Development of custom machine learning models, computer vision systems, and predictive analytics solutions. We specialize in creating AI that can process visual information and make intelligent decisions.",
      icon: "/lovable-uploads/ebc49ac0-e46c-401c-8b0a-d49a5619172c.png"
    },
    {
      id: "creative-ai",
      title: "Creative AI & Generative Systems",
      description: "Pushing the boundaries of AI-assisted creativity.",
      details: "Implementation of generative AI models for creative content production, including text, images, music, and more. We help businesses leverage AI to enhance creative processes and outputs.",
      icon: "/lovable-uploads/debfe5e2-da8f-4175-a8f5-5dcbb4a5c8cb.png"
    },
    {
      id: "ar-vr",
      title: "AR/VR & Digital Twin Development",
      description: "Crafting immersive experiences and virtual environments.",
      details: "Creation of augmented and virtual reality applications, interactive 3D models, and digital twins of physical systems. We build immersive experiences that transform how users interact with digital content.",
      icon: "/lovable-uploads/36e2fa8a-1319-475a-a816-0ab0a910a3d5.png"
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text"
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
                duration: 6.67,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              Services
            </motion.h2>
            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 mb-16">
              <motion.div 
                className="text-center flex-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.h3 
                  className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text"
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
                    duration: 6.67,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  Technology & Strategy
                </motion.h3>
                <p className="text-gray-300">
                  Future-focused technology consulting and implementation for businesses that want to stay ahead.
                </p>
              </motion.div>
              
              <motion.div 
                className="text-center flex-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.h3 
                  className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text"
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
                    duration: 6.67,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  Content & Community
                </motion.h3>
                <p className="text-gray-300">
                  Strategic content creation and community building for brands that want to create lasting impact.
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <Collapsible
                  key={service.id}
                  open={openService === service.id}
                  onOpenChange={() => toggleService(service.id)}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-purple-500/50 flex flex-col h-full"
                >
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                      <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                        <img src={service.icon} alt={service.title} className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                  
                  <CollapsibleTrigger className="w-full cursor-pointer">
                    <motion.h3 
                      className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text"
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
                        duration: 6.67,
                        ease: "linear",
                        repeat: Infinity,
                      }}
                    >
                      {service.title}
                    </motion.h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-blue-400 font-semibold mb-2">
                      {openService === service.id ? "Click to collapse" : "Click to expand"}
                    </div>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <div className="pt-4 border-t border-gray-700 mt-2">
                      <p className="text-gray-300">{service.details}</p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
