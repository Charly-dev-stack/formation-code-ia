import React from 'react';
import { Code, Brain, Database, Lock } from 'lucide-react';

const MentorSection: React.FC = () => {
  return (
    <section id="apropos" className="py-20 bg-[#0f172a]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Votre Mentor Expert
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Full-Stack Development */}
          <div className="bg-[#1e293b] rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 border border-blue-500/10">
            <div className="text-blue-400 mb-6">
              <Code size={48} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Développement Full-Stack
            </h3>
            <p className="text-gray-400">
              15 ans d'expérience en développement web moderne
            </p>
          </div>

          {/* AI Expert */}
          <div className="bg-[#1e293b] rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 border border-blue-500/10">
            <div className="text-blue-400 mb-6">
              <Brain size={48} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Expert en IA
            </h3>
            <p className="text-gray-400">
              Maîtrise des derniers outils d'IA pour le développement
            </p>
          </div>

          {/* Cloud Architecture */}
          <div className="bg-[#1e293b] rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 border border-blue-500/10">
            <div className="text-blue-400 mb-6">
              <Database size={48} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Architecture Cloud
            </h3>
            <p className="text-gray-400">
              Conception de solutions cloud évolutives
            </p>
          </div>

          {/* Cybersecurity */}
          <div className="bg-[#1e293b] rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 border border-blue-500/10">
            <div className="text-blue-400 mb-6">
              <Lock size={48} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Cybersécurité
            </h3>
            <p className="text-gray-400">
              Expertise en sécurisation des applications web
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;