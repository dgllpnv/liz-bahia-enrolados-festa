
import React from 'react';
import { Sparkles } from 'lucide-react';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="py-12 px-6 text-center relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Crown icon above the title */}
        <div className="mb-4">
          <Sparkles className="h-10 w-10 mx-auto text-rapunzel-gold filter drop-shadow-md animate-soft-pulse" />
        </div>
        
        {/* Main title with enhanced royal styling */}
        <h1 className="tangled-heading mb-3 text-rapunzel-purple-dark">
          Liz Bahia
        </h1>
        
        {/* Birthday tagline with enhanced age highlight */}
        <div className="relative">
          <p className="font-dancing text-3xl mb-6 text-rapunzel-purple-dark/80 royal-text-shimmer">
            Aniversário de <span className="relative inline-flex items-center justify-center">
              <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#FFDEE2] to-[#D946EF] opacity-75 blur-md animate-pulse"></span>
              <span className="relative text-4xl font-bold text-white px-3 py-1 rounded-full bg-[#D946EF] royal-number-shadow">3</span>
            </span> anos
          </p>
        </div>
        
        {/* Enhanced invitation text */}
        <div className="royal-card p-8 max-w-2xl mx-auto mb-8">
          <p className="font-cormorant text-xl text-rapunzel-purple-dark/90 mb-4 leading-relaxed">
            Sua presença iluminará o reino da nossa princesa Liz em uma celebração encantada inspirada no mundo mágico de Enrolados.
          </p>
          
          {/* Navigation links with royal styling */}
          <div className="flex flex-wrap justify-center gap-5 mt-6">
            <button 
              onClick={() => scrollToSection('details')}
              className="py-2 px-6 bg-rapunzel-purple-dark/90 text-white rounded-lg font-cinzel text-sm tracking-wide royal-button hover:bg-rapunzel-purple-dark/80 transition-all shadow-md"
            >
              Detalhes do Evento
            </button>
          </div>
        </div>
        
        {/* Decorative divider */}
        <div className="w-48 h-0.5 mx-auto bg-gradient-to-r from-transparent via-rapunzel-purple-dark/40 to-transparent"></div>
      </div>
    </header>
  );
};

export default Header;
