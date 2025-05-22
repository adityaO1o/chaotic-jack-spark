
import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProgressCircle } from '@/components/ui/progress-circle';
import { cn } from '@/lib/utils';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState('social');

  const services = [
    {
      id: 'social',
      name: 'Social media marketing',
      description: 'Finding the balance between staying current and relying on proven strategies is essential for staying competitive in the ever-changing landscape of marketing.',
      features: [
        'Social Media Design',
        'Social Media Management',
        'Custom ad strategy',
        'Unique ad campaigns and ads',
        'Advanced demographic targeting'
      ],
      percentage: 86,
      percentageText: 'Of customers reported an increase in conversion rates through the social media marketing strategies'
    },
    {
      id: 'seo',
      name: 'Search engine optimization',
      description: 'Drive organic traffic and improve visibility with our proven SEO strategies that focus on sustainable growth and long-term results.',
      features: [
        'Technical SEO audits',
        'Keyword optimization',
        'Content strategy',
        'Link building',
        'Local SEO optimization'
      ],
      percentage: 73,
      percentageText: 'Of clients experienced improved SERP rankings within the first three months'
    },
    {
      id: 'paid',
      name: 'Paid search marketing',
      description: 'Maximize your ROI with targeted PPC campaigns that deliver qualified traffic and conversions to achieve your business objectives.',
      features: [
        'Google & Bing Ads',
        'PPC strategy development',
        'Ad copy optimization',
        'Landing page testing',
        'Conversion tracking'
      ],
      percentage: 92,
      percentageText: 'Average improvement in ROAS for our paid search clients'
    },
    {
      id: 'web',
      name: 'Website Development',
      description: 'Create high-performing, conversion-focused websites that deliver exceptional user experiences and drive business growth.',
      features: [
        'Responsive design',
        'SEO-optimized structure',
        'UI/UX optimization',
        'Performance tuning',
        'Analytics integration'
      ],
      percentage: 68,
      percentageText: 'Average increase in lead generation after website redesign'
    }
  ];

  const activeServiceData = services.find(service => service.id === activeService) || services[0];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl font-bold font-syne mb-4 text-center">Our Services</h2>
          <p className="text-lg text-gray-700 font-kanit text-center">
            We deliver business impact through digital marketing with a combination of intellectual curiosity, industry experience, urgency, and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="lg:col-span-4 bg-black text-white p-8">
            <nav className="space-y-6">
              {services.map((service) => (
                <div 
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={cn(
                    "cursor-pointer transition-all duration-300 transform",
                    service.id === activeService ? "scale-105" : "hover:translate-x-2"
                  )}
                >
                  <div className={cn(
                    "flex items-center gap-4 rounded-full py-3 px-6",
                    service.id === activeService 
                      ? "bg-chaotic-blue text-white" 
                      : "bg-transparent text-white hover:bg-gray-800"
                  )}>
                    <span className="font-kanit font-medium">{service.name}</span>
                    {service.id === activeService && (
                      <ArrowRight className="h-5 w-5 animate-pulse" />
                    )}
                  </div>
                </div>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-8 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-2xl font-syne font-bold">{activeServiceData.name}</h3>
                <p className="font-kanit text-gray-700">{activeServiceData.description}</p>
                
                <div className="space-y-3">
                  {activeServiceData.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-chaotic-blue shrink-0 mt-1" />
                      <span className="font-kanit">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="rounded-none border-black text-black hover:bg-black hover:text-white transition-colors font-kanit">
                  LEARN MORE <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex flex-col items-center justify-center animate-fade-in">
                <ProgressCircle
                  value={activeServiceData.percentage}
                  max={100}
                  size={180}
                  strokeWidth={15}
                  color="#4B9CD3"
                  backgroundColor="#e5e7eb"
                  label={<span className="text-4xl font-bold">{activeServiceData.percentage}%</span>}
                  className="mb-6"
                />
                <p className="text-center text-sm font-kanit text-gray-600 max-w-xs">
                  {activeServiceData.percentageText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
