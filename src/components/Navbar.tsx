import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/images/NEOM-sustainable-urban-living-project-logo.webp" 
            alt="Italy4Neom Logo" 
            className="h-8"
          />
          <span className="text-2xl font-bold text-slate-900">Italia per NEOM</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`${isActive('/') ? 'text-green-700 font-semibold' : 'text-slate-700'} hover:text-green-800 transition-colors`}
          >
            Home
          </Link>
          <Link 
            to="/neom-project" 
            className={`${isActive('/neom-project') ? 'text-green-700 font-semibold' : 'text-slate-700'} hover:text-green-800 transition-colors`}
          >
            NEOM
          </Link>
          <Link 
            to="/market-analysis" 
            className={`${isActive('/market-analysis') ? 'text-green-700 font-semibold' : 'text-slate-700'} hover:text-green-800 transition-colors`}
          >
            Analisi
          </Link>
          <Link 
            to="/our-offer" 
            className={`${isActive('/our-offer') ? 'text-green-700 font-semibold' : 'text-slate-700'} hover:text-green-800 transition-colors`}
          >
            La Nostra Offerta
          </Link>
          <Link 
            to="/contact" 
            className={`${isActive('/contact') ? 'text-green-700 font-semibold' : 'text-slate-700'} hover:text-green-800 transition-colors`}
          >
            Contatti
          </Link>
          <Link 
            to="/contact" 
            className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition-colors flex items-center"
          >
            Unisciti <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
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
          <Link 
            to="/" 
            className={`block ${isActive('/') ? 'text-green-700 font-semibold' : 'text-slate-700'} hover:text-green-800 py-2 transition-colors`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/neom-project" 
            className={`block ${isActive('/neom-project') ? 'text-green-700 font-semibold' : 'text-slate-700'} hover:text-green-800 py-2 transition-colors`}
            onClick={() => setIsMenuOpen(false)}
          >
            NEOM
          </Link>
          <Link 
            to="/market-analysis" 
            className={`block ${isActive('/market-analysis') ? 'text-green-700 font-semibold' : 'text-slate-700'} hover:text-green-800 py-2 transition-colors`}
            onClick={() => setIsMenuOpen(false)}
          >
            Analisi
          </Link>
          <Link 
            to="/our-offer" 
            className={`block ${isActive('/our-offer') ? 'text-green-700 font-semibold' : 'text-slate-700'} hover:text-green-800 py-2 transition-colors`}
            onClick={() => setIsMenuOpen(false)}
          >
            La Nostra Offerta
          </Link>
          <Link 
            to="/contact" 
            className={`block ${isActive('/contact') ? 'text-green-700 font-semibold' : 'text-slate-700'} hover:text-green-800 py-2 transition-colors`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contatti
          </Link>
          <Link 
            to="/contact" 
            className="bg-green-700 text-white w-full px-6 py-2 rounded-full hover:bg-green-800 transition-colors flex items-center justify-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Unisciti <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;