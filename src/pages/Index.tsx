import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectGallery from "@/components/ProjectGallery";
import ContactBar from "@/components/ContactBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <HeroSection />
        <ProjectGallery />
      </main>

      <Footer />
      <ContactBar />
    </div>
  );
};

export default Index;
