
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Check, Users, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useIsMobile } from "@/hooks/use-mobile";

const services = {
  technology: [
    { 
      title: "AI Consulting and Strategy",
      details: "Expert guidance on implementing AI solutions tailored to your business needs. I help you identify opportunities, evaluate technologies, and develop comprehensive roadmaps for AI integration that align with your goals."
    },
    { 
      title: "AI Systems Architecture", 
      details: "Design and implementation of robust, scalable AI systems that seamlessly integrate with your existing infrastructure. My architecture solutions prioritize performance, security, and future adaptability."
    },
    { 
      title: "AI Automation",
      details: "Transform repetitive tasks into automated workflows powered by AI. My automation solutions increase efficiency, reduce human error, and free up valuable resources for more strategic initiatives."
    },
    { 
      title: "Custom Unity Game Dev Tooling",
      details: "Specialized tools and plugins for Unity game development that streamline workflows and enhance productivity. My custom tooling solutions address specific challenges faced by game developers."
    },
  ],
  content: [
    { 
      title: "Community Management",
      details: "Strategic community building and management services that foster engagement, loyalty, and growth. I help you create vibrant communities around your brand or product with proven strategies."
    },
    { 
      title: "Video & Tutorial Content Creation",
      details: "High-quality, engaging video content and tutorials that educate, entertain, and convert. My content creation services are designed to showcase your products and services effectively."
    },
    { 
      title: "Event design, Management and Execution",
      details: "Virtual event design and leadership services that create memorable experiences for your users — powered by advanced AI workflows to reduce costs."
    },
    { 
      title: "AI Education and user training",
      details: "Comprehensive training programs that empower your team to leverage AI technologies effectively. My education services are tailored to different skill levels and learning styles."
    },
  ],
};

export const Services = () => {
  const [expandedServices, setExpandedServices] = useState<{[key: string]: boolean}>({});
  const isMobile = useIsMobile();

  const toggleService = (serviceTitle: string) => {
    setExpandedServices(prev => ({
      ...prev,
      [serviceTitle]: !prev[serviceTitle]
    }));
  };

  return (
    <div className="py-16 md:py-24 bg-black overflow-hidden relative">
      {/* Circuitboard background image replacing nebula - fixed positioning */}
      <div 
        className="fixed inset-0 z-0 opacity-60"
        style={{
          backgroundImage: "url('/lovable-uploads/3ba82e58-f734-4878-b8c4-186ec0dcea46.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      ></div>
      
      {/* Overlay gradient to help text readability - fixed positioning */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/70 to-black/50 z-1"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-center mb-8 md:mb-12 py-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text font-orbitron"
          style={{
            backgroundSize: "200% 200%",
            animation: "gradient-animation 6.67s linear infinite",
          }}
        >
          Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-7xl mx-auto mb-16 md:mb-24">
          <div className="space-y-8 md:space-y-12">
            <h3 
              className="text-3xl md:text-4xl font-semibold mb-6 md:mb-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text font-orbitron"
              style={{
                backgroundSize: "200% 200%",
                animation: "gradient-animation 6.67s linear infinite",
              }}
            >
              Technology & Strategy
            </h3>
            <div className="grid gap-6 md:gap-10">
              {services.technology.map((service, index) => (
                <div key={index} className="w-full">
                  <Collapsible
                    open={expandedServices[service.title] || false}
                    onOpenChange={() => toggleService(service.title)}
                    className="w-full"
                  >
                    <CollapsibleTrigger className="w-full">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="glass-card px-6 md:px-12 py-5 md:py-7 rounded-xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 flex justify-between items-center w-full cursor-pointer hover:from-purple-900/30 hover:to-blue-900/30 transition-all duration-300 border border-transparent hover:border-white/10 hue-shift-border backdrop-blur-md"
                      >
                        <p 
                          className="font-medium text-xl md:text-2xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text font-orbitron"
                          style={{
                            backgroundSize: "200% 200%",
                            animation: "gradient-animation 6.67s linear infinite",
                          }}
                        >
                          {service.title}
                        </p>
                        {expandedServices[service.title] ? (
                          <ChevronUp className="h-6 w-6 md:h-8 md:w-8 text-white flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-6 w-6 md:h-8 md:w-8 text-white flex-shrink-0" />
                        )}
                      </motion.div>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="px-6 md:px-12 py-5 md:py-7 mt-1 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-b-xl border-x border-b border-white/10 backdrop-blur-md">
                        <p className="text-white text-lg md:text-xl">{service.details}</p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 md:space-y-12 mt-8 md:mt-0">
            <h3 
              className="text-3xl md:text-4xl font-semibold mb-6 md:mb-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text font-orbitron"
              style={{
                backgroundSize: "200% 200%",
                animation: "gradient-animation 6.67s linear infinite",
              }}
            >
              Content & Community
            </h3>
            <div className="grid gap-6 md:gap-10">
              {services.content.map((service, index) => (
                <div key={index} className="w-full">
                  <Collapsible
                    open={expandedServices[service.title] || false}
                    onOpenChange={() => toggleService(service.title)}
                    className="w-full"
                  >
                    <CollapsibleTrigger className="w-full">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="glass-card px-6 md:px-12 py-5 md:py-7 rounded-xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 flex justify-between items-center w-full cursor-pointer hover:from-purple-900/30 hover:to-blue-900/30 transition-all duration-300 border border-transparent hover:border-white/10 hue-shift-border backdrop-blur-md"
                      >
                        <p 
                          className="font-medium text-xl md:text-2xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text font-orbitron"
                          style={{
                            backgroundSize: "200% 200%",
                            animation: "gradient-animation 6.67s linear infinite",
                          }}
                        >
                          {service.title}
                        </p>
                        {expandedServices[service.title] ? (
                          <ChevronUp className="h-6 w-6 md:h-8 md:w-8 text-white flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-6 w-6 md:h-8 md:w-8 text-white flex-shrink-0" />
                        )}
                      </motion.div>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="px-6 md:px-12 py-5 md:py-7 mt-1 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-b-xl border-x border-b border-white/10 backdrop-blur-md">
                        <p className="text-white text-lg md:text-xl">{service.details}</p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mt-12 md:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 md:gap-5 glass-card px-6 md:px-10 py-6 md:py-8 w-full md:w-96 h-auto md:h-28 justify-center bg-gradient-to-r from-purple-900/20 to-blue-900/20 hover:from-purple-900/30 hover:to-blue-900/30 transition-all duration-300 border border-transparent hover:border-white/10 hue-shift-border backdrop-blur-md"
          >
            <Users className="w-8 h-8 md:w-10 md:h-10 text-purple-400 flex-shrink-0" />
            <span className="text-white font-semibold text-lg md:text-xl">Community Ambassador for 2.5 million Users</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 md:gap-5 glass-card px-6 md:px-10 py-6 md:py-8 w-full md:w-96 h-auto md:h-28 justify-center bg-gradient-to-r from-purple-900/20 to-blue-900/20 hover:from-purple-900/30 hover:to-blue-900/30 transition-all duration-300 border border-transparent hover:border-white/10 hue-shift-border backdrop-blur-md"
          >
            <img
              src="/lovable-uploads/84a09bb2-7dc3-44e9-9ef6-bbf3a1258b17.png"
              alt="Venice Award"
              className="w-12 h-12 md:w-14 md:h-14 object-contain flex-shrink-0"
            />
            <span className="text-white font-semibold text-lg md:text-xl">Multi-award winning creativity</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 md:gap-5 glass-card px-6 md:px-10 py-6 md:py-8 w-full md:w-96 h-auto md:h-28 justify-center bg-gradient-to-r from-purple-900/20 to-blue-900/20 hover:from-purple-900/30 hover:to-blue-900/30 transition-all duration-300 border border-transparent hover:border-white/10 hue-shift-border backdrop-blur-md"
          >
            <Check className="w-8 h-8 md:w-10 md:h-10 text-green-500 flex-shrink-0" />
            <span className="text-white font-semibold text-lg md:text-xl">Over 1 million player world visits & impressions</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
