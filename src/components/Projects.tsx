
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { FeaturedProjectList } from "@/components/featured/FeaturedProjectList";
import { featuredProjects } from "@/components/featured/featuredProjectsData";
import { FeaturedProject } from "@/components/featured/types";
import { ProjectModal } from "@/components/featured/ProjectModal";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate loading state for demonstration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleProjectSelect = (project: FeaturedProject) => {
    try {
      // Always open the project in the modal dialog if it has a video
      if (project.videoId && project.videoId !== "undefined") {
        setSelectedProject(project);
      } else {
        window.open(project.link, '_blank');
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to open project. Please try again.",
      });
    }
  };

  if (isLoading) {
    return (
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-gray-800 rounded-lg w-1/3 mx-auto"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-[700px] bg-gray-800 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-7xl font-bold text-center mb-8 py-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text"
          style={{
            backgroundSize: "200% 200%",
            animation: "gradient-animation 6.67s linear infinite",
          }}
        >
          Featured
        </motion.h2>
        
        <FeaturedProjectList 
          projects={featuredProjects} 
          onProjectSelect={handleProjectSelect} 
        />
      </div>

      <ProjectModal 
        selectedProject={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
