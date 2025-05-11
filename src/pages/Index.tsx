
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
      {/* Removed circuit board background image */}
      
      {/* Content container */}
      <div className="relative z-10">
        <CursorEffect />
        <Hero />
        <div className="relative z-10">
          <About />
          <Services />
          <Projects 
            // Added the Meshy 2-year Anniversary showcase as a featured project
            featuredProject={{
              id: 9,
              title: "Meshy 2-year Anniversary showcase",
              category: "Content Creation",
              description: "A scene I created using community models submitted for the Meshy #AroundTheWorld# celebration event. Animated with AI.",
              videoId: "14Kcrj3iAH0",
              link: "https://www.youtube.com/watch?v=14Kcrj3iAH0"
            }}
          />
          <ProjectsGallery />
          <Partners />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
