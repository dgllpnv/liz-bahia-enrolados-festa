
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Photo gallery with placeholder images
// In a real implementation, these would be replaced with actual photos
const photos = [
  '/gallery/photo1.jpg',
  '/gallery/photo2.jpg',
  '/gallery/photo3.jpg',
  '/gallery/photo4.jpg',
  '/gallery/photo5.jpg',
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

  return (
    <section id="gallery" className="section-container scroll-animation">
      <h2 className="tangled-heading mb-12 text-rapunzel-purple-dark">Nossa Princesa</h2>
      
      <div className="max-w-3xl mx-auto relative">
        <div className="relative rounded-xl overflow-hidden card-glass p-3">
          {/* Frame decoration */}
          <div className="absolute inset-0 p-2 border-4 rounded-xl border-rapunzel-gold border-opacity-30"></div>
          
          <div className="relative h-80 md:h-96 overflow-hidden rounded-lg">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-500 transform hover:scale-105"
              style={{ backgroundImage: `url(${photos[currentIndex]})` }}
            ></div>
            
            {/* Watercolor overlay effect */}
            <div className="absolute inset-0 bg-[url('/watercolor-overlay.png')] bg-cover opacity-20 mix-blend-overlay pointer-events-none"></div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 backdrop-blur-sm hover:bg-opacity-50 p-2 rounded-full transition-all"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="text-rapunzel-purple-dark" />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 backdrop-blur-sm hover:bg-opacity-50 p-2 rounded-full transition-all"
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
