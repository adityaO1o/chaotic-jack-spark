
import { cn } from "@/lib/utils";

interface PartnerSectionProps {
  className?: string;
}

const PartnerSection = ({ className }: PartnerSectionProps) => {
  const partners = [
    {
      name: "Google Cloud Partner",
      logo: "M",
    },
    {
      name: "Meta Business Partners",
      logo: "M",
    },
    {
      name: "Semrush Partner",
      logo: "S",
    },
    {
      name: "Shopify Partner",
      logo: "S",
    },
    {
      name: "TikTok Marketing Partner",
      logo: "T",
    },
  ];

  return (
    <section className={cn("py-12 bg-gray-50", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-8">
          <h3 className="text-xl font-syne font-bold mb-2">
            A PARTNER NOT<br />A VENDOR
          </h3>
          <div className="h-1 w-20 bg-chaotic-blue"></div>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold mb-2">
                {partner.logo}
              </div>
              <span className="text-sm font-kanit text-gray-600">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
