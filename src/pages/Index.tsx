
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { Partners } from "@/components/Partners";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { CursorEffect } from "@/components/CursorEffect";
import { ParallaxBackground } from "@/components/ParallaxBackground";
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
      {/* Cursor effect behind everything */}
      <CursorEffect />
      
      {/* Parallax background elements */}
      <ParallaxBackground />
      
      {/* Content needs higher z-index */}
      <div className="relative z-10">
        <Hero hideSubtitle={true} buttonText="Explore Axinovium" />
        <div className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <About />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <Services />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <Projects />
          </motion.div>
          
          <div className="relative bg-black">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
            >
              <ProjectsGallery />
            </motion.div>
          </div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <Partners />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
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
