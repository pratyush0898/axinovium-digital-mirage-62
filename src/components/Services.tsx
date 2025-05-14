
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Check, Users, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

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

  const toggleService = (serviceTitle: string) => {
    setExpandedServices(prev => ({
      ...prev,
      [serviceTitle]: !prev[serviceTitle]
    }));
  };

  return (
    <div className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-8xl font-bold text-center mb-16 py-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text"
          style={{
            backgroundSize: "200% 200%",
            animation: "gradient-animation 6.67s linear infinite",
          }}
        >
          Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto mb-24">
          <div className="space-y-10">
            <h3 
              className="text-4xl font-semibold mb-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text"
              style={{
                backgroundSize: "200% 200%",
                animation: "gradient-animation 6.67s linear infinite",
              }}
            >
              Technology & Strategy
            </h3>
            <div className="grid gap-7">
              {services.technology.map((service, index) => (
                <Collapsible
                  key={index}
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
                      className="glass-card px-10 py-6 rounded-xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 flex justify-between items-center w-full cursor-pointer hover:from-purple-900/30 hover:to-blue-900/30 transition-all duration-300 border border-transparent hover:border-white/10 hue-shift-border"
                    >
                      <p 
                        className="font-medium text-xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text"
                        style={{
                          backgroundSize: "200% 200%",
                          animation: "gradient-animation 6.67s linear infinite",
                        }}
                      >
                        {service.title}
                      </p>
                      {expandedServices[service.title] ? (
                        <ChevronUp className="h-7 w-7 text-white" />
                      ) : (
                        <ChevronDown className="h-7 w-7 text-white" />
                      )}
                    </motion.div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-10 py-6 mt-1 bg-gradient-to-r from-purple-900/10 to-blue-900/10 rounded-b-xl border-x border-b border-white/5">
                      <p className="text-white text-lg">{service.details}</p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <h3 
              className="text-4xl font-semibold mb-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text"
              style={{
                backgroundSize: "200% 200%",
                animation: "gradient-animation 6.67s linear infinite",
              }}
            >
              Content & Community
            </h3>
            <div className="grid gap-7">
              {services.content.map((service, index) => (
                <Collapsible
                  key={index}
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
                      className="glass-card px-10 py-6 rounded-xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 flex justify-between items-center w-full cursor-pointer hover:from-purple-900/30 hover:to-blue-900/30 transition-all duration-300 border border-transparent hover:border-white/10 hue-shift-border"
                    >
                      <p 
                        className="font-medium text-xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text"
                        style={{
                          backgroundSize: "200% 200%",
                          animation: "gradient-animation 6.67s linear infinite",
                        }}
                      >
                        {service.title}
                      </p>
                      {expandedServices[service.title] ? (
                        <ChevronUp className="h-7 w-7 text-white" />
                      ) : (
                        <ChevronDown className="h-7 w-7 text-white" />
                      )}
                    </motion.div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-10 py-6 mt-1 bg-gradient-to-r from-purple-900/10 to-blue-900/10 rounded-b-xl border-x border-b border-white/5">
                      <p className="text-white text-lg">{service.details}</p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-5 glass-card px-10 py-8 w-96 h-28 justify-center bg-gradient-to-r from-purple-900/20 to-blue-900/20 hover:from-purple-900/30 hover:to-blue-900/30 transition-all duration-300 border border-transparent hover:border-white/10 hue-shift-border"
          >
            <Users className="w-10 h-10 text-purple-400" />
            <span className="text-white font-semibold text-xl">Community Ambassador for 2.5 million Users</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-5 glass-card px-10 py-8 w-96 h-28 justify-center bg-gradient-to-r from-purple-900/20 to-blue-900/20 hover:from-purple-900/30 hover:to-blue-900/30 transition-all duration-300 border border-transparent hover:border-white/10 hue-shift-border"
          >
            <img
              src="/lovable-uploads/84a09bb2-7dc3-44e9-9ef6-bbf3a1258b17.png"
              alt="Venice Award"
              className="w-14 h-14 object-contain"
            />
            <span className="text-white font-semibold text-xl">Multi-award winning creativity</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-5 glass-card px-10 py-8 w-96 h-28 justify-center bg-gradient-to-r from-purple-900/20 to-blue-900/20 hover:from-purple-900/30 hover:to-blue-900/30 transition-all duration-300 border border-transparent hover:border-white/10 hue-shift-border"
          >
            <Check className="w-10 h-10 text-green-500" />
            <span className="text-white font-semibold text-xl">Over 1 million player world visits & impressions</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
