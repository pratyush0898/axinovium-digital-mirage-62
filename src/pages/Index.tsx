
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <About />
      <Projects />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
