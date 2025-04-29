import React from 'react';
import { Building2, LayoutGrid, Factory, Layers, Mountain, Leaf, Sun, Droplet, Wind } from 'lucide-react';

const NEOMProject: React.FC = () => {
  return (
    <main className="pt-24">
      <section className="bg-cover bg-center py-20 text-white relative" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url("/images/neomline.jpg")',
        backgroundAttachment: 'fixed'
      }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">NEOM: Una Visione Rivoluzionaria</h1>
            <p className="text-xl md:text-2xl mb-8">
              Il più ambizioso progetto urbanistico della storia moderna che sta ridefinendo il concetto stesso di città
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">La Grandiosità di NEOM</h2>
              <p className="text-lg text-slate-600">
                Un progetto da 500 miliardi di dollari che si estende su 26.500 km² di territorio, attraversando il Mar Rosso 
                e abbracciando tre paesi. NEOM rappresenta l'ambizione dell'Arabia Saudita di costruire un futuro oltre il petrolio, 
                ridefinendo il concetto stesso di sviluppo urbano.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Visione e Obiettivi</h3>
                <p className="text-slate-600 mb-4">
                  NEOM è un acronimo che combina "neo" (nuovo) con "M" (dall'arabo "mustaqbal", futuro). 
                  Questo megaprogetto rappresenta un elemento centrale della strategia Vision 2030 dell'Arabia Saudita, 
                  progettata per diversificare l'economia del paese oltre il petrolio.
                </p>
                <p className="text-slate-600">
                  Gli obiettivi principali di NEOM includono la creazione di:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mt-3">
                  <li>Un ecosistema urbano alimentato al 100% da energia rinnovabile</li>
                  <li>Una zona economica speciale con leggi proprie per favorire l'innovazione</li>
                  <li>Un ambiente urbano con zero emissioni di carbonio</li>
                  <li>Un hub per l'innovazione tecnologica e lo sviluppo sostenibile</li>
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/images/neom_site.jpg" 
                  alt="NEOM Vision Concept" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">I Progetti Principali di NEOM</h3>
              
              <div className="space-y-12">
                <div className="bg-gradient-to-r from-slate-100 to-blue-50 rounded-2xl overflow-hidden shadow-md">
                  <div className="grid md:grid-cols-5 gap-0">
                    <div className="md:col-span-2 h-auto">
                      <img 
                        src="/images/neomline.jpg" 
                        alt="The Line" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:col-span-3 p-8">
                      <div className="flex items-center mb-4">
                        <LayoutGrid className="h-6 w-6 text-blue-600 mr-3" />
                        <h4 className="text-xl font-semibold">The Line</h4>
                      </div>
                      <p className="text-slate-700 mb-4">
                        Una città lineare di 170 km di lunghezza senza strade, auto o emissioni di carbonio. 
                        The Line è progettata come una serie di comunità integrate verticalmente, con tutti i servizi 
                        raggiungibili entro 5 minuti a piedi e un sistema di trasporto ad alta velocità che permette 
                        di attraversare l'intera città in 20 minuti.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">9 milioni di residenti</span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Zero emissioni</span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Design verticale</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-slate-100 to-purple-50 rounded-2xl overflow-hidden shadow-md">
                  <div className="grid md:grid-cols-5 gap-0">
                    <div className="md:col-span-3 p-8 order-2 md:order-1">
                      <div className="flex items-center mb-4">
                        <Factory className="h-6 w-6 text-purple-600 mr-3" />
                        <h4 className="text-xl font-semibold">Oxagon</h4>
                      </div>
                      <p className="text-slate-700 mb-4">
                        Un polo industriale e portuale innovativo che reinterpreta il concetto di città industriale. 
                        Oxagon è strutturato come un complesso ottagonale parzialmente galleggiante sul Mar Rosso, 
                        progettato per ospitare industrie avanzate e sostenibili, focalizzate su settori come tecnologie 
                        rinnovabili, mobilità sostenibile, produzione avanzata e idrogeno verde.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Hub industriale</span>
                        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Struttura galleggiante</span>
                        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Porto avanzato</span>
                      </div>
                    </div>
                    <div className="md:col-span-2 h-auto order-1 md:order-2">
                      <img 
                        src="/images/neom_oxagon.jpg" 
                        alt="Oxagon" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-slate-100 to-emerald-50 rounded-2xl overflow-hidden shadow-md">
                  <div className="grid md:grid-cols-5 gap-0">
                    <div className="md:col-span-2 h-auto">
                      <img 
                        src="/images/neom_trojena.jpeg" 
                        alt="Trojena" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:col-span-3 p-8">
                      <div className="flex items-center mb-4">
                        <Mountain className="h-6 w-6 text-emerald-600 mr-3" />
                        <h4 className="text-xl font-semibold">Trojena</h4>
                      </div>
                      <p className="text-slate-700 mb-4">
                        Una destinazione turistica montana unica, dove il deserto incontra le montagne. Trojena offrirà 
                        esperienze outdoor durante tutto l'anno, inclusi sport invernali in una regione dove le temperature 
                        possono scendere sotto lo zero. Questo straordinario progetto ospiterà i Giochi Asiatici Invernali del 2029, 
                        un evento storico per l'Arabia Saudita e la regione.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">Sport invernali</span>
                        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">Giochi Asiatici 2029</span>
                        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">Destinazione turistica</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-slate-100 to-amber-50 rounded-2xl overflow-hidden shadow-md">
                  <div className="grid md:grid-cols-5 gap-0">
                    <div className="md:col-span-3 p-8 order-2 md:order-1">
                      <div className="flex items-center mb-4">
                        <Layers className="h-6 w-6 text-amber-600 mr-3" />
                        <h4 className="text-xl font-semibold">Sindalah</h4>
                      </div>
                      <p className="text-slate-700 mb-4">
                        Un'isola di lusso nel Mar Rosso pensata come destinazione premium per yacht e turismo d'élite. 
                        Sindalah rappresenta il primo progetto di NEOM ad essere completato, con l'apertura prevista nel 2024. 
                        L'isola ospiterà tre hotel di lusso, ristoranti esclusivi, un campo da golf a 18 buche e un porto turistico 
                        per yacht e imbarcazioni di lusso.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">Isola di lusso</span>
                        <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">Porto turistico</span>
                        <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">Completamento 2024</span>
                      </div>
                    </div>
                    <div className="md:col-span-2 h-auto order-1 md:order-2">
                      <img 
                        src="/images/neom_sindalah.jpeg" 
                        alt="Sindalah" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-100 to-green-50 p-8 rounded-2xl mb-16 shadow-md">
              <h3 className="text-2xl font-semibold mb-6 text-center">Progetti Ambientali Innovativi</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Leaf className="h-6 w-6 text-green-600 mr-3 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Progetto degli Ulivi</h4>
                      <p className="text-slate-700">
                        Nel nord del regno saudita, NEOM ha avviato un ambizioso progetto di piantagione di ulivi, adattati 
                        alle condizioni climatiche locali. Questo progetto non solo rappresenta un'impresa agricola innovativa in 
                        un ambiente desertico, ma simboleggia anche il rinnovamento e la sostenibilità a lungo termine.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Sun className="h-6 w-6 text-amber-600 mr-3 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Parco Solare</h4>
                      <p className="text-slate-700">
                        Uno dei più grandi impianti fotovoltaici al mondo, progettato per sfruttare l'abbondante energia 
                        solare della regione e fornire energia pulita a tutto il progetto NEOM.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Droplet className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Impianti di Desalinizzazione Sostenibili</h4>
                      <p className="text-slate-700">
                        Tecnologie avanzate di desalinizzazione a zero emissioni, progettate per garantire 
                        un approvvigionamento idrico sostenibile in un ambiente desertico.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Wind className="h-6 w-6 text-cyan-600 mr-3 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Produzione di Idrogeno Verde</h4>
                      <p className="text-slate-700">
                        NEOM ospiterà uno dei più grandi impianti di produzione di idrogeno verde al mondo, 
                        alimentato da energia rinnovabile, per contribuire alla decarbonizzazione globale.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-center">Giochi Asiatici Invernali 2029</h3>
              <div className="bg-cover bg-center rounded-2xl overflow-hidden shadow-xl p-8 text-white" style={{ 
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url("/images/neom_trojena.jpeg")',
              }}>
                <div className="max-w-3xl mx-auto">
                  <p className="text-lg mb-4">
                    Nel 2022, l'Arabia Saudita ha ottenuto il diritto di ospitare i Giochi Asiatici Invernali del 2029 a Trojena, 
                    segnando un momento storico per il paese e per la regione. Questo evento rappresenta una svolta significativa, 
                    portando sport invernali in una regione tradizionalmente associata al deserto e al caldo.
                  </p>
                  <p className="text-lg mb-4">
                    I Giochi si terranno nella regione montuosa di Trojena, dove le temperature invernali possono scendere sotto lo zero, 
                    offrendo condizioni naturali per sport sulla neve, integrate da tecnologie avanzate di innevamento artificiale.
                  </p>
                  <div className="flex justify-center mt-8">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-lg">
                      Prima edizione dei Giochi Asiatici Invernali in Medio Oriente
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">La Scala di NEOM</h3>
              <p className="text-slate-600">
                Per comprendere la grandiosità di NEOM, basti pensare che la sola città lineare The Line 
                avrà una lunghezza di 170 km, equivalente alla distanza tra Roma e Napoli, 
                e ospiterà fino a 9 milioni di abitanti in un ambiente completamente nuovo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NEOMProject;