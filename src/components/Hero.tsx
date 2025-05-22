
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { CircularProgressCard, BudgetCard, TrafficCard } from '@/components/DashboardCard';

const Hero = () => {
  const [email, setEmail] = useState('');
  
  const budgetData = [
    { name: 'Jan', value: 30000, previous: 25000 },
    { name: 'Feb', value: 35000, previous: 28000 },
    { name: 'Mar', value: 33000, previous: 30000 },
    { name: 'Apr', value: 32000, previous: 29000 },
    { name: 'May', value: 38000, previous: 25000 },
    { name: 'Jun', value: 42000, previous: 32000 },
  ];

  const trafficData = [
    { name: 'Jan', leads: 20, traffic: 0 },
    { name: 'Feb', leads: 30, traffic: 0 },
    { name: 'Mar', leads: 22, traffic: 0 },
    { name: 'Apr', leads: 28, traffic: 0 },
    { name: 'May', leads: 24, traffic: 0 },
    { name: 'Jun', leads: 0, traffic: 30 },
    { name: 'Jul', leads: 0, traffic: 40 },
    { name: 'Aug', leads: 0, traffic: 34 },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/50 via-chaotic-blue/20 to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-syne leading-tight">
              Creative marketing that drives revenue
            </h1>
            
            <p className="text-lg md:text-xl font-kanit text-gray-700">
              It's your turn to shine when we put the spotlight on your brand. We help get the attention and revenues your business deserves in the digital world.
            </p>
            
            <form onSubmit={handleSubmit} className="pt-4 flex flex-col sm:flex-row gap-3">
              <Input
                type="email" 
                placeholder="Email" 
                className="rounded-none flex-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit"
                className="rounded-none bg-black text-white border border-white hover:bg-white hover:text-black transition-colors font-kanit"
              >
                NEXT <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          
          <div className="relative flex flex-col gap-4 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <BudgetCard 
                amount={42600} 
                budget={55000} 
                data={budgetData} 
                className="transform hover:scale-105 transition-transform duration-300"
              />
              <CircularProgressCard 
                title="Facebook Marketing Campaign" 
                value={690} 
                max={1000} 
                className="transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <TrafficCard 
              title="Generated Traffic & Leads" 
              data={trafficData} 
              percentage={61} 
              className="transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
