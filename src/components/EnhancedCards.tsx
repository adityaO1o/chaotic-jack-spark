
import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Target, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EnhancedCards = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const achievements = [
    {
      icon: TrendingUp,
      title: "500+ Projects Delivered",
      description: "Successfully completed projects across diverse industries",
      stats: "98% Client Satisfaction",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "50+ Happy Clients",
      description: "Building lasting relationships through exceptional service",
      stats: "4.9/5 Average Rating",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Award-winning digital solutions and innovation",
      stats: "15+ Awards Won",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Target,
      title: "ROI-Focused Results",
      description: "Delivering measurable business growth and success",
      stats: "Average 300% ROI",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-chaotic-blue/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-syne mb-4">
            Why Choose Chaotic Jack?
          </h2>
          <p className="text-lg text-gray-600 font-kanit max-w-2xl mx-auto">
            We don't just build websites, we create digital experiences that drive real business results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${achievement.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold font-syne mb-3 group-hover:text-chaotic-blue transition-colors">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-gray-600 font-kanit mb-4 leading-relaxed">
                    {achievement.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-chaotic-blue bg-chaotic-blue/10 px-3 py-1 rounded-full">
                      {achievement.stats}
                    </span>
                    <ArrowRight className={`w-5 h-5 text-gray-400 transition-all duration-300 ${hoveredCard === index ? 'text-chaotic-blue translate-x-1' : ''}`} />
                  </div>
                </div>
                
                {hoveredCard === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-chaotic-blue/20 to-yellow-400/20 rounded-2xl -z-10 blur-xl"
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button 
            size="lg"
            className="bg-chaotic-blue hover:bg-chaotic-blue/90 text-white font-kanit rounded-none group"
          >
            START YOUR PROJECT 
            <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// Additional components for WhoWeAre page
export const ValueCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
    <div className="flex items-center mb-4">
      <div className="mr-4">{icon}</div>
      <h3 className="text-xl font-bold font-syne">{title}</h3>
    </div>
    <p className="text-gray-600 font-kanit leading-relaxed">{description}</p>
  </div>
);

export const ServiceProviderCard = ({ title }: { title: string }) => (
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 text-center">
    <h4 className="font-syne font-semibold text-sm text-chaotic-blue">{title}</h4>
  </div>
);

export default EnhancedCards;
