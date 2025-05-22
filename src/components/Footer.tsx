
import { Award, Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <h3 className="text-2xl font-bold font-syne">Chaotic Jack</h3>
            </div>
            
            <p className="font-kanit text-gray-300 mb-8 max-w-lg">
              Chaotic Jack is a full-service digital marketing agency recognized for excellence in delivering results-driven marketing solutions across industries.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-chaotic-blue" />
                <span className="font-kanit">9541457327</span>
              </div>
              
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-chaotic-blue" />
                <span className="font-kanit">Delhi, India</span>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-chaotic-blue" />
                <span className="font-kanit">info@consultingmdm.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-syne font-bold mb-2">View on Map</h3>
              <div className="h-64 bg-gray-800 rounded-sm overflow-hidden">
                {/* Map placeholder - In a real implementation, you would embed a Google Map here */}
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <span className="text-gray-500 font-kanit">Map Loading...</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <span className="ml-2 font-kanit">4.9 Rating</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-kanit text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Chaotic Jack. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-chaotic-blue transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-chaotic-blue transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-chaotic-blue transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
