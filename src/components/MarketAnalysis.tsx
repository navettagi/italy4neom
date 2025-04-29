import React from 'react';
import { 
  Building2, Ship, Droplet, Factory, Sun, 
  LineChart, AlertTriangle, CheckCircle2,
  Train, Lightbulb, Leaf, Building,
  Map, Timer, BarChart3
} from 'lucide-react';

const MarketAnalysis: React.FC = () => {
  return (
    <section id="neom" className="py-20 bg-cover bg-center relative overflow-hidden" 
      style={{ 
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.95)), url("/images/jaumur-NEOM.jpg")'
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">NEOM: Un Progetto Visionario</h1>
          
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-4">La Visione di NEOM</h2>
            <p className="text-slate-700 text-lg">
              NEOM rappresenta una delle iniziative di sviluppo urbano più ambiziose a livello globale, 
              posizionandosi come elemento centrale della <strong>Vision 2030</strong> dell'Arabia Saudita. 
              Questo megaprogetto non è semplicemente un'iniziativa di costruzione, ma un progetto di 
              trasformazione nazionale che mira a posizionare l'Arabia Saudita come leader globale in 
              settori innovativi e sostenibili.
            </p>
          </div>

          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Gli Obiettivi di NEOM</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Leaf className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Creare un ambiente urbano a <strong>zero emissioni di carbonio</strong></span>
                  </li>
                  <li className="flex items-start">
                    <Sun className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Sviluppare un ecosistema completamente alimentato da <strong>energia rinnovabile</strong></span>
                  </li>
                  <li className="flex items-start">
                    <Lightbulb className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Implementare un elevato livello di <strong>integrazione tecnologica</strong></span>
                  </li>
                  <li className="flex items-start">
                    <Building className="h-5 w-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Promuovere un design urbano innovativo con enfasi sulla <strong>vivibilità</strong></span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/images/neom-port-business-hero-v5.webp" 
                  alt="NEOM Vision" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Le Regioni Principali di NEOM</h2>
            
            <div className="space-y-10">
              <div className="grid md:grid-cols-3 gap-6 md:gap-10">
                <div className="col-span-1 md:col-span-1">
                  <img 
                    src="/images/171476-7fb9b341ab19951aa61d3ae8c2fa7798.jpg" 
                    alt="The Line" 
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="col-span-2 md:col-span-2">
                  <h3 className="text-xl font-semibold mb-3">The Line</h3>
                  <p className="text-slate-700 mb-4">
                    Una rivoluzionaria città lineare che si estenderà per 170 chilometri, concepita come uno spazio urbano senza auto, strade o emissioni di carbonio. The Line è progettata per ospitare fino a 9 milioni di residenti in un ambiente che privilegia la qualità della vita.
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <p className="text-sm text-slate-700">
                      <strong>Stato attuale:</strong> Significativi progressi sono stati compiuti nello sviluppo di The Line. Sono in corso lavori di scavo e di fondazione, con la costruzione dei moduli iniziali in fase avanzata.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 md:gap-10">
                <div className="col-span-1 md:col-span-1 order-1 md:order-2">
                  <img 
                    src="/images/hero-port-image.jpg" 
                    alt="Oxagon" 
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="col-span-2 md:col-span-2 order-2 md:order-1">
                  <h3 className="text-xl font-semibold mb-3">Oxagon</h3>
                  <p className="text-slate-700 mb-4">
                    Un polo industriale e portuale concepito come hub per industrie avanzate e pulite, che include una struttura parzialmente galleggiante. Oxagon mira a ridefinire il concetto di città industriale con un approccio sostenibile e innovativo.
                  </p>
                  <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
                    <p className="text-sm text-slate-700">
                      <strong>Stato attuale:</strong> Lo sviluppo di Oxagon sta procedendo rapidamente. Il porto di NEOM è in fase di espansione e importanti aziende industriali si sono stabilite nella zona, inclusa la NEOM Green Hydrogen Company.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 md:gap-10">
                <div className="col-span-1 md:col-span-1">
                  <img 
                    src="/images/NEOM_announces_Treyam_destination.jpg" 
                    alt="Trojena" 
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="col-span-2 md:col-span-2">
                  <h3 className="text-xl font-semibold mb-3">Trojena</h3>
                  <p className="text-slate-700 mb-4">
                    Una destinazione turistica montana che offrirà attività outdoor durante tutto l'anno, incluse strutture per sport invernali, in una regione dove le temperature invernali possono scendere sotto lo zero.
                  </p>
                  <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                    <p className="text-sm text-slate-700">
                      <strong>Stato attuale:</strong> Sono in corso significativi lavori di costruzione, con scavi per tunnel, installazione di strutture in acciaio per il villaggio sciistico e sviluppo delle infrastrutture di base in preparazione per i Giochi Asiatici Invernali del 2029.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">Esigenze Infrastrutturali di NEOM</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-slate-100">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Train className="h-6 w-6 text-blue-500 mr-2" />
                  Trasporti
                </h3>
                <ul className="space-y-2 text-slate-700 ml-8 list-disc">
                  <li>Linee ferroviarie ad alta velocità (The Spine e Connector)</li>
                  <li>Implementazione di veicoli autonomi</li>
                  <li>Sviluppo di strade, porti e aeroporti</li>
                  <li>Soluzioni di mobilità acquatica come traghetti e taxi acquei</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-slate-100">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Sun className="h-6 w-6 text-amber-500 mr-2" />
                  Utilities
                </h3>
                <ul className="space-y-2 text-slate-700 ml-8 list-disc">
                  <li>Sistema energetico completamente integrato e alimentato al 100% da fonti rinnovabili</li>
                  <li>Forte focus su energia solare, eolica e idrogeno verde</li>
                  <li>Infrastrutture idriche sostenibili basate sulla desalinizzazione</li>
                  <li>Approccio di economia circolare per il trattamento delle acque reflue</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-slate-100">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Building2 className="h-6 w-6 text-green-500 mr-2" />
                  Edilizia e Costruzioni
                </h3>
                <ul className="space-y-2 text-slate-700 ml-8 list-disc">
                  <li>Grattacieli specchiati di The Line</li>
                  <li>Resort di lusso a Sindalah e Trojena</li>
                  <li>Impianti industriali di Oxagon</li>
                  <li>Enorme domanda di materiali da costruzione avanzati</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-slate-100">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Map className="h-6 w-6 text-indigo-500 mr-2" />
                  Smart Cities
                </h3>
                <ul className="space-y-2 text-slate-700 ml-8 list-disc">
                  <li>Sistemi di gestione urbana integrati</li>
                  <li>Reti di sensori e IoT per monitoraggio in tempo reale</li>
                  <li>Soluzioni digitali per gestione traffico, energia e rifiuti</li>
                  <li>Piattaforme di servizi digitali per i residenti</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-6 text-center">Sfide e Opportunità</h2>
            <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="md:w-1/2 bg-gradient-to-br from-slate-700 to-slate-900 text-white p-8">
                <h3 className="font-semibold mb-4 flex items-center">
                  <AlertTriangle className="h-6 w-6 text-yellow-400 mr-2" />
                  Sfide
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Timer className="h-5 w-5 text-yellow-400 mr-2 mt-1" />
                    <span><strong>Limitazioni finanziarie:</strong> Revisioni di budget e potenziali riduzioni delle ambizioni iniziali</span>
                  </li>
                  <li className="flex items-start">
                    <Map className="h-5 w-5 text-yellow-400 mr-2 mt-1" />
                    <span><strong>Complessità logistiche:</strong> Realizzazione in ambiente desertico remoto</span>
                  </li>
                  <li className="flex items-start">
                    <BarChart3 className="h-5 w-5 text-yellow-400 mr-2 mt-1" />
                    <span><strong>Sfide tecniche:</strong> Implementazione di soluzioni innovative</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Lightbulb className="h-6 w-6 text-blue-500 mr-2" />
                  Opportunità
                </h3>
                <p className="text-slate-700 mb-4">
                  Queste sfide rappresentano opportunità concrete per aziende con competenze specializzate e capacità di innovazione, particolarmente per un consorzio italiano capace di offrire soluzioni integrate di alta qualità.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm italic text-slate-700 text-center">
                    "NEOM: Costruire oggi la città del futuro"
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <img 
              src="/images/NEOM-Green-Hydrogen-Company,-wind-turbine-delivery_2.jpg" 
              alt="NEOM Green Hydrogen" 
              className="w-full h-64 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketAnalysis;