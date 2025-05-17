import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Thomas Dubois",
    role: "Ancien étudiant, maintenant Développeur Frontend",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    content: "La formation a complètement changé ma vie. En 6 mois, je suis passé de débutant à développeur employable. L'approche avec l'IA m'a permis d'apprendre beaucoup plus rapidement que prévu.",
    rating: 5,
    company: "TechInnovate"
  },
  {
    id: 2,
    name: "Sophie Martin",
    role: "Reconversion professionnelle réussie",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    content: "J'étais comptable depuis 8 ans et j'ai décidé de me reconvertir dans le développement web. Grâce à cette formation, j'ai pu décrocher mon premier emploi de développeuse en seulement 7 mois !",
    rating: 5,
    company: "DataSphere"
  },
  {
    id: 3,
    name: "Alexandre Petit",
    role: "Étudiant récent, Développeur Full-Stack",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
    content: "Ce qui m'a le plus impressionné, c'est l'accompagnement personnalisé et la façon dont les projets sont construits pour enrichir mon portfolio. Les recruteurs ont été impressionnés par mon travail.",
    rating: 4,
    company: "WebGenius"
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`} 
        />
      ))}
    </div>
  );
};

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0f172a]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Ce que disent nos étudiants
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Découvrez les témoignages de nos anciens étudiants qui ont transformé leur carrière grâce à notre formation
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-[#1e293b] rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 border border-blue-500/10"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h3 className="font-medium text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <StarRating rating={testimonial.rating} />
              <blockquote className="mt-4 text-gray-300 italic">
                "{testimonial.content}"
              </blockquote>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-sm text-blue-400">Travaille maintenant chez {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;