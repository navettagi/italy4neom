import React from 'react';
import { Twitter, Linkedin, MapPin, Mail, Phone, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/images/NEOM-sustainable-urban-living-project-logo.webp" 
                alt="Italia per NEOM Logo" 
                className="h-8 invert"
              />
              <span className="text-2xl font-bold">Italia per NEOM</span>
            </div>
            <p className="text-slate-400 mb-6">
              Italia per NEOM è un innovativo sistema di aggregazione di aziende italiane che uniscono le proprie competenze 
              per contribuire allo sviluppo di NEOM, il rivoluzionario progetto urbano in Arabia Saudita.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Sezioni</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/neom-project" className="text-slate-400 hover:text-white transition-colors">NEOM Overview</Link></li>
              <li><Link to="/market-analysis" className="text-slate-400 hover:text-white transition-colors">Analisi di Mercato</Link></li>
              <li><Link to="/our-offer" className="text-slate-400 hover:text-white transition-colors">La Nostra Offerta</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contatti</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Settori di Interesse</h3>
            <ul className="space-y-3">
              <li><Link to="/our-offer" className="text-slate-400 hover:text-white transition-colors">Infrastrutture Ferroviarie</Link></li>
              <li><Link to="/our-offer" className="text-slate-400 hover:text-white transition-colors">Sviluppo Portuale</Link></li>
              <li><Link to="/our-offer" className="text-slate-400 hover:text-white transition-colors">Tecnologie Idriche</Link></li>
              <li><Link to="/our-offer" className="text-slate-400 hover:text-white transition-colors">Costruzioni Sostenibili</Link></li>
              <li><Link to="/our-offer" className="text-slate-400 hover:text-white transition-colors">Energia Rinnovabile</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contatti</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-green-400 mr-3 mt-1" />
                <span className="text-slate-400">info@italiaperneom.it</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-green-400 mr-3 mt-1" />
                <span className="text-slate-400">+39 02 1234567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-green-400 mr-3 mt-1" />
                <div className="text-slate-400">
                  Italia per NEOM<br />
                  Via dell'Innovazione, 42<br />
                  20121 Milano, Italia
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 mt-8 text-center">
          <p className="text-slate-500 text-sm flex flex-wrap justify-center items-center">
            &copy; {currentYear} Italia per NEOM. Tutti i diritti riservati. Realizzato con 
            <Heart className="h-4 w-4 mx-1 text-green-500 inline" /> 
            per il futuro dell'eccellenza italiana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;