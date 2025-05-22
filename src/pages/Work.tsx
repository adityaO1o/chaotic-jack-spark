
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PartnerSection from "@/components/PartnerSection";

const Work = () => {
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

  const metrics = [
    "6.7x Avg. ROAS across SEO, PPC & Social",
    "100+ global clients served",
    "₹15 Cr+ managed budgets",
    "282,000+ leads generated"
  ];

  const testimonials = [
    "Chaotic Jack helped us scale fast, optimize smart, and grow consistently.",
    "Every campaign has been ROI-focused. We're seeing tangible results."
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-28 pb-16">
        <section className="container mx-auto px-4 md:px-6 mb-16">
          <div className="max-w-4xl mx-auto">
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
          </div>
        </section>
        
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-syne font-bold text-center mb-10">
              <span className="text-chaotic-blue">🏆</span> Client Success Highlights
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {clients.map((client, index) => (
                <div key={index} className="group relative overflow-hidden rounded-sm shadow-md transition-all duration-300 hover:shadow-xl bg-white">
                  <div className="aspect-w-16 aspect-h-9 relative h-48">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-xl font-syne font-bold">{client.name}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center mb-3">
                      <Badge className="bg-chaotic-blue text-white">{client.result}</Badge>
                    </div>
                    <p className="text-sm font-kanit text-gray-600 mb-3">
                      Services: {client.services.join(", ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-sm shadow-md">
                  <div className="flex justify-center mb-4">
                    <Badge className="bg-yellow-400 text-black">⭐⭐⭐⭐⭐</Badge>
                  </div>
                  <p className="text-center font-kanit mb-4">"{testimonial}"</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mb-10">
              <h3 className="text-xl font-syne font-bold mb-6">Ready to Grow Your Brand?</h3>
              <p className="font-kanit mb-6">Let us show you what real digital performance looks like.</p>
              <p className="font-kanit mb-4">📲 99583 21975</p>
              <Button 
                className="rounded-none bg-black text-white border border-white hover:bg-white hover:text-black transition-colors font-kanit"
              >
                GET A FREE AUDIT
              </Button>
            </div>
          </div>
        </section>
        
        <section className="container mx-auto px-4 md:px-6 py-16">
          <h2 className="text-2xl font-syne font-bold text-center mb-10">
            <span className="text-chaotic-blue">⚙️</span> Performance Metrics That Matter
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-sm text-center shadow-sm hover:shadow-md transition-shadow">
                <p className="font-syne font-bold">{metric}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="font-kanit text-gray-700">
              <span className="text-chaotic-blue">📌</span> Chaotic Jack — A Partner, Not Just a Vendor
            </p>
            <p className="text-sm font-kanit text-gray-600 mt-2">
              © 2025 Chaotic Jack | Terms & Conditions | Privacy Policy
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-chaotic-blue">Instagram</a>
              <a href="#" className="text-gray-600 hover:text-chaotic-blue">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-chaotic-blue">Facebook</a>
              <a href="#" className="text-gray-600 hover:text-chaotic-blue">YouTube</a>
            </div>
          </div>
        </section>
        
        <PartnerSection className="mt-10" />
      </main>
      
      <Footer />
    </div>
  );
};

export default Work;
