
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PartnerSection from "@/components/PartnerSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import AboutSection from "@/components/AboutSection";
import TechnologySection from "@/components/TechnologySection";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import TeamSection from "@/components/TeamSection";
import BlogSection from "@/components/BlogSection";
import ConsultationSection from "@/components/ConsultationSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import BiggestProjectsSection from "@/components/BiggestProjectsSection";
import ProjectMetricsDashboard from "@/components/ProjectMetricsDashboard";
import ClientLogoGallery from "@/components/ClientLogoGallery";
import VideoShowcase from "@/components/VideoShowcase";
import EnhancedCards from "@/components/EnhancedCards";
import EnhancedPerformanceMetrics from "@/components/EnhancedPerformanceMetrics";
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Hero />
        <PartnerSection />
        <EnhancedPerformanceMetrics />
        <WhatWeDoSection />
        <BiggestProjectsSection />
        <ProjectMetricsDashboard />
        <EnhancedCards />
        <ServicesSection />
        <VideoShowcase />
        <AboutSection />
        <TechnologySection />
        <ResultsSection />
        <ClientLogoGallery />
        <TeamSection />
        <BlogSection />
        <ConsultationSection />
      </motion.main>
      
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Index;
