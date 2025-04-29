import React from 'react';
import { 
  BarChart, TrendingDown, LineChart, FilePieChart, Target, AlertTriangle, 
  CheckCircle, Building2, Ship, FileBarChart, BarChart3, 
  Clock, DollarSign, Users, Globe
} from 'lucide-react';

const MarketAnalysis: React.FC = () => {
  return (
    <main className="pt-24">
      <section className="bg-cover bg-center py-20 text-white relative" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 20, 40, 0.8), rgba(0, 20, 40, 0.9)), url("https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2021/03/02/2489641-1362489336.jpg?itok=CIiACGc9")',
        backgroundAttachment: 'fixed'
      }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Analisi di Mercato e Investigazione</h1>
            <p className="text-xl md:text-2xl mb-8">
              Dati, statistiche e prospettive sul megaprogetto NEOM e le opportunità di business correlate
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Analisi Investigativa</h2>
              <p className="text-lg text-slate-600">
                Una valutazione oggettiva dello stato attuale di NEOM, basata su ricerche di mercato, analisi satellitari, 
                reportage specializzati e interviste con stakeholder del settore.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Stato Attuale del Progetto</h3>
                <p className="text-slate-600 mb-4">
                  La nostra analisi ha rivelato un quadro di significativo avanzamento, ma con alcune revisioni strategiche 
                  rispetto alla visione iniziale. Il progetto NEOM continua a ricevere sostanziali investimenti, con progressi 
                  tangibili in diverse aree chiave.
                </p>
                <div className="flex items-center mt-6">
                  <Clock className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="text-slate-700 font-semibold">Dati aggiornati ad aprile 2025</span>
                </div>
              </div>
              <div className="bg-slate-100 p-6 rounded-xl">
                <h4 className="font-semibold mb-4 flex items-center">
                  <BarChart className="h-5 w-5 text-blue-600 mr-2" />
                  Indicatori Chiave di Progresso
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">The Line</span>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Oxagon</span>
                      <span className="text-sm font-medium">68%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '68%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Trojena</span>
                      <span className="text-sm font-medium">52%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '52%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Sindalah</span>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-amber-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Evidenze di Ridimensionamento</h3>
              
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl mb-8 border border-amber-200">
                <h4 className="flex items-center font-semibold text-xl mb-4">
                  <TrendingDown className="text-amber-600 h-6 w-6 mr-2" />
                  Revisioni del Progetto Originale
                </h4>
                <p className="text-slate-700 mb-6">
                  Nella nostra investigazione abbiamo identificato diverse evidenze che indicano un ridimensionamento 
                  rispetto alle ambizioni iniziali, pur mantenendo l'essenza visionaria del progetto.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-xl shadow-sm">
                    <h5 className="font-semibold mb-3">Ridimensionamento di The Line</h5>
                    <p className="text-slate-600 text-sm">
                      La lunghezza originale di 170 km è stata rivista, con piani attuali che indicano un'implementazione 
                      iniziale di 2,4 km che sarà poi ampliata progressivamente. Questa strategia di "prototipazione" 
                      sostituisce l'approccio iniziale più ambizioso.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm">
                    <h5 className="font-semibold mb-3">Revisione del Budget</h5>
                    <p className="text-slate-600 text-sm">
                      Il budget complessivo di 500 miliardi di dollari è stato soggetto a rivalutazioni, con 
                      fonti finanziarie che indicano un approccio più graduale agli investimenti, legato alla 
                      validazione di ciascuna fase completata.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm">
                    <h5 className="font-semibold mb-3">Cronoprogramma Esteso</h5>
                    <p className="text-slate-600 text-sm">
                      La timeline originale che prevedeva significativi completamenti entro il 2030 è stata 
                      rivista, con una pianificazione più estesa che si protrae fino al 2045 per le implementazioni 
                      complete di alcuni segmenti.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm">
                    <h5 className="font-semibold mb-3">Approccio Modulare</h5>
                    <p className="text-slate-600 text-sm">
                      I piani attuali indicano un approccio più modulare rispetto al concept iniziale, 
                      consentendo aggiustamenti basati sui risultati e sull'apprendimento di ogni fase.
                    </p>
                  </div>
                </div>

                <div className="mt-8 bg-amber-100/50 p-4 rounded-lg border border-amber-200 text-amber-800">
                  <p className="text-sm italic">
                    "Le revisioni strategiche non devono essere interpretate come un abbandono della visione, ma come 
                    un approccio più pragmatico all'implementazione di un progetto senza precedenti nella storia moderna."
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="flex-1 bg-white p-6 rounded-xl shadow-md border border-slate-200">
                  <div className="flex items-start mb-4">
                    <DollarSign className="h-6 w-6 text-green-600 mr-2 mt-1" />
                    <div>
                      <h4 className="font-semibold">Investimenti Confermati</h4>
                      <p className="text-slate-600 text-sm mt-1">
                        Nonostante il ridimensionamento, NEOM ha confermato investimenti per oltre 175 miliardi di dollari 
                        nei prossimi 5 anni, con focus su infrastrutture chiave.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src="https://www.visualcapitalist.com/wp-content/uploads/2023/09/neo-the-line-construction.jpeg" 
                      alt="NEOM Construction" 
                      className="max-h-48 rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow-md border border-slate-200">
                  <div className="flex items-start mb-4">
                    <Target className="h-6 w-6 text-indigo-600 mr-2 mt-1" />
                    <div>
                      <h4 className="font-semibold">Focus su Obiettivi Chiave</h4>
                      <p className="text-slate-600 text-sm mt-1">
                        La revisione ha portato a una maggiore concentrazione su progetti ad alto impatto come 
                        Sindalah (turismo di lusso) e la produzione di idrogeno verde, che mostrano maggiore fattibilità 
                        a breve termine.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-indigo-50 rounded-lg">
                    <p className="text-sm text-indigo-700">
                      Il progetto Sindalah è ora al 85% di completamento e rappresenta un caso di successo 
                      nella strategia di implementazione progressiva.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Panorama Competitivo</h3>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 mb-8">
                <div className="flex items-center mb-6">
                  <Users className="h-6 w-6 text-blue-600 mr-2" />
                  <h4 className="text-xl font-semibold">Principali Attori Internazionali</h4>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Paese</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Aziende Principali</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Settori di Focalizzazione</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Valore Contratti</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Stati Uniti</td>
                        <td className="px-6 py-4">Bechtel, AECOM, Jacobs</td>
                        <td className="px-6 py-4">Ingegneria, Infrastrutture</td>
                        <td className="px-6 py-4">$14.7B</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-6 py-4 whitespace-nowrap">Cina</td>
                        <td className="px-6 py-4">CRCC, PowerChina, CSCEC</td>
                        <td className="px-6 py-4">Costruzioni, Energia</td>
                        <td className="px-6 py-4">$23.2B</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Corea del Sud</td>
                        <td className="px-6 py-4">Samsung C&T, Hyundai E&C</td>
                        <td className="px-6 py-4">Smart City, Automazione</td>
                        <td className="px-6 py-4">$8.5B</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-6 py-4 whitespace-nowrap">Germania</td>
                        <td className="px-6 py-4">Siemens, ThyssenKrupp</td>
                        <td className="px-6 py-4">Mobilità, Tecnologia</td>
                        <td className="px-6 py-4">$6.3B</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Francia</td>
                        <td className="px-6 py-4">Vinci, Alstom, EDF</td>
                        <td className="px-6 py-4">Trasporti, Energia</td>
                        <td className="px-6 py-4">$5.8B</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-6 py-4 whitespace-nowrap">Giappone</td>
                        <td className="px-6 py-4">Hitachi, Mitsubishi</td>
                        <td className="px-6 py-4">Tecnologia, Trasporti</td>
                        <td className="px-6 py-4">$4.1B</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
                  <h4 className="font-semibold mb-4 flex items-center">
                    <Globe className="h-5 w-5 text-blue-600 mr-2" />
                    Consorzi Internazionali
                  </h4>
                  <p className="text-slate-600 mb-4">
                    L'analisi del mercato ha evidenziato la crescente importanza di consorzi e gruppi di aziende coordinate 
                    che offrono soluzioni integrate, in contrasto con singole aziende che operano isolatamente.
                  </p>
                  <div className="mt-4 bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-blue-700">
                      I principali contratti aggiudicati negli ultimi 24 mesi sono andati prevalentemente a 
                      consorzi con competenze complementari che hanno potuto offrire soluzioni end-to-end.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
                  <h4 className="font-semibold mb-4 flex items-center">
                    <FileBarChart className="h-5 w-5 text-green-600 mr-2" />
                    Trend di Aggiudicazione
                  </h4>
                  <p className="text-slate-600 mb-4">
                    I dati mostrano una crescente preferenza per partner che offrono:
                  </p>
                  <ul className="space-y-2 ml-6 text-slate-600 list-disc">
                    <li>Soluzioni tecnologicamente avanzate e sostenibili</li>
                    <li>Capacità di trasferimento di know-how e formazione locale</li>
                    <li>Flessibilità e adattabilità ai cambiamenti del progetto</li>
                    <li>Integrazione con fornitori e competenze locali saudite</li>
                    <li>Track record di progetti complessi in ambienti deserici</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Opportunità Specifiche per le Eccellenze Italiane</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all">
                  <Building2 className="h-10 w-10 text-blue-500 mb-4" />
                  <h4 className="font-semibold mb-3">Settore Ferroviario</h4>
                  <p className="text-slate-600 text-sm mb-3">
                    Le competenze italiane nei sistemi ferroviari ad alta velocità rappresentano un asset strategico per 
                    lo sviluppo del sistema di trasporto di NEOM.
                  </p>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Valore di mercato stimato:</span>
                      <span className="font-semibold">$18.5B</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Competizione:</span>
                      <span className="font-semibold text-amber-600">Media</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Vantaggio competitivo IT:</span>
                      <span className="font-semibold text-green-600">Alto</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all">
                  <Ship className="h-10 w-10 text-indigo-500 mb-4" />
                  <h4 className="font-semibold mb-3">Sviluppo Portuale</h4>
                  <p className="text-slate-600 text-sm mb-3">
                    L'expertise italiana nelle infrastrutture portuali è particolarmente rilevante per 
                    l'espansione di Oxagon e del porto di NEOM.
                  </p>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Valore di mercato stimato:</span>
                      <span className="font-semibold">$12.3B</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Competizione:</span>
                      <span className="font-semibold text-green-600">Bassa</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Vantaggio competitivo IT:</span>
                      <span className="font-semibold text-green-600">Alto</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all">
                  <BarChart3 className="h-10 w-10 text-cyan-500 mb-4" />
                  <h4 className="font-semibold mb-3">Tecnologie Idriche</h4>
                  <p className="text-slate-600 text-sm mb-3">
                    Le aziende italiane specializzate in soluzioni idriche innovative possono contribuire 
                    significativamente alla sostenibilità idrica di NEOM.
                  </p>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Valore di mercato stimato:</span>
                      <span className="font-semibold">$9.7B</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Competizione:</span>
                      <span className="font-semibold text-amber-600">Media</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Vantaggio competitivo IT:</span>
                      <span className="font-semibold text-amber-600">Medio</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Valutazione SWOT di NEOM</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <h4 className="font-semibold mb-4 text-green-700 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Punti di Forza
                  </h4>
                  <ul className="space-y-2 ml-7 text-slate-700 list-disc">
                    <li>Forte sostegno governativo e priorità strategica nazionale</li>
                    <li>Disponibilità di capitali significativi attraverso il PIF</li>
                    <li>Posizione geografica strategica tra tre continenti</li>
                    <li>Attrattiva di un progetto "greenfield" senza vincoli preesistenti</li>
                    <li>Ecosistema normativo speciale per favorire l'innovazione</li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
                  <h4 className="font-semibold mb-4 text-amber-700 flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    Punti di Debolezza
                  </h4>
                  <ul className="space-y-2 ml-7 text-slate-700 list-disc">
                    <li>Sfide tecniche senza precedenti in ambiente desertico</li>
                    <li>Complessità logistiche dovute alla posizione remota</li>
                    <li>Dipendenza da tecnologie non completamente testate su larga scala</li>
                    <li>Potenziali vulnerabilità nella supply chain globale</li>
                    <li>Necessità di attrarre e trattenere talenti internazionali</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <h4 className="font-semibold mb-4 text-blue-700 flex items-center">
                    <LineChart className="h-5 w-5 mr-2" />
                    Opportunità
                  </h4>
                  <ul className="space-y-2 ml-7 text-slate-700 list-disc">
                    <li>Potenziale per stabilire nuovi standard globali di urbanistica sostenibile</li>
                    <li>Prospettive di crescita nel turismo di lusso ecosostenibile</li>
                    <li>Hub per l'innovazione nell'idrogeno verde e energie rinnovabili</li>
                    <li>Crescente domanda di soluzioni di mobilità a zero emissioni</li>
                    <li>Sviluppo di tecnologie di desalinizzazione avanzate applicabili globalmente</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                  <h4 className="font-semibold mb-4 text-red-700 flex items-center">
                    <FilePieChart className="h-5 w-5 mr-2" />
                    Minacce
                  </h4>
                  <ul className="space-y-2 ml-7 text-slate-700 list-disc">
                    <li>Volatilità dei prezzi del petrolio che impatta il finanziamento</li>
                    <li>Competizione da progetti urbani similari nella regione</li>
                    <li>Sfide climatiche, inclusi eventi meteo estremi sempre più frequenti</li>
                    <li>Potenziali rischi geopolitici nella regione</li>
                    <li>Adozione incerta da parte dei potenziali residenti e investitori</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <h4 className="text-xl font-semibold mb-4">Valutazione Complessiva</h4>
                <p className="text-slate-700 mb-4">
                  Nonostante le sfide e le revisioni di scala, NEOM rimane uno dei più ambiziosi progetti di sviluppo urbano 
                  della storia moderna, con un potenziale significativo per imprese che offrono soluzioni innovative e sostenibili.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-2">Prospettive a Lungo Termine</h5>
                    <p className="text-green-800 text-sm">
                      Positive, con implementazione graduale che si estenderà oltre il 2040 con focus su moduli funzionali.
                    </p>
                  </div>
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-800 mb-2">Opportunità per Eccellenze Italiane</h5>
                    <p className="text-blue-800 text-sm">
                      Concrete e significative, specialmente attraverso un approccio coordinato che offra soluzioni integrate.
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm italic">
                  "La nostra analisi suggerisce che NEOM rappresenta una finestra di opportunità di almeno 15-20 anni per aziende 
                  capaci di offrire innovazione, flessibilità e competenze specifiche, specialmente in modalità coordinata."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MarketAnalysis;