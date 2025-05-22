
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <span className="text-2xl font-bold font-syne">Chaotic Jack</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-black hover:text-chaotic-blue font-kanit transition-colors">
            HOME
          </a>
          <a href="/marketing-solutions" className="text-black hover:text-chaotic-blue font-kanit transition-colors">
            MARKETING SOLUTIONS
          </a>
          <a href="/who-we-are" className="text-black hover:text-chaotic-blue font-kanit transition-colors">
            WHO WE ARE
          </a>
          <a href="/work" className="text-black hover:text-chaotic-blue font-kanit transition-colors">
            WORK
          </a>
          <a href="/contact" className="text-black hover:text-chaotic-blue font-kanit transition-colors">
            CONTACT
          </a>
          <a href="/contact">
            <Button 
              variant="outline" 
              className="border border-black text-black hover:bg-black hover:text-white transition-colors rounded-none font-kanit"
            >
              LET'S TALK
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center text-black"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="/" 
              className="text-black hover:text-chaotic-blue font-kanit py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              HOME
            </a>
            <a 
              href="/marketing-solutions" 
              className="text-black hover:text-chaotic-blue font-kanit py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              MARKETING SOLUTIONS
            </a>
            <a 
              href="/who-we-are" 
              className="text-black hover:text-chaotic-blue font-kanit py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              WHO WE ARE
            </a>
            <a 
              href="/work" 
              className="text-black hover:text-chaotic-blue font-kanit py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              WORK
            </a>
            <a 
              href="/contact" 
              className="text-black hover:text-chaotic-blue font-kanit py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              CONTACT
            </a>
            <a 
              href="/contact" 
              className="inline-block"
              onClick={toggleMenu}
            >
              <Button 
                variant="outline" 
                className="w-full border border-black text-black hover:bg-black hover:text-white transition-colors rounded-none font-kanit"
              >
                LET'S TALK
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
