
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { CircularProgressCard, BudgetCard, TrafficCard } from '@/components/DashboardCard';
import { motion } from 'framer-motion';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [animateCards, setAnimateCards] = useState(false);
  
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateCards(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/50 via-chaotic-blue/20 to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-syne leading-tight">
              Creative marketing that drives revenue
            </h1>
            
            <p className="text-lg md:text-xl font-kanit text-gray-700">
              It's your turn to shine when we put the spotlight on your brand. We help get the attention and revenues your business deserves in the digital world.
            </p>
            
            <form onSubmit={handleSubmit} className="pt-4 flex flex-col sm:flex-row gap-3">
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
              <Button 
                type="submit"
                className="rounded-none bg-black text-white border border-white hover:bg-white hover:text-black transition-colors font-kanit"
              >
                NEXT <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
          
          <motion.div 
            className="relative flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={animateCards ? "visible" : "hidden"}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div variants={cardVariants}>
                <BudgetCard 
                  amount={42600} 
                  budget={55000} 
                  data={budgetData} 
                  className="transform hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
              <motion.div variants={cardVariants}>
                <CircularProgressCard 
                  title="Facebook Marketing Campaign" 
                  value={690} 
                  max={1000} 
                  className="transform hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            </div>
            <motion.div variants={cardVariants}>
              <TrafficCard 
                title="Generated Traffic & Leads" 
                data={trafficData} 
                percentage={61} 
                className="transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
