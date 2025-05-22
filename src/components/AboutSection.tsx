
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      stat: "$350M+",
      description: "raised by clients"
    },
    {
      stat: "2+ years",
      description: "0 lost clients"
    },
    {
      stat: "Fastest-growing",
      description: "startups"
    },
    {
      stat: "20+ expert",
      description: "marketers & creators"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-chaotic-blue/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-syne">
              We combine customer data with thoughtful work
            </h2>
            
            <p className="text-lg font-kanit text-gray-700">
              At Chaotic Jack, we craft custom strategies that resonate with your target audience. Our proven approach has generated over $3B in sales and 7.8M+ leads for our clients across various industries.
            </p>
            
            <p className="text-lg font-kanit text-gray-700">
              We don't just deliver campaigns—we deliver results through deep audience understanding, innovative strategies, and relentless optimization.
            </p>
            
            <Button 
              variant="outline"
              className="rounded-none border border-black text-black hover:bg-black hover:text-white transition-colors font-kanit"
            >
              MORE ABOUT OUR UNIQUE APPROACH <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl md:text-3xl font-syne font-bold text-chaotic-blue mb-2">
                  {item.stat}
                </h3>
                <p className="text-gray-700 font-kanit">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
