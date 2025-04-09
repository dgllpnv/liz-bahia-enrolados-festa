
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Flower } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";

// Preparando para 20 fotos
const photoNames = Array.from({ length: 20 }, (_, i) => `/gallery/photo${i + 1}.jpg`);

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedPhotos, setLoadedPhotos] = useState<string[]>([]);
  
  // Verificar quais fotos estão disponíveis
  useEffect(() => {
    const checkImagesExist = async () => {
      const availablePhotos = [];
      
      for (const path of photoNames) {
        try {
          const response = await fetch(path, { method: 'HEAD' });
          if (response.ok) {
            availablePhotos.push(path);
          }
        } catch (error) {
          console.log(`Foto ${path} ainda não disponível`);
        }
      }
      
      setLoadedPhotos(availablePhotos);
    };
    
    checkImagesExist();
  }, []);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? loadedPhotos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === loadedPhotos.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Preload images for smoother transitions
  useEffect(() => {
    loadedPhotos.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [loadedPhotos]);

  // Se não houver fotos carregadas, retorne null
  if (loadedPhotos.length === 0) {
    return null;
  }

  return (
    <section id="gallery" className="section-container scroll-animation">
      <h2 className="tangled-heading mb-12 text-[#5D4A8A]/90 font-bold text-3xl md:text-4xl relative" 
          style={{ textShadow: '0 2px 4px rgba(29, 25, 43, 0.4)' }}>
        Nossa Princesa
        {/* Decorações florais mais delicadas no título */}
        <span className="absolute -top-5 -left-4 text-2xl text-rapunzel-pink text-opacity-30">❀</span>
        <span className="absolute -bottom-5 -right-4 text-2xl text-rapunzel-gold text-opacity-30">❀</span>
        <span className="absolute top-0 left-10 text-xl text-rapunzel-gold text-opacity-20">✿</span>
        <span className="absolute bottom-0 right-10 text-xl text-rapunzel-pink text-opacity-20">✿</span>
      </h2>
      
      <div className="max-w-3xl mx-auto relative">
        {/* Moldura mais delicada */}
        <div className="relative rounded-xl overflow-hidden card-glass p-3 shadow-sm" style={{boxShadow: '0 0 15px rgba(255, 215, 0, 0.1)'}}>
          {/* Decoração elegante nos cantos */}
          <div className="absolute -top-3 -left-3 text-lg text-rapunzel-purple-dark text-opacity-25 rotate-12">❀</div>
          <div className="absolute -bottom-3 -right-3 text-lg text-rapunzel-purple-dark text-opacity-25 rotate-45">❀</div>
          <div className="absolute -bottom-2 -left-2 text-base text-rapunzel-gold text-opacity-20 rotate-12">✿</div>
          <div className="absolute -top-2 -right-2 text-base text-rapunzel-pink text-opacity-20 rotate-45">✿</div>
          
          {/* Frame decoration mais delicada */}
          <div className="absolute inset-0 p-2 border rounded-xl border-rapunzel-gold border-opacity-15"></div>
          
          <div className="relative h-80 md:h-96 overflow-hidden rounded-lg">
            {loadedPhotos.length > 0 && (
              <img 
                src={loadedPhotos[currentIndex]}
                alt={`Nossa Princesa ${currentIndex + 1}`}
                className="absolute inset-0 w-full h-full object-contain transition-all duration-700 transform hover:scale-[1.02]"
              />
            )}
            
            {/* Efeito de sobreposição mais suave */}
            <div className="absolute inset-0 bg-[url('/watercolor-overlay.png')] bg-cover opacity-10 mix-blend-overlay pointer-events-none"></div>
            
            {/* Véu de luz suave */}
            <div className="absolute inset-0 bg-gradient-to-tr from-rapunzel-pink/5 to-rapunzel-gold/5 pointer-events-none"></div>
          </div>
          
          {/* Buttons de navegação mais delicados */}
          {loadedPhotos.length > 1 && (
            <>
              <button 
                onClick={goToPrevious}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-15 backdrop-blur-sm hover:bg-opacity-30 p-2 rounded-full transition-all z-10 border border-white border-opacity-20"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="text-rapunzel-purple-dark/80 h-5 w-5" />
              </button>
              
              <button 
                onClick={goToNext}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-15 backdrop-blur-sm hover:bg-opacity-30 p-2 rounded-full transition-all z-10 border border-white border-opacity-20"
                aria-label="Próxima foto"
              >
                <ChevronRight className="text-rapunzel-purple-dark/80 h-5 w-5" />
              </button>
            </>
          )}
        </div>
        
        {/* Elementos decorativos abaixo da imagem */}
        <div className="flex justify-center mt-4 mb-1 space-x-2 text-rapunzel-pink/30">
          <Flower className="h-4 w-4" />
          <div className="w-16 h-px mt-2 bg-rapunzel-gold/20"></div>
          <Flower className="h-4 w-4" />
        </div>
        
        {/* Thumbnails com ScrollArea para muitas fotos - estilo mais delicado */}
        <ScrollArea className="mt-2 h-20 w-full pb-2">
          <div className="flex gap-2 px-1">
            {loadedPhotos.map((photo, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`flex-shrink-0 h-14 w-14 rounded-md overflow-hidden transition-all ${
                  idx === currentIndex 
                    ? 'border border-rapunzel-gold/50 shadow-sm' 
                    : 'border border-white/15 opacity-60 hover:opacity-90'
                }`}
                style={{
                  boxShadow: idx === currentIndex ? '0 0 8px rgba(255, 215, 0, 0.15)' : 'none'
                }}
              >
                <img 
                  src={photo} 
                  alt={`Miniatura ${idx + 1}`} 
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default Gallery;
