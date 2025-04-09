
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
    <footer className="py-12 text-center text-royal-lavender scroll-animation">
      <div className="container mx-auto relative">
        {/* Decorative lantern display for footer */}
        <div className="relative h-16 mb-6 overflow-hidden">
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={`footer-lantern-${i}`} 
              className="tangled-lantern-mini absolute"
              style={{
                left: `${10 + (i * 20)}%`,
                top: '0',
                animationDelay: `${i * 0.4}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="mx-auto w-48 h-px bg-gradient-to-r from-transparent via-royal-lilac to-transparent mb-8"></div>
        
        <div className="flex justify-center gap-8 mb-8">
          <div className="tangled-lantern-mini"></div>
          <div className="w-px h-5 bg-royal-lilac/60"></div>
          <Flower className="h-5 w-5 text-royal-pink animate-soft-pulse filter drop-shadow-sm" style={{animationDelay: '0.8s'}} />
          <div className="w-px h-5 bg-royal-lilac/60"></div>
          <div className="tangled-lantern-mini" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <p className="font-dancing text-2xl mb-4 text-royal-purple royal-text tracking-wide">
          Esperamos por você neste dia especial!
        </p>
        
        {/* Inner light message inspired by Tangled */}
        <p className="font-cormorant text-sm italic mb-6 text-royal-lavender/90 max-w-md mx-auto">
          "As lanternas flutuantes simbolizam esperança e sonhos, assim como a luz que cada um de nós carrega dentro de si."
        </p>
        
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center text-sm text-royal-lavender mb-4">
            Feito com <Heart className="h-4 w-4 mx-1 text-royal-pink animate-soft-pulse" fill="currentColor" /> para a Liz
          </div>
          
          {/* Back to top button with lantern icon */}
          <button 
            onClick={scrollToTop}
            className="flex items-center justify-center gap-2 text-sm text-royal-lavender hover:text-royal-gold transition-colors py-2 px-4 rounded-full"
          >
            <ArrowUp className="h-4 w-4" />
            <span className="font-cinzel text-xs">Voltar ao topo</span>
          </button>
        </div>
        
        <div className="mx-auto w-32 h-px bg-gradient-to-r from-transparent via-royal-lilac to-transparent mt-8"></div>
      </div>
    </footer>
  );
};

export default Footer;
