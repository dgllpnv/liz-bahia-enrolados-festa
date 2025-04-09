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
      {/* Royal background with lantern motif */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#F8F6FF]">
        {/* Subtle light effect at the top */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/30 to-transparent"></div>
        
        {/* Floating lanterns that stand out more */}
        {Array.from({ length: 15 }).map((_, index) => (
          <div 
            key={index}
            className="absolute royal-lantern"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${10 + Math.random() * 8}px`,
              height: `${15 + Math.random() * 12}px`,
              animationDelay: `${index * 1.8}s`
            }}
          >
            <div className="lantern-glow"></div>
          </div>
        ))}
        
        {/* Lantern icons spread through the page */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div 
            key={`lamp-${index}`}
            className="absolute text-rapunzel-gold/30 animate-soft-float"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${index * 1.4}s`,
              transform: `rotate(${Math.random() * 10}deg)`,
            }}
          >
            <Lamp size={index % 2 === 0 ? 24 : 18} />
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
      
      {/* Royal veil effect */}
      <div className="fixed inset-0 pointer-events-none bg-white/5 backdrop-blur-[1px]"></div>
    </div>
  );
};

export default Index;
