
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
        {/* Floating lanterns around the header - more elegant and lighter arrangement */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={`lantern-${i}`}
              className="absolute tangled-lantern"
              style={{
                top: `${5 + (Math.random() * 90)}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.7}s`,
                opacity: 0.5 + (Math.random() * 0.3),
                transform: `scale(${0.6 + (Math.random() * 0.4)})`
              }}
            >
              <div className="tangled-lantern-light"></div>
              <div className="tangled-lantern-body"></div>
              <div className="tangled-lantern-glow"></div>
            </div>
          ))}
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
        
        {/* Main title with more elegant royal styling */}
        <h1 className="font-dancing mb-4 text-4xl md:text-5xl lg:text-6xl text-royal-gold royal-text-shimmer tracking-wide">
          Liz Bahia
        </h1>
        
        {/* Birthday tagline with refined pink highlight and sparkle decorations */}
        <div className="relative mb-6 group">
          <p className="font-cormorant text-2xl md:text-3xl text-white font-semibold tracking-wide">
            <span className="relative inline-flex items-center justify-center mr-2">
              Aniversário de
            </span>
            <span className="relative inline-flex items-center justify-center mx-1">
              <span className="absolute -inset-2 rounded-full bg-gradient-to-r from-royal-pink/30 to-royal-pink-light/40 opacity-70 blur-md inner-light-glow"></span>
              <span className="relative text-3xl md:text-4xl font-dancing font-bold text-royal-pink px-4 py-1 rounded-full bg-white/80 border border-royal-pink/40 inner-light-pulse shadow-sm">
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
              className="py-2 px-8 bg-gradient-to-r from-royal-gold/70 to-royal-gold/80 text-white rounded-lg font-cormorant text-base tracking-wide hover:from-royal-gold/80 hover:to-royal-gold/90 transition-all shadow-sm inner-light-button font-medium backdrop-blur-sm"
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
