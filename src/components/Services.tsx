
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Check, Users, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const services = {
  technology: [
    { 
      title: "AI Consulting and Strategy",
      details: "Expert guidance on implementing AI solutions tailored to your business needs. We help you identify opportunities, evaluate technologies, and develop comprehensive roadmaps for AI integration that align with your goals."
    },
    { 
      title: "AI Systems Architecture", 
      details: "Design and implementation of robust, scalable AI systems that seamlessly integrate with your existing infrastructure. Our architecture solutions prioritize performance, security, and future adaptability."
    },
    { 
      title: "AI Automation",
      details: "Transform repetitive tasks into automated workflows powered by AI. Our automation solutions increase efficiency, reduce human error, and free up valuable resources for more strategic initiatives."
    },
    { 
      title: "Custom Unity Game Dev Tooling",
      details: "Specialized tools and plugins for Unity game development that streamline workflows and enhance productivity. Our custom tooling solutions address specific challenges faced by game developers."
    },
  ],
  content: [
    { 
      title: "Community Management",
      details: "Strategic community building and management services that foster engagement, loyalty, and growth. We help you create vibrant communities around your brand or product with proven strategies."
    },
    { 
      title: "Video & Tutorial Content Creation",
      details: "High-quality, engaging video content and tutorials that educate, entertain, and convert. Our content creation services are designed to showcase your products and services effectively."
    },
    { 
      title: "Event design, Management and Execution",
      details: "End-to-end event planning and execution services that create memorable experiences for your audience. From concept to completion, we handle all aspects of physical and virtual events."
    },
    { 
      title: "AI Education and user training",
      details: "Comprehensive training programs that empower your team to leverage AI technologies effectively. Our education services are tailored to different skill levels and learning styles."
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
    <div className="py-16 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-7xl font-bold text-center mb-12 py-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text"
          style={{
            backgroundSize: "200% 200%",
            animation: "gradient-animation 6.67s linear infinite",
          }}
        >
          Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">Technology & Strategy</h3>
            <div className="grid gap-4">
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
                      className="glass-card px-6 py-4 rounded-xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 flex justify-between items-center w-full cursor-pointer hover:from-purple-900/30 hover:to-blue-900/30 transition-all duration-300"
                    >
                      <p className="text-white font-medium">{service.title}</p>
                      {expandedServices[service.title] ? (
                        <ChevronUp className="h-5 w-5 text-white" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-white" />
                      )}
                    </motion.div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-6 py-4 mt-1 bg-gradient-to-r from-purple-900/10 to-blue-900/10 rounded-b-xl">
                      <p className="text-white text-sm">{service.details}</p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">Content & Community</h3>
            <div className="grid gap-4">
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
                      className="glass-card px-6 py-4 rounded-xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 flex justify-between items-center w-full cursor-pointer hover:from-purple-900/30 hover:to-blue-900/30 transition-all duration-300"
                    >
                      <p className="text-white font-medium">{service.title}</p>
                      {expandedServices[service.title] ? (
                        <ChevronUp className="h-5 w-5 text-white" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-white" />
                      )}
                    </motion.div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-6 py-4 mt-1 bg-gradient-to-r from-purple-900/10 to-blue-900/10 rounded-b-xl">
                      <p className="text-white text-sm">{service.details}</p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
          {/* Making all three boxes the same width/height with consistent styling and larger font */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 glass-card px-8 py-6 w-80 h-24 justify-center"
          >
            <Users className="w-8 h-8 text-purple-400" />
            <span className="text-white font-semibold text-lg">Community Ambassador for 2.5 million Meshy Users</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 glass-card px-8 py-6 w-80 h-24 justify-center"
          >
            <img
              src="/lovable-uploads/84a09bb2-7dc3-44e9-9ef6-bbf3a1258b17.png"
              alt="Venice Award"
              className="w-12 h-12 object-contain"
            />
            <span className="text-white font-semibold text-lg">Multi-award winning creativity</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 glass-card px-8 py-6 w-80 h-24 justify-center"
          >
            <Check className="w-8 h-8 text-green-500" />
            <span className="text-white font-semibold text-lg">700k+ Player World Visits</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
