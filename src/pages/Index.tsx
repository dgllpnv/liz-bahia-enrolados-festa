
import React, { useEffect } from 'react';
import Header from '../components/Header';
import CountdownTimer from '../components/CountdownTimer';
import EventDetails from '../components/EventDetails';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import ScrollAnimation from '../components/ScrollAnimation';
import { Crown } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
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
      {/* Lighter background for better visibility */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-gradient-to-b from-[#4A67B3]/60 via-[#7B92D0]/50 to-[#A9B4E2]/40">
        {/* Light veil effect - softer gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/20 mix-blend-overlay"></div>
        
        {/* Tangled floating lanterns in the background - reduced quantity and opacity */}
        <div className="absolute inset-0">
          {Array.from({ length: isMobile ? 7 : 15 }).map((_, index) => (
            <div 
              key={`float-lantern-${index}`}
              className="absolute tangled-lantern"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${index * 0.6}s`,
                opacity: 0.5 + (Math.random() * 0.3), // Lighter opacity
                transform: `scale(${isMobile ? 0.3 + (Math.random() * 0.3) : 0.4 + (Math.random() * 0.6)})`,
              }}
            >
              <div className="tangled-lantern-light"></div>
              <div className="tangled-lantern-body"></div>
              <div className="tangled-lantern-glow"></div>
            </div>
          ))}
        </div>
        
        {/* Small Royal Embelishments - more subtle */}
        {Array.from({ length: isMobile ? 2 : 3 }).map((_, index) => (
          <div 
            key={`crown-${index}`}
            className="absolute text-royal-gold/30 animate-soft-float"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${Math.random() * 100}%`,
              animation: `soft-float ${8 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${index * 2.5}s`,
              transform: `rotate(${Math.random() * 5}deg) scale(${0.7 + Math.random() * 0.3})`,
            }}
          >
            <Crown size={index % 2 === 0 ? 16 : 14} />
          </div>
        ))}
      </div>
      
      {/* Main content */}
      <Header />
      
      <main className="flex-grow z-10">
        <ScrollAnimation>
          <section className="py-6 md:py-12 px-4">
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
      
      {/* Light veil effect - more transparent */}
      <div className="fixed inset-0 pointer-events-none bg-white/10 backdrop-blur-[0.1px]"></div>
    </div>
  );
};

export default Index;
