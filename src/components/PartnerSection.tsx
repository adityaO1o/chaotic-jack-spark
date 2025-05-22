
import { cn } from '@/lib/utils';

interface PartnerSectionProps {
  className?: string;
}

const PartnerSection = ({ className }: PartnerSectionProps) => {
  return (
    <section className={cn("py-12 md:py-20 bg-chaotic-blue/5", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center">
          <div className="w-20 h-1 bg-chaotic-blue mb-8"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-syne text-center">
            A Partner, Not a Vendor
          </h2>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
