
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { TrendingUp, Clock, Shield, Zap } from 'lucide-react';

const EnhancedPerformanceMetrics = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    uptime: 0,
    speed: 0
  });

  const controls = useAnimation();

  useEffect(() => {
    const animateCounters = async () => {
      await controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 }
      });

      // Animate counters
      const intervals = {
        projects: setInterval(() => {
          setCounters(prev => ({
            ...prev,
            projects: prev.projects < 500 ? prev.projects + 5 : 500
          }));
        }, 20),
        clients: setInterval(() => {
          setCounters(prev => ({
            ...prev,
            clients: prev.clients < 50 ? prev.clients + 1 : 50
          }));
        }, 50),
        uptime: setInterval(() => {
          setCounters(prev => ({
            ...prev,
            uptime: prev.uptime < 99.9 ? Math.min(prev.uptime + 0.1, 99.9) : 99.9
          }));
        }, 30),
        speed: setInterval(() => {
          setCounters(prev => ({
            ...prev,
            speed: prev.speed < 98 ? prev.speed + 1 : 98
          }));
        }, 25)
      };

      // Clear intervals after animation
      setTimeout(() => {
        Object.values(intervals).forEach(clearInterval);
      }, 3000);
    };

    animateCounters();
  }, [controls]);

  const metrics = [
    {
      icon: TrendingUp,
      value: counters.projects,
      suffix: '+',
      label: 'Projects Completed',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Shield,
      value: counters.clients,
      suffix: '+',
      label: 'Happy Clients',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Clock,
      value: counters.uptime,
      suffix: '%',
      label: 'Uptime Guarantee',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      decimal: true
    },
    {
      icon: Zap,
      value: counters.speed,
      suffix: '/100',
      label: 'Performance Score',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-chaotic-blue/5 via-transparent to-yellow-400/5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-syne mb-4">
            Performance That Speaks for Itself
          </h2>
          <p className="text-lg text-gray-600 font-kanit">
            Real numbers, real results, real impact on your business
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`${metric.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className={`w-8 h-8 ${metric.color}`} />
                </div>
                
                <div className="text-3xl md:text-4xl font-bold font-syne mb-2 text-gray-800">
                  {metric.decimal ? metric.value.toFixed(1) : Math.floor(metric.value)}{metric.suffix}
                </div>
                
                <p className="text-gray-600 font-kanit text-sm md:text-base">
                  {metric.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedPerformanceMetrics;
