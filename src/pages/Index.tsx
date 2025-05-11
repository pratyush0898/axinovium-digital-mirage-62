
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { Partners } from "@/components/Partners";
import { Footer } from "@/components/Footer";
import { CursorEffect } from "@/components/CursorEffect";

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Circuit board background image */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-40" 
        style={{ 
          backgroundImage: `url(${'/lovable-uploads/cc74be45-3ebc-4d4b-98b7-0f026ccac412.png'})`,
          backgroundSize: '400px',
          backgroundRepeat: 'repeat',
        }}
      />
      
      {/* Content container - ensures content elements stay above the background */}
      <div className="relative z-10">
        <CursorEffect />
        <Hero />
        <div className="relative z-10">
          <About />
          <Services />
          <Projects />
          <ProjectsGallery />
          <Partners />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
