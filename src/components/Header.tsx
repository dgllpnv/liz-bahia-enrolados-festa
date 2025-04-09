
import React from 'react';
import { Crown, Sparkles } from 'lucide-react';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="py-14 px-6 text-center relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Rapunzel and Flynn image with flowing hair */}
        <div className="relative mb-8 max-w-md mx-auto">
          <img 
            src="/lovable-uploads/4979c8dc-4fb8-4801-9448-4422d06ca117.png" 
            alt="Rapunzel e Flynn" 
            className="w-full rounded-2xl shadow-md border-2 border-royal-gold/30"
          />
        </div>
        
        {/* Elegant decorative element above the crown */}
        <div className="relative mb-6">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-32 h-px bg-gradient-to-r from-transparent via-royal-gold/50 to-transparent"></div>
        </div>
        
        {/* Royal crown icon with subtle animation */}
        <div className="mb-5 relative">
          <Crown className="h-8 w-8 mx-auto text-royal-gold filter drop-shadow-sm animate-soft-float" />
          <div className="absolute inset-0 blur-sm opacity-40">
            <Crown className="h-8 w-8 mx-auto text-royal-gold/30" />
          </div>
        </div>
        
        {/* Main title with elegant royal styling */}
        <h1 className="font-dancing mb-4 text-4xl md:text-5xl lg:text-6xl text-[#9D6FE8] royal-text-shimmer tracking-wide">
          Liz Bahia
        </h1>
        
        {/* Birthday tagline with refined pink highlight and sparkle decorations */}
        <div className="relative mb-6 group">
          <p className="font-cormorant text-2xl md:text-3xl text-white font-semibold tracking-wide">
            <span className="relative inline-flex items-center justify-center mr-2">
              Aniversário de
            </span>
            <span className="relative inline-flex items-center justify-center mx-1">
              <span className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#9D6FE8]/30 to-[#CC8DE0]/40 opacity-70 blur-md inner-light-glow"></span>
              <span className="relative text-3xl md:text-4xl font-dancing font-bold text-[#9D6FE8] px-4 py-1 rounded-full bg-white/80 border border-[#9D6FE8]/40 inner-light-pulse shadow-sm">
                3
                <span className="absolute -top-2 -right-1">
                  <Sparkles className="h-3.5 w-3.5 text-royal-gold opacity-90" />
                </span>
              </span>
            </span>
            <span className="relative inline-flex items-center justify-center ml-2">
              anos
            </span>
          </p>
        </div>
        
        {/* Elegant invitation text with refined styling */}
        <div className="bg-white/60 backdrop-blur-sm rounded-xl shadow-sm p-7 max-w-2xl mx-auto mb-10 border border-royal-gold/20">
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-royal-gold/30 to-transparent"></div>
          </div>
          
          <p className="font-cormorant text-xl md:text-2xl lg:text-2xl text-royal-purple/90 mb-4 leading-relaxed italic font-medium tracking-wide">
            Sua presença iluminará o reino da nossa princesa Liz em uma celebração encantada inspirada no mundo mágico de Enrolados.
          </p>
          
          {/* Elegant royal navigation button */}
          <div className="flex flex-wrap justify-center gap-5 mt-7">
            <button 
              onClick={() => scrollToSection('details')}
              className="py-2 px-8 bg-gradient-to-r from-[#9D6FE8]/70 to-[#9D6FE8]/80 text-white rounded-lg font-cormorant text-base tracking-wide hover:from-[#9D6FE8]/80 hover:to-[#9D6FE8]/90 transition-all shadow-sm inner-light-button font-medium backdrop-blur-sm"
            >
              Detalhes do Evento
            </button>
          </div>
          
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 translate-y-1/2">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-royal-gold/30 to-transparent"></div>
          </div>
        </div>
        
        {/* Enhanced royal flourish divider */}
        <div className="relative w-32 h-px mx-auto">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-royal-gold/40 to-transparent"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-royal-gold/70">
            <div className="tangled-lantern-mini opacity-70"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
