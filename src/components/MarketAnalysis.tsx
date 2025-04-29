import React from 'react';
import { Building2, Ship, Droplet, Factory, Sun, LineChart, AlertTriangle, CheckCircle2 } from 'lucide-react';

const MarketAnalysis: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-0 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Investigazione e Analisi del Mercato NEOM</h1>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Stato Attuale dei Progetti NEOM</h2>
            <p className="text-slate-600 mb-8">
              La nostra analisi approfondita dello stato attuale di NEOM rivela un quadro di significativo 
              avanzamento, pur con alcune revisioni strategiche rispetto alla visione iniziale.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <h3 className="font-semibold mb-4">The Line</h3>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Scavi estesi e lavori di fondazione
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Costruzione dei moduli iniziali
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <h3 className="font-semibold mb-4">Oxagon</h3>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Espansione del porto
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Insediamento aziende industriali
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <h3 className="font-semibold mb-4">Trojena</h3>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Preparazione Giochi Asiatici 2029
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Sviluppo infrastrutture montane
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Opportunità Concrete per il Consorzio Italiano</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <Building2 className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="font-semibold mb-3">Settore Ferroviario</h3>
                <p className="text-slate-600 text-sm">
                  Competenze italiane nella progettazione e costruzione di linee ferroviarie ad alta velocità.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <Ship className="h-8 w-8 text-indigo-500 mb-4" />
                <h3 className="font-semibold mb-3">Sviluppo Portuale</h3>
                <p className="text-slate-600 text-sm">
                  Expertise consolidata nello sviluppo e gestione di infrastrutture portuali avanzate.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <Droplet className="h-8 w-8 text-cyan-500 mb-4" />
                <h3 className="font-semibold mb-3">Tecnologie di Desalinizzazione</h3>
                <p className="text-slate-600 text-sm">
                  Impianti di desalinizzazione innovativi e sostenibili.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <Factory className="h-8 w-8 text-green-500 mb-4" />
                <h3 className="font-semibold mb-3">Costruzioni Sostenibili</h3>
                <p className="text-slate-600 text-sm">
                  Materiali e tecniche di costruzione sostenibili.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Panorama Competitivo e Tender</h2>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Competitori Internazionali</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>Stati Uniti</li>
                    <li>Cina</li>
                    <li>Corea del Sud</li>
                    <li>Germania</li>
                    <li>Francia</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Vantaggi Competitivi Italiani</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>Eccellenza nel design e ingegneria</li>
                    <li>Esperienza in ambienti complessi</li>
                    <li>Equilibrio qualità-costi</li>
                    <li>Approccio flessibile</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Fattibilità e Prospettive</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
                <CheckCircle2 className="h-8 w-8 text-green-500 mb-4" />
                <h3 className="font-semibold mb-3">Fattori Positivi</h3>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>Forte impegno strategico saudita</li>
                  <li>Integrazione Vision 2030</li>
                  <li>Progressi tangibili realizzati</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
                <AlertTriangle className="h-8 w-8 text-amber-500 mb-4" />
                <h3 className="font-semibold mb-3">Potenziali Criticità</h3>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>Revisioni di budget e scala</li>
                  <li>Complessità logistiche</li>
                  <li>Sfide di sostenibilità</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketAnalysis;