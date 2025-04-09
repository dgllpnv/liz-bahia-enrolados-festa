
import React from 'react';
import { useEffect, useState } from 'react';
import { Sparkles, Flower } from 'lucide-react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Create floating lanterns with more delicate style
    const createLanterns = () => {
      const container = document.getElementById('lantern-container');
      if (!container) return;
      
      // Clear existing lanterns
      container.innerHTML = '';
      
      for (let i = 0; i < 12; i++) {
        const lantern = document.createElement('div');
        lantern.className = 'lantern animate-lantern-float';
        
        // Random positions with more subtle movements
        const left = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = 18 + Math.random() * 12;
        
        lantern.style.left = `${left}%`;
        lantern.style.animationDelay = `${delay}s`;
        lantern.style.animationDuration = `${duration}s`;
        lantern.style.opacity = '0.2';
        
        // Softer glow effect
        const glow = document.createElement('div');
        glow.className = 'absolute inset-0 rounded-t-full bg-yellow-100 bg-opacity-40 animate-pulse-glow';
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
      {/* Background com gradiente mais suave */}
      <div className="absolute inset-0 bg-gradient-to-b from-rapunzel-purple/70 to-rapunzel-blue/70 z-0 opacity-70">
        <div className="absolute bottom-0 w-full h-64 bg-contain bg-bottom bg-no-repeat opacity-75"
             style={{ backgroundImage: "url('/castle-silhouette.png')" }}>
        </div>
        
        {/* Overlay mais delicado */}
        <div className="absolute inset-0 bg-white bg-opacity-20"></div>
      </div>
      
      {/* Floating lanterns container */}
      <div id="lantern-container" className="absolute inset-0 overflow-hidden pointer-events-none z-10"></div>
      
      {/* Pequenas flores decorativas mais delicadas */}
      <div className="absolute top-16 left-12 text-2xl text-rapunzel-pink text-opacity-25 animate-soft-pulse">❀</div>
      <div className="absolute top-28 right-14 text-xl text-rapunzel-gold text-opacity-25 animate-soft-pulse" style={{animationDelay: '1.2s'}}>✿</div>
      <div className="absolute bottom-24 left-20 text-3xl text-rapunzel-purple-dark text-opacity-20 animate-soft-pulse" style={{animationDelay: '2.4s'}}>❀</div>
      <div className="absolute top-40 left-32 text-xl text-rapunzel-gold text-opacity-20 animate-soft-pulse" style={{animationDelay: '3s'}}>✿</div>
      <div className="absolute bottom-40 right-24 text-2xl text-rapunzel-pink text-opacity-25 animate-soft-pulse" style={{animationDelay: '1.8s'}}>❀</div>
      
      {/* Content */}
      <div className={`relative z-20 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h2 className="font-dancing text-3xl md:text-4xl text-[#7E69AB] mb-6 animate-soft-float font-bold drop-shadow-lg" style={{ textShadow: '0 0 10px rgba(126, 105, 171, 0.4)' }}>
          Você está convidado para o aniversário de
        </h2>
        
        <h1 className="tangled-heading mb-8 text-[#6E59A5] font-extrabold text-shadow-lg relative">
          Liz Bahia
          <span className="absolute -top-6 -right-6 text-rapunzel-gold/80">
            <Sparkles size={36} className="animate-soft-pulse" />
          </span>
          <span className="absolute -bottom-3 -left-3 text-rapunzel-pink/60">
            <Flower size={26} className="animate-soft-pulse" style={{animationDelay: '1.5s'}} />
          </span>
        </h1>
        
        <div className="text-2xl md:text-3xl font-cinzel text-[#1A1F2C]/80 mb-10 animate-soft-float font-bold drop-shadow-md" style={{animationDelay: '0.3s'}}>
          3 anos
        </div>
        
        <div className="card-glass p-6 max-w-md mx-auto shadow-lg border border-white/40 delicate-glow relative">
          {/* Decoração de cantos mais delicada */}
          <div className="absolute -top-3 -left-3 text-xl text-rapunzel-pink text-opacity-30 rotate-3">❀</div>
          <div className="absolute -bottom-3 -right-3 text-xl text-rapunzel-pink text-opacity-30 -rotate-6">❀</div>
          <div className="absolute -bottom-2 -left-2 text-lg text-rapunzel-gold text-opacity-25 rotate-12">✿</div>
          <div className="absolute -top-2 -right-2 text-lg text-rapunzel-gold text-opacity-25 -rotate-12">✿</div>
          
          <p className="font-dancing text-2xl md:text-3xl text-[#7E69AB]/90 mb-4 font-bold">
            26 de Abril de 2025
          </p>
          <p className="font-cinzel text-xl md:text-2xl text-[#1A1F2C]/80 font-semibold">
            18:00h
          </p>
          <div className="mt-8">
            <a href="#details" className="inline-block py-3 px-6 bg-[#6E59A5]/90 text-white font-cinzel rounded-full hover:bg-opacity-95 transition-all transform hover:scale-105 shadow-md font-semibold border border-white/40">
              Ver Detalhes
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative hair strand mais suave */}
      <div className="absolute -bottom-40 left-0 right-0 flex justify-center pointer-events-none z-0">
        <div className="w-40 h-60 bg-rapunzel-gold bg-opacity-10 rounded-full filter blur-md animate-hair-flow"></div>
      </div>
      
      {/* Overlay de luz suave */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-rapunzel-pink/5 to-rapunzel-gold/5 mix-blend-overlay"></div>
    </div>
  );
};

export default Header;
