import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckSquare, Users, Globe, Clock, Calendar, FileText } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    position: '',
    email: '',
    phone: '',
    sector: '',
    message: '',
    privacy: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacy) {
      alert('Per favore accetta la privacy policy per continuare');
      return;
    }
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Grazie per la tua richiesta! Ti contatteremo presto.');
    setFormData({
      name: '',
      company: '',
      position: '',
      email: '',
      phone: '',
      sector: '',
      message: '',
      privacy: false
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  return (
    <main className="pt-24">
      <section className="bg-cover bg-center py-20 text-white relative" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url("https://th.bing.com/th/id/R.a6a1ebff7839e38ae0c05a4fa33b7d8c?rik=6Yv42YeRyYAWQA&riu=http%3a%2f%2fwww.gbnews.ch%2fwp-content%2fuploads%2f2017%2f12%2fNeom.jpg&ehk=5g%2fP0ETwbcuopeO5WZjZ2bgJyYwsxWXB3XxEe92yFjw%3d&risl=&pid=ImgRaw&r=0")',
        backgroundAttachment: 'fixed'
      }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contattaci</h1>
            <p className="text-xl md:text-2xl mb-8">
              Entra a far parte di un'iniziativa unica che valorizza l'eccellenza italiana in uno dei progetti più ambiziosi al mondo
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 mb-16">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-8">Parliamo della tua azienda</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Siamo alla ricerca di aziende italiane d'eccellenza interessate a esplorare le opportunità 
                  offerte dal progetto NEOM. Siamo qui per rispondere alle tue domande e discutere come la 
                  tua azienda può beneficiare della nostra iniziativa.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-green-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-slate-600">info@italiaperneom.it</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-green-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Telefono</h3>
                      <p className="text-slate-600">+39 02 1234567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-green-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Sede Principale</h3>
                      <p className="text-slate-600">
                        Italia per NEOM<br />
                        Via dell'Innovazione, 42<br />
                        20121 Milano<br />
                        Italia
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-100 p-6 rounded-xl mb-6">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                    Webinar Informativi
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Organizziamo regolarmente webinar gratuiti per presentare le opportunità di NEOM 
                    e rispondere alle domande delle aziende interessate.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Prossimo webinar:</span>
                      <span className="font-semibold">15 Maggio 2025, 14:30</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tema:</span>
                      <span className="font-semibold">Opportunità nel settore delle infrastrutture</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-semibold">Registrati al prossimo webinar →</a>
                  </div>
                </div>

                <div className="bg-slate-100 p-6 rounded-xl">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <FileText className="h-5 w-5 text-blue-600 mr-2" />
                    Materiali Informativi
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                        <span className="mr-2">•</span>
                        Brochure Italia per NEOM (PDF, 3.5 MB)
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                        <span className="mr-2">•</span>
                        Presentazione del modello di partecipazione (PDF, 2.1 MB)
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                        <span className="mr-2">•</span>
                        FAQ per le aziende interessate (PDF, 1.8 MB)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <h2 className="text-2xl font-semibold mb-6">Richiedi Informazioni</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Nome e Cognome <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                        Azienda <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="position" className="block text-sm font-medium text-slate-700 mb-2">
                        Ruolo in azienda
                      </label>
                      <input
                        type="text"
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Telefono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="sector" className="block text-sm font-medium text-slate-700 mb-2">
                      Settore di Interesse <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="sector"
                      name="sector"
                      value={formData.sector}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      required
                    >
                      <option value="">Seleziona un settore</option>
                      <option value="ferroviario">Infrastrutture ferroviarie</option>
                      <option value="portuale">Sviluppo portuale</option>
                      <option value="idrico">Tecnologie idriche</option>
                      <option value="energia">Energia rinnovabile</option>
                      <option value="costruzioni">Costruzioni sostenibili</option>
                      <option value="design">Design e architettura</option>
                      <option value="smartcity">Tecnologie smart city</option>
                      <option value="mobilita">Mobilità sostenibile</option>
                      <option value="rifiuti">Trattamento rifiuti</option>
                      <option value="altro">Altro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Messaggio <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      required
                      placeholder="Descrivici brevemente la tua azienda e il tuo interesse per il progetto NEOM..."
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="privacy"
                        name="privacy"
                        type="checkbox"
                        checked={formData.privacy}
                        onChange={handleChange}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="privacy" className="text-slate-600">
                        Acconsento al trattamento dei miei dati personali in conformità con la 
                        <a href="#" className="text-blue-600 hover:text-blue-800"> Privacy Policy</a>.
                        <span className="text-red-500"> *</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-md hover:shadow-lg"
                  >
                    Invia Richiesta
                  </button>
                </form>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-8 text-center">Chi Stiamo Cercando</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all">
                  <h3 className="font-semibold text-xl mb-5 flex items-center text-green-700">
                    <Users className="h-6 w-6 mr-2" />
                    Settori di Particolare Interesse
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Infrastrutture:</h4>
                      <ul className="list-disc list-inside space-y-2 text-slate-600">
                        <li>Infrastrutture ferroviarie</li>
                        <li>Sviluppo portuale</li>
                        <li>Tecnologie idriche</li>
                        <li>Energia rinnovabile</li>
                        <li>Costruzioni sostenibili</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Specializzazioni:</h4>
                      <ul className="list-disc list-inside space-y-2 text-slate-600">
                        <li>Design e architettura</li>
                        <li>Tecnologie smart city</li>
                        <li>Mobilità sostenibile</li>
                        <li>Trattamento rifiuti</li>
                        <li>Sicurezza e automazione</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all">
                  <h3 className="font-semibold text-xl mb-5 flex items-center text-blue-700">
                    <CheckSquare className="h-6 w-6 mr-2" />
                    Requisiti e Profilo Ideale
                  </h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start">
                      <span className="h-2 w-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                      <span>Aziende italiane con comprovata esperienza nel proprio settore</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                      <span>Orientamento all'innovazione e alla sostenibilità</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                      <span>Attitudine alla collaborazione e al lavoro in rete</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                      <span>Apertura ai mercati internazionali</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                      <span>Dimostrata qualità e affidabilità delle soluzioni offerte</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                      <span>Volontà di valorizzare il "Made in Italy" come asset strategico</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-8 text-center">Processo di Partecipazione</h2>
              
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-12 h-[calc(100%-4rem)] w-0.5 bg-slate-200 -translate-x-1/2"></div>
                
                <div className="space-y-16">
                  <div className="md:flex items-start relative">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 md:text-right relative">
                      <div className="hidden md:block absolute top-0 right-0 h-6 w-6 bg-green-600 rounded-full -translate-y-1/3 translate-x-1/2 z-10"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-green-700 mb-2 flex md:justify-end items-center">
                          <Clock className="md:order-2 h-5 w-5 md:ml-2 mr-2 md:mr-0" />
                          Fase 1: Primo Contatto
                        </h3>
                        <p className="text-slate-600">
                          Compila il nostro modulo di contatto o contattaci direttamente per esprimere il tuo interesse 
                          e ricevere maggiori informazioni sul nostro sistema di aggregazione.
                        </p>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                      <img 
                        src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                        alt="Business Meeting" 
                        className="rounded-lg shadow-md h-48 w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="md:flex items-start relative">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 md:text-right order-2 md:order-2 relative">
                      <img 
                        src="https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                        alt="Information Session" 
                        className="rounded-lg shadow-md h-48 w-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 md:pl-12 order-1 md:order-1 relative">
                      <div className="hidden md:block absolute top-0 left-0 h-6 w-6 bg-blue-600 rounded-full -translate-y-1/3 -translate-x-1/2 z-10"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-blue-700 mb-2 flex items-center">
                          <Clock className="h-5 w-5 mr-2" />
                          Fase 2: Colloquio Informativo
                        </h3>
                        <p className="text-slate-600">
                          Organizziamo una sessione dedicata per presentarti il modello nel dettaglio, 
                          rispondere alle tue domande e valutare insieme le potenziali sinergie.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="md:flex items-start relative">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 md:text-right relative">
                      <div className="hidden md:block absolute top-0 right-0 h-6 w-6 bg-purple-600 rounded-full -translate-y-1/3 translate-x-1/2 z-10"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-purple-700 mb-2 flex md:justify-end items-center">
                          <Users className="md:order-2 h-5 w-5 md:ml-2 mr-2 md:mr-0" />
                          Fase 3: Incontri con il Gruppo
                        </h3>
                        <p className="text-slate-600">
                          Sarai invitato a partecipare a incontri con altre aziende già 
                          coinvolte nell'iniziativa per conoscere il gruppo e condividere esperienze.
                        </p>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                      <img 
                        src="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                        alt="Group Meeting" 
                        className="rounded-lg shadow-md h-48 w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="md:flex items-start relative">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 md:text-right order-2 md:order-2 relative">
                      <img 
                        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                        alt="Contract Signing" 
                        className="rounded-lg shadow-md h-48 w-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 md:pl-12 order-1 md:order-1 relative">
                      <div className="hidden md:block absolute top-0 left-0 h-6 w-6 bg-amber-600 rounded-full -translate-y-1/3 -translate-x-1/2 z-10"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-amber-700 mb-2 flex items-center">
                          <FileText className="h-5 w-5 mr-2" />
                          Fase 4: Adesione Formale
                        </h3>
                        <p className="text-slate-600">
                          Se interessato, potrai aderire formalmente all'iniziativa attraverso un memorandum 
                          di intesa non vincolante, definendo il tuo livello di coinvolgimento.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center border-t border-slate-200 pt-8">
              <p className="text-slate-600 mb-6">
                Per qualsiasi ulteriore informazione o chiarimento, non esitare a contattarci.
                Siamo a tua disposizione per aiutarti a valutare questa opportunità in modo 
                dettagliato e personalizzato.
              </p>
              <div className="space-x-4">
                <a href="mailto:info@italiaperneom.it" className="text-blue-600 hover:underline">
                  info@italiaperneom.it
                </a>
                <span className="text-slate-400">|</span>
                <a href="tel:+390212345678" className="text-blue-600 hover:underline">
                  +39 02 1234567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;