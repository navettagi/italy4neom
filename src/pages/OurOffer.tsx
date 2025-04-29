import React from 'react';
import { 
  Network, Users, ShieldCheck, Puzzle, Coins, 
  BarChart4, Clock, Building, Rocket, Target, 
  Award, Handshake, Globe, Zap
} from 'lucide-react';

const OurOffer: React.FC = () => {
  return (
    <main className="pt-24">
      <section className="bg-cover bg-center py-20 text-white relative" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 40, 20, 0.8), rgba(0, 40, 20, 0.9)), url("https://neom-cms-dev.neom.com/sites/default/files/styles/3600x1440_/public/2020-12/17.jpg?itok=9bcmwZCM")',
        backgroundAttachment: 'fixed'
      }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Italia per NEOM</h1>
            <p className="text-xl md:text-2xl mb-8">
              Un innovativo sistema di aggregazione imprenditoriale che valorizza l'eccellenza italiana nel contesto di NEOM
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">La Nostra Proposta di Valore</h2>
              <p className="text-lg text-slate-600">
                Italia per NEOM rappresenta un innovativo modello di aggregazione che consente alle eccellenze italiane 
                di partecipare con successo al megaprogetto NEOM, mantenendo autonomia imprenditoriale e minimizzando i rischi.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Un Nuovo Paradigma di Collaborazione</h3>
                <p className="text-slate-600 mb-4">
                  Il nostro sistema di aggregazione innovativo supera i limiti dei tradizionali consorzi, creando 
                  una rete flessibile e dinamica di eccellenze italiane, unita da obiettivi comuni ma libera da 
                  rigidità strutturali.
                </p>
                <p className="text-slate-600">
                  Questo approccio consente alle aziende di:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mt-3">
                  <li>Mantenere piena autonomia decisionale e strategica</li>
                  <li>Partecipare selettivamente solo alle opportunità di interesse</li>
                  <li>Minimizzare l'investimento e l'esposizione finanziaria</li>
                  <li>Beneficiare della forza collettiva del gruppo e del brand Italia</li>
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://i0.wp.com/www.madeinitalyfor.me/wp-content/uploads/2021/03/Eccellenze-italiane.jpg?fit=700%2C380&ssl=1" 
                  alt="Eccellenze Italiane" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Perché un Sistema di Aggregazione Italiano per NEOM?</h3>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-white w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow-md mb-4">
                      <Network className="h-10 w-10 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Potere dell'Aggregazione</h4>
                    <p className="text-slate-600 text-sm">
                      Capacità di competere con i grandi player internazionali grazie alla forza combinata delle eccellenze italiane
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow-md mb-4">
                      <ShieldCheck className="h-10 w-10 text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Riduzione del Rischio</h4>
                    <p className="text-slate-600 text-sm">
                      Approccio progressivo e autofinanziato che minimizza l'esposizione finanziaria delle aziende partecipanti
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow-md mb-4">
                      <Award className="h-10 w-10 text-amber-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Eccellenza Italiana</h4>
                    <p className="text-slate-600 text-sm">
                      Valorizzazione del "Made in Italy" come asset strategico in un mercato che ricerca qualità e innovazione
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
                  <h4 className="font-semibold mb-4 flex items-center">
                    <Target className="h-6 w-6 text-blue-600 mr-2" />
                    Vantaggi per NEOM
                  </h4>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start">
                      <span className="h-2 w-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                      <span><strong>Eccellenza integrata:</strong> Accesso alle migliori competenze italiane coordinate</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                      <span><strong>Semplificazione gestionale:</strong> Un unico punto di contatto per un ecosistema di fornitori d'eccellenza</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                      <span><strong>Garanzia di qualità:</strong> Standard elevati garantiti dalla reputazione del Made in Italy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                      <span><strong>Coordinamento temporale:</strong> Orchestrazione ottimale di forniture complementari</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
                  <h4 className="font-semibold mb-4 flex items-center">
                    <Handshake className="h-6 w-6 text-green-600 mr-2" />
                    Vantaggi per le Aziende
                  </h4>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start">
                      <span className="h-2 w-2 mt-2 mr-2 bg-green-500 rounded-full"></span>
                      <span><strong>Accesso privilegiato:</strong> Possibilità di accedere a opportunità di alto livello</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 mt-2 mr-2 bg-green-500 rounded-full"></span>
                      <span><strong>Libertà imprenditoriale:</strong> Completa autonomia decisionale e assenza di vincoli</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 mt-2 mr-2 bg-green-500 rounded-full"></span>
                      <span><strong>Condivisione del rischio:</strong> Approccio "no deal, no cost" che elimina l'esposizione</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 mt-2 mr-2 bg-green-500 rounded-full"></span>
                      <span><strong>Visibilità internazionale:</strong> Posizionamento in un progetto di prestigio globale</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center">Il Nostro Modello Distintivo</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Users className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="ml-5">
                      <h4 className="text-lg font-semibold mb-2">Libertà Imprenditoriale Totale</h4>
                      <p className="text-slate-600 mb-4">
                        A differenza dei tradizionali consorzi, il nostro sistema di aggregazione garantisce completa 
                        libertà decisionale e operativa alle aziende partecipanti.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-start">
                          <div className="h-2 w-2 mt-2 mr-2 bg-blue-500 rounded-full"></div>
                          <p className="text-sm text-slate-600">Completa autonomia decisionale per ogni azienda</p>
                        </div>
                        <div className="flex items-start">
                          <div className="h-2 w-2 mt-2 mr-2 bg-blue-500 rounded-full"></div>
                          <p className="text-sm text-slate-600">Nessun vincolo di esclusività</p>
                        </div>
                        <div className="flex items-start">
                          <div className="h-2 w-2 mt-2 mr-2 bg-blue-500 rounded-full"></div>
                          <p className="text-sm text-slate-600">Partecipazione "à la carte" solo alle iniziative di interesse</p>
                        </div>
                        <div className="flex items-start">
                          <div className="h-2 w-2 mt-2 mr-2 bg-blue-500 rounded-full"></div>
                          <p className="text-sm text-slate-600">Focalizzazione sulle competenze distintive</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Coins className="h-8 w-8 text-amber-600" />
                    </div>
                    <div className="ml-5">
                      <h4 className="text-lg font-semibold mb-2">Zero Rischio Finanziario</h4>
                      <p className="text-slate-600 mb-4">
                        Un approccio rivoluzionario che elimina gli investimenti iniziali significativi e i costi fissi, 
                        tipici dei consorzi tradizionali.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-start">
                          <div className="h-2 w-2 mt-2 mr-2 bg-amber-500 rounded-full"></div>
                          <p className="text-sm text-slate-600">Investimento iniziale puramente simbolico (€500-1.000)</p>
                        </div>
                        <div className="flex items-start">
                          <div className="h-2 w-2 mt-2 mr-2 bg-amber-500 rounded-full"></div>
                          <p className="text-sm text-slate-600">Nessun costo fisso da sostenere</p>
                        </div>
                        <div className="flex items-start">
                          <div className="h-2 w-2 mt-2 mr-2 bg-amber-500 rounded-full"></div>
                          <p className="text-sm text-slate-600">Struttura autofinanziata tramite success fee</p>
                        </div>
                        <div className="flex items-start">
                          <div className="h-2 w-2 mt-2 mr-2 bg-amber-500 rounded-full"></div>
                          <p className="text-sm text-slate-600">Approccio "No Deal, No Cost" - Pagamenti solo dopo l'effettivo incasso</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Globe className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="ml-5">
                      <h4 className="text-lg font-semibold mb-2">Brand Italia Come Asset Condiviso</h4>
                      <p className="text-slate-600 mb-4">
                        Valorizzazione strategica del "Made in Italy" come leva competitiva distintiva 
                        nel contesto internazionale.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-start">
                          <div className="h-2 w-2 mt-2 mr-2 bg-green-500 rounded-full"></div>
                          <p className="text-sm text-slate-600">Promozione coordinata dell'eccellenza italiana</p>
                        </div>
                        <div className="flex items-start">
                          <div className="h-2 w-2 mt-2 mr-2 bg-green-500 rounded-full"></div>
                          <p className="text-sm text-slate-600">Comunicazione integrata che valorizza le specificità</p>
                        </div>
                        <div className="flex items-start">
                          <div className="h-2 w-2 mt-2 mr-2 bg-green-500 rounded-full"></div>
                          <p className="text-sm text-slate-600">Rappresentanza unitaria che amplifica l'impatto</p>
                        </div>
                        <div className="flex items-start">
                          <div className="h-2 w-2 mt-2 mr-2 bg-green-500 rounded-full"></div>
                          <p className="text-sm text-slate-600">Stile, design e qualità come valori distintivi</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center">Evoluzione Progressiva della Nostra Struttura</h3>
              
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 md:block hidden"></div>
                
                <div className="space-y-12 relative">
                  <div className="md:flex gap-8 items-center relative">
                    <div className="md:w-7 md:h-7 bg-blue-600 rounded-full absolute left-4.5 -translate-x-1/2 z-10 hidden md:block"></div>
                    <div className="md:w-64 text-right hidden md:block">
                      <span className="text-lg font-semibold text-blue-600">Fase 1: 1-6 mesi</span>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md border border-blue-100 md:flex-1">
                      <div className="md:hidden mb-4">
                        <span className="text-lg font-semibold text-blue-600">Fase 1: 1-6 mesi</span>
                      </div>
                      <div className="flex items-center mb-4">
                        <Clock className="h-6 w-6 text-blue-600 mr-3" />
                        <h4 className="text-xl font-semibold">Joint Promotion Agreement</h4>
                      </div>
                      <p className="text-slate-600 mb-4">
                        Una fase iniziale di collaborazione leggera e flessibile, focalizzata sull'intelligence di mercato 
                        e sull'avvio delle prime relazioni con NEOM.
                      </p>
                      <div className="grid md:grid-cols-2 gap-x-6 gap-y-3">
                        <div>
                          <h5 className="font-semibold mb-2 text-sm">Attività Chiave:</h5>
                          <ul className="space-y-1 text-slate-600 text-sm">
                            <li>• Mappatura dettagliata delle opportunità</li>
                            <li>• Materiali promozionali congiunti</li>
                            <li>• Missione esplorativa in Arabia Saudita</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2 text-sm">Struttura e Costi:</h5>
                          <ul className="space-y-1 text-slate-600 text-sm">
                            <li>• Accordo di collaborazione commerciale</li>
                            <li>• Quota simbolica: €500-1.000</li>
                            <li>• Nessun costo fisso strutturale</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:flex gap-8 items-center relative">
                    <div className="md:w-7 md:h-7 bg-purple-600 rounded-full absolute left-4.5 -translate-x-1/2 z-10 hidden md:block"></div>
                    <div className="md:w-64 text-right hidden md:block">
                      <span className="text-lg font-semibold text-purple-600">Fase 2: 7-18 mesi</span>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl shadow-md border border-purple-100 md:flex-1">
                      <div className="md:hidden mb-4">
                        <span className="text-lg font-semibold text-purple-600">Fase 2: 7-18 mesi</span>
                      </div>
                      <div className="flex items-center mb-4">
                        <Building className="h-6 w-6 text-purple-600 mr-3" />
                        <h4 className="text-xl font-semibold">Sistema con Hub Centrale</h4>
                      </div>
                      <p className="text-slate-600 mb-4">
                        Una struttura più articolata ma ancora leggera, che fornisce servizi condivisi 
                        e rappresentanza unificata per le aziende partecipanti.
                      </p>
                      <div className="grid md:grid-cols-2 gap-x-6 gap-y-3">
                        <div>
                          <h5 className="font-semibold mb-2 text-sm">Attività Chiave:</h5>
                          <ul className="space-y-1 text-slate-600 text-sm">
                            <li>• Partecipazione congiunta a gare</li>
                            <li>• Piattaforma digitale condivisa</li>
                            <li>• Ufficio di rappresentanza leggero</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2 text-sm">Struttura e Costi:</h5>
                          <ul className="space-y-1 text-slate-600 text-sm">
                            <li>• Rete d'impresa flessibile</li>
                            <li>• Quota annuale: €1.000-2.000</li>
                            <li>• Success fee: 1% sui contratti</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:flex gap-8 items-center relative">
                    <div className="md:w-7 md:h-7 bg-green-600 rounded-full absolute left-4.5 -translate-x-1/2 z-10 hidden md:block"></div>
                    <div className="md:w-64 text-right hidden md:block">
                      <span className="text-lg font-semibold text-green-600">Fase 3: dal 18° mese</span>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl shadow-md border border-green-100 md:flex-1">
                      <div className="md:hidden mb-4">
                        <span className="text-lg font-semibold text-green-600">Fase 3: dal 18° mese</span>
                      </div>
                      <div className="flex items-center mb-4">
                        <Rocket className="h-6 w-6 text-green-600 mr-3" />
                        <h4 className="text-xl font-semibold">Sistema Modulare Integrato</h4>
                      </div>
                      <p className="text-slate-600 mb-4">
                        Un ecosistema completo capace di gestire progetti complessi mantenendo massima flessibilità 
                        per le aziende partecipanti.
                      </p>
                      <div className="grid md:grid-cols-2 gap-x-6 gap-y-3">
                        <div>
                          <h5 className="font-semibold mb-2 text-sm">Attività Chiave:</h5>
                          <ul className="space-y-1 text-slate-600 text-sm">
                            <li>• Portfolio progetti coordinato</li>
                            <li>• Joint ventures strategiche</li>
                            <li>• Supply chain integrata italo-saudita</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2 text-sm">Struttura e Costi:</h5>
                          <ul className="space-y-1 text-slate-600 text-sm">
                            <li>• Forme giuridiche multiple</li>
                            <li>• Zero quote fisse annuali</li>
                            <li>• Success fee: 1-2% sui contratti</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Perché Partecipare?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all">
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Puzzle className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-3">Complementarità</h4>
                  <p className="text-slate-600 text-sm">
                    Un sistema che valorizza la complementarità delle competenze italiane, creando un'offerta integrata 
                    più forte delle singole parti.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all">
                  <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <BarChart4 className="h-8 w-8 text-amber-600" />
                  </div>
                  <h4 className="font-semibold mb-3">Scalabilità</h4>
                  <p className="text-slate-600 text-sm">
                    Un modello scalabile che può adattarsi alla crescita del business e all'evoluzione delle 
                    opportunità di mercato.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all">
                  <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Zap className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold mb-3">Velocità</h4>
                  <p className="text-slate-600 text-sm">
                    Una struttura agile che consente decisioni rapide e implementazione veloce, fondamentale in un 
                    contesto competitivo e dinamico come NEOM.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-2xl text-white text-center">
                <h3 className="text-2xl font-semibold mb-4">Unisciti all'Italia per NEOM</h3>
                <p className="text-lg mb-6">
                  Fai parte di un'iniziativa unica che valorizza l'eccellenza italiana in uno dei progetti 
                  più ambiziosi del mondo, con zero rischi e massimi benefici.
                </p>
                <a 
                  href="/contatti" 
                  className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors shadow-lg font-semibold"
                >
                  Scopri Come Partecipare
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurOffer;