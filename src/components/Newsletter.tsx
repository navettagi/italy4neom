import React, { useState } from 'react';
import { SendIcon, CheckCircle } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 right-10 w-40 h-40 bg-blue-400 rounded-full opacity-10 blur-2xl"></div>
            <div className="absolute bottom-10 left-10 w-60 h-60 bg-purple-400 rounded-full opacity-10 blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay in the loop</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter for the latest updates, product news, and exclusive offers.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-3 rounded-full text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center ${
                      isLoading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isLoading ? (
                      'Subscribing...'
                    ) : (
                      <>
                        Subscribe <SendIcon className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-slate-700 bg-opacity-50 rounded-lg p-6 max-w-lg mx-auto flex items-center justify-center">
                <CheckCircle className="text-green-400 mr-3 h-6 w-6" />
                <p className="text-white">Thanks for subscribing! Check your email for confirmation.</p>
              </div>
            )}

            <p className="text-slate-400 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;