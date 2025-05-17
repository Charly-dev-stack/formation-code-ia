import React from 'react';
import { Globe, Cpu, Code, Cloud } from 'lucide-react';

const CurriculumSection: React.FC = () => {
  return (
    <section id="programme" className="py-20 bg-[#1e293b]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Votre Parcours vers le Succès
        </h2>

        <div className="space-y-8">
          {/* Module 1 */}
          <div className="bg-[#0f172a] rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 border border-blue-500/10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="bg-blue-500/10 p-4 rounded-lg">
              <Globe className="text-blue-400 h-10 w-10" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">
                Fondamentaux du Développement Web
              </h3>
              <p className="text-gray-400">
                Maîtrisez HTML5, CSS3, JavaScript moderne et les outils essentiels du développeur
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <span className="bg-blue-500/20 text-blue-300 text-sm px-3 py-1 rounded-full">4 semaines</span>
            </div>
          </div>

          {/* Module 2 */}
          <div className="bg-[#0f172a] rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 border border-blue-500/10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="bg-blue-500/10 p-4 rounded-lg">
              <Cpu className="text-blue-400 h-10 w-10" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">
                Intelligence Artificielle pour le Développement
              </h3>
              <p className="text-gray-400">
                Apprenez à utiliser ChatGPT, Copilot et d'autres IA pour accélérer votre développement
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <span className="bg-blue-500/20 text-blue-300 text-sm px-3 py-1 rounded-full">6 semaines</span>
            </div>
          </div>

          {/* Module 3 */}
          <div className="bg-[#0f172a] rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 border border-blue-500/10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="bg-blue-500/10 p-4 rounded-lg">
              <Code className="text-blue-400 h-10 w-10" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">
                Cadres Modernes
              </h3>
              <p className="text-gray-400">
                Plongez dans React, Node.js et les frameworks les plus demandés sur le marché
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <span className="bg-blue-500/20 text-blue-300 text-sm px-3 py-1 rounded-full">8 semaines</span>
            </div>
          </div>

          {/* Module 4 */}
          <div className="bg-[#0f172a] rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 border border-blue-500/10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="bg-blue-500/10 p-4 rounded-lg">
              <Cloud className="text-blue-400 h-10 w-10" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">
                Architecture Cloud
              </h3>
              <p className="text-gray-400">
                Déployez vos applications sur le cloud et maîtrisez les services modernes
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <span className="bg-blue-500/20 text-blue-300 text-sm px-3 py-1 rounded-full">6 semaines</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;