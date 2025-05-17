import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] opacity-95"></div>
        {/* Background pattern/animation */}
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center py-16">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Révolutionnez Votre Carrière avec l'IA
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Devenez un développeur web en 6 mois grâce à notre formation innovante combinant expertise humaine et intelligence artificielle
        </p>

        <a 
          href="#inscription" 
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-lg font-medium rounded-full shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20"
        >
          Commencez votre aventure 
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>

        <div className="mt-12 max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
          <div className="bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-500/20">
            <span className="font-medium text-blue-300">Formation sur 6 mois</span>
          </div>
          <div className="bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-500/20">
            <span className="font-medium text-purple-300">Accompagnement personnalisé</span>
          </div>
          <div className="bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-500/20">
            <span className="font-medium text-blue-300">Projets réels</span>
          </div>
          <div className="bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-500/20">
            <span className="font-medium text-purple-300">Expertise en IA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;