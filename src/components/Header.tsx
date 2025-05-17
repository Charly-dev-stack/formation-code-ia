import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0f172a]/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Formation·Dev·IA
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#apropos" className="text-blue-300 hover:text-white transition">À propos</a>
          <a href="#programme" className="text-blue-300 hover:text-white transition">Programme</a>
          <a href="#formules" className="text-blue-300 hover:text-white transition">Formules</a>
          <a href="#contact" className="text-blue-300 hover:text-white transition">Contact</a>
        </nav>

        {/* CTA Button */}
        <a 
          href="#inscription" 
          className="hidden md:block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          S'inscrire
        </a>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0f172a]/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#apropos" className="text-blue-300 hover:text-white transition py-2" onClick={() => setIsMenuOpen(false)}>À propos</a>
            <a href="#programme" className="text-blue-300 hover:text-white transition py-2" onClick={() => setIsMenuOpen(false)}>Programme</a>
            <a href="#formules" className="text-blue-300 hover:text-white transition py-2" onClick={() => setIsMenuOpen(false)}>Formules</a>
            <a href="#contact" className="text-blue-300 hover:text-white transition py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
            
            <a 
              href="#inscription" 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-2 px-6 rounded-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              S'inscrire
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;