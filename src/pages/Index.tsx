
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
      {/* Background mais delicado - lanternas flutuantes mais sutis */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {Array.from({ length: 10 }).map((_, index) => (
          <div 
            key={index}
            className="absolute w-4 h-6 bg-rapunzel-gold opacity-20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: '0 0 10px rgba(255, 215, 0, 0.3)',
              animation: `lantern-float ${15 + Math.random() * 8}s linear infinite`,
              animationDelay: `${index * 2}s`
            }}
          ></div>
        ))}
        
        {/* Pequenas flores decorativas flutuantes */}
        {Array.from({ length: 6 }).map((_, index) => (
          <div 
            key={`flower-${index}`}
            className="absolute text-xl text-rapunzel-pink text-opacity-15 animate-soft-float"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${index * 1.2}s`,
              transform: `rotate(${Math.random() * 45}deg)`
            }}
          >
            ❀
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
      
      {/* Decorative hair strands mais delicados */}
      <div className="fixed bottom-0 left-0 w-1/3 h-60 pointer-events-none z-0">
        <div className="hair-strand animate-hair-flow" style={{ left: '10%', animationDelay: '0s', opacity: '0.4' }}></div>
        <div className="hair-strand animate-hair-flow" style={{ left: '25%', animationDelay: '0.5s', opacity: '0.3' }}></div>
      </div>
      
      <div className="fixed bottom-0 right-0 w-1/3 h-60 pointer-events-none z-0">
        <div className="hair-strand animate-hair-flow" style={{ right: '15%', animationDelay: '1s', opacity: '0.4' }}></div>
        <div className="hair-strand animate-hair-flow" style={{ right: '30%', animationDelay: '1.5s', opacity: '0.3' }}></div>
      </div>
    </div>
  );
};

export default Index;
