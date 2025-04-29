import React from 'react';
import { 
  Settings, Target, ShieldCheck, Compass, 
  Briefcase, Heart, Users, Award, GlobeIcon,
  Rocket, PuzzleIcon, Star
} from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Compass className="h-8 w-8 text-blue-500" />,
      title: "Visione Strategica",
      description: "Creare un ecosistema coordinato di eccellenze italiane capace di valorizzare il 'Made in Italy' nei settori infrastrutturali strategici di NEOM."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Eccellenza Italiana",
      description: "Portiamo il meglio del know-how e della qualità italiana, conosciuta in tutto il mondo per design e ingegneria."
    },
    {
      icon: <Settings className="h-8 w-8 text-indigo-500" />,
      title: "Innovazione Sostenibile",
      description: "Promuoviamo soluzioni all'avanguardia e sostenibili, in linea con la visione di NEOM di creare una città a zero emissioni."
    },
    {
      icon: <Users className="h-8 w-8 text-amber-500" />,
      title: "Collaborazione Strategica",
      description: "Lavoriamo insieme mantenendo l'autonomia imprenditoriale, creando sinergie tra le diverse competenze."
    },
    {
      icon: <Rocket className="h-8 w-8 text-purple-500" />,
      title: "Flessibilità Operativa",
      description: "Adattiamo la nostra struttura alle esigenze dei progetti, con un approccio progressivo e scalabile."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-green-500" />,
      title: "Responsabilità Condivisa",
      description: "Garantiamo i più alti standard etici e professionali in ogni fase del nostro operato."
    },
    {
      icon: <GlobeIcon className="h-8 w-8 text-cyan-500" />,
      title: "Approccio Internazionale",
      description: "Portiamo l'eccellenza italiana in un contesto globale, rispettando le culture locali e internazionali."
    },
    {
      icon: <PuzzleIcon className="h-8 w-8 text-orange-500" />,
      title: "Soluzioni Integrate",
      description: "Offriamo un ecosistema completo di soluzioni coordinate per rispondere alle sfide complesse di NEOM."
    },
    {
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      title: "Qualità Superiore",
      description: "Manteniamo gli standard di eccellenza che hanno reso il Made in Italy famoso nel mondo."
    }
  ];

  return (
    <section id="progetto" className="py-20 bg-white relative">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-50 to-white"></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Il Progetto</h2>
          <h3 className="text-xl md:text-2xl font-semibold text-green-700 mb-4">
            Italian NEOM Network: Consorzio Italiano per le Infrastrutture NEOM
          </h3>
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto">
            L'Italian NEOM Network rappresenta un innovativo modello di aggregazione per aziende italiane interessate a cogliere 
            le straordinarie opportunità offerte dal progetto NEOM in Arabia Saudita. Il nostro approccio si basa su principi 
            di <strong>flessibilità, eccellenza e collaborazione strategica</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl shadow-sm border border-green-100">
          <h3 className="text-2xl font-semibold mb-4 text-center">Vantaggi Unici per NEOM</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 mt-1"></div>
                <p className="ml-4 text-slate-700">
                  <strong>Eccellenza integrata:</strong> Accesso alle migliori competenze italiane coordinate in un sistema coerente
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 mt-1"></div>
                <p className="ml-4 text-slate-700">
                  <strong>Semplificazione gestionale:</strong> Un unico punto di contatto per un ecosistema di fornitori d'eccellenza
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 mt-1"></div>
                <p className="ml-4 text-slate-700">
                  <strong>Garanzia di qualità:</strong> Standard elevati garantiti dalla reputazione consolidata delle aziende italiane
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 mt-1"></div>
                <p className="ml-4 text-slate-700">
                  <strong>Coordinamento temporale:</strong> Orchestrazione ottimale di forniture complementari
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 mt-1"></div>
                <p className="ml-4 text-slate-700">
                  <strong>Sostenibilità e innovazione:</strong> Soluzioni all'avanguardia allineate con la visione futuristica di NEOM
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 mt-1"></div>
                <p className="ml-4 text-slate-700">
                  <strong>Design distintivo:</strong> L'estetica e il design italiani integrati nelle soluzioni funzionali
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;