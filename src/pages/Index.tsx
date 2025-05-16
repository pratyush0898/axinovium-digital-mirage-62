
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Newsletter } from "@/components/Newsletter";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { Partners } from "@/components/Partners";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

// Animation variants for section fade-ins
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      ease: "easeOut" 
    }
  }
};

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Interactive grid background */}
      <div className="interactive-grid"></div>
      
      {/* Content needs higher z-index and relative positioning */}
      <div className="relative z-10">
        <Hero hideSubtitle={true} buttonText="Explore Axinovium" />
        <div className="relative z-10">
          {/* About section with circuitry background - already implemented */}
          <div className="relative">
            {/* Circuitry background image */}
            <div 
              className="absolute inset-0 z-0 opacity-60"
              style={{
                backgroundImage: "url('/lovable-uploads/3ba82e58-f734-4878-b8c4-186ec0dcea46.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
              className="relative z-10"
            >
              <About />
            </motion.div>
          </div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="relative"
          >
            <Newsletter />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="relative"
          >
            <Services />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="relative"
          >
            <Projects />
          </motion.div>
          
          {/* Projects gallery with circuitry background */}
          <div className="relative">
            {/* Circuitry background image */}
            <div 
              className="absolute inset-0 z-0 opacity-30"
              style={{
                backgroundImage: "url('/lovable-uploads/3ba82e58-f734-4878-b8c4-186ec0dcea46.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
              className="relative z-10"
            >
              <ProjectsGallery />
            </motion.div>
          </div>
          
          {/* Partners section with circuitry background */}
          <div className="relative">
            {/* Circuitry background image */}
            <div 
              className="absolute inset-0 z-0 opacity-40"
              style={{
                backgroundImage: "url('/lovable-uploads/3ba82e58-f734-4878-b8c4-186ec0dcea46.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
              className="relative z-10"
            >
              <Partners />
            </motion.div>
          </div>
          
          {/* Contact form with circuitry background */}
          <div className="relative">
            {/* Circuitry background image */}
            <div 
              className="absolute inset-0 z-0 opacity-30"
              style={{
                backgroundImage: "url('/lovable-uploads/3ba82e58-f734-4878-b8c4-186ec0dcea46.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
              className="relative z-10"
            >
              <ContactForm />
            </motion.div>
          </div>
          
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
