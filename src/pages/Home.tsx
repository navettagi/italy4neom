import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { Building2, Leaf, Network, LineChart, ArrowUpRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">L'Eccellenza Italiana per NEOM</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Scopri il nostro innovativo sistema di aggregazione che valorizza il Made in Italy 
                in uno dei progetti più ambiziosi del mondo.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
              <div className="bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <Building2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold">NEOM</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Un progetto urbanistico senza precedenti da 500 miliardi di dollari in Arabia Saudita, 
                  progettato per ridefinire il concetto stesso di città con uno sguardo al futuro.
                </p>
                <Link to="/neom-project" className="inline-flex items-center text-green-600 font-semibold hover:text-green-800">
                  Scopri il progetto NEOM
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Network className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold">La Nostra Offerta</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Un modello di aggregazione innovativo che permette alle aziende italiane di partecipare 
                  al progetto mantenendo completa autonomia e minimizzando i rischi.
                </p>
                <Link to="/our-offer" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
                  Scopri la nostra offerta
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <LineChart className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-semibold">Analisi di Mercato</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Dati, statistiche e analisi approfondite sullo stato attuale del progetto NEOM 
                  e sulle opportunità di business per le aziende italiane.
                </p>
                <Link to="/market-analysis" className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-800">
                  Scopri l'analisi completa
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <Leaf className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-semibold">Contatti</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Entra a far parte di un'iniziativa unica che valorizza l'eccellenza italiana 
                  in uno dei progetti più ambiziosi al mondo.
                </p>
                <Link to="/contact" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800">
                  Contattaci
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-10 text-white text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Unisciti all'Italia per NEOM</h3>
              <p className="text-lg mb-8">
                Fai parte di un'iniziativa unica che valorizza l'eccellenza italiana in uno dei progetti 
                più ambiziosi del mondo, con zero rischi e massimi benefici.
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors shadow-lg font-semibold text-lg"
              >
                Scopri Come Partecipare
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;