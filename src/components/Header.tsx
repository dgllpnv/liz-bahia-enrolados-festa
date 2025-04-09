
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
        {/* Subtle crown icon above the title */}
        <div className="mb-4">
          <Sparkles className="h-8 w-8 mx-auto text-rapunzel-gold/80 filter drop-shadow-sm" />
        </div>
        
        {/* Main title with more subtle styling */}
        <h1 className="font-cinzel mb-3 text-4xl md:text-5xl text-rapunzel-purple-dark/90">
          Liz Bahia
        </h1>
        
        {/* Birthday tagline with even more delicate age highlight */}
        <div className="relative">
          <p className="font-dancing text-2xl mb-6 text-rapunzel-purple-dark/70">
            Aniversário de <span className="relative inline-flex items-center justify-center">
              <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#FFDEE2]/30 to-[#D946EF]/20 opacity-50 blur-sm"></span>
              <span className="relative text-2xl font-medium text-rapunzel-purple-dark px-2 py-0.5 rounded-full bg-white/70 border border-[#FFDEE2]/40">3</span>
            </span> anos
          </p>
        </div>
        
        {/* More subtle invitation text */}
        <div className="bg-white/60 backdrop-blur-sm rounded-lg shadow-sm p-6 max-w-2xl mx-auto mb-8 border border-rapunzel-purple-dark/10">
          <p className="font-cormorant text-lg text-rapunzel-purple-dark/80 mb-4 leading-relaxed">
            Sua presença iluminará o reino da nossa princesa Liz em uma celebração encantada inspirada no mundo mágico de Enrolados.
          </p>
          
          {/* More subtle navigation link */}
          <div className="flex flex-wrap justify-center gap-5 mt-6">
            <button 
              onClick={() => scrollToSection('details')}
              className="py-2 px-6 bg-rapunzel-purple-dark/70 text-white/90 rounded-lg font-cinzel text-sm tracking-wide hover:bg-rapunzel-purple-dark/60 transition-all shadow-sm"
            >
              Detalhes do Evento
            </button>
          </div>
        </div>
        
        {/* Subtle divider */}
        <div className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-rapunzel-purple-dark/20 to-transparent"></div>
      </div>
    </header>
  );
};

export default Header;
