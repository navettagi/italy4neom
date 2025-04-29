import React from 'react';
import { 
  Users, Shield, Coins, Target, Flag, 
  BarChart, Building, Rocket, Clock,
  CheckCircle, ArrowRight, Workflow
} from 'lucide-react';

const BusinessModel: React.FC = () => {
  return (
    <section id="modello" className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-0 w-72 h-72 bg-green-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Modello di Aggregazione Progressiva</h1>
          
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold mb-4">Un Approccio Evolutivo e Flessibile</h2>
            <p className="text-slate-600 text-lg">
              L'Italian NEOM Network adotta un modello di aggregazione progressiva che evolve organicamente 
              in base ai risultati ottenuti. Questa struttura ultraleggera è progettata per massimizzare 
              le opportunità minimizzando i rischi e gli investimenti iniziali.
            </p>
          </div>

          {/* Immagine di sfondo di NEOM */}
          <div className="mb-16 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/images/Hyatt_Marina-1200x545_c.webp" 
              alt="NEOM City" 
              className="w-full h-64 object-cover object-center"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Principi Fondamentali Cards */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 transform hover:-translate-y-1 transition-all">
              <Shield className="h-12 w-12 text-blue-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Libertà Imprenditoriale Totale</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Completa autonomia decisionale
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Nessun vincolo di esclusività
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Partecipazione "à la carte"
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 transform hover:-translate-y-1 transition-all">
              <Coins className="h-12 w-12 text-amber-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Zero Rischio Finanziario</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Investimento iniziale simbolico
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Nessun costo fisso
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Struttura autofinanziata
                </li>
              </ul>
            </div>
          </div>

          {/* Fasi Evolution Timeline */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Struttura Evolutiva in Tre Fasi</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl relative">
                <div className="absolute -left-3 top-8 w-6 h-6 bg-blue-500 rounded-full"></div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Clock className="h-6 w-6 text-blue-500 mr-2" />
                  Fase 1: Joint Promotion Agreement
                  <span className="text-sm text-slate-500 ml-2">(1-6 mesi)</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Attività Chiave:</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-blue-500 mr-2" />
                        Mappatura opportunità NEOM
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-blue-500 mr-2" />
                        Materiali promozionali congiunti
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-blue-500 mr-2" />
                        Missione esplorativa
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Finanziamento:</h4>
                    <p className="text-slate-600">Quota di adesione: €500-1.000 per azienda</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl relative">
                <div className="absolute -left-3 top-8 w-6 h-6 bg-purple-500 rounded-full"></div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Building className="h-6 w-6 text-purple-500 mr-2" />
                  Fase 2: Rete d'Impresa con Hub Centrale
                  <span className="text-sm text-slate-500 ml-2">(7-18 mesi)</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Attività Chiave:</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-purple-500 mr-2" />
                        Fondo patrimoniale comune
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-purple-500 mr-2" />
                        Struttura operativa leggera
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-purple-500 mr-2" />
                        Partecipazione a gare
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Finanziamento:</h4>
                    <p className="text-slate-600">Quota annuale: €1.000-2.000 per azienda</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-2xl relative">
                <div className="absolute -left-3 top-8 w-6 h-6 bg-green-500 rounded-full"></div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Rocket className="h-6 w-6 text-green-500 mr-2" />
                  Fase 3: Sistema Modulare Integrato
                  <span className="text-sm text-slate-500 ml-2">(dal 18° mese)</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Attività Chiave:</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-green-500 mr-2" />
                        Portfolio progetti coordinato
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-green-500 mr-2" />
                        Joint Ventures strategiche
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-green-500 mr-2" />
                        Supply chain integrata
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Finanziamento:</h4>
                    <p className="text-slate-600">Success fee: 1-2% sui contratti ottenuti</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coordinamento Temporale */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 mb-16">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Workflow className="h-8 w-8 text-indigo-500 mr-3" />
              Coordinamento Temporale Multi-servizio
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <BarChart className="h-6 w-6 text-indigo-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Master Schedule Condiviso</h4>
                    <p className="text-slate-600 text-sm">Pianificazione integrata con visibilità delle interdipendenze</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target className="h-6 w-6 text-indigo-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Critical Path Monitoring</h4>
                    <p className="text-slate-600 text-sm">Gestione proattiva dei percorsi critici inter-aziendali</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Flag className="h-6 w-6 text-indigo-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Early Warning System</h4>
                    <p className="text-slate-600 text-sm">Meccanismo di allerta precoce per potenziali problemi</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-indigo-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Joint Risk Management</h4>
                    <p className="text-slate-600 text-sm">Gestione condivisa dei rischi di interfaccia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Roadmap di Implementazione */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-700 to-green-700 text-white">
            <h2 className="text-2xl font-semibold mb-6 text-center">Roadmap di Implementazione</h2>
            <div className="space-y-4">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Attività Immediate (Primi 30 giorni)</h3>
                <ul className="space-y-2 ml-4 list-disc">
                  <li>Creazione di un gruppo WhatsApp di aziende interessate</li>
                  <li>Webinar gratuito di presentazione delle opportunità</li>
                  <li>Raccolta di manifestazioni di interesse non vincolanti</li>
                  <li>Preparazione di un semplice memorandum di intesa</li>
                </ul>
              </div>

              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Tempistiche Implementative</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="inline-block w-28 font-semibold">Settimane 1-2:</span>
                    <span>Formazione del gruppo di interesse</span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-28 font-semibold">Settimane 3-4:</span>
                    <span>Firma del memorandum non vincolante</span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-28 font-semibold">Mese 2:</span>
                    <span>Creazione di materiali promozionali digitali</span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-28 font-semibold">Mese 3:</span>
                    <span>Prima missione esplorativa autofinanziata</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;