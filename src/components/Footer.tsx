
import React, { useState, useEffect } from 'react';
import { Heart, Flower, ArrowUp, Crown, Sparkles } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Footer = () => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

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
          <Flower className="h-3.5 w-3.5 md:h-4 md:w-4 text-royal-pink animate-soft-pulse" style={{animationDelay: '0.8s'}} />
          <div className="w-px h-4 md:h-5 bg-royal-gold/30"></div>
          <div className="tangled-lantern-mini opacity-70" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        {/* Highlighted main message with enhanced animation and styling */}
        <div className={`relative mb-6 md:mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'}`}>
          {/* Subtle glow background */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7E69AB]/10 to-transparent rounded-xl blur-md"></div>
          
          {/* Animated sparkles */}
          <div className="absolute -top-3 -right-1 animate-soft-float" style={{animationDelay: '0.5s'}}>
            <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-royal-gold" />
          </div>
          <div className="absolute -bottom-3 -left-1 animate-soft-float" style={{animationDelay: '1.2s'}}>
            <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-royal-gold" />
          </div>
          
          <p className="font-dancing text-xl md:text-2xl lg:text-3xl text-royal-gold royal-text tracking-wide relative inline-block">
            <span className="bg-gradient-to-r from-[#9D6FE8]/90 to-[#9D6FE8]/90 bg-[length:0px_2px] hover:bg-[length:100%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 pb-1">
              Esperamos por você neste dia especial!
            </span>
            <div className="absolute -right-2 top-0 animate-soft-pulse">
              <Crown className="h-3 w-3 md:h-4 md:w-4 text-royal-gold/70" />
            </div>
          </p>
        </div>
        
        {/* Highlighted inner light message with enhanced styling */}
        <div className={`relative max-w-md mx-auto mb-8 md:mb-10 px-4 py-3 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'}`}>
          {/* Light glow effect behind the quote */}
          <div className="absolute inset-0 bg-white/10 rounded-xl"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-royal-gold/5 to-transparent rounded-xl"></div>
          
          {/* Quotation marks */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-royal-gold/30 font-serif text-3xl">❝</div>
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-royal-gold/30 font-serif text-3xl">❞</div>
          
          <p className="font-cormorant text-xs md:text-sm lg:text-base italic text-white leading-relaxed relative">
            <span className="bg-gradient-to-r from-royal-gold/80 via-royal-pink/80 to-royal-gold/80 text-transparent bg-clip-text animate-[text-shimmer_8s_ease-in-out_infinite]">
              As lanternas flutuantes simbolizam esperança e sonhos, assim como a luz que cada um de nós carrega dentro de si.
            </span>
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          {/* Enhanced "Feito com amor para a Liz" text */}
          <div className={`flex items-center justify-center text-xs md:text-sm text-white mb-5 md:mb-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'}`}>
            <div className="relative inline-flex items-center group">
              <span>Feito com </span>
              <Heart className="h-3 w-3 md:h-3.5 md:w-3.5 mx-1 md:mx-1.5 text-royal-pink animate-soft-pulse" fill="currentColor" />
              <span> para a </span>
              <span className="relative font-dancing text-sm md:text-base text-royal-pink ml-1 group-hover:scale-110 transition-transform duration-300">
                Liz
                <span className="absolute -top-1 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Crown className="h-2.5 w-2.5 text-royal-gold" />
                </span>
                {/* Animated underline effect */}
                <span className="absolute bottom-0 left-0 w-full h-px bg-royal-pink scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </span>
            </div>
          </div>
          
          {/* Enhanced back to top button with more elegant styling */}
          <button 
            onClick={scrollToTop}
            className={`group flex items-center justify-center gap-1 md:gap-2 text-xs md:text-sm text-white hover:text-royal-gold transition-colors py-1.5 md:py-2 px-3 md:px-4 rounded-full border border-royal-gold/30 hover:border-royal-gold/60 backdrop-blur-sm transition-all duration-700 delay-700 relative overflow-hidden ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'}`}
          >
            {/* Button shine effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
            
            <ArrowUp className="h-3 w-3 md:h-3.5 md:w-3.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            <span className="font-cinzel text-xs tracking-wider relative">
              Voltar ao topo
              <span className="absolute bottom-0 left-0 w-full h-px bg-royal-gold/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
          </button>
        </div>
        
        <div className="mx-auto w-24 md:w-32 h-px bg-gradient-to-r from-transparent via-royal-gold/40 to-transparent mt-8 md:mt-10"></div>
      </div>
    </footer>
  );
};

export default Footer;
