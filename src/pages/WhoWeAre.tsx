
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold font-syne mb-8">
            Who We Are
          </h1>
          <p className="text-lg font-kanit text-gray-700">
            Coming soon. Please check back later.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WhoWeAre;
