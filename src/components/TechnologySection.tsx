
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const TechnologySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [email, setEmail] = useState('');

  const techLogos = [
    { name: 'Mailchimp', logo: 'M' },
    { name: 'Google Ads', logo: 'G' },
    { name: 'Hootsuite', logo: 'H' },
    { name: 'Semrush', logo: 'S' },
    { name: 'Netcore', logo: 'N' },
    { name: 'Adespresso', logo: 'A' },
    { name: 'HubSpot', logo: 'H' },
    { name: 'Ahrefs', logo: 'A' },
  ];

  const auditFeatures = [
    { id: 1, text: '30-min strategy call' },
    { id: 2, text: 'In-depth audit' },
    { id: 3, text: 'Growth Roadmap' },
  ];

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? techLogos.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === techLogos.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex === techLogos.length - 1 ? 0 : prevIndex + 1));
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [isPaused, techLogos.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-chaotic-blue/20 via-blue-100/20 to-transparent z-0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider mb-3 font-kanit">OUR CUSTOMERS ARE SOME OF THE WORLD'S...</p>
          <h2 className="text-4xl md:text-5xl font-bold font-syne mb-10">Technology we use</h2>
        </div>

        <div className="bg-yellow-100 rounded-xl p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold font-syne">Get your free<br />marketing audit</h3>
              
              <div className="space-y-4">
                {auditFeatures.map((feature) => (
                  <div key={feature.id} className="flex items-center gap-3">
                    <CheckCircle className="text-chaotic-blue h-6 w-6" />
                    <span className="font-kanit">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col justify-between">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <button 
                    onClick={handlePrevious}
                    className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                    aria-label="Previous"
                  >
                    <ArrowLeft className="h-6 w-6" />
                  </button>
                  
                  <div 
                    className="flex items-center justify-center overflow-hidden"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    {techLogos.map((logo, index) => (
                      <div
                        key={index}
                        className={cn(
                          "transition-all duration-500 flex items-center justify-center",
                          index === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-75 absolute"
                        )}
                      >
                        {index === activeIndex && (
                          <div className="h-14 flex items-center justify-center px-4">
                            <div className="text-2xl font-bold bg-white p-3 rounded-lg shadow-sm">
                              {logo.logo} {logo.name}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={handleNext}
                    className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                    aria-label="Next"
                  >
                    <ArrowRight className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="flex justify-center gap-1">
                  {techLogos.map((_, index) => (
                    <button
                      key={index}
                      className={`h-2 rounded-full transition-all ${
                        index === activeIndex ? 'w-6 bg-chaotic-blue' : 'w-2 bg-gray-300'
                      }`}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="mt-4 animate-slide-up">
                <div className="bg-white p-3 rounded-[20px_20px_20px_0px] border-2 border-black shadow-lg flex overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02]">
                  <input
                    type="email"
                    placeholder="Email"
                    className="flex-1 py-2 px-4 focus:outline-none rounded-l-xl font-kanit"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button 
                    type="submit"
                    className="bg-black text-white border-none hover:bg-chaotic-blue transition-colors rounded-none px-8 font-kanit"
                  >
                    NEXT
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
