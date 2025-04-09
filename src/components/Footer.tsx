
import React from 'react';
import { Heart, Flower, ArrowUp, Crown } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-14 text-center text-royal-lavender scroll-animation">
      <div className="container mx-auto relative">
        {/* Decorative divider with crown */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-royal-lilac/40 to-transparent"></div>
          <Crown className="h-5 w-5 mx-3 text-royal-gold/60" />
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-royal-lilac/40 to-transparent"></div>
        </div>
        
        {/* Decorative lantern display for footer - more elegant arrangement */}
        <div className="flex justify-center items-center gap-4 mb-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={`footer-lantern-${i}`}
              className="tangled-lantern-mini"
              style={{
                animationDelay: `${i * 0.4}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="mx-auto w-48 h-px bg-gradient-to-r from-transparent via-royal-lilac/40 to-transparent mb-8"></div>
        
        <div className="flex justify-center gap-8 mb-8">
          <div className="tangled-lantern-mini"></div>
          <div className="w-px h-5 bg-royal-lilac/30"></div>
          <Flower className="h-5 w-5 text-royal-pink animate-soft-pulse filter drop-shadow-sm" style={{animationDelay: '0.8s'}} />
          <div className="w-px h-5 bg-royal-lilac/30"></div>
          <div className="tangled-lantern-mini" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <p className="font-dancing text-2xl md:text-3xl mb-4 text-royal-purple royal-text tracking-wide">
          Esperamos por você neste dia especial!
        </p>
        
        {/* Inner light message with more elegant styling */}
        <p className="font-cormorant text-sm md:text-base italic mb-8 text-royal-lavender/90 max-w-md mx-auto leading-relaxed">
          "As lanternas flutuantes simbolizam esperança e sonhos, assim como a luz que cada um de nós carrega dentro de si."
        </p>
        
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center text-sm text-royal-lavender mb-5">
            Feito com <Heart className="h-4 w-4 mx-1.5 text-royal-pink animate-soft-pulse" fill="currentColor" /> para a Liz
          </div>
          
          {/* Back to top button with more elegant styling */}
          <button 
            onClick={scrollToTop}
            className="flex items-center justify-center gap-2 text-sm text-royal-lavender/80 hover:text-royal-gold transition-colors py-2 px-4 rounded-full border border-royal-lavender/20 hover:border-royal-gold/30"
          >
            <ArrowUp className="h-4 w-4" />
            <span className="font-cinzel text-xs tracking-wider">Voltar ao topo</span>
          </button>
        </div>
        
        <div className="mx-auto w-40 h-px bg-gradient-to-r from-transparent via-royal-lilac/30 to-transparent mt-10"></div>
      </div>
    </footer>
  );
};

export default Footer;
