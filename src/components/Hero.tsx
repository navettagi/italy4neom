import React, { useEffect, useRef } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const offset = window.scrollY;
      heroRef.current.style.transform = `translateY(${offset * 0.4}px)`;
      heroRef.current.style.opacity = `${1 - offset * 0.003}`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative pt-32 pb-24 md:pt-44 md:pb-40 overflow-hidden bg-cover bg-center h-screen flex items-center"
    >
      {/* Video di sfondo */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute w-full h-full object-cover z-0 top-0 left-0"
        style={{ filter: 'brightness(0.6)' }}
      >
        <source src="/images/magna.mp4" type="video/mp4" />
      </video>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center" ref={heroRef}>
          <div className="mb-6 inline-block">
            <img 
              src="/images/NEOM-sustainable-urban-living-project-logo.webp" 
              alt="NEOM Logo" 
              className="h-16 md:h-20 mx-auto mb-4"
            />
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Italia per <span className="text-green-400">NEOM</span><br />
            <span className="text-2xl md:text-3xl mt-2 inline-block">Eccellenza Italiana per la Città del Futuro</span>
          </h1>
          <p className="text-white text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Un innovativo sistema di aggregazione che valorizza l'eccellenza italiana
            nel contesto del rivoluzionario progetto urbano che 
            definirà gli standard delle città del futuro.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to="/our-offer" 
              className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center w-full sm:w-auto text-lg shadow-lg"
            >
              La Nostra Offerta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/neom-project" 
              className="bg-slate-800 text-white px-8 py-4 rounded-full hover:bg-slate-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center w-full sm:w-auto text-lg shadow-lg"
            >
              Scopri NEOM
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay scuro per migliorare la leggibilità */}
      <div className="absolute inset-0 bg-black opacity-30 z-1"></div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20">
        <span className="text-white/70 text-sm mb-2">Scorri per scoprire</span>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;