import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Formation·Dev·IA</h3>
            <p className="text-gray-400 mb-6">
              Notre mission est de révolutionner l'apprentissage du développement web en intégrant les outils d'IA pour une formation plus rapide et efficace.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#apropos" className="text-gray-400 hover:text-blue-400 transition">À propos</a>
              </li>
              <li>
                <a href="#programme" className="text-gray-400 hover:text-blue-400 transition">Programme</a>
              </li>
              <li>
                <a href="#formules" className="text-gray-400 hover:text-blue-400 transition">Formules</a>
              </li>
              <li>
                <a href="#temoignages" className="text-gray-400 hover:text-blue-400 transition">Témoignages</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-blue-400 transition">FAQ</a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-blue-400 transition">Blog</a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Legal */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Informations</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">Mentions légales</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">Politique de confidentialité</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">Conditions d'utilisation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">Modalités de paiement</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">Droit de rétractation</a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div id="contact">
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-blue-400 h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Bénin</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-blue-400 h-5 w-5 mr-2 flex-shrink-0" />
                <a href="https://wa.me/+22990000000" className="text-gray-400 hover:text-blue-400 transition">WhatsApp</a>
              </li>
              <li className="flex items-center">
                <Mail className="text-blue-400 h-5 w-5 mr-2 flex-shrink-0" />
                <a href="mailto:charly54vdn@gmail.com" className="text-gray-400 hover:text-blue-400 transition">charly54vdn@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">© 2024 Formation Développeur Web + IA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;