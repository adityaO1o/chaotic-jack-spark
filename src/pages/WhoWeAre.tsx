
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PartnerSection from "@/components/PartnerSection";

const WhoWeAre = () => {
  const values = [
    {
      title: "Transparency",
      description: "No fluff, just results. We say what we do, and do what we say."
    },
    {
      title: "Integrity",
      description: "We earn trust through consistency, honesty, and results."
    },
    {
      title: "Simplicity",
      description: "We simplify the complex. No jargon, just clarity and execution."
    },
    {
      title: "Performance",
      description: "Every strategy, campaign, and decision is built to drive real growth."
    }
  ];

  const services = [
    "Paid Search Marketing",
    "SEO",
    "Email Marketing",
    "Conversion Rate Optimization",
    "Social Media",
    "Google Shopping",
    "Influencer Marketing",
    "Amazon Marketing"
  ];

  const team = [
    {
      name: "Aditya Sharma",
      role: "CEO & Founder"
    },
    {
      name: "Stella Boone",
      role: "Operations Manager"
    },
    {
      name: "Fannie Palmer",
      role: "VP of Sales"
    },
    {
      name: "Arthur Price",
      role: "Lead Digital Strategist"
    }
  ];

  const testimonials = [
    "Chaotic Jack helped us scale fast with targeted campaigns and real insights.",
    "ROI-focused and results-driven — truly game-changing."
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-28 pb-16">
        <section className="container mx-auto px-4 md:px-6 mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-syne mb-8">
              <span className="text-chaotic-blue">🙌</span> Who We Are
            </h1>
            <h2 className="text-2xl md:text-3xl font-syne font-bold mb-6">
              Digital Marketing Solutions Designed to Drive Revenue
            </h2>
            <p className="text-lg font-kanit text-gray-700 mb-8">
              Founded with a belief in the power of marketing to transform businesses, Chaotic Jack has evolved from working with entertainment brands to partnering with high-growth startups and industry leaders globally. Our approach is rooted in creativity, strategy, and performance — helping brands dominate in the digital world.
            </p>
          </div>
        </section>
        
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-syne font-bold text-center mb-10">
              <span className="text-chaotic-blue">💎</span> Our Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-syne font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-700 font-kanit">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-syne font-bold mb-8">
              <span className="text-chaotic-blue">🎯</span> Marketing Solutions Provider
            </h2>
            <p className="text-lg font-kanit text-gray-700 mb-8">
              We don't just offer services — we build integrated digital ecosystems. Our full-service strategies are designed to combine the power of multiple channels to generate visibility, conversions, and revenue.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {services.map((service, index) => (
                <div key={index} className="bg-chaotic-blue/5 p-4 text-center rounded-sm">
                  <p className="font-kanit font-medium">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-syne font-bold text-center mb-10">
              <span className="text-chaotic-blue">👥</span> Our Team
            </h2>
            <h3 className="text-xl font-syne font-medium text-center mb-10">
              Meet the Experts Behind the Strategy
            </h3>
            <p className="text-lg font-kanit text-gray-700 text-center mb-10 max-w-3xl mx-auto">
              A team of passionate marketers, strategists, and creators focused on your brand's growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-sm shadow-md text-center">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h4 className="font-syne font-bold">{member.name}</h4>
                  <p className="text-sm font-kanit text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
            
            <p className="text-center mt-10 font-kanit">
              <span className="text-chaotic-blue">🏆</span> Recognized by top platforms and loved by 5000+ clients.
            </p>
          </div>
        </section>
        
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="bg-chaotic-blue/10 p-8 md:p-12 rounded-sm">
            <div className="text-center mb-8">
              <p className="font-kanit mb-2">📞 Let's Talk – 99583 21975</p>
              <Button 
                className="rounded-none bg-black text-white border border-white hover:bg-white hover:text-black transition-colors font-kanit mb-3"
              >
                GET A FREE AUDIT
              </Button>
              <p className="text-sm font-kanit text-gray-700">A Partner, Not Just a Vendor</p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl font-syne font-bold text-center mb-6">
                <span className="text-chaotic-blue">⭐</span> Our Clients Say It Best
              </h3>
              <p className="text-center text-sm font-kanit text-gray-600 mb-6">5000+ verified client reviews</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-sm shadow-md">
                    <div className="flex justify-center mb-2">
                      <Badge className="bg-yellow-400 text-black">⭐⭐⭐⭐⭐</Badge>
                    </div>
                    <p className="text-center font-kanit">"{testimonial}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <PartnerSection className="mt-10" />
      </main>
      
      <Footer />
    </div>
  );
};

export default WhoWeAre;
