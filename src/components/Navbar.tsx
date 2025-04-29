import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-slate-900">Pulse</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-slate-700 hover:text-slate-900 transition-colors">
            Features
          </a>
          <a href="#testimonials" className="text-slate-700 hover:text-slate-900 transition-colors">
            Testimonials
          </a>
          <a href="#pricing" className="text-slate-700 hover:text-slate-900 transition-colors">
            Pricing
          </a>
          <a href="#contact" className="text-slate-700 hover:text-slate-900 transition-colors">
            Contact
          </a>
          <button className="bg-slate-900 text-white px-6 py-2 rounded-full hover:bg-slate-800 transition-colors flex items-center">
            Get Started <ArrowUpRight className="ml-2 h-4 w-4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-slate-900 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4 px-6 space-y-4 transition-all duration-300">
          <a 
            href="#features" 
            className="block text-slate-700 hover:text-slate-900 py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#testimonials" 
            className="block text-slate-700 hover:text-slate-900 py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#pricing" 
            className="block text-slate-700 hover:text-slate-900 py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </a>
          <a 
            href="#contact" 
            className="block text-slate-700 hover:text-slate-900 py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <button className="bg-slate-900 text-white w-full px-6 py-2 rounded-full hover:bg-slate-800 transition-colors flex items-center justify-center">
            Get Started <ArrowUpRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;