
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-4 transition-all duration-300 
      ${isScrolled ? 'glass-panel shadow-glass-sm backdrop-blur-md' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-guardian-500 to-guardian-700 flex items-center justify-center shadow-md">
              <span className="text-white font-display font-bold text-lg">G</span>
            </div>
            <span className="font-display font-semibold text-xl">Guardian IO</span>
          </a>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#features" className="text-sm font-medium hover:text-guardian-600 transition-colors">Features</a>
          <a href="#values" className="text-sm font-medium hover:text-guardian-600 transition-colors">Values</a>
          <a href="#mission" className="text-sm font-medium hover:text-guardian-600 transition-colors">Mission</a>
          <a href="#learn" className="text-sm font-medium hover:text-guardian-600 transition-colors">Learn</a>
          <Button variant="outline" className="border-guardian-300 text-guardian-800 hover:bg-guardian-100">
            Sign In
          </Button>
          <Button className="bg-guardian-700 hover:bg-guardian-800 text-white shadow-md">
            Get Started
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMobileMenu}
            className="transition-all duration-300"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 pt-20 bg-white dark:bg-guardian-950 z-40 transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-6 p-6 staggered-fade-in">
          <a 
            href="#features" 
            className="text-lg font-medium border-b border-guardian-100 pb-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#values" 
            className="text-lg font-medium border-b border-guardian-100 pb-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Values
          </a>
          <a 
            href="#mission" 
            className="text-lg font-medium border-b border-guardian-100 pb-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Mission
          </a>
          <a 
            href="#learn" 
            className="text-lg font-medium border-b border-guardian-100 pb-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Learn
          </a>
          <div className="flex flex-col space-y-4 pt-4">
            <Button variant="outline" className="w-full justify-center">Sign In</Button>
            <Button className="w-full justify-center bg-guardian-700 hover:bg-guardian-800">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
