
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 text-center text-rapunzel-purple-dark scroll-animation">
      <div className="container mx-auto">
        <p className="font-dancing text-xl mb-3">
          Esperamos por você neste dia especial!
        </p>
        <div className="flex items-center justify-center text-sm">
          Feito com <Heart className="h-4 w-4 mx-1 text-rapunzel-pink" fill="currentColor" /> para a Liz
        </div>
      </div>
    </footer>
  );
};

export default Footer;
