
import { motion } from 'framer-motion';

const ClientLogoGallery = () => {
  const clients = [
    { name: "HyGear Fashion", logo: "/api/placeholder/120/60" },
    { name: "Oxygen4India", logo: "/api/placeholder/120/60" },
    { name: "Longfian India", logo: "/api/placeholder/120/60" },
    { name: "Goldline Intertrade", logo: "/api/placeholder/120/60" },
    { name: "Roadies Koffe Houz", logo: "/api/placeholder/120/60" },
    { name: "Hamylten", logo: "/api/placeholder/120/60" },
    { name: "MDM Consulting", logo: "/api/placeholder/120/60" },
    { name: "Vidflyy", logo: "/api/placeholder/120/60" },
    { name: "Dukaan Steel", logo: "/api/placeholder/120/60" },
    { name: "KD Engineers", logo: "/api/placeholder/120/60" },
    { name: "Innotech India", logo: "/api/placeholder/120/60" },
    { name: "Naina Volt Energy", logo: "/api/placeholder/120/60" },
    { name: "Smart World Gems", logo: "/api/placeholder/120/60" },
    { name: "AS Precision", logo: "/api/placeholder/120/60" },
    { name: "Shimmer Farms", logo: "/api/placeholder/120/60" },
    { name: "Eyeconic Optical", logo: "/api/placeholder/120/60" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-syne mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 font-kanit">
            Proud to work with amazing clients across various industries
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center group"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-chaotic-blue/10 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-chaotic-blue/20 transition-colors">
                  <span className="text-chaotic-blue font-bold text-lg">
                    {client.name.charAt(0)}
                  </span>
                </div>
                <p className="text-xs text-gray-600 font-kanit">{client.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogoGallery;
