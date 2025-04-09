
import React, { useEffect } from 'react';
import Header from '../components/Header';
import CountdownTimer from '../components/CountdownTimer';
import EventDetails from '../components/EventDetails';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import ScrollAnimation from '../components/ScrollAnimation';

const Index = () => {
  useEffect(() => {
    // Add scroll animation functionality
    const animateOnScroll = () => {
      const scrollAnimations = document.querySelectorAll('.scroll-animation');
      
      scrollAnimations.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight * 0.85) {
          element.classList.add('visible');
        }
      });
    };
    
    // Animate elements that are already in view on load
    setTimeout(animateOnScroll, 300);
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background mais delicado - com mais luz e transparência */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Efeito de luz suave no topo */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/40 to-transparent"></div>
        
        {/* Lanternas delicadas */}
        {Array.from({ length: 12 }).map((_, index) => (
          <div 
            key={index}
            className="absolute w-3 h-5 bg-rapunzel-gold opacity-15 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: '0 0 8px rgba(255, 215, 0, 0.2)',
              animation: `lantern-float ${15 + Math.random() * 10}s linear infinite`,
              animationDelay: `${index * 1.5}s`
            }}
          ></div>
        ))}
        
        {/* Pequenas flores decorativas flutuantes mais suaves */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div 
            key={`flower-${index}`}
            className="absolute text-lg text-opacity-10 animate-soft-float"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${index * 1.4}s`,
              transform: `rotate(${Math.random() * 45}deg)`,
              color: index % 2 === 0 ? '#FFDEE2' : '#FFD700',
              opacity: '0.1'
            }}
          >
            {index % 3 === 0 ? '❀' : '✿'}
          </div>
        ))}
      </div>
      
      {/* Main content */}
      <Header />
      
      <main className="flex-grow">
        <ScrollAnimation>
          <section className="py-12 px-4">
            <div className="container mx-auto">
              <CountdownTimer />
            </div>
          </section>
        </ScrollAnimation>
        
        <ScrollAnimation>
          <EventDetails />
        </ScrollAnimation>
        
        <ScrollAnimation>
          <Gallery />
        </ScrollAnimation>
      </main>
      
      <ScrollAnimation>
        <Footer />
      </ScrollAnimation>
      
      {/* Decorative hair strands mais delicados e etéreos */}
      <div className="fixed bottom-0 left-0 w-1/4 h-60 pointer-events-none z-0">
        <div className="hair-strand animate-hair-flow" style={{ left: '15%', animationDelay: '0s', opacity: '0.3' }}></div>
        <div className="hair-strand animate-hair-flow" style={{ left: '30%', animationDelay: '0.8s', opacity: '0.2' }}></div>
      </div>
      
      <div className="fixed bottom-0 right-0 w-1/4 h-60 pointer-events-none z-0">
        <div className="hair-strand animate-hair-flow" style={{ right: '20%', animationDelay: '1.2s', opacity: '0.3' }}></div>
        <div className="hair-strand animate-hair-flow" style={{ right: '35%', animationDelay: '2s', opacity: '0.2' }}></div>
      </div>
      
      {/* Efeito de véu delicado */}
      <div className="fixed inset-0 pointer-events-none bg-white/5 backdrop-blur-[1px]"></div>
    </div>
  );
};

export default Index;
