import React from 'react';
import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Create floating lanterns
    const createLanterns = () => {
      const container = document.getElementById('lantern-container');
      if (!container) return;
      
      // Clear existing lanterns
      container.innerHTML = '';
      
      for (let i = 0; i < 15; i++) {
        const lantern = document.createElement('div');
        lantern.className = 'lantern animate-lantern-float';
        
        // Random positions
        const left = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = 15 + Math.random() * 10;
        
        lantern.style.left = `${left}%`;
        lantern.style.animationDelay = `${delay}s`;
        lantern.style.animationDuration = `${duration}s`;
        
        // Add glow effect
        const glow = document.createElement('div');
        glow.className = 'absolute inset-0 rounded-t-full bg-yellow-200 bg-opacity-50 animate-pulse-glow';
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
      {/* Background with castle silhouette */}
      <div className="absolute inset-0 bg-gradient-to-b from-rapunzel-purple to-rapunzel-blue z-0">
        <div className="absolute bottom-0 w-full h-64 bg-contain bg-bottom bg-no-repeat"
             style={{ backgroundImage: "url('/castle-silhouette.png')" }}>
        </div>
      </div>
      
      {/* Floating lanterns container */}
      <div id="lantern-container" className="absolute inset-0 overflow-hidden pointer-events-none z-10"></div>
      
      {/* Content */}
      <div className={`relative z-20 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h2 className="font-dancing text-3xl md:text-4xl text-[#7E69AB] mb-4 animate-float-slow font-bold drop-shadow-lg" style={{ textShadow: '0 0 10px rgba(126, 105, 171, 0.6)' }}>
          Você está convidado para o aniversário de
        </h2>
        
        <h1 className="tangled-heading mb-6 text-[#6E59A5] font-extrabold text-shadow-lg">
          Liz Bahia
          <span className="absolute -top-6 -right-6 text-rapunzel-gold">
            <Sparkles size={40} className="animate-pulse-glow" />
          </span>
        </h1>
        
        <div className="text-2xl md:text-3xl font-cinzel text-[#1A1F2C] mb-8 animate-float font-bold drop-shadow-md">
          3 anos
        </div>
        
        <div className="card-glass p-6 max-w-md mx-auto shadow-lg border-2 border-white/30">
          <p className="font-dancing text-2xl md:text-3xl text-[#7E69AB] mb-4 font-bold">
            26 de Abril de 2025
          </p>
          <p className="font-cinzel text-xl md:text-2xl text-[#1A1F2C] font-semibold">
            18:00h
          </p>
          <div className="mt-8">
            <a href="#details" className="inline-block py-3 px-6 bg-[#6E59A5] text-white font-cinzel rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg font-semibold">
              Ver Detalhes
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative hair strand */}
      <div className="absolute -bottom-40 left-0 right-0 flex justify-center pointer-events-none z-0">
        <div className="w-40 h-60 bg-rapunzel-gold bg-opacity-30 rounded-full filter blur-md animate-hair-flow"></div>
      </div>
    </div>
  );
};

export default Header;
