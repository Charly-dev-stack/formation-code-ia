import React, { useState } from 'react';
import { Check, AlertCircle } from 'lucide-react';

const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingData = [
    {
      title: "Standard",
      monthlyPrice: 149,
      annualPrice: 1490,
      description: "Pour ceux qui veulent débuter leur parcours dans le développement web avec l'IA",
      features: [
        "Accès à tous les modules de formation",
        "Exercices pratiques et projets",
        "Accès aux outils d'IA pour le développement",
        "Support par email",
        "Accès à la communauté d'apprenants"
      ],
      limits: [
        "Support limité (réponse sous 48h)",
        "Pas de sessions individuelles",
        "Pas de certification premium"
      ],
      cta: "Commencer",
      popular: false
    },
    {
      title: "Intermédiaire",
      monthlyPrice: 249,
      annualPrice: 2490,
      description: "Pour les développeurs déterminés qui veulent avancer rapidement",
      features: [
        "Tout ce qui est inclus dans Standard",
        "2 sessions individuelles par mois",
        "Support prioritaire (réponse sous 24h)",
        "Retours détaillés sur vos projets",
        "Accès aux modules avancés",
        "Certification officielle",
        "Invitation aux webinaires exclusifs"
      ],
      limits: [],
      cta: "S'inscrire",
      popular: true
    },
    {
      title: "Premium",
      monthlyPrice: 399,
      annualPrice: 3990,
      description: "Pour ceux qui visent l'excellence et veulent maximiser leurs chances de réussite",
      features: [
        "Tout ce qui est inclus dans Intermédiaire",
        "Sessions individuelles hebdomadaires",
        "Support VIP (réponse sous 4h)",
        "Accès à vie aux mises à jour du contenu",
        "Mentorat personnalisé",
        "Assistance à la recherche d'emploi",
        "Certification Premium reconnue",
        "Projet final avec entreprises partenaires"
      ],
      limits: [],
      cta: "Débloquer Premium",
      popular: false
    }
  ];

  return (
    <section id="formules" className="py-20 bg-gradient-to-b from-[#1e293b] to-[#0f172a]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Nos Formules
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Choisissez la formule qui correspond le mieux à vos objectifs et à votre budget. Tous les plans incluent l'accès à notre plateforme d'apprentissage innovante.
        </p>

        {/* Toggle */}
        <div className="flex justify-center items-center mb-12">
          <span className={`text-sm ${!isAnnual ? 'text-white font-medium' : 'text-gray-400'}`}>Mensuel</span>
          <button 
            className="mx-4 relative inline-flex h-6 w-12 items-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
            onClick={() => setIsAnnual(!isAnnual)}
          >
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${isAnnual ? 'translate-x-7' : 'translate-x-1'}`} />
          </button>
          <span className={`text-sm ${isAnnual ? 'text-white font-medium' : 'text-gray-400'}`}>Annuel <span className="text-green-400 text-xs ml-1">-16%</span></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingData.map((plan, index) => (
            <div 
              key={index} 
              className={`
                relative bg-[#1e293b] rounded-xl overflow-hidden transition-all duration-300 
                ${plan.popular ? 'border-2 border-blue-500 shadow-lg shadow-blue-500/20 transform md:-translate-y-4' : 'border border-blue-500/20'}
              `}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Populaire
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
                <p className="text-gray-400 mb-6 h-12">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{isAnnual ? plan.annualPrice : plan.monthlyPrice}€</span>
                  <span className="text-gray-400 ml-2">{isAnnual ? '/an' : '/mois'}</span>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Ce qui est inclus :</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="text-green-400 h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.limits.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">Limitations :</h4>
                      <ul className="space-y-3">
                        {plan.limits.map((limit, i) => (
                          <li key={i} className="flex items-start">
                            <AlertCircle className="text-yellow-400 h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-400 text-sm">{limit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <a 
                  href="#inscription" 
                  className={`
                    block w-full py-3 px-6 rounded-lg font-medium text-center transition-all duration-300
                    ${plan.popular ? 
                      'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white' : 
                      'bg-white/10 hover:bg-white/20 text-white'}
                  `}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 max-w-2xl mx-auto">
            Des questions sur nos formules ? <a href="#contact" className="text-blue-400 hover:text-blue-300 underline">Contactez-nous</a> pour obtenir plus d'informations ou demander un plan personnalisé.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;