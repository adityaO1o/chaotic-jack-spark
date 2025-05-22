
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import PartnerSection from "@/components/PartnerSection";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnhancedPerformanceMetrics from "@/components/EnhancedPerformanceMetrics";
import { ProjectCard } from "@/components/EnhancedCards";
import { motion } from "framer-motion";

const Work = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', { email, phone });
  };

  const clients = [
    {
      name: "ZARA",
      result: "+40% Ecommerce Growth",
      services: ["Paid Search", "Paid Social", "SEO"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Homme",
      result: "+50% Engagement Rates",
      services: ["Organic Social Media", "Paid Social"],
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "IKEA",
      result: "+40% Ecommerce Growth",
      services: ["Paid Search", "Paid Social", "SEO"],
      image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "LaPrima",
      result: "+40% Ecommerce Growth",
      services: ["Paid Search", "Paid Social", "SEO"],
      image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Subway",
      result: "+50% Increase in Organic Sessions",
      services: ["Organic Social Media", "Paid Social"],
      image: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Jolie",
      result: "+40% Ecommerce Growth",
      services: ["Paid Search", "Paid Social", "SEO"],
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    },
    {
      name: "NIKO",
      result: "+40% Ecommerce Growth",
      services: ["Paid Search", "Paid Social", "SEO"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Nestlé",
      result: "+50% Increase in Organic Transactions",
      services: ["Organic Social Media", "Paid Social"],
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "MarcPol",
      result: "+55% Ecommerce Growth",
      services: ["Paid Search", "Paid Social", "SEO"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
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
        
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-syne font-bold text-center mb-10">
              <span className="text-chaotic-blue">🏆</span> Client Success Highlights
            </h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {clients.map((client, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <ProjectCard
                    name={client.name}
                    result={client.result}
                    services={client.services}
                    image={client.image}
                  />
                </motion.div>
              ))}
            </motion.div>
            
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
