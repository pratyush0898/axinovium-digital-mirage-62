
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { Partners } from "@/components/Partners";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { CursorEffect } from "@/components/CursorEffect";

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Matrix cursor effect behind everything */}
      <CursorEffect />
      
      {/* Content container with proper z-index */}
      <div className="relative z-10">
        <Hero />
        <div className="relative z-10">
          <About />
          <Services />
          <Projects />
          <div className="relative bg-black">
            <ProjectsGallery />
          </div>
          <Partners />
          <ContactForm />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
