
import React from 'react';
import { Heart, Flower } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 text-center text-rapunzel-purple-dark scroll-animation">
      <div className="container mx-auto relative">
        {/* Decorações florais mais delicadas */}
        <div className="absolute top-0 left-1/4 text-xl text-rapunzel-pink text-opacity-25 animate-soft-pulse">❀</div>
        <div className="absolute top-3 left-1/3 text-lg text-rapunzel-gold text-opacity-20 animate-soft-pulse" style={{animationDelay: '1.2s'}}>✿</div>
        <div className="absolute bottom-0 right-1/4 text-xl text-rapunzel-gold text-opacity-25 animate-soft-pulse" style={{animationDelay: '1.5s'}}>❀</div>
        <div className="absolute bottom-3 right-1/3 text-lg text-rapunzel-pink text-opacity-20 animate-soft-pulse" style={{animationDelay: '0.8s'}}>✿</div>
        
        <p className="font-dancing text-xl mb-3 text-rapunzel-purple-dark text-opacity-90">
          Esperamos por você neste dia especial!
        </p>
        <div className="flex items-center justify-center text-sm text-rapunzel-purple-dark text-opacity-80">
          Feito com <Heart className="h-4 w-4 mx-1 text-rapunzel-pink animate-soft-pulse" fill="currentColor" /> para a Liz
        </div>
        
        {/* Linha decorativa mais delicada */}
        <div className="mt-5 mx-auto w-28 h-px bg-gradient-to-r from-transparent via-rapunzel-pink to-transparent opacity-30"></div>
        
        {/* Flores decorativas adicionais */}
        <div className="mt-3 flex justify-center gap-3 opacity-40">
          <Flower className="h-4 w-4 text-rapunzel-pink" />
          <Flower className="h-4 w-4 text-rapunzel-gold" />
          <Flower className="h-4 w-4 text-rapunzel-pink" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
