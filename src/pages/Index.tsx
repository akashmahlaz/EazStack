import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo 
        title="Punjab Tech | Startup Studio — Build Your Dream App, Website & Brand"
        description="Punjab Tech is a premier startup studio in Punjab, India. We build mobile apps (React Native), websites (Next.js), and provide branding, digital marketing & growth solutions. From MVP to market leader — we help startups succeed. Book a free consultation."
      />
      <Navbar />
      <Hero />
      <FeaturedWork />
      <Services />
      <Process />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
