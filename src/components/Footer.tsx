
import React from 'react';
import { Heart, Flower, Lamp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 text-center text-rapunzel-purple-dark scroll-animation">
      <div className="container mx-auto relative">
        {/* Enhanced royal decorative elements */}
        <div className="mx-auto w-48 h-px bg-gradient-to-r from-transparent via-[#D4B7EE] to-transparent mb-8"></div>
        
        <div className="flex justify-center gap-8 mb-8">
          <Lamp className="h-5 w-5 text-rapunzel-gold animate-soft-pulse filter drop-shadow-md" />
          <div className="w-px h-5 bg-[#D4B7EE]/60"></div>
          <Flower className="h-5 w-5 text-[#D4B7EE] animate-soft-pulse filter drop-shadow-sm" style={{animationDelay: '0.8s'}} />
          <div className="w-px h-5 bg-[#D4B7EE]/60"></div>
          <Lamp className="h-5 w-5 text-rapunzel-gold animate-soft-pulse filter drop-shadow-md" style={{animationDelay: '1.5s'}} />
        </div>
        
        <p className="font-dancing text-2xl mb-4 text-rapunzel-purple-dark/90 royal-text tracking-wide">
          Esperamos por você neste dia especial!
        </p>
        <div className="flex items-center justify-center text-sm text-rapunzel-purple-dark/80">
          Feito com <Heart className="h-4 w-4 mx-1 text-rapunzel-pink animate-soft-pulse" fill="currentColor" /> para a Liz
        </div>
        
        <div className="mx-auto w-32 h-px bg-gradient-to-r from-transparent via-[#D4B7EE] to-transparent mt-8"></div>
      </div>
    </footer>
  );
};

export default Footer;
