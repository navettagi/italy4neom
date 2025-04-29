import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Contatti</h1>
          
          <h2 className="text-2xl font-semibold mb-6">Unisciti all'Italian NEOM Network</h2>
          <p className="text-slate-600 mb-8">
            Sei interessato a esplorare le opportunità offerte dal progetto NEOM in Arabia Saudita? 
            L'Italian NEOM Network è aperto a nuove aziende italiane con competenze rilevanti per il megaprogetto.
          </p>

          <h2 className="text-2xl font-semibold mb-6">Chi Stiamo Cercando</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Settori di Interesse:</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Infrastrutture ferroviarie</li>
                <li>Sviluppo portuale</li>
                <li>Tecnologie idriche</li>
                <li>Energia rinnovabile</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Altri Settori:</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Costruzioni sostenibili</li>
                <li>Design e architettura</li>
                <li>Tecnologie smart city</li>
                <li>Mobilità sostenibile</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl mb-12">
            <h2 className="text-2xl font-semibold mb-6">Requisiti di Partecipazione</h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <span className="h-2 w-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                Comprovata esperienza nel settore di competenza
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                Attitudine all'innovazione e alla sostenibilità
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                Disponibilità a partecipare ad attività collaborative
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                Interesse per il mercato internazionale
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-center mb-4">
                <Mail className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="font-semibold">Email</h3>
              </div>
              <p className="text-slate-600">info@italian-neom-network.it</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-center mb-4">
                <Phone className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="font-semibold">Telefono</h3>
              </div>
              <p className="text-slate-600">+39 02 1234567</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="font-semibold">Indirizzo Italia</h3>
              </div>
              <p className="text-slate-600">
                Italian NEOM Network<br />
                Via dell'Innovazione, 42<br />
                20121 Milano<br />
                Italia
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="font-semibold">Ufficio di Rappresentanza</h3>
              </div>
              <p className="text-slate-600">
                Italian NEOM Network<br />
                King Fahd Road, Business District<br />
                Riyadh<br />
                Arabia Saudita
              </p>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-6">Richiedi Informazioni</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Nome e Cognome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Azienda
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Messaggio
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                Invia Richiesta
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;