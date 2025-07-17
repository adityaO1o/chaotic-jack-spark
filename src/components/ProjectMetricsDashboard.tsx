
import { motion } from 'framer-motion';
import { TrendingUp, Users, Globe, Award, DollarSign, Clock } from 'lucide-react';

const ProjectMetricsDashboard = () => {
  const metrics = [
    {
      title: "Total Projects",
      value: "150+",
      icon: <Globe className="w-8 h-8" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      change: "+25%"
    },
    {
      title: "Happy Clients",
      value: "120+",
      icon: <Users className="w-8 h-8" />,
      color: "text-green-600",
      bgColor: "bg-green-50",
      change: "+30%"
    },
    {
      title: "Revenue Generated",
      value: "$2.5M+",
      icon: <DollarSign className="w-8 h-8" />,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      change: "+45%"
    },
    {
      title: "Industries Served",
      value: "15+",
      icon: <Award className="w-8 h-8" />,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      change: "+20%"
    },
    {
      title: "Avg. Project Time",
      value: "6 Months",
      icon: <Clock className="w-8 h-8" />,
      color: "text-red-600",
      bgColor: "bg-red-50",
      change: "-15%"
    },
    {
      title: "Success Rate",
      value: "98%",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "text-chaotic-blue",
      bgColor: "bg-blue-50",
      change: "+5%"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-chaotic-blue/5 to-yellow-400/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-syne mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-600 font-kanit max-w-2xl mx-auto">
            Collective metrics showing our journey and the impact we've created across industries
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                  <div className={metric.color}>
                    {metric.icon}
                  </div>
                </div>
                <div className={`text-sm font-medium px-2 py-1 rounded-full ${
                  metric.change.startsWith('+') ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                }`}>
                  {metric.change}
                </div>
              </div>
              <h3 className="text-2xl font-bold font-syne mb-2">{metric.value}</h3>
              <p className="text-gray-600 font-kanit">{metric.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectMetricsDashboard;
