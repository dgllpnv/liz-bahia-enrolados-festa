
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 text-center text-rapunzel-purple-dark scroll-animation">
      <div className="container mx-auto relative">
        {/* Decorações florais */}
        <div className="absolute top-0 left-1/4 text-2xl text-rapunzel-pink text-opacity-30 animate-soft-pulse">❀</div>
        <div className="absolute bottom-0 right-1/4 text-2xl text-rapunzel-gold text-opacity-30 animate-soft-pulse" style={{animationDelay: '1.5s'}}>❀</div>
        
        <p className="font-dancing text-xl mb-3">
          Esperamos por você neste dia especial!
        </p>
        <div className="flex items-center justify-center text-sm">
          Feito com <Heart className="h-4 w-4 mx-1 text-rapunzel-pink animate-soft-pulse" fill="currentColor" /> para a Liz
        </div>
        
        {/* Linha decorativa delicada */}
        <div className="mt-4 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-rapunzel-pink to-transparent opacity-50"></div>
      </div>
    </footer>
  );
};

export default Footer;
