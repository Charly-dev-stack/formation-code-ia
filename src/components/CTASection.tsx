import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

const CTASection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    formule: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        'service_wdomi3o',
        'template_rtpxgum',
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          formule: formData.formule,
          message: `Nouvelle inscription :
Nom : ${formData.name}
Email : ${formData.email}
Téléphone : ${formData.phone}
Formule : ${formData.formule}`
        },
        'BAerqtunWsmxD_aY_'
      );

      toast.success('Votre inscription a été enregistrée avec succès ! Nous vous contacterons très prochainement.');
      setFormData({ name: '', email: '', phone: '', formule: '' });
    } catch (error) {
      toast.error('Une erreur est survenue. Veuillez réessayer plus tard.');
    }
  };

  return (
    <section id="inscription" className="py-20 relative overflow-hidden">
      <Toaster position="top-center" />
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e1b4b]/90 to-[#0f172a]/95"></div>
        <img 
          src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Developer with laptop" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Prêt à Transformer Votre Avenir ?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Rejoignez notre programme innovant et entamez votre carrière de développeur web en seulement 6 mois. Places limitées !
          </p>

          <div className="bg-[#1e293b]/70 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20 shadow-xl shadow-blue-500/5 max-w-lg mx-auto">
            <h3 className="text-xl text-white font-bold mb-4">Inscrivez-vous maintenant</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Nom"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-[#0f172a] border border-blue-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 bg-[#0f172a] border border-blue-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
                required
              />
              <input
                type="tel"
                placeholder="Numéro WhatsApp"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 bg-[#0f172a] border border-blue-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
                required
              />
              <select 
                value={formData.formule}
                onChange={(e) => setFormData({...formData, formule: e.target.value})}
                className="w-full px-4 py-3 bg-[#0f172a] border border-blue-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                required
              >
                <option value="" disabled>Choisissez une formule</option>
                <option value="standard">Standard (149€/mois)</option>
                <option value="intermediaire">Intermédiaire (249€/mois)</option>
                <option value="premium">Premium (399€/mois)</option>
              </select>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 flex items-center justify-center"
              >
                S'inscrire
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>
            <p className="text-gray-400 text-sm mt-4">
              En vous inscrivant, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-gray-300">Satisfaction garantie ou remboursé sous 14 jours</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-gray-300">Paiement sécurisé</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-gray-300">Support 7j/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
