
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Partners } from "@/components/Partners";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";
import { CursorEffect } from "@/components/CursorEffect";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <CursorEffect />
      <Hero />
      <About />
      <Projects />
      <Partners />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
