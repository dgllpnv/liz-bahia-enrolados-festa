
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
      <h2 className="tangled-heading mb-12 text-[#5D4A8A] font-bold text-3xl md:text-4xl relative" 
          style={{ textShadow: '0 2px 4px rgba(29, 25, 43, 0.6)' }}>
        Nossa Princesa
        {/* Decorações florais no título */}
        <span className="absolute -top-6 -left-6 text-3xl text-rapunzel-pink text-opacity-40">❀</span>
        <span className="absolute -bottom-6 -right-6 text-3xl text-rapunzel-gold text-opacity-40">❀</span>
      </h2>
      
      <div className="max-w-3xl mx-auto relative">
        {/* Moldura delicada */}
        <div className="relative rounded-xl overflow-hidden card-glass p-3 delicate-glow">
          {/* Decoração elegante nos cantos */}
          <div className="absolute -top-3 -left-3 text-xl text-rapunzel-purple-dark text-opacity-40 rotate-12">❀</div>
          <div className="absolute -bottom-3 -right-3 text-xl text-rapunzel-purple-dark text-opacity-40 rotate-45">❀</div>
          
          {/* Frame decoration mais delicada */}
          <div className="absolute inset-0 p-2 border-2 rounded-xl border-rapunzel-gold border-opacity-20"></div>
          
          <div className="relative h-80 md:h-96 overflow-hidden rounded-lg">
            {loadedPhotos.length > 0 && (
              <img 
                src={loadedPhotos[currentIndex]}
                alt={`Nossa Princesa ${currentIndex + 1}`}
                className="absolute inset-0 w-full h-full object-contain transition-all duration-500 transform hover:scale-105"
              />
            )}
            
            {/* Watercolor overlay effect mais suave */}
            <div className="absolute inset-0 bg-[url('/watercolor-overlay.png')] bg-cover opacity-15 mix-blend-overlay pointer-events-none"></div>
          </div>
          
          {/* Navigation buttons mais delicados */}
          {loadedPhotos.length > 1 && (
            <>
              <button 
                onClick={goToPrevious}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-40 p-2 rounded-full transition-all z-10 border border-white border-opacity-20"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="text-rapunzel-purple-dark" />
              </button>
              
              <button 
                onClick={goToNext}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-40 p-2 rounded-full transition-all z-10 border border-white border-opacity-20"
                aria-label="Próxima foto"
              >
                <ChevronRight className="text-rapunzel-purple-dark" />
              </button>
            </>
          )}
        </div>
        
        {/* Thumbnails com ScrollArea para muitas fotos - estilo mais delicado */}
        <ScrollArea className="mt-4 h-24 w-full pb-2">
          <div className="flex gap-2 px-1">
            {loadedPhotos.map((photo, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`flex-shrink-0 h-16 w-16 rounded-md overflow-hidden transition-all ${
                  idx === currentIndex 
                    ? 'border-2 border-rapunzel-gold shadow-md delicate-glow' 
                    : 'border border-white border-opacity-20 opacity-70 hover:opacity-100'
                }`}
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
