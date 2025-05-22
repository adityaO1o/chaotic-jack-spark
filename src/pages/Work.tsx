
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PartnerSection from "@/components/PartnerSection";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChartContainer } from "@/components/ui/chart";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, LineChart, Line } from "recharts";

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

  const metricData = [
    { month: 'Jan', roas: 3.2, budget: 12000, leads: 80 },
    { month: 'Feb', roas: 4.1, budget: 15000, leads: 120 },
    { month: 'Mar', roas: 5.5, budget: 18000, leads: 150 },
    { month: 'Apr', roas: 5.2, budget: 20000, leads: 140 },
    { month: 'May', roas: 6.7, budget: 22000, leads: 190 },
    { month: 'Jun', roas: 5.9, budget: 20000, leads: 170 },
  ];

  const metrics = [
    "6.7x Avg. ROAS across SEO, PPC & Social",
    "100+ global clients served",
    "₹15 Cr+ managed budgets",
    "282,000+ leads generated"
  ];

  const testimonials = [
    {
      quote: "Chaotic Jack helped us scale fast, optimize smart, and grow consistently. Their team is responsive and truly understands digital marketing.",
      name: "Sarah Thompson",
      position: "CMO, Retail Brand",
      company: "FashionVerse",
      stars: 5
    },
    {
      quote: "Every campaign has been ROI-focused. We're seeing tangible results month after month with measurable growth in our key metrics.",
      name: "John Miller",
      position: "Marketing Director",
      company: "TechSolutions Inc.",
      stars: 5
    },
    {
      quote: "Their ability to adapt to changing market conditions and pivot strategies quickly has been invaluable to our business success.",
      name: "Michael Chang",
      position: "Founder",
      company: "GrowthStartup",
      stars: 5
    },
    {
      quote: "What sets Chaotic Jack apart is their combination of analytical prowess and creative thinking. Truly a rare find in the agency world.",
      name: "Priya Sharma",
      position: "Digital Marketing Lead",
      company: "InnovateNow",
      stars: 5
    }
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
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl bg-white hover:-translate-y-2">
                  <div className="aspect-w-16 aspect-h-9 relative h-48">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                      <h3 className="text-xl font-syne font-bold mb-1">{client.name}</h3>
                      <Badge className="bg-chaotic-blue text-white font-medium">{client.result}</Badge>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {client.services.map((service, serviceIndex) => (
                        <Badge key={serviceIndex} variant="outline" className="bg-gray-100">
                          {service}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto font-kanit text-chaotic-blue hover:text-chaotic-blue/80"
                    >
                      VIEW CASE STUDY <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
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
            
            <div className="max-w-4xl mx-auto mb-12">
              <Carousel className="w-full">
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <div className="bg-white p-8 rounded-lg shadow-md">
                        <div className="flex justify-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(testimonial.stars)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-current" />
                            ))}
                          </div>
                        </div>
                        <p className="text-center text-lg font-kanit mb-6 italic">"{testimonial.quote}"</p>
                        <div className="text-center">
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center gap-2 mt-4">
                  <CarouselPrevious className="static transform-none mx-2 rounded-full" />
                  <CarouselNext className="static transform-none mx-2 rounded-full" />
                </div>
              </Carousel>
            </div>
            
            <div className="text-center mb-10">
              <h3 className="text-xl font-syne font-bold mb-6">Ready to Grow Your Brand?</h3>
              <p className="font-kanit mb-6">Let us show you what real digital performance looks like.</p>
              <p className="font-kanit mb-4">📲 99583 21975</p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-3 max-w-2xl mx-auto">
                <Input
                  type="email" 
                  placeholder="Email" 
                  className="rounded-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Input
                  type="tel" 
                  placeholder="Phone" 
                  className="rounded-none"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Button 
                  type="submit"
                  className="rounded-none bg-black text-white border border-white hover:bg-white hover:text-black transition-colors font-kanit"
                >
                  GET A FREE AUDIT
                </Button>
              </form>
            </div>
          </div>
        </section>
        
        <section className="container mx-auto px-4 md:px-6 py-16">
          <h2 className="text-2xl font-syne font-bold text-center mb-10">
            <span className="text-chaotic-blue">⚙️</span> Performance Metrics That Matter
          </h2>
          
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-syne font-bold mb-4">Campaign Performance</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={metricData}>
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" orientation="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="roas"
                      name="ROAS (x)"
                      stroke="#6366f1"
                      strokeWidth={3}
                      dot={{ r: 5 }}
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="leads"
                      name="Leads Generated"
                      stroke="#fbbf24"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow border-t-4 border-chaotic-blue">
                <p className="font-syne font-bold text-lg">{metric}</p>
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
