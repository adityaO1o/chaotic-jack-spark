
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const WhatWeDoSection = () => {
  const services = [
    {
      title: "Social Media Marketing",
      description: "Engage your audience across platforms with targeted content strategies.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    },
    {
      title: "SEO",
      description: "Improve visibility and drive organic traffic with expert optimization.",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    },
    {
      title: "Paid Search Marketing",
      description: "Maximize ROI with strategic PPC campaigns across search platforms.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
    },
    {
      title: "Website Development",
      description: "Create stunning, functional websites that convert visitors into customers.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const miniFeatures = [
    "Social Media Design",
    "Social Media Management",
    "Custom Ad Strategy",
    "Unique Campaigns",
    "Advanced Targeting"
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-syne mb-6">
            Driving a better way of doing marketing
          </h2>
          <p className="text-lg md:text-xl font-kanit text-gray-700">
            We deliver business impact through digital marketing with a combination of intellectual curiosity, industry experience, urgency, and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-sm transition-all duration-300 hover:shadow-xl">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-syne font-bold mb-2">{service.title}</h3>
                <p className="text-sm font-kanit opacity-90">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <Button 
            variant="outline"
            className="rounded-none border border-black text-black hover:bg-black hover:text-white transition-colors font-kanit"
          >
            VIEW ALL SOLUTIONS <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="bg-chaotic-blue/10 p-8 md:p-12 rounded-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-syne font-bold mb-6">
                Our Social Media Marketing Services
              </h3>
              
              <ul className="space-y-3 mb-8">
                {miniFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center font-kanit">
                    <div className="w-2 h-2 bg-chaotic-blue rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                className="rounded-none bg-black text-white border border-white hover:bg-white hover:text-black transition-colors font-kanit"
              >
                LEARN MORE <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-sm shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-kanit text-gray-500">Impact Statistic</span>
                <div className="w-12 h-1 bg-chaotic-blue"></div>
              </div>
              <p className="text-lg md:text-xl font-syne font-bold">
                86% of customers reported an increase in conversion rates through our social media marketing strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
