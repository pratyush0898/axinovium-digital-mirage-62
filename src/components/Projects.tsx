
import { motion } from "framer-motion";

const projects = [
  {
    title: "Chromatic Frequency",
    description: "An immersive VRChat world blending music visualization with interactive art",
    image: "photo-1470813740244-df37b8c1edcb",
    link: "#"
  },
  {
    title: "Meshy Hub",
    description: "Collaborative 3D asset gallery for next-gen creators",
    image: "photo-1487058792275-0ad4aaf24ca7",
    link: "#"
  },
  {
    title: "Dream Logic",
    description: "AI-powered storytelling system generating interactive narratives",
    image: "photo-1526374965328-7f61d4dc18c5",
    link: "#"
  }
];

export const Projects = () => {
  return (
    <section className="py-20 bg-black/95">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              <a href={project.link} className="block">
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-gray-900 p-6 rounded-lg h-full">
                    <div className="aspect-video rounded-lg overflow-hidden mb-4">
                      <img
                        src={`https://source.unsplash.com/${project.image}`}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-110"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
