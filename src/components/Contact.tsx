import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckSquare, Users, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    sector: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Grazie per la tua richiesta! Ti contatteremo presto.');
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      sector: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-cover bg-center bg-fixed" style={{ 
      backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.95)), url("/images/istockphoto-1405859433-612x612.jpg")'
    }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">Contatti</h1>
          
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold mb-4">Unisciti all'Italian NEOM Network</h2>
            <p className="text-slate-600 text-lg">
              Sei interessato a esplorare le opportunità offerte dal progetto NEOM in Arabia Saudita? 
              L'Italian NEOM Network è aperto a nuove aziende italiane con competenze rilevanti per il megaprogetto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-all">
              <h3 className="font-semibold text-xl mb-5 flex items-center text-green-700">
                <Users className="h-6 w-6 mr-2" />
                Chi Stiamo Cercando
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Settori Principali:</h4>
                  <ul className="list-disc list-inside space-y-2 text-slate-600">
                    <li>Infrastrutture ferroviarie</li>
                    <li>Sviluppo portuale</li>
                    <li>Tecnologie idriche</li>
                    <li>Energia rinnovabile</li>
                    <li>Costruzioni sostenibili</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Altri Settori:</h4>
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

            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-all">
              <h3 className="font-semibold text-xl mb-5 flex items-center text-green-700">
                <CheckSquare className="h-6 w-6 mr-2" />
                Requisiti di Partecipazione
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <span className="h-2 w-2 mt-2 mr-2 bg-green-500 rounded-full"></span>
                  <span>Comprovata esperienza nel settore di competenza</span>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 mt-2 mr-2 bg-green-500 rounded-full"></span>
                  <span>Attitudine all'innovazione e alla sostenibilità</span>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 mt-2 mr-2 bg-green-500 rounded-full"></span>
                  <span>Disponibilità a partecipare ad attività collaborative</span>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 mt-2 mr-2 bg-green-500 rounded-full"></span>
                  <span>Interesse per il mercato internazionale</span>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 mt-2 mr-2 bg-green-500 rounded-full"></span>
                  <span>Volontà di aderire ai principi etici e qualitativi del consorzio</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-100 to-blue-50 p-8 rounded-2xl shadow-md mb-12">
            <h3 className="font-semibold text-xl mb-5 flex items-center text-blue-700">
              <Clock className="h-6 w-6 mr-2" />
              Come Partecipare
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Fase 1: Primo Contatto</h4>
                  <p className="text-sm text-slate-600">
                    Compila il modulo di manifestazione di interesse o contattaci direttamente per un colloquio informale.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Fase 2: Colloquio Informativo</h4>
                  <p className="text-sm text-slate-600">
                    Organizzeremo una sessione per presentarti il modello nel dettaglio e rispondere alle tue domande.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Fase 3: Incontri con il Gruppo</h4>
                  <p className="text-sm text-slate-600">
                    Sarai invitato a partecipare al gruppo di discussione e agli incontri virtuali per conoscere gli altri membri.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Fase 4: Adesione Formale</h4>
                  <p className="text-sm text-slate-600">
                    Se interessato, potrai aderire formalmente al memorandum di intesa non vincolante.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center mb-4">
                <Mail className="h-5 w-5 text-green-500 mr-2" />
                <h3 className="font-semibold">Email</h3>
              </div>
              <p className="text-slate-600">info@italian-neom-network.it</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center mb-4">
                <Phone className="h-5 w-5 text-green-500 mr-2" />
                <h3 className="font-semibold">Telefono</h3>
              </div>
              <p className="text-slate-600">+39 02 1234567</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center mb-4">
                <Globe className="h-5 w-5 text-green-500 mr-2" />
                <h3 className="font-semibold">Web</h3>
              </div>
              <p className="text-slate-600">www.italian-neom-network.it</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-green-500 mr-2" />
                <h3 className="font-semibold">Indirizzo Italia</h3>
              </div>
              <p className="text-slate-600">
                Italian NEOM Network<br />
                Via dell'Innovazione, 42<br />
                20121 Milano<br />
                Italia
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-green-500 mr-2" />
                <h3 className="font-semibold">Ufficio di Rappresentanza (Fase 2)</h3>
              </div>
              <p className="text-slate-600">
                Italian NEOM Network<br />
                King Fahd Road, Business District<br />
                Riyadh<br />
                Arabia Saudita
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Richiedi Informazioni</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
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
              </div>
              <div className="grid md:grid-cols-2 gap-6">
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
                  <option value="ferrovie">Infrastrutture ferroviarie</option>
                  <option value="porti">Sviluppo portuale</option>
                  <option value="acqua">Tecnologie idriche</option>
                  <option value="energia">Energia rinnovabile</option>
                  <option value="costruzioni">Costruzioni sostenibili</option>
                  <option value="design">Design e architettura</option>
                  <option value="smartcity">Tecnologie smart city</option>
                  <option value="mobilita">Mobilità sostenibile</option>
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
                  placeholder="Descrivici brevemente la tua azienda e il tuo interesse..."
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-green-700 text-white rounded-full hover:bg-green-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  Invia Richiesta
                </button>
              </div>
            </form>
          </div>
          
          <div className="text-center text-slate-500 text-sm">
            <p>I dati forniti saranno trattati nel rispetto della normativa sulla privacy (GDPR)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;