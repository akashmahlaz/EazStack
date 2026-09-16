import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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
        title="Punjab Tech | App & Web Development Studio — Akashdeep Singh"
        description="Punjab Tech builds mobile apps (React Native) and websites for startups. MVPs, Play Store apps, branding, CRM & growth — one package. Built by Akashdeep Singh. Book a free call."
      />
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
