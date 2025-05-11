
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
      {/* Content container */}
      <div className="relative z-10">
        <CursorEffect />
        <Hero />
        <div className="relative z-10">
          <About />
          <Services />
          <Projects 
            featuredProjects={[
              // Meshy 2-year Anniversary showcase as the first featured project
              {
                id: 9,
                title: "Meshy 2-year Anniversary showcase",
                category: "Content Creation",
                description: "A scene I created using community models submitted for the Meshy #AroundTheWorld# celebration event. Animated with AI.",
                videoId: "14Kcrj3iAH0",
                link: "https://www.youtube.com/watch?v=14Kcrj3iAH0"
              },
              // Adding back previously featured projects
              {
                id: 11,
                title: "The Old Cemetery",
                category: "VRChat Worlds",
                description: "🏆 Featured by VRChat for Spookality 2024. A haunted cemetery world with over 60,000 visits.",
                videoId: "XNy-O5opCUc",
                link: "https://vrchat.com/home/launch?worldId=wrld_7482338d-40b9-4c8d-92fb-bc1623e7122f"
              },
              {
                id: 12,
                title: "Opal Bay",
                category: "VRChat Worlds",
                description: "A tropical beach with white sand and sparkling opal-like water. Over 130,000 visits.",
                videoId: "-V_93GThVdU",
                link: "https://vrchat.com/home/launch?worldId=wrld_eca2ddde-f794-4c59-ae3a-4dd5881eb18b"
              }
            ]}
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
