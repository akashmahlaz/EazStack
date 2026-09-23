import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedWork />
      <Services />
      <Team />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}