
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [activePercentage, setActivePercentage] = useState(25);
  
  const percentageItems = [
    { value: 25, label: "Email" },
    { value: 50, label: "Social" },
    { value: 75, label: "SEO" },
    { value: 100, label: "PPC" }
  ];

  const handleNext = () => {
    const currentIndex = percentageItems.findIndex(item => item.value === activePercentage);
    const nextIndex = (currentIndex + 1) % percentageItems.length;
    setActivePercentage(percentageItems[nextIndex].value);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-10">
      <div className="absolute inset-0 bg-gradient-to-b from-chaotic-blue/10 to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-syne leading-tight">
              Creative marketing that drives revenue
            </h1>
            
            <p className="text-lg md:text-xl font-kanit text-gray-700">
              It's your turn to shine when we put the spotlight on your brand. We help get the attention and revenues your business deserves in the digital world.
            </p>
            
            <div className="pt-4">
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-chaotic-blue transition-all duration-500"
                  style={{ width: `${activePercentage}%` }}
                ></div>
              </div>
              
              <div className="mt-2 flex justify-between items-center">
                {percentageItems.map((item) => (
                  <div 
                    key={item.value}
                    className={`text-sm font-kanit ${activePercentage >= item.value ? 'text-chaotic-blue' : 'text-gray-400'}`}
                  >
                    {item.value}% {item.label}
                  </div>
                ))}
              </div>
            </div>
            
            <Button 
              onClick={handleNext}
              className="rounded-none bg-black text-white border border-white hover:bg-white hover:text-black transition-colors font-kanit"
            >
              NEXT <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] rounded-md overflow-hidden animate-fade-in">
            <div className="absolute inset-0 bg-chaotic-blue/20 z-10 backdrop-blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-chaotic-blue/40 to-transparent z-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Marketing Strategy" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 z-30">
              <div className="bg-white p-6 rounded-sm shadow-lg">
                <h3 className="text-xl font-syne font-bold mb-2">Results-Driven Marketing</h3>
                <p className="text-sm font-kanit text-gray-700">We combine data insights with creative strategies to deliver measurable business growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
