
import { motion } from 'framer-motion';
import { MapPin, Globe, Users } from 'lucide-react';

const InteractiveProjectMap = () => {
  const locations = [
    { 
      city: "Mumbai", 
      projects: 5, 
      clients: ["HyGear Fashion", "Smart World Gems"],
      position: { x: 45, y: 60 } 
    },
    { 
      city: "Delhi", 
      projects: 8, 
      clients: ["Oxygen4India", "Longfian India", "MDM Consulting"],
      position: { x: 48, y: 45 } 
    },
    { 
      city: "Bangalore", 
      projects: 6, 
      clients: ["Vidflyy", "Innotech India"],
      position: { x: 46, y: 70 } 
    },
    { 
      city: "Pune", 
      projects: 4, 
      clients: ["KD Engineers", "AS Precision"],
      position: { x: 44, y: 65 } 
    },
    { 
      city: "Chennai", 
      projects: 3, 
      clients: ["Eyeconic Optical"],
      position: { x: 50, y: 75 } 
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-syne mb-4">
            Global Project Distribution
          </h2>
          <p className="text-lg text-gray-600 font-kanit">
            Our projects span across major cities, creating impact everywhere
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* India Map Outline */}
          <div className="relative bg-gradient-to-br from-chaotic-blue/10 to-yellow-400/10 rounded-xl p-8">
            <div className="aspect-[3/4] relative bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Simple India map representation */}
              <div className="absolute inset-0 bg-gradient-to-br from-chaotic-blue/5 to-yellow-400/5">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    d="M30,20 L70,20 L75,30 L80,40 L75,50 L70,60 L65,70 L60,80 L40,85 L25,80 L20,70 L15,60 L20,50 L25,40 L30,30 Z"
                    fill="rgba(59, 130, 246, 0.1)"
                    stroke="rgba(59, 130, 246, 0.3)"
                    strokeWidth="0.5"
                  />
                </svg>
              </div>

              {/* Location markers */}
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="absolute group cursor-pointer"
                  style={{ 
                    left: `${location.position.x}%`, 
                    top: `${location.position.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="relative">
                    <div className="w-4 h-4 bg-chaotic-blue rounded-full border-2 border-white shadow-lg group-hover:scale-150 transition-transform duration-300"></div>
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 min-w-48">
                      <h4 className="font-semibold text-chaotic-blue mb-2">{location.city}</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div className="flex items-center gap-1">
                          <Globe className="w-3 h-3" />
                          {location.projects} Projects
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {location.clients.length} Clients
                        </div>
                        <div className="text-xs mt-2">
                          {location.clients.slice(0, 2).map((client, i) => (
                            <div key={i} className="text-gray-500">{client}</div>
                          ))}
                          {location.clients.length > 2 && (
                            <div className="text-gray-500">+{location.clients.length - 2} more</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-3xl font-bold text-chaotic-blue mb-2">5+</div>
              <div className="text-gray-600 font-kanit">Cities Covered</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-3xl font-bold text-chaotic-blue mb-2">26+</div>
              <div className="text-gray-600 font-kanit">Total Projects</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-3xl font-bold text-chaotic-blue mb-2">100%</div>
              <div className="text-gray-600 font-kanit">Success Rate</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveProjectMap;
