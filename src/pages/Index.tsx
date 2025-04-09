
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
      {/* Subtle background with royal elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-gradient-to-b from-[#FFF8E1]/40 to-[#F5F0FD]/40">
        {/* Very subtle light effect at the top */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/20 to-transparent"></div>
        
        {/* Floating lanterns in the background */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div 
            key={`float-lantern-${index}`}
            className="absolute royal-lantern"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${Math.random() * 100}%`,
              animation: `lantern-royal-float ${20 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${index * 2}s`,
              opacity: 0.7 + (Math.random() * 0.3)
            }}
          >
            <div className="floating-lantern"></div>
            <div className="lantern-royal-glow"></div>
          </div>
        ))}
        
        {/* Minimal royal flourishes with reduced opacity */}
        {Array.from({ length: 3 }).map((_, index) => (
          <div 
            key={index}
            className="absolute royal-flourish"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${Math.random() * 100}%`,
              width: `${10 + Math.random() * 6}px`,
              height: `${15 + Math.random() * 10}px`,
              animation: `flourish-float ${20 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${index * 3}s`,
              opacity: 0.15
            }}
          >
            <div className="flourish-glow"></div>
          </div>
        ))}
        
        {/* Subtle crown icons with reduced opacity */}
        {Array.from({ length: 2 }).map((_, index) => (
          <div 
            key={`crown-${index}`}
            className="absolute text-royal-gold/10 animate-soft-float"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${Math.random() * 100}%`,
              animation: `soft-float ${8 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${index * 2.5}s`,
              transform: `rotate(${Math.random() * 5}deg)`,
              filter: 'drop-shadow(0 0 1px rgba(255, 215, 0, 0.1))'
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
      
      {/* Subtle veil effect */}
      <div className="fixed inset-0 pointer-events-none bg-white/2 backdrop-blur-[0.2px]"></div>
    </div>
  );
};

export default Index;
