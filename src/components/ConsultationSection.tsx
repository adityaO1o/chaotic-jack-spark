
import { Button } from '@/components/ui/button';

const ConsultationSection = () => {
  return (
    <section className="py-16 md:py-24 bg-chaotic-blue/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-sm shadow-lg">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold font-syne mb-6">
                Get a Free Consultation to Boost Your Business
              </h2>
              <p className="text-lg font-kanit text-gray-700">
                Our comprehensive marketing audit includes analysis of your target audience, UX evaluation, content audit, and a tailored growth strategy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-chaotic-blue/5 p-6 rounded-sm">
                <h3 className="text-xl font-syne font-bold mb-3">Target Audience Analysis</h3>
                <p className="text-gray-700 font-kanit text-sm">
                  We identify your ideal customers and how to reach them effectively.
                </p>
              </div>
              
              <div className="bg-chaotic-blue/5 p-6 rounded-sm">
                <h3 className="text-xl font-syne font-bold mb-3">UX Analysis</h3>
                <p className="text-gray-700 font-kanit text-sm">
                  We evaluate your website's user experience and conversion paths.
                </p>
              </div>
              
              <div className="bg-chaotic-blue/5 p-6 rounded-sm">
                <h3 className="text-xl font-syne font-bold mb-3">Content Audit</h3>
                <p className="text-gray-700 font-kanit text-sm">
                  We assess your content strategy and recommend improvements.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                className="rounded-none bg-black text-white border border-white hover:bg-white hover:text-black transition-colors font-kanit px-8 py-6"
                size="lg"
              >
                Get Your Free Audit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
