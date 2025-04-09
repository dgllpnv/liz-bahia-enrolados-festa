
import React from 'react';
import { useEffect, useState } from 'react';
import { Sparkles, Flower, Lamp } from 'lucide-react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Create floating lanterns with royal style
    const createLanterns = () => {
      const container = document.getElementById('lantern-container');
      if (!container) return;
      
      // Clear existing lanterns
      container.innerHTML = '';
      
      for (let i = 0; i < 15; i++) {
        const lantern = document.createElement('div');
        lantern.className = 'royal-lantern';
        
        // Random positions with graceful movements
        const left = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = 22 + Math.random() * 8;
        const size = 12 + Math.random() * 10;
        
        lantern.style.left = `${left}%`;
        lantern.style.animationDelay = `${delay}s`;
        lantern.style.animationDuration = `${duration}s`;
        lantern.style.width = `${size}px`;
        lantern.style.height = `${size * 1.5}px`;
        
        // Add inner glow for lantern
        const glow = document.createElement('div');
        glow.className = 'lantern-glow';
        lantern.appendChild(glow);
        
        container.appendChild(lantern);
      }
    };
    
    createLanterns();
    window.addEventListener('resize', createLanterns);
    
    return () => {
      window.removeEventListener('resize', createLanterns);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background with royal gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E9D7F5] to-[#F1E8FB] z-0">
        <div className="absolute bottom-0 w-full h-64 bg-contain bg-bottom bg-no-repeat opacity-75"
             style={{ backgroundImage: "url('/castle-silhouette.png')" }}>
        </div>
      </div>
      
      {/* Floating lanterns container */}
      <div id="lantern-container" className="absolute inset-0 overflow-hidden pointer-events-none z-10"></div>
      
      {/* Content */}
      <div className={`relative z-20 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h2 className="font-dancing text-3xl md:text-4xl text-[#7E69AB] mb-6 royal-text-shimmer font-bold" style={{ letterSpacing: '0.03em' }}>
          Você está convidado para o aniversário de
        </h2>
        
        <h1 className="royal-heading mb-8 text-[#6E59A5] font-extrabold relative">
          Liz Bahia
          <span className="absolute -top-6 -right-6 text-rapunzel-gold/90">
            <Sparkles size={36} className="animate-soft-pulse" />
          </span>
          <span className="absolute -bottom-3 -left-3 text-rapunzel-pink/70">
            <Flower size={26} className="animate-soft-pulse" style={{animationDelay: '1.5s'}} />
          </span>
        </h1>
        
        <div className="text-2xl md:text-3xl font-cinzel text-[#1A1F2C]/90 mb-10 royal-text-shimmer font-bold" style={{animationDelay: '0.3s', letterSpacing: '0.05em'}}>
          3 anos
        </div>
        
        <div className="royal-card p-6 max-w-md mx-auto relative">
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#D4B7EE]"></div>
          <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#D4B7EE]"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#D4B7EE]"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#D4B7EE]"></div>
          
          <p className="font-dancing text-2xl md:text-3xl text-[#7E69AB] mb-4 font-bold royal-text">
            26 de Abril de 2025
          </p>
          <p className="font-cinzel text-xl md:text-2xl text-[#1A1F2C]/90 font-semibold royal-text">
            18:00h
          </p>
          <div className="mt-8">
            <a href="#details" className="inline-block py-3 px-8 bg-[#6E59A5]/90 text-white font-cinzel rounded-full hover:bg-opacity-95 transition-all transform hover:scale-105 shadow-md font-semibold border border-white/40 royal-button">
              Ver Detalhes
            </a>
          </div>
        </div>
      </div>
      
      {/* Lantern decorations at the bottom */}
      <div className="absolute bottom-8 left-6 pointer-events-none z-20">
        <Lamp size={28} className="text-rapunzel-gold animate-soft-pulse" />
      </div>
      <div className="absolute bottom-6 right-8 pointer-events-none z-20">
        <Lamp size={24} className="text-rapunzel-gold animate-soft-pulse" style={{animationDelay: '1.2s'}} />
      </div>
    </div>
  );
};

export default Header;
