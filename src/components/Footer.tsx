
import React from 'react';
import { Heart, Flower, ArrowUp, Crown } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Footer = () => {
  const isMobile = useIsMobile();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-10 md:py-14 text-center text-white/90 scroll-animation backdrop-blur-sm">
      <div className="container mx-auto relative px-4">
        {/* Decorative divider with crown - more delicate */}
        <div className="flex items-center justify-center mb-6 md:mb-8">
          <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-royal-gold/40 to-transparent"></div>
          <Crown className="h-3.5 w-3.5 md:h-4 md:w-4 mx-2 md:mx-3 text-royal-gold" />
          <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-royal-gold/40 to-transparent"></div>
        </div>
        
        {/* Decorative lantern display for footer - lighter arrangement */}
        <div className="flex justify-center items-center gap-3 md:gap-4 mb-6 md:mb-8">
          {[1, 2, 3, isMobile ? null : 4, isMobile ? null : 5].filter(Boolean).map((i) => (
            <div 
              key={`footer-lantern-${i}`}
              className="tangled-lantern-mini opacity-70"
              style={{
                animationDelay: `${i * 0.4}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="mx-auto w-28 md:w-40 h-px bg-gradient-to-r from-transparent via-royal-gold/50 to-transparent mb-6 md:mb-8"></div>
        
        <div className="flex justify-center gap-5 md:gap-8 mb-6 md:mb-8">
          <div className="tangled-lantern-mini opacity-70"></div>
          <div className="w-px h-4 md:h-5 bg-royal-gold/30"></div>
          <Flower className="h-3.5 w-3.5 md:h-4 md:w-4 text-royal-pink animate-soft-pulse filter drop-shadow-sm" style={{animationDelay: '0.8s'}} />
          <div className="w-px h-4 md:h-5 bg-royal-gold/30"></div>
          <div className="tangled-lantern-mini opacity-70" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <p className="font-dancing text-xl md:text-2xl lg:text-3xl mb-3 md:mb-4 text-royal-gold royal-text tracking-wide">
          Esperamos por você neste dia especial!
        </p>
        
        {/* Inner light message with more elegant styling */}
        <p className="font-cormorant text-xs md:text-sm lg:text-base italic mb-6 md:mb-8 text-white max-w-md mx-auto leading-relaxed px-4">
          "As lanternas flutuantes simbolizam esperança e sonhos, assim como a luz que cada um de nós carrega dentro de si."
        </p>
        
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center text-xs md:text-sm text-white mb-4 md:mb-5">
            Feito com <Heart className="h-3 w-3 md:h-3.5 md:w-3.5 mx-1 md:mx-1.5 text-royal-pink animate-soft-pulse" fill="currentColor" /> para a Liz
          </div>
          
          {/* Back to top button with more elegant styling */}
          <button 
            onClick={scrollToTop}
            className="flex items-center justify-center gap-1 md:gap-2 text-xs md:text-sm text-white hover:text-royal-gold transition-colors py-1.5 md:py-2 px-3 md:px-4 rounded-full border border-royal-gold/30 hover:border-royal-gold/60 backdrop-blur-sm"
          >
            <ArrowUp className="h-3 w-3 md:h-3.5 md:w-3.5" />
            <span className="font-cinzel text-xs tracking-wider">Voltar ao topo</span>
          </button>
        </div>
        
        <div className="mx-auto w-24 md:w-32 h-px bg-gradient-to-r from-transparent via-royal-gold/40 to-transparent mt-8 md:mt-10"></div>
      </div>
    </footer>
  );
};

export default Footer;
