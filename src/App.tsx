import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import BusinessModel from './components/BusinessModel';
import MarketAnalysis from './components/MarketAnalysis';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <BusinessModel />
        <MarketAnalysis />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;