import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProjectHighlight from "@/components/sections/ProjectHighlight";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProjectHighlight />
        <AboutSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;