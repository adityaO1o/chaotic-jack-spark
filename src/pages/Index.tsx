
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PartnerSection from "@/components/PartnerSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import AboutSection from "@/components/AboutSection";
import TechAuditSection from "@/components/TechAuditSection";
import ResultsSection from "@/components/ResultsSection";
import TeamSection from "@/components/TeamSection";
import BlogSection from "@/components/BlogSection";
import ConsultationSection from "@/components/ConsultationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero />
        <PartnerSection />
        <WhatWeDoSection />
        <AboutSection />
        <TechAuditSection />
        <ResultsSection />
        <TeamSection />
        <BlogSection />
        <ConsultationSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
