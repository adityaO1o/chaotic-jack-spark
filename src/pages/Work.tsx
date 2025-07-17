import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ExternalLink, Calendar, Code, Users, Zap, Filter, Download, Video } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import PartnerSection from "@/components/PartnerSection";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { useState, useMemo } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnhancedPerformanceMetrics from "@/components/EnhancedPerformanceMetrics";
import { motion } from "framer-motion";
import ProjectSearch from "@/components/ProjectSearch";
import { ProjectGridSkeleton } from "@/components/ProjectSkeletons";
import ProjectTimeline from "@/components/ProjectTimeline";
import ProjectMetricsDashboard from "@/components/ProjectMetricsDashboard";
import ClientLogoGallery from "@/components/ClientLogoGallery";
import InteractiveProjectMap from "@/components/InteractiveProjectMap";
import VideoShowcase from "@/components/VideoShowcase";

const Work = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', { email, phone });
  };

  const handleProjectClick = (index: number, projectUrl: string) => {
    if (expandedProject === index) {
      window.open(projectUrl, '_blank', 'noopener,noreferrer');
    } else {
      setExpandedProject(index);
    }
  };

  const clients = [
    {
      name: "HyGear Fashion",
      url: "https://hygearfashion.com/",
      result: "+65% Online Sales Growth",
      services: ["E-commerce Development", "SEO", "Social Media Marketing"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "A comprehensive fashion e-commerce platform providing trendy clothing solutions for modern consumers.",
      completed: "2024",
      challenge: "Built a scalable e-commerce platform with advanced inventory management and seamless payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      features: ["Advanced Search", "Wishlist Management", "Order Tracking", "Mobile Responsive"],
      feedback: "HyGear Fashion transformed our online presence with exceptional design and functionality.",
      category: "ecommerce",
      testimonial: {
        quote: "Chaotic Jack delivered beyond our expectations. The platform is fast, reliable, and beautiful.",
        author: "Priya Sharma, Founder"
      },
      caseStudyUrl: "/case-studies/hygear-fashion.pdf",
      videoUrl: "https://www.youtube.com/watch?v=example1"
    },
    {
      name: "Oxygen4India",
      url: "https://oxygen4india.com/",
      result: "+80% Lead Generation",
      services: ["Healthcare Platform", "SEO", "Content Marketing"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Critical healthcare platform connecting patients with oxygen suppliers during emergency situations.",
      completed: "2024",
      challenge: "Developed a real-time platform to handle urgent healthcare requests with location-based services.",
      technologies: ["React", "Firebase", "Google Maps API", "PWA"],
      features: ["Real-time Tracking", "Emergency Alerts", "Location Services", "24/7 Support"],
      feedback: "Oxygen4India's platform was crucial during the pandemic, providing life-saving connections.",
      category: "healthcare",
      testimonial: {
        quote: "The platform saved countless lives during critical times. Excellent work by Chaotic Jack.",
        author: "Dr. Rajesh Kumar, Medical Director"
      },
      caseStudyUrl: "/case-studies/oxygen4india.pdf",
      videoUrl: "https://www.youtube.com/watch?v=example2"
    },
    {
      name: "Longfian India",
      url: "https://longfianindia.com/",
      result: "+45% Market Reach",
      services: ["Corporate Website", "SEO", "Digital Marketing"],
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Leading medical equipment manufacturer specializing in oxygen concentrators and healthcare solutions.",
      completed: "2023",
      challenge: "Created a professional corporate website showcasing complex medical products with technical specifications.",
      technologies: ["WordPress", "PHP", "MySQL", "jQuery"],
      features: ["Product Catalog", "Technical Specs", "Dealer Network", "Support Portal"],
      feedback: "Longfian India's new website significantly improved our B2B client engagement and inquiries.",
      category: "corporate"
    },
    {
      name: "Goldline Intertrade",
      url: "http://goldlineintertrade.store/",
      result: "+55% Online Revenue",
      services: ["E-commerce Store", "Payment Gateway", "Inventory Management"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "International trading platform specializing in precious metals and commodities exchange.",
      completed: "2024",
      challenge: "Built a secure trading platform with real-time price updates and multi-currency support.",
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
      features: ["Real-time Pricing", "Multi-currency", "Secure Trading", "Analytics Dashboard"],
      feedback: "Goldline Intertrade's platform revolutionized our trading operations with excellent security features.",
      category: "ecommerce"
    },
    {
      name: "Roadies Koffe Houz",
      url: "https://roadies-koffe-houz.vercel.app/",
      result: "+70% Online Orders",
      services: ["Restaurant Website", "Online Ordering", "Brand Identity"],
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Modern coffee house platform offering premium coffee experiences with online ordering system.",
      completed: "2024",
      challenge: "Developed an engaging cafe website with seamless online ordering and table reservation system.",
      technologies: ["Next.js", "Tailwind CSS", "Supabase", "Vercel"],
      features: ["Online Menu", "Order System", "Table Booking", "Loyalty Program"],
      feedback: "Roadies Koffe Houz website perfectly captures our brand essence and boosted online sales significantly.",
      category: "restaurant"
    },
    {
      name: "Hamylten",
      url: "https://hamylten.com/",
      result: "+60% Customer Engagement",
      services: ["Corporate Branding", "Web Development", "Digital Strategy"],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
      description: "Professional consulting firm providing innovative business solutions and strategic advisory services.",
      completed: "2023",
      challenge: "Created a sophisticated corporate identity with a modern website reflecting professionalism and expertise.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: ["Service Portfolio", "Client Testimonials", "Blog System", "Contact Forms"],
      feedback: "Hamylten's new digital presence elevated our brand image and attracted high-quality clients.",
      category: "corporate"
    },
    {
      name: "MDM Consulting",
      url: "https://mdmconsulting.in/",
      result: "+50% Lead Quality",
      services: ["Professional Services", "SEO", "Content Strategy"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Strategic consulting firm specializing in business transformation and organizational development.",
      completed: "2024",
      challenge: "Designed a professional platform showcasing complex consulting services with clear value propositions.",
      technologies: ["WordPress", "Custom PHP", "Bootstrap", "MySQL"],
      features: ["Service Showcase", "Case Studies", "Resource Library", "Client Portal"],
      feedback: "MDM Consulting's website effectively communicates our expertise and generates quality business inquiries.",
      category: "corporate"
    },
    {
      name: "Vidflyy",
      url: "https://vidflyy-main.vercel.app/",
      result: "+85% User Engagement",
      services: ["Video Platform", "Streaming Technology", "UI/UX Design"],
      image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2062&q=80",
      description: "Innovative video streaming platform providing seamless content delivery and interactive experiences.",
      completed: "2024",
      challenge: "Built a scalable video platform with adaptive streaming and real-time user interactions.",
      technologies: ["React", "Node.js", "WebRTC", "AWS CloudFront"],
      features: ["HD Streaming", "Live Chat", "Content Management", "Analytics"],
      feedback: "Vidflyy's platform delivers exceptional video quality and user experience beyond our expectations.",
      category: "technology"
    },
    {
      name: "Dukaan Steel",
      url: "https://dukaan-steel.vercel.app/",
      result: "+40% B2B Sales",
      services: ["Industrial Website", "Catalog Management", "B2B Portal"],
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      description: "Industrial steel trading platform connecting manufacturers with distributors and end customers.",
      completed: "2024",
      challenge: "Developed a robust B2B platform with complex pricing structures and bulk order management.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
      features: ["Product Catalog", "Bulk Pricing", "Quote System", "Inventory Tracking"],
      feedback: "Dukaan Steel's platform streamlined our B2B operations and improved customer relationships.",
      category: "industrial"
    },
    {
      name: "KD Engineers",
      url: "https://kdengineers.in/",
      result: "+35% Project Inquiries",
      services: ["Engineering Services", "Portfolio Website", "SEO"],
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Professional engineering consultancy providing innovative solutions for infrastructure projects.",
      completed: "2023",
      challenge: "Created a technical portfolio website showcasing complex engineering projects and capabilities.",
      technologies: ["WordPress", "Custom CSS", "PHP", "jQuery"],
      features: ["Project Gallery", "Service Details", "Team Profiles", "Contact System"],
      feedback: "KD Engineers' website effectively showcases our technical expertise and attracts quality projects.",
      category: "corporate"
    },
    {
      name: "Innotech India",
      url: "https://innotecindia.in/",
      result: "+55% Technology Adoption",
      services: ["Tech Solutions", "Innovation Platform", "Digital Transformation"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80",
      description: "Leading technology innovation company providing cutting-edge solutions for digital transformation.",
      completed: "2024",
      challenge: "Built a modern tech platform showcasing innovative solutions with interactive demos.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      features: ["Solution Demos", "Tech Stack", "Innovation Lab", "Client Portal"],
      feedback: "Innotech India's platform perfectly represents our innovative approach and technical capabilities.",
      category: "technology"
    },
    {
      name: "Naina Volt Energy",
      url: "https://nainavoltenergy.com/",
      result: "+75% Green Energy Adoption",
      services: ["Renewable Energy", "Sustainability Platform", "Green Tech"],
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Sustainable energy solutions provider focusing on solar power and renewable energy systems.",
      completed: "2024",
      challenge: "Developed an educational platform promoting renewable energy with cost calculators and ROI tools.",
      technologies: ["Vue.js", "Express.js", "MySQL", "Chart.js"],
      features: ["Energy Calculator", "ROI Analysis", "Project Gallery", "Sustainability Metrics"],
      feedback: "Naina Volt Energy's platform educates customers and significantly increased our solar installations.",
      category: "technology"
    },
    {
      name: "Smart World Gems",
      url: "https://smartworldgems.in/",
      result: "+90% Luxury Sales",
      services: ["Luxury E-commerce", "Jewelry Catalog", "Premium Branding"],
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Premium jewelry and gemstone retailer offering exquisite collections with authentic certifications.",
      completed: "2023",
      challenge: "Created a luxury e-commerce experience with high-quality imagery and secure payment systems.",
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3"],
      features: ["HD Product Views", "Certification System", "Virtual Try-on", "Secure Checkout"],
      feedback: "Smart World Gems' platform elegantly showcases our premium jewelry and boosted online luxury sales.",
      category: "ecommerce"
    },
    {
      name: "AS Precision",
      url: "https://asprecision.in/",
      result: "+45% Manufacturing Orders",
      services: ["Manufacturing Website", "Precision Engineering", "B2B Platform"],
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Precision manufacturing company specializing in high-quality components for automotive and aerospace industries.",
      completed: "2024",
      challenge: "Developed a technical showcase platform highlighting precision capabilities and quality standards.",
      technologies: ["React", "Node.js", "PostgreSQL", "D3.js"],
      features: ["Technical Specs", "Quality Certificates", "Capability Matrix", "Quote System"],
      feedback: "AS Precision's website demonstrates our manufacturing excellence and increased B2B inquiries significantly.",
      category: "industrial"
    },
    {
      name: "Shimmer Farms",
      url: "https://shimmerfarms.in/",
      result: "+60% Organic Produce Sales",
      services: ["Agriculture Platform", "Organic Farming", "Farm-to-Table"],
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2014&q=80",
      description: "Sustainable agriculture platform connecting organic farmers directly with health-conscious consumers.",
      completed: "2024",
      challenge: "Built a farm-to-table platform with fresh produce tracking and subscription management.",
      technologies: ["React", "Firebase", "Stripe", "Google Maps"],
      features: ["Fresh Tracking", "Subscription Box", "Farm Profiles", "Delivery Tracking"],
      feedback: "Shimmer Farms' platform revolutionized our organic produce distribution and customer relationships.",
      category: "agriculture"
    },
    {
      name: "Eyeconic Optical",
      url: "https://eyeconicoptical.in/",
      result: "+50% Eyewear Sales",
      services: ["Optical Store", "Virtual Try-on", "Eye Care Platform"],
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Modern optical store offering premium eyewear with advanced virtual try-on technology and eye care services.",
      completed: "2023",
      challenge: "Integrated virtual try-on technology with comprehensive eye care services and appointment booking.",
      technologies: ["React", "WebGL", "Node.js", "MySQL"],
      features: ["Virtual Try-on", "Eye Test Booking", "Prescription Upload", "Frame Finder"],
      feedback: "Eyeconic Optical's virtual try-on feature transformed our customer experience and boosted online sales.",
      category: "healthcare"
    }
  ];

  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    clients.forEach(client => {
      client.technologies.forEach(tech => techs.add(tech));
    });
    return Array.from(techs).sort();
  }, []);

  const filteredClients = useMemo(() => {
    let filtered = clients;

    if (activeFilter !== 'all') {
      filtered = filtered.filter(client => client.category === activeFilter);
    }

    if (searchQuery) {
      filtered = filtered.filter(client => 
        client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (selectedTechnologies.length > 0) {
      filtered = filtered.filter(client =>
        selectedTechnologies.some(tech => client.technologies.includes(tech))
      );
    }

    return filtered;
  }, [activeFilter, searchQuery, selectedTechnologies]);

  const filters = [
    { id: 'all', label: 'All Projects', count: clients.length },
    { id: 'ecommerce', label: 'E-commerce', count: clients.filter(c => c.category === 'ecommerce').length },
    { id: 'corporate', label: 'Corporate', count: clients.filter(c => c.category === 'corporate').length },
    { id: 'technology', label: 'Technology', count: clients.filter(c => c.category === 'technology').length },
    { id: 'healthcare', label: 'Healthcare', count: clients.filter(c => c.category === 'healthcare').length },
    { id: 'industrial', label: 'Industrial', count: clients.filter(c => c.category === 'industrial').length },
    { id: 'restaurant', label: 'Restaurant', count: clients.filter(c => c.category === 'restaurant').length },
    { id: 'agriculture', label: 'Agriculture', count: clients.filter(c => c.category === 'agriculture').length },
  ];

  const testimonials = [
    {
      quote: "Chaotic Jack helped us scale fast, optimize smart, and grow consistently. Their team is responsive and truly understands digital marketing.",
      name: "Sarah Thompson",
      position: "CMO, Retail Brand",
      company: "FashionVerse",
      stars: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      quote: "Every campaign has been ROI-focused. We're seeing tangible results month after month with measurable growth in our key metrics.",
      name: "John Miller",
      position: "Marketing Director",
      company: "TechSolutions Inc.",
      stars: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      quote: "Their ability to adapt to changing market conditions and pivot strategies quickly has been invaluable to our business success.",
      name: "Michael Chang",
      position: "Founder",
      company: "GrowthStartup",
      stars: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      quote: "What sets Chaotic Jack apart is their combination of analytical prowess and creative thinking. Truly a rare find in the agency world.",
      name: "Priya Sharma",
      position: "Digital Marketing Lead",
      company: "InnovateNow",
      stars: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const handleFilterChange = (filterId: string) => {
    setIsLoading(true);
    setActiveFilter(filterId);
    setExpandedProject(null);
    setTimeout(() => setIsLoading(false), 500);
  };

  const handleCaseStudyDownload = (caseStudyUrl: string, projectName: string) => {
    console.log(`Downloading case study for ${projectName}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-28 pb-16">
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/50 via-chaotic-blue/20 to-transparent z-0 h-64"></div>
          <div className="container mx-auto px-4 md:px-6 mb-16 relative z-10 pt-8">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold font-syne mb-6">
                Success Stories
              </h1>
              <h2 className="text-2xl md:text-3xl font-syne font-medium mb-6">
                Delivering Real, Measurable Results
              </h2>
              <p className="text-lg font-kanit text-gray-700 mb-8">
                When you partner with Chaotic Jack, we handle the heavy lifting — so you can focus on what you do best. From traffic to conversions and revenue, we turn digital strategies into business wins.
              </p>
              <p className="text-lg font-kanit text-gray-700 mb-8">
                Whether it's SEO, PPC, web design, social media, or email marketing, our strategies are crafted to drive growth. Here's a look at how we've helped some of the world's biggest brands thrive in the digital landscape.
              </p>
            </motion.div>
          </div>
        </section>

        <ProjectMetricsDashboard />
        
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-syne font-bold text-center mb-10">
              <span className="text-chaotic-blue">🏆</span> Client Success Highlights
            </h2>
            
            <ProjectSearch
              onSearch={setSearchQuery}
              onTechnologyFilter={setSelectedTechnologies}
              selectedTechnologies={selectedTechnologies}
              availableTechnologies={allTechnologies}
            />
            
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  onClick={() => handleFilterChange(filter.id)}
                  className={`font-kanit ${
                    activeFilter === filter.id
                      ? "bg-chaotic-blue text-white hover:bg-chaotic-blue/90"
                      : "border-chaotic-blue text-chaotic-blue hover:bg-chaotic-blue hover:text-white"
                  }`}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {filter.label} ({filter.count})
                </Button>
              ))}
            </div>
            
            {isLoading ? (
              <ProjectGridSkeleton />
            ) : (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key={`${activeFilter}-${searchQuery}-${selectedTechnologies.join(',')}`}
              >
                {filteredClients.map((client, index) => (
                  <motion.div key={`${activeFilter}-${index}`} variants={itemVariants}>
                    <div 
                      className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 bg-white hover:shadow-xl hover:-translate-y-2 cursor-pointer"
                      onClick={() => handleProjectClick(index, client.url)}
                    >
                      <div className="aspect-w-16 aspect-h-9 relative h-48">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                        <img
                          src={client.image}
                          alt={client.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                        <div className="absolute inset-x-0 bottom-0 p-4 transform transition-transform duration-500 group-hover:translate-y-0">
                          <h3 className="text-xl font-syne font-bold mb-1 text-white">{client.name}</h3>
                          <div className="inline-block bg-chaotic-blue text-white text-sm font-medium px-2 py-1 rounded-sm">
                            {client.result}
                          </div>
                        </div>
                      </div>
                      
                      {expandedProject === index ? (
                        <motion.div 
                          className="p-5 border-t-4 border-chaotic-blue"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-gray-600 mb-4 font-kanit">{client.description}</p>
                          
                          <div className="mb-4">
                            <div className="flex items-center gap-2 mb-2">
                              <Calendar className="h-4 w-4 text-chaotic-blue" />
                              <span className="text-sm text-gray-500">Completed: {client.completed}</span>
                            </div>
                            <p className="text-sm text-gray-600">{client.challenge}</p>
                          </div>

                          <div className="mb-4">
                            <div className="flex items-center gap-2 mb-2">
                              <Code className="h-4 w-4 text-chaotic-blue" />
                              <span className="text-sm font-medium">Technologies Used</span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {client.technologies.map((tech, techIndex) => (
                                <Badge key={techIndex} variant="outline" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="mb-4">
                            <div className="flex items-center gap-2 mb-2">
                              <Zap className="h-4 w-4 text-chaotic-blue" />
                              <span className="text-sm font-medium">Key Features</span>
                            </div>
                            <div className="grid grid-cols-2 gap-1 text-xs text-gray-600">
                              {client.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center gap-1">
                                  <div className="w-1 h-1 bg-chaotic-blue rounded-full"></div>
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="mb-4">
                            <div className="flex items-center gap-2 mb-2">
                              <Users className="h-4 w-4 text-chaotic-blue" />
                              <span className="text-sm font-medium">Client Feedback</span>
                            </div>
                            <p className="text-sm text-gray-600 italic">"{client.feedback}"</p>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCaseStudyDownload(client.caseStudyUrl, client.name);
                              }}
                              className="text-xs"
                            >
                              <Download className="w-3 h-3 mr-1" />
                              Case Study
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(client.videoUrl, '_blank', 'noopener,noreferrer');
                              }}
                              className="text-xs"
                            >
                              <Video className="w-3 h-3 mr-1" />
                              Demo Video
                            </Button>
                          </div>

                          <a 
                            href={client.url}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="inline-flex items-center text-chaotic-blue hover:text-chaotic-blue/80 font-kanit text-sm font-medium"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="mr-1 h-3 w-3" />
                            Click again to visit project →
                          </a>
                        </motion.div>
                      ) : (
                        <div className="p-5">
                          <div className="flex flex-wrap gap-2 mb-3">
                            {client.services.map((service, serviceIndex) => (
                              <span 
                                key={serviceIndex} 
                                className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-sm"
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                          <button className="inline-flex items-center text-chaotic-blue hover:text-chaotic-blue/80 font-kanit text-sm">
                            VIEW PROJECT DETAILS <ArrowRight className="ml-1 h-3 w-3" />
                          </button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
            
            <div className="text-center">
              <Button 
                variant="outline"
                className="rounded-none border border-black text-black hover:bg-black hover:text-white transition-colors font-kanit"
              >
                VIEW OUR FULL PORTFOLIO <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <VideoShowcase />

        <ProjectTimeline />

        <InteractiveProjectMap />

        <ClientLogoGallery />
        
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="bg-chaotic-blue/10 p-8 md:p-12 rounded-sm">
            <h2 className="text-2xl md:text-3xl font-syne font-bold text-center mb-8">
              <span className="text-chaotic-blue">💬</span> What Our Clients Are Saying
            </h2>
            <p className="text-center font-kanit text-gray-700 mb-10 max-w-3xl mx-auto">
              With over 5000+ verified client reviews, our results speak for themselves. From global giants to growth-stage startups, businesses trust Chaotic Jack to deliver digital excellence.
            </p>
            
            <div className="max-w-4xl mx-auto mb-12">
              <Carousel className="w-full">
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <div className="bg-white p-8 rounded-lg shadow-lg">
                        <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                          <div className="w-20 h-20 rounded-full overflow-hidden">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="flex justify-center md:justify-start mb-2">
                              <div className="flex text-yellow-400">
                                {[...Array(testimonial.stars)].map((_, i) => (
                                  <Star key={i} className="h-5 w-5 fill-current" />
                                ))}
                              </div>
                            </div>
                            <p className="font-bold text-center md:text-left">{testimonial.name}</p>
                            <p className="text-sm text-gray-600 text-center md:text-left">{testimonial.position}, {testimonial.company}</p>
                          </div>
                        </div>
                        <p className="text-center text-lg font-kanit mb-6 italic">"{testimonial.quote}"</p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center gap-2 mt-6">
                  <CarouselPrevious className="static transform-none mx-2 bg-white hover:bg-gray-100 shadow-md" />
                  <CarouselNext className="static transform-none mx-2 bg-white hover:bg-gray-100 shadow-md" />
                </div>
              </Carousel>
            </div>
            
            <div className="text-center mb-10">
              <h3 className="text-xl font-syne font-bold mb-6">Ready to Grow Your Brand?</h3>
              <p className="font-kanit mb-6">Let us show you what real digital performance looks like.</p>
              <p className="font-kanit mb-6">📲 99583 21975</p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-3 max-w-2xl mx-auto">
                <div className="flex-1 bg-white p-3 rounded-[20px_20px_20px_0px] border-2 border-black shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02] overflow-hidden">
                  <input
                    type="email" 
                    placeholder="Email" 
                    className="w-full py-2 px-4 focus:outline-none font-kanit"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="flex-1 bg-white p-3 rounded-[20px_20px_20px_0px] border-2 border-black shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02] overflow-hidden">
                  <input
                    type="tel" 
                    placeholder="Phone" 
                    className="w-full py-2 px-4 focus:outline-none font-kanit"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <Button 
                  type="submit"
                  className="rounded-none bg-black text-white border border-white hover:bg-white hover:text-black transition-colors font-kanit whitespace-nowrap"
                >
                  GET A FREE AUDIT
                </Button>
              </form>
            </div>
          </div>
        </section>
        
        <EnhancedPerformanceMetrics />
        
        <PartnerSection className="mt-10" />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Work;
