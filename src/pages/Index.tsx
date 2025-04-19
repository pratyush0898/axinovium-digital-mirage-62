
import { useState } from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Partners } from "@/components/Partners";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { CursorEffect } from "@/components/CursorEffect";

const Index = () => {
  const [welcomeCompleted, setWelcomeCompleted] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <WelcomeScreen onComplete={() => setWelcomeCompleted(true)} />
      <CursorEffect />
      
      {welcomeCompleted && (
        <>
          <Hero />
          <About />
          <Projects />
          <Partners />
          <Gallery />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
