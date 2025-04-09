
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
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Enhanced royal background with improved lantern motif */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-gradient-to-b from-[#F8F6FF] to-[#F1E8FB]">
        {/* Enhanced light effect at the top */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/40 to-transparent"></div>
        
        {/* Floating lanterns with improved visibility and glow */}
        {Array.from({ length: 15 }).map((_, index) => (
          <div 
            key={index}
            className="absolute royal-lantern"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${12 + Math.random() * 10}px`,
              height: `${18 + Math.random() * 15}px`,
              animation: `lantern-royal-float ${20 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${index * 1.8}s`
            }}
          >
            <div className="lantern-glow"></div>
          </div>
        ))}
        
        {/* Improved lantern icons with better contrast */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div 
            key={`lamp-${index}`}
            className="absolute text-rapunzel-gold/40 animate-soft-float"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${Math.random() * 100}%`,
              animation: `soft-float ${6 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${index * 1.4}s`,
              transform: `rotate(${Math.random() * 10}deg)`,
              filter: 'drop-shadow(0 0 4px rgba(255, 215, 0, 0.3))'
            }}
          >
            <Lamp size={index % 2 === 0 ? 28 : 22} />
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
      
      {/* Enhanced royal veil effect */}
      <div className="fixed inset-0 pointer-events-none bg-white/5 backdrop-blur-[0.5px]"></div>
    </div>
  );
};

export default Index;
