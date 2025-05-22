
import { ArrowRight, LineChart, Globe, BarChart3, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResultsSection = () => {
  const results = [
    {
      icon: <Globe className="h-10 w-10 text-chaotic-blue" />,
      title: "Drive Website Traffic",
      description: "Increase visibility and qualified visitors to your site."
    },
    {
      icon: <LineChart className="h-10 w-10 text-chaotic-blue" />,
      title: "Run Powerful Ad Campaigns",
      description: "Maximize ROI with targeted multi-channel advertising."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-chaotic-blue" />,
      title: "Analyze & Deploy Marketing Data",
      description: "Turn insights into actionable growth strategies."
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-chaotic-blue" />,
      title: "Improve Brand Messaging & Conversion",
      description: "Craft compelling narratives that drive action."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-chaotic-blue/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-syne mb-6">
            How We Drive Revenue
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {results.map((result, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-sm shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">{result.icon}</div>
              <h3 className="text-xl font-syne font-bold mb-3">{result.title}</h3>
              <p className="text-gray-700 font-kanit">{result.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 md:p-12 rounded-sm shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xl md:text-2xl font-syne mb-6">
                Driving digital revenue for our 50+ satisfied customers
              </p>
              
              <Button 
                variant="outline"
                className="rounded-none border border-black text-black hover:bg-black hover:text-white transition-colors font-kanit"
              >
                VIEW OUR CASE STUDIES <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="bg-chaotic-blue/10 p-8 rounded-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-kanit text-gray-600">Average Result</span>
                <div className="w-12 h-1 bg-chaotic-blue"></div>
              </div>
              
              <div className="flex items-end gap-4">
                <h3 className="text-5xl font-syne font-bold text-chaotic-blue">21%</h3>
                <p className="text-xl font-kanit pb-1">Avg. Traffic Increase</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
