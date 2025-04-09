
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

// Updated photos with the new uploaded images
const photos = [
  '/lovable-uploads/377b50cf-623e-48b5-bae3-b3953172486a.png',
  '/lovable-uploads/074c2280-8f25-4d62-bd6a-a8b05c98e01c.png',
  '/lovable-uploads/ce35d5eb-e405-4c5a-b3fd-abf06d5b7e95.png',
  '/lovable-uploads/0a6355f1-e12c-4e86-9eea-161bebd45f0d.png',
  '/lovable-uploads/228a2b66-0e61-4957-81b3-fa0e98aa8bbf.png',
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? photos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === photos.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Preload images for smoother transitions
  useEffect(() => {
    photos.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <section id="gallery" className="section-container scroll-animation">
      <h2 className="tangled-heading mb-12 text-[#5D4A8A] font-bold text-3xl md:text-4xl" 
          style={{ textShadow: '0 2px 4px rgba(29, 25, 43, 0.6)' }}>
        Nossa Princesa
      </h2>
      
      <div className="max-w-3xl mx-auto relative">
        <div className="relative rounded-xl overflow-hidden card-glass p-3">
          {/* Frame decoration */}
          <div className="absolute inset-0 p-2 border-4 rounded-xl border-rapunzel-gold border-opacity-30"></div>
          
          <div className="relative h-80 md:h-96 overflow-hidden rounded-lg">
            <img 
              src={photos[currentIndex]}
              alt={`Nossa Princesa ${currentIndex + 1}`}
              className="absolute inset-0 w-full h-full object-contain transition-all duration-500 transform hover:scale-105"
            />
            
            {/* Watercolor overlay effect */}
            <div className="absolute inset-0 bg-[url('/watercolor-overlay.png')] bg-cover opacity-20 mix-blend-overlay pointer-events-none"></div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 backdrop-blur-sm hover:bg-opacity-50 p-2 rounded-full transition-all z-10"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="text-rapunzel-purple-dark" />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 backdrop-blur-sm hover:bg-opacity-50 p-2 rounded-full transition-all z-10"
            aria-label="Próxima foto"
          >
            <ChevronRight className="text-rapunzel-purple-dark" />
          </button>
        </div>
        
        {/* Thumbnails */}
        <div className="flex justify-center mt-4 gap-2 overflow-x-auto pb-2">
          {photos.map((photo, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-12 w-12 md:h-16 md:w-16 rounded-md overflow-hidden border-2 transition-all ${
                idx === currentIndex 
                  ? 'border-rapunzel-gold' 
                  : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img 
                src={photo} 
                alt={`Thumbnail ${idx + 1}`} 
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
