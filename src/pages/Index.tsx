
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Newsletter } from "@/components/Newsletter";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { Partners } from "@/components/Partners";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { BloomOverlay } from "@/components/BloomOverlay";
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
      {/* Bloom overlay effect */}
      <BloomOverlay />
      
      {/* Interactive grid background */}
      <div className="interactive-grid"></div>
      
      {/* Content needs higher z-index and relative positioning */}
      <div className="relative z-10">
        <Hero hideSubtitle={true} buttonText="Explore Axinovium" />
        <div className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="relative"
          >
            <About />
          </motion.div>
          
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
          
          <div className="relative bg-black">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
              className="relative"
            >
              <ProjectsGallery />
            </motion.div>
          </div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="relative"
          >
            <Partners />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="relative"
          >
            <ContactForm />
          </motion.div>
          
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
