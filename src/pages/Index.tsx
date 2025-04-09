
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
    
    // Preload gallery images - Removido daqui pois agora está no componente Gallery
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated background elements - floating lanterns */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {Array.from({ length: 5 }).map((_, index) => (
          <div 
            key={index}
            className="absolute w-4 h-6 bg-rapunzel-gold opacity-30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: '0 0 10px rgba(255, 215, 0, 0.5)',
              animation: `lantern-float ${15 + Math.random() * 5}s linear infinite`,
              animationDelay: `${index * 1.5}s`
            }}
          ></div>
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
      
      {/* Decorative hair strands */}
      <div className="fixed bottom-0 left-0 w-1/3 h-60 pointer-events-none z-0">
        <div className="hair-strand animate-hair-flow" style={{ left: '10%', animationDelay: '0s' }}></div>
        <div className="hair-strand animate-hair-flow" style={{ left: '25%', animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="fixed bottom-0 right-0 w-1/3 h-60 pointer-events-none z-0">
        <div className="hair-strand animate-hair-flow" style={{ right: '15%', animationDelay: '1s' }}></div>
        <div className="hair-strand animate-hair-flow" style={{ right: '30%', animationDelay: '1.5s' }}></div>
      </div>
    </div>
  );
};

export default Index;
