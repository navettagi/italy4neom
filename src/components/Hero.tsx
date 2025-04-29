import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

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
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center" ref={heroRef}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Design. Build. <span className="text-blue-600">Launch.</span><br />
            Everything you need in one place.
          </h1>
          <p className="text-slate-600 text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
            A powerful platform for designers and developers to collaborate, 
            create, and deploy beautiful products faster than ever before.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="#features" 
              className="bg-slate-900 text-white px-8 py-3 rounded-full hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center w-full sm:w-auto"
            >
              Explore Features
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#demo" 
              className="border-2 border-slate-300 text-slate-700 px-8 py-3 rounded-full hover:border-slate-500 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center w-full sm:w-auto"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-indigo-100 rounded-full opacity-40 blur-3xl"></div>
    </section>
  );
};

export default Hero;