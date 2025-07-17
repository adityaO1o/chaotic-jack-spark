
import { Calendar, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface TimelineProject {
  name: string;
  completion: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  category: string;
  image: string;
}

const ProjectTimeline = () => {
  const timelineProjects: TimelineProject[] = [
    {
      name: "Smart World Gems",
      completion: "2024-12",
      status: "upcoming",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "AS Precision",
      completion: "2024-11",
      status: "in-progress",
      category: "Industrial",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Shimmer Farms",
      completion: "2024-10",
      status: "completed",
      category: "Agriculture",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Vidflyy",
      completion: "2024-09",
      status: "completed",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Roadies Koffe Houz",
      completion: "2024-08",
      status: "completed",
      category: "Restaurant",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "HyGear Fashion",
      completion: "2024-07",
      status: "completed",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-6 h-6 text-yellow-500" />;
      case 'upcoming':
        return <Calendar className="w-6 h-6 text-blue-500" />;
      default:
        return <Calendar className="w-6 h-6 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-yellow-500';
      case 'upcoming':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-syne mb-4">
            Project Timeline
          </h2>
          <p className="text-lg text-gray-600 font-kanit">
            Journey through our project development timeline
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            
            {timelineProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-center mb-8"
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full ${getStatusColor(project.status)} border-4 border-white shadow-lg`}></div>
                
                {/* Content */}
                <div className="ml-20 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {getStatusIcon(project.status)}
                        <h3 className="text-xl font-semibold font-syne">{project.name}</h3>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="bg-chaotic-blue/10 text-chaotic-blue px-2 py-1 rounded">
                          {project.category}
                        </span>
                        <span>{project.completion}</span>
                        <span className="capitalize">{project.status.replace('-', ' ')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;
