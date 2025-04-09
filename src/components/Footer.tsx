
import React from 'react';
import { Heart, Flower, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 text-center text-rapunzel-purple-dark scroll-animation">
      <div className="container mx-auto relative">
        {/* Enhanced royal decorative elements with floating lanterns */}
        <div className="mx-auto w-48 h-px bg-gradient-to-r from-transparent via-[#D4B7EE] to-transparent mb-8"></div>
        
        <div className="flex justify-center gap-8 mb-8">
          <div className="floating-lantern-mini"></div>
          <div className="w-px h-5 bg-[#D4B7EE]/60"></div>
          <Flower className="h-5 w-5 text-[#D4B7EE] animate-soft-pulse filter drop-shadow-sm" style={{animationDelay: '0.8s'}} />
          <div className="w-px h-5 bg-[#D4B7EE]/60"></div>
          <div className="floating-lantern-mini" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <p className="font-dancing text-2xl mb-4 text-rapunzel-purple-dark/90 royal-text tracking-wide">
          Esperamos por você neste dia especial!
        </p>
        
        {/* Inner light message */}
        <p className="font-cormorant text-sm italic mb-6 text-rapunzel-purple-dark/70 max-w-md mx-auto">
          "As lanternas flutuantes que iluminam o céu são reflexos da luz que brilha dentro de cada um de nós."
        </p>
        
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center text-sm text-rapunzel-purple-dark/80 mb-4">
            Feito com <Heart className="h-4 w-4 mx-1 text-rapunzel-pink animate-soft-pulse" fill="currentColor" /> para a Liz
          </div>
          
          {/* Back to top button with lantern icon */}
          <button 
            onClick={scrollToTop}
            className="flex items-center justify-center gap-2 text-sm text-rapunzel-purple-dark/80 hover:text-rapunzel-gold transition-colors py-2 px-4 rounded-full"
          >
            <ArrowUp className="h-4 w-4" />
            <span className="font-cinzel text-xs">Voltar ao topo</span>
          </button>
        </div>
        
        <div className="mx-auto w-32 h-px bg-gradient-to-r from-transparent via-[#D4B7EE] to-transparent mt-8"></div>
      </div>
    </footer>
  );
};

export default Footer;
