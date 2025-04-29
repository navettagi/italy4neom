import React from 'react';
import { 
  Building2, Ship, Droplet, Factory, 
  Lightbulb, CheckCircle2, AlertTriangle,
  BarChart3, LineChart, Globe,
  BarChart, Users
} from 'lucide-react';

const Investigation: React.FC = () => {
  return (
    <section id="investigazione" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-0 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Investigazione e Analisi del Mercato NEOM</h1>

          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-semibold mb-4">Stato Attuale dei Progetti NEOM</h2>
              <p className="text-slate-600 text-lg">
                La nostra analisi approfondita dello stato attuale di NEOM rivela un quadro di significativo 
                avanzamento, pur con alcune revisioni strategiche rispetto alla visione iniziale. I dati raccolti 
                attraverso ricerche di mercato, analisi di immagini satellitari e reportage specializzati mostrano 
                un progetto in evoluzione ma con solide fondamenta e un impegno tangibile da parte del governo saudita.
              </p>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-12">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Progressi Documentati</h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold flex items-center">
                      <Building2 className="h-5 w-5 text-blue-500 mr-2" />
                      The Line
                    </h4>
                    <ul className="space-y-2 text-slate-600 text-sm ml-7">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        Scavi estesi e lavori di fondazione
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        Costruzione dei moduli iniziali
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        Outline emergente della città
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold flex items-center">
                      <Ship className="h-5 w-5 text-indigo-500 mr-2" />
                      Oxagon
                    </h4>
                    <ul className="space-y-2 text-slate-600 text-sm ml-7">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        Espansione del porto di NEOM
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        Insediamento aziende industriali
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        Sviluppo infrastrutture portuali
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold flex items-center">
                      <Factory className="h-5 w-5 text-purple-500 mr-2" />
                      Trojena
                    </h4>
                    <ul className="space-y-2 text-slate-600 text-sm ml-7">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        Progressi per i Giochi Asiatici 2029
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        Scavi complessi per tunnel
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        Strutture in acciaio per il villaggio
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full h-56 bg-gradient-to-r from-slate-800 to-blue-800 overflow-hidden">
                <img 
                  src="/images/1658670126437_NEON.avif" 
                  alt="NEOM Aerial View" 
                  className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Opportunità Concrete per il Consorzio Italiano</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1 md:col-span-2 text-center mb-4">
                <p className="text-slate-600 text-lg">
                  La nostra investigazione ha identificato specifiche aree di opportunità dove le competenze italiane 
                  possono offrire un valore aggiunto significativo:
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <Building2 className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="font-semibold mb-3">Settore Ferroviario</h3>
                <p className="text-slate-600 text-sm">
                  Le competenze italiane nella progettazione e costruzione di linee ferroviarie ad alta velocità 
                  rappresentano un asset strategico per lo sviluppo del sistema di trasporto di NEOM, con particolare 
                  riferimento a The Spine, la colonna vertebrale infrastrutturale di The Line.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <Ship className="h-8 w-8 text-indigo-500 mb-4" />
                <h3 className="font-semibold mb-3">Sviluppo Portuale</h3>
                <p className="text-slate-600 text-sm">
                  L'Italia vanta un'expertise consolidata nello sviluppo e nella gestione di infrastrutture portuali 
                  avanzate, particolarmente rilevante per l'espansione di Oxagon e del porto di NEOM.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <Droplet className="h-8 w-8 text-cyan-500 mb-4" />
                <h3 className="font-semibold mb-3">Tecnologie di Desalinizzazione</h3>
                <p className="text-slate-600 text-sm">
                  Le aziende italiane specializzate in impianti di desalinizzazione innovativi e sostenibili 
                  possono contribuire significativamente alla sostenibilità idrica di NEOM, un fattore critico 
                  in ambiente desertico.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <Factory className="h-8 w-8 text-green-500 mb-4" />
                <h3 className="font-semibold mb-3">Costruzioni Sostenibili</h3>
                <p className="text-slate-600 text-sm">
                  La crescente attenzione dell'industria italiana verso materiali e tecniche di costruzione sostenibili 
                  si allinea perfettamente con gli obiettivi ambientali di NEOM, offrendo soluzioni concrete per ridurre 
                  l'impatto ambientale.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Panorama Competitivo e Tender</h2>
            
            <div className="mb-8">
              <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 mb-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <LineChart className="h-6 w-6 text-blue-500 mr-2" />
                  Processo di Gara
                </h3>
                <p className="text-slate-600">
                  NEOM gestisce un portale di registrazione per i fornitori che offre visibilità sulle opportunità 
                  di gara pianificate fino a due anni in anticipo. Le gare d'appalto di NEOM pongono una forte enfasi 
                  su innovazione, sostenibilità e utilizzo di tecnologie avanzate.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <Globe className="h-6 w-6 text-indigo-500 mr-2" />
                    Competitori Internazionali
                  </h3>
                  <p className="text-slate-600 mb-3">
                    L'analisi del panorama competitivo rivela la presenza di grandi consorzi internazionali, principalmente da:
                  </p>
                  <ul className="space-y-1 text-slate-600 ml-6 list-disc">
                    <li>Stati Uniti</li>
                    <li>Cina</li>
                    <li>Corea del Sud</li>
                    <li>Germania</li>
                    <li>Francia</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <Users className="h-6 w-6 text-green-500 mr-2" />
                    Vantaggi Competitivi Italiani
                  </h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      Eccellenza riconosciuta nel design e nell'ingegneria
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      Esperienza consolidata in ambienti complessi
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      Equilibrio ottimale tra qualità e costi
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      Approccio flessibile e adattabile
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-8 text-center">Fattibilità e Prospettive a Lungo Termine</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
                <CheckCircle2 className="h-8 w-8 text-green-500 mb-4" />
                <h3 className="font-semibold mb-3">Fattori Positivi</h3>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Forte impegno strategico del governo saudita
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Integrazione centrale nella Vision 2030
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Progressi tangibili e investimenti significativi già realizzati
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Potenziale di diversificazione economica e innovazione
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
                <AlertTriangle className="h-8 w-8 text-amber-500 mb-4" />
                <h3 className="font-semibold mb-3">Potenziali Criticità</h3>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    Segnalate revisioni di budget e scala
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    Complessità logistiche e tecniche
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    Sfide legate alla sostenibilità in ambiente desertico
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    Necessità di attrarre residenti e attività economiche
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-slate-600 italic">
                Nonostante le sfide, la nostra valutazione complessiva suggerisce che NEOM continuerà a rappresentare 
                un'opportunità strategica significativa, con un'evoluzione probabilmente più graduale e pragmatica 
                rispetto alla visione iniziale, ma con un impegno sostanziale a lungo termine.
              </p>
              <p className="text-sm text-slate-500 mt-4">
                Analisi basata su ricerche di mercato, immagini satellitari e reportage specializzati aggiornati ad aprile 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investigation;