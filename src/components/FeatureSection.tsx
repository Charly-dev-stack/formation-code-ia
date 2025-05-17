import React from 'react';
import { Brain, Clock, Trophy } from 'lucide-react';

const FeatureSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Une Formation Révolutionnaire
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* AI as Personal Assistant */}
          <div className="bg-[#1e293b]/70 backdrop-blur-sm rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 border border-blue-500/10">
            <div className="text-blue-400 mb-6">
              <Brain size={48} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              IA comme Assistant Personnel
            </h3>
            <p className="text-gray-400 mb-4">
              Apprenez à maîtriser ChatGPT, GitHub Copilot et plein d'autres outils d'IA pour coder facilement et plus efficacement.
            </p>
            <div className="flex items-center">
              <span className="text-yellow-400 text-2xl">★★★★★</span>
            </div>
          </div>

          {/* Accelerated Training */}
          <div className="bg-[#1e293b]/70 backdrop-blur-sm rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 border border-blue-500/10">
            <div className="text-blue-400 mb-6">
              <Clock size={48} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Formation Accélérée
            </h3>
            <p className="text-gray-400 mb-4">
              6 mois s'intensifie avec un accompagnement personnalisé pour une progression rapide et efficace.
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-blue-400 text-5xl font-bold">180</span>
              <span className="text-gray-400">jours pour devenir développeur</span>
            </div>
          </div>

          {/* Professional Projects */}
          <div className="bg-[#1e293b]/70 backdrop-blur-sm rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 border border-blue-500/10">
            <div className="text-blue-400 mb-6">
              <Trophy size={48} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Projets Professionnels
            </h3>
            <p className="text-gray-400 mb-4">
              Construisez un portfolio impressionnant avec des projets réels guidés par l'IA.
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-blue-400 text-5xl font-bold">10+</span>
              <span className="text-gray-400">projets concrets</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;