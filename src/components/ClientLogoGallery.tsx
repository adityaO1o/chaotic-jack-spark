
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ClientLogoGallery = () => {
  const clients = [
    { 
      name: "HyGear Fashion", 
      url: "https://hygearfashion.com/",
      favicon: "https://hygearfashion.com/favicon.ico"
    },
    { 
      name: "Oxygen4India", 
      url: "https://oxygen4india.com/",
      favicon: "https://oxygen4india.com/favicon.ico"
    },
    { 
      name: "Longfian India", 
      url: "https://longfianindia.com/",
      favicon: "https://longfianindia.com/favicon.ico"
    },
    { 
      name: "Goldline Intertrade", 
      url: "https://goldlineintertrade.com/",
      favicon: "https://goldlineintertrade.com/favicon.ico"
    },
    { 
      name: "Roadies Koffe Houz", 
      url: "https://roadies-koffe-houz.vercel.app/",
      favicon: "https://roadies-koffe-houz.vercel.app/favicon.ico"
    },
    { 
      name: "Hamylten", 
      url: "https://hamylten.com/",
      favicon: "https://hamylten.com/favicon.ico"
    },
    { 
      name: "MDM Consulting", 
      url: "https://mdmconsulting.in/",
      favicon: "https://mdmconsulting.in/favicon.ico"
    },
    { 
      name: "Vidflyy", 
      url: "https://vidflyy.com/",
      favicon: "https://vidflyy.com/favicon.ico"
    },
    { 
      name: "Dukaan Steel", 
      url: "https://dukaansteel.com/",
      favicon: "https://dukaansteel.com/favicon.ico"
    },
    { 
      name: "KD Engineers", 
      url: "https://kdengineers.in/",
      favicon: "https://kdengineers.in/favicon.ico"
    },
    { 
      name: "Innotech India", 
      url: "https://innotechindia.com/",
      favicon: "https://innotechindia.com/favicon.ico"
    },
    { 
      name: "Naina Volt Energy", 
      url: "https://nainavoltenergy.com/",
      favicon: "https://nainavoltenergy.com/favicon.ico"
    },
    { 
      name: "Smart World Gems", 
      url: "https://smartworldgems.com/",
      favicon: "https://smartworldgems.com/favicon.ico"
    },
    { 
      name: "AS Precision", 
      url: "https://asprecision.in/",
      favicon: "https://asprecision.in/favicon.ico"
    },
    { 
      name: "Shimmer Farms", 
      url: "https://shimmerfarms.com/",
      favicon: "https://shimmerfarms.com/favicon.ico"
    },
    { 
      name: "Eyeconic Optical", 
      url: "https://eyeconicoptical.com/",
      favicon: "https://eyeconicoptical.com/favicon.ico"
    }
  ];

  const handleClientClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer group hover:shadow-lg hover:-translate-y-1"
              onClick={() => handleClientClick(client.url)}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm group-hover:shadow-md transition-shadow">
                  <img
                    src={client.favicon}
                    alt={`${client.name} favicon`}
                    className="w-8 h-8 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallbackDiv = target.nextElementSibling as HTMLElement;
                      if (fallbackDiv) {
                        fallbackDiv.style.display = 'flex';
                      }
                    }}
                  />
                  <div 
                    className="w-8 h-8 bg-chaotic-blue/10 rounded flex items-center justify-center hidden"
                    style={{ display: 'none' }}
                  >
                    <span className="text-chaotic-blue font-bold text-sm">
                      {client.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 font-kanit font-medium group-hover:text-chaotic-blue transition-colors">
                  {client.name}
                </p>
                <ExternalLink className="w-3 h-3 text-gray-400 mx-auto mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogoGallery;
