
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Flower } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";

// Preparando para 20 fotos
const photoNames = Array.from({ length: 20 }, (_, i) => `/gallery/photo${i + 1}.jpeg`);

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
      {/* Updated heading to match "Detalhes do Evento" styling */}
      <div className="flex items-center justify-center mb-12 relative">
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9D6FE8]/60 to-transparent"></div>
        <h2 className="tangled-heading mx-6 text-[#7E69AB] drop-shadow-md relative">
          Nossa Princesa
          <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-royal-gold/60 to-transparent opacity-70"></span>
        </h2>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9D6FE8]/60 to-transparent"></div>
      </div>
      
      <div className="max-w-3xl mx-auto relative">
        {/* Moldura mais refinada com sombras melhoradas */}
        <div className="relative rounded-xl overflow-hidden card-glass p-4 shadow-lg" 
             style={{boxShadow: '0 5px 20px rgba(126, 105, 171, 0.15), 0 0 15px rgba(255, 215, 0, 0.1)'}}>
          {/* Decoração elegante nos cantos */}
          <div className="absolute -top-3 -left-3 text-lg text-rapunzel-purple-dark text-opacity-30 rotate-12">❀</div>
          <div className="absolute -bottom-3 -right-3 text-lg text-rapunzel-purple-dark text-opacity-30 rotate-45">❀</div>
          <div className="absolute -bottom-2 -left-2 text-base text-rapunzel-gold text-opacity-25 rotate-12">✿</div>
          <div className="absolute -top-2 -right-2 text-base text-rapunzel-pink text-opacity-25 rotate-45">✿</div>
          
          {/* Frame decoration mais refinada */}
          <div className="absolute inset-0 p-3 border rounded-xl border-rapunzel-gold border-opacity-20"></div>
          
          <div className="relative h-80 md:h-[28rem] overflow-hidden rounded-lg">
            {loadedPhotos.length > 0 && (
              <img 
                src={loadedPhotos[currentIndex]}
                alt={`Nossa Princesa ${currentIndex + 1}`}
                className="absolute inset-0 w-full h-full object-contain transition-all duration-700 transform hover:scale-[1.02]"
              />
            )}
            
            {/* Efeito de sobreposição mais suave */}
            <div className="absolute inset-0 bg-[url('/watercolor-overlay.png')] bg-cover opacity-8 mix-blend-overlay pointer-events-none"></div>
            
            {/* Véu de luz suave aprimorado */}
            <div className="absolute inset-0 bg-gradient-to-tr from-rapunzel-pink/5 to-rapunzel-gold/5 pointer-events-none"></div>
          </div>
          
          {/* Buttons de navegação mais refinados */}
          {loadedPhotos.length > 1 && (
            <>
              <button 
                onClick={goToPrevious}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-25 backdrop-blur-sm hover:bg-opacity-40 p-2.5 rounded-full transition-all z-10 border border-white border-opacity-30 shadow-md"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="text-rapunzel-purple-dark/90 h-5 w-5" />
              </button>
              
              <button 
                onClick={goToNext}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-25 backdrop-blur-sm hover:bg-opacity-40 p-2.5 rounded-full transition-all z-10 border border-white border-opacity-30 shadow-md"
                aria-label="Próxima foto"
              >
                <ChevronRight className="text-rapunzel-purple-dark/90 h-5 w-5" />
              </button>
            </>
          )}
        </div>
        
        {/* Elementos decorativos abaixo da imagem */}
        <div className="flex justify-center mt-5 mb-2 space-x-3 text-rapunzel-pink/40">
          <Flower className="h-4 w-4" />
          <div className="w-20 h-px mt-2 bg-rapunzel-gold/25"></div>
          <Flower className="h-4 w-4" />
        </div>
        
        {/* Thumbnails com ScrollArea para muitas fotos - estilo mais refinado */}
        <ScrollArea className="mt-3 h-22 w-full pb-3">
          <div className="flex gap-3 px-1">
            {loadedPhotos.map((photo, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`flex-shrink-0 h-16 w-16 rounded-md overflow-hidden transition-all ${
                  idx === currentIndex 
                    ? 'border-2 border-rapunzel-gold/60 shadow-md' 
                    : 'border border-white/20 opacity-70 hover:opacity-95'
                }`}
                style={{
                  boxShadow: idx === currentIndex ? '0 0 10px rgba(255, 215, 0, 0.2)' : 'none'
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
