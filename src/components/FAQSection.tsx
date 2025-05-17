import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Aucun prérequis technique n'est nécessaire ?",
    answer: "Non, notre formation est conçue pour être accessible aux débutants complets. Nous commençons par les bases et progressons à un rythme adapté. La seule exigence est votre motivation et engagement à consacrer le temps nécessaire à l'apprentissage (environ 20-25 heures par semaine)."
  },
  {
    question: "Comment l'IA est-elle intégrée dans la formation ?",
    answer: "L'IA est à la fois un sujet d'étude et un outil d'apprentissage. Vous apprendrez à utiliser des outils comme GitHub Copilot et ChatGPT pour accélérer votre développement, générer du code, déboguer et automatiser des tâches répétitives. Cela vous permettra d'apprendre plus rapidement et de vous concentrer sur la compréhension des concepts plutôt que sur les détails techniques."
  },
  {
    question: "Quelles sont les perspectives d'emploi après la formation ?",
    answer: "Le marché du développement web reste très demandeur, avec un accent particulier sur les développeurs qui maîtrisent les outils d'IA. Nos diplômés trouvent généralement un emploi dans les 3 mois suivant la fin de la formation, avec des salaires de départ compétitifs. Notre réseau d'entreprises partenaires et notre accompagnement à la recherche d'emploi (dans la formule Premium) augmentent significativement vos chances."
  },
  {
    question: "Est-ce que je recevrai un certificat reconnu ?",
    answer: "Oui, vous recevrez un certificat officiel à la fin de la formation. Pour les formules Intermédiaire et Premium, nous proposons également une certification plus avancée qui est reconnue par nos entreprises partenaires. L'important reste toutefois le portfolio de projets que vous développerez pendant la formation, qui sera votre meilleur atout pour trouver un emploi."
  },
  {
    question: "Comment se déroule la formation au quotidien ?",
    answer: "La formation combine apprentissage autonome sur notre plateforme, sessions de groupe en direct, projets pratiques et, selon votre formule, des sessions individuelles avec votre mentor. Chaque semaine, de nouveaux modules sont débloqués avec des objectifs clairs. Notre méthodologie est basée sur la pratique : vous construirez plus de 10 projets réels qui formeront votre portfolio professionnel."
  },
  {
    question: "Est-il possible de suivre la formation tout en travaillant ?",
    answer: "Oui, notre programme est conçu pour être flexible. Bien que nous recommandions d'y consacrer environ 20-25 heures par semaine, vous pouvez organiser votre temps d'étude selon vos disponibilités. De nombreux étudiants suivent la formation tout en travaillant à temps partiel. Pour ceux qui ont des contraintes de temps plus importantes, nous recommandons d'étaler la formation sur une période plus longue."
  }
];

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 last:border-b-0">
      <button
        className="w-full flex justify-between items-center py-5 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-white">{question}</h3>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <Minus className="h-5 w-5 text-blue-400" />
          ) : (
            <Plus className="h-5 w-5 text-blue-400" />
          )}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-gray-400">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Questions Fréquentes
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Tout ce que vous devez savoir avant de vous lancer dans l'aventure
        </p>

        <div className="bg-[#1e293b] rounded-lg overflow-hidden shadow-lg shadow-blue-500/5 border border-blue-500/10">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-400 mb-4">
            Vous avez d'autres questions ?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;