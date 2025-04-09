
import React from 'react';
import { Heart, Flower, Lamp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 text-center text-rapunzel-purple-dark scroll-animation">
      <div className="container mx-auto relative">
        {/* Royal decorative elements */}
        <div className="mx-auto w-40 h-px bg-gradient-to-r from-transparent via-[#D4B7EE] to-transparent mb-6"></div>
        
        <div className="flex justify-center gap-6 mb-6">
          <Lamp className="h-5 w-5 text-rapunzel-gold animate-soft-pulse" />
          <div className="w-px h-5 bg-[#D4B7EE]/40"></div>
          <Flower className="h-5 w-5 text-[#D4B7EE] animate-soft-pulse" style={{animationDelay: '0.8s'}} />
          <div className="w-px h-5 bg-[#D4B7EE]/40"></div>
          <Lamp className="h-5 w-5 text-rapunzel-gold animate-soft-pulse" style={{animationDelay: '1.5s'}} />
        </div>
        
        <p className="font-dancing text-xl mb-3 text-rapunzel-purple-dark royal-text">
          Esperamos por você neste dia especial!
        </p>
        <div className="flex items-center justify-center text-sm text-rapunzel-purple-dark/80">
          Feito com <Heart className="h-4 w-4 mx-1 text-rapunzel-pink animate-soft-pulse" fill="currentColor" /> para a Liz
        </div>
        
        <div className="mx-auto w-28 h-px bg-gradient-to-r from-transparent via-[#D4B7EE] to-transparent mt-6"></div>
      </div>
    </footer>
  );
};

export default Footer;
