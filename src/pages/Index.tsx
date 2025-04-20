
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { Partners } from "@/components/Partners";
import { Footer } from "@/components/Footer";
import { CursorEffect } from "@/components/CursorEffect";
import { Achievements } from "@/components/Achievements";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <CursorEffect />
      <Hero />
      <About />
      <Achievements />
      <Projects />
      <ProjectsGallery />
      <Partners />
      <Footer />
    </div>
  );
};

export default Index;
