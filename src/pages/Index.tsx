
import React, { useEffect } from 'react';
import Header from '../components/Header';
import CountdownTimer from '../components/CountdownTimer';
import EventDetails from '../components/EventDetails';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import ScrollAnimation from '../components/ScrollAnimation';
import { Lamp } from 'lucide-react';

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
      {/* More subtle background with fewer elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-gradient-to-b from-[#F9F8FF] to-[#F5F0FD]">
        {/* Subtle light effect at the top */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/30 to-transparent"></div>
        
        {/* Fewer floating lanterns with reduced opacity */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div 
            key={index}
            className="absolute royal-lantern"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${10 + Math.random() * 8}px`,
              height: `${15 + Math.random() * 12}px`,
              animation: `lantern-royal-float ${25 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${index * 2.5}s`,
              opacity: 0.5
            }}
          >
            <div className="lantern-glow"></div>
          </div>
        ))}
        
        {/* Fewer lantern icons with reduced opacity */}
        {Array.from({ length: 5 }).map((_, index) => (
          <div 
            key={`lamp-${index}`}
            className="absolute text-rapunzel-gold/25 animate-soft-float"
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${Math.random() * 100}%`,
              animation: `soft-float ${8 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${index * 2}s`,
              transform: `rotate(${Math.random() * 8}deg)`,
              filter: 'drop-shadow(0 0 2px rgba(255, 215, 0, 0.2))'
            }}
          >
            <Lamp size={index % 2 === 0 ? 22 : 18} />
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
      
      {/* Very subtle veil effect */}
      <div className="fixed inset-0 pointer-events-none bg-white/3 backdrop-blur-[0.3px]"></div>
    </div>
  );
};

export default Index;
