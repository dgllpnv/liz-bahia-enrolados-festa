
import React from 'react';
import { Crown } from 'lucide-react';

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
        {/* Royal crown icon above the title */}
        <div className="mb-4">
          <Crown className="h-8 w-8 mx-auto text-royal-gold filter drop-shadow-sm" />
        </div>
        
        {/* Main title with royal styling */}
        <h1 className="font-dancing mb-3 text-4xl md:text-5xl text-royal-gold royal-text-shimmer">
          Liz Bahia
        </h1>
        
        {/* Birthday tagline with delicate age highlight */}
        <div className="relative">
          <p className="font-cormorant text-2xl mb-6 text-rapunzel-purple-dark/80 italic">
            Aniversário de <span className="relative inline-flex items-center justify-center">
              <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#FFF8E1]/20 to-[#FFD700]/10 opacity-40 blur-sm"></span>
              <span className="relative text-2xl font-cormorant font-medium text-royal-gold px-2 py-0.5 rounded-full bg-white/50 border border-[#FFD700]/20">3</span>
            </span> anos
          </p>
        </div>
        
        {/* Elegant invitation text */}
        <div className="bg-white/60 backdrop-blur-sm rounded-lg shadow-sm p-6 max-w-2xl mx-auto mb-8 border border-royal-gold/10">
          <p className="font-cormorant text-lg text-rapunzel-purple-dark/80 mb-4 leading-relaxed italic">
            Sua presença iluminará o reino da nossa princesa Liz em uma celebração encantada inspirada no mundo mágico de Enrolados.
          </p>
          
          {/* Royal navigation link */}
          <div className="flex flex-wrap justify-center gap-5 mt-6">
            <button 
              onClick={() => scrollToSection('details')}
              className="py-2 px-6 bg-royal-gold/50 text-white/90 rounded-lg font-cormorant text-sm tracking-wide hover:bg-royal-gold/40 transition-all shadow-sm"
            >
              Detalhes do Evento
            </button>
          </div>
        </div>
        
        {/* Royal flourish divider */}
        <div className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-royal-gold/30 to-transparent"></div>
      </div>
    </header>
  );
};

export default Header;
