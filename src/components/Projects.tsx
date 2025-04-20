
import { motion } from "framer-motion";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  videoId: string;
  link: string;
  category: string;
  image?: string;
  award?: {
    image: string;
    link: string;
  };
}

const projects: Project[] = [
  {
    title: "Chromatic Frequency",
    description: "An immersive VRChat world blending music visualization with interactive art",
    videoId: "Y8yyFeVs1gs",
    link: "#",
    category: "VRChat",
    award: {
      image: "/lovable-uploads/84a09bb2-7dc3-44e9-9ef6-bbf3a1258b17.png",
      link: "https://www.labiennale.org/en/cinema/2024/venice-immersive/chromatic-frequency"
    }
  },
  {
    title: "Meshy Hub",
    description: "Collaborative 3D asset gallery for next-gen creators",
    videoId: "VoUWYyVmcoQ",
    link: "#",
    category: "Tooling"
  }
];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", ...new Set(projects.map(project => project.category))];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 bg-black/95">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          Featured Projects
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center flex-wrap gap-2 mb-10"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeFilter === category 
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/20" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1920px] mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              <a href={project.link} className="block">
                <motion.div 
                  className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-1"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)"
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 400,
                    damping: 20
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-gray-900 p-6 rounded-lg h-full">
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                      {project.videoId ? (
                        <div className="relative w-full h-full">
                          <iframe
                            src={`https://www.youtube.com/embed/${project.videoId}`}
                            title={project.title}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                          {project.award && (
                            <a 
                              href={project.award.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute bottom-4 right-4 w-1/4 hover:scale-105 transition-transform duration-200"
                            >
                              <img
                                src={project.award.image}
                                alt="Venice Biennale Award"
                                className="w-full h-auto"
                              />
                            </a>
                          )}
                        </div>
                      ) : (
                        project.image && (
                          <motion.img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          />
                        )
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                </motion.div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
