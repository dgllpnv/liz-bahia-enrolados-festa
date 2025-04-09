
import React, { useEffect } from 'react';
import Header from '../components/Header';
import CountdownTimer from '../components/CountdownTimer';
import EventDetails from '../components/EventDetails';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import ScrollAnimation from '../components/ScrollAnimation';
import { Crown } from 'lucide-react';

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
    
    // Handle hash navigation on load
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const targetElement = document.getElementById(hash.substring(1));
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500); // Delay to ensure DOM is fully loaded
      }
    };
    
    handleHashNavigation();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Tangled inspired night sky with floating lanterns background - cores mais intensas */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-gradient-to-b from-[#162249] via-[#2C3E7B] to-[#4A5CB0]/90">
        {/* Deep night sky effect - darker at top */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0B1025]/80 to-transparent"></div>
        
        {/* Tangled floating lanterns in the background - com brilho mais intenso */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, index) => (
            <div 
              key={`float-lantern-${index}`}
              className="absolute tangled-lantern"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${index * 0.5}s`,
                opacity: 0.8 + (Math.random() * 0.2), // Increased opacity for stronger colors
                transform: `scale(${0.4 + (Math.random() * 0.8)})`,
              }}
            >
              <div className="tangled-lantern-light"></div>
              <div className="tangled-lantern-body"></div>
              <div className="tangled-lantern-glow"></div>
            </div>
          ))}
        </div>
        
        {/* Small Royal Embelishments - mais brilhantes */}
        {Array.from({ length: 5 }).map((_, index) => (
          <div 
            key={`crown-${index}`}
            className="absolute text-royal-gold/15 animate-soft-float"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${Math.random() * 100}%`,
              animation: `soft-float ${8 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${index * 2.5}s`,
              transform: `rotate(${Math.random() * 5}deg) scale(${0.8 + Math.random() * 0.4})`,
            }}
          >
            <Crown size={index % 2 === 0 ? 18 : 15} />
          </div>
        ))}
      </div>
      
      {/* Main content */}
      <Header />
      
      <main className="flex-grow z-10">
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
      
      {/* Light veil effect - mais sutil para mostrar as cores fortes */}
      <div className="fixed inset-0 pointer-events-none bg-white/3 backdrop-blur-[0.1px]"></div>
    </div>
  );
};

export default Index;
