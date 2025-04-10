
import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock, Car, Crown, Sparkles, Star, Heart } from 'lucide-react';
import QRCodeSVG from "react-qr-code";
import { useIsMobile } from '../hooks/use-mobile';
import { cn } from '../lib/utils';

const EventDetails = () => {
  const isMobile = useIsMobile();
  const [activeHighlight, setActiveHighlight] = useState<number | null>(null);
  const partyLocation = "https://www.google.com/maps/place/MUNDO+CARAMELO+(antigo+TERRA+DO+NUNCA),+R.+Jo%C3%A3o+Chagas+Ortins+de+Freitas,+5+-+Buraquinho,+Lauro+de+Freitas+-+BA,+42710-610";
  const parkingLocation = "https://www.google.com/maps/place/Mais+Empresarial,+610,+R.+Jo%C3%A3o+Chagas+Ortins+de+Freitas+-+Buraquinho,+Lauro+de+Freitas+-+BA,+42700-000";

  useEffect(() => {
    // Create staggered highlight effect
    const interval = setInterval(() => {
      setActiveHighlight(prev => {
        if (prev === null || prev >= 3) return 0;
        return prev + 1;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const formatMapsUrl = (url: string) => {
    // Fix TypeScript errors by explicitly checking window object
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
    const isAndroid = /android/i.test(userAgent);

    if (isIOS) {
      return `comgooglemaps://?q=${encodeURIComponent(url)}`;
    } else if (isAndroid) {
      return `geo:0,0?q=${encodeURIComponent(url)}`;
    }
    
    return url;
  };

  const handleMapClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="details" className="section-container scroll-animation relative overflow-hidden">
      {/* Enhanced floating elements with varying sizes and animations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <div 
            key={`sparkle-${i}`}
            className="absolute"
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3 + (Math.random() * 0.4),
              animation: `pulse-glow ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
              transform: `rotate(${Math.random() * 45}deg) scale(${0.8 + Math.random() * 0.5})`,
            }}
          >
            {i % 3 === 0 ? (
              <Sparkles size={8 + Math.random() * 10} className="text-royal-gold" />
            ) : i % 3 === 1 ? (
              <Star size={6 + Math.random() * 8} className="text-royal-gold" />
            ) : (
              <Heart size={7 + Math.random() * 9} className="text-[#FF9FB6]/50" />
            )}
          </div>
        ))}
        
        {/* Elegant light beams in background */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 3 }).map((_, i) => (
            <div 
              key={`beam-${i}`} 
              className="absolute h-[60vh] w-[30px] bg-gradient-to-b from-transparent via-royal-gold/30 to-transparent blur-md"
              style={{
                left: `${20 + i * 30}%`,
                top: '-10%',
                transform: `rotate(${-10 + i * 10}deg)`,
                animation: `soft-float ${15 + i * 3}s ease-in-out infinite`,
                animationDelay: `${i * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Refined section title with more elegant animation */}
      <div className="flex items-center justify-center mb-12 relative">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center justify-center">
          <div className="absolute inset-0 blur-md opacity-30">
            <Crown className="h-5 w-5 text-royal-gold" />
          </div>
          <Crown className="h-5 w-5 text-royal-gold opacity-90 animate-float-slow" />
        </div>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9D6FE8]/60 to-transparent"></div>
        <h2 className="tangled-heading mx-6 text-[#7E69AB] drop-shadow-md relative">
          Detalhes do Evento
          <span className="absolute -top-1 -right-2 animate-pulse-glow" style={{ animationDelay: '0.5s' }}>
            <Sparkles size={10} className="text-royal-gold opacity-80" />
          </span>
          {/* Added subtle underline animation */}
          <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-royal-gold/60 to-transparent opacity-70"></span>
        </h2>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9D6FE8]/60 to-transparent"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Enhanced information card with more refined animations */}
        <div className="bg-white/95 p-8 flex flex-col items-center text-center shadow-lg border border-[#9D6FE8]/30 rounded-xl relative overflow-hidden transform hover:scale-[1.01] transition-all duration-500 group">
          {/* Improved subtle card background glow effect with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-royal-gold/5 via-transparent to-[#9D6FE8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          {/* Enhanced corner decorations with different shapes */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-royal-gold/10 to-[#9D6FE8]/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-tl from-[#FF9FB6]/10 to-transparent rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="mb-2 relative">
            <div className="absolute inset-0 blur-sm animate-pulse-glow opacity-50" style={{animationDelay: '1s'}}>
              <Crown className="h-6 w-6 text-royal-gold/70" />
            </div>
            <Crown className="h-6 w-6 text-[#9D6FE8] relative z-10" />
          </div>
          
          <h3 className="font-cinzel text-2xl text-[#7E69AB] font-bold mb-8 drop-shadow-sm tracking-wide relative">
            Informações
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-royal-gold/50 to-transparent"></div>
          </h3>
          
          <div className="space-y-8 w-full">
            <DetailItem 
              icon={<Calendar className="text-[#7E69AB] drop-shadow-md" size={28} />} 
              label="Data" 
              value="Em breve"
              isActive={activeHighlight === 0}
            />
            
            <DetailItem 
              icon={<Clock className="text-[#7E69AB] drop-shadow-md" size={28} />} 
              label="Horário" 
              value="A confirmar"
              isActive={activeHighlight === 1}
            />
            
            <DetailItem 
              icon={<MapPin className="text-[#7E69AB] drop-shadow-md" size={28} />} 
              label="Local" 
              value="A confirmar" 
              subtext="Detalhes serão enviados em breve"
              isActive={activeHighlight === 2}
            />
            
            <DetailItem 
              icon={<Car className="text-[#7E69AB] drop-shadow-md" size={28} />} 
              label="Estacionamento" 
              value="A confirmar"
              subtext="Informações serão fornecidas posteriormente"
              isActive={activeHighlight === 3}
            />
          </div>
          
          {/* Subtle moving gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out opacity-50 pointer-events-none"></div>
        </div>
        
        {/* Enhanced QR Code card with more refined effects */}
        <div className="bg-white/95 p-8 flex flex-col items-center shadow-lg border border-[#9D6FE8]/30 rounded-xl relative overflow-hidden transform hover:scale-[1.01] transition-all duration-500 group">
          {/* Improved animated background pattern with parallax effect */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute w-full h-full bg-[url('/background-pattern.png')] bg-repeat bg-[length:200px] animate-pulse-glow"></div>
          </div>
          
          {/* Refined floating elements in background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 4 }).map((_, i) => (
              <div 
                key={`qr-sparkle-${i}`}
                className="absolute"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: 0.2 + (Math.random() * 0.3),
                  animation: `soft-float ${4 + Math.random() * 3}s ease-in-out infinite`,
                  animationDelay: `${i * 0.7}s`,
                }}
              >
                <Sparkles size={8 + Math.random() * 6} className="text-royal-gold" />
              </div>
            ))}
          </div>
          
          <div className="mb-2 relative">
            <div className="absolute inset-0 blur-sm animate-pulse-glow opacity-50" style={{animationDelay: '0.5s'}}>
              <Crown className="h-6 w-6 text-royal-gold/70" />
            </div>
            <Crown className="h-6 w-6 text-[#9D6FE8] relative z-10" />
          </div>
          
          <h3 className="font-cinzel text-2xl text-[#7E69AB] font-bold mb-8 drop-shadow-sm tracking-wide relative">
            QR Codes
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-royal-gold/50 to-transparent"></div>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <QRCodeCard 
              title="Local da Festa" 
              url={partyLocation} 
              onMapClick={() => handleMapClick(partyLocation)}
            />
            
            <QRCodeCard 
              title="Estacionamento" 
              url={parkingLocation} 
              onMapClick={() => handleMapClick(parkingLocation)}
            />
          </div>
          
          {/* Enhanced moving gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out opacity-70 pointer-events-none"></div>
        </div>
      </div>

      <div style={{ display: 'none' }}>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            document.addEventListener('DOMContentLoaded', function() {
              document.querySelectorAll('.qr-map-link').forEach(function(link) {
                link.addEventListener('click', function(e) {
                  e.preventDefault();
                  var url = this.getAttribute('href');
                  
                  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
                  var isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
                  var isAndroid = /android/i.test(userAgent);
                  
                  if (isIOS || isAndroid) {
                    var mapsUrl = isIOS 
                      ? 'comgooglemaps://?q=' + encodeURIComponent(url)
                      : 'geo:0,0?q=' + encodeURIComponent(url);
                    
                    window.location.href = mapsUrl;
                    
                    setTimeout(function() {
                      window.location.href = url;
                    }, 2000);
                  } else {
                    window.open(url, '_blank');
                  }
                });
              });
            });
          })();
        `}} />
      </div>
    </section>
  );
};

const DetailItem = ({ 
  icon, 
  label, 
  value, 
  subtext,
  isActive = false
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  subtext?: string;
  isActive?: boolean;
}) => (
  <div className={cn(
    "flex flex-col items-center group transition-all duration-500",
    isActive && "scale-[1.02]"
  )}>
    <div className={cn(
      "mb-2 transform group-hover:scale-110 transition-transform duration-300 relative",
      isActive && "scale-110"
    )}>
      {/* Enhanced icon glow effect */}
      <div className={cn(
        "absolute inset-0 blur-md opacity-0 transition-opacity duration-300 scale-150",
        isActive ? "opacity-70" : "group-hover:opacity-100"
      )}>
        {icon}
      </div>
      <div className="relative z-10">
        {icon}
      </div>
    </div>
    
    <h4 className="font-cinzel text-lg font-semibold text-[#7E69AB] tracking-wider">
      {label}
    </h4>
    
    <p className={cn(
      "font-dancing text-xl font-bold mt-1 relative transition-colors duration-300",
      isActive ? "text-royal-gold" : "text-[#9D6FE8] group-hover:text-royal-gold"
    )}>
      {value}
      {/* Enhanced subtle line decoration */}
      <span className={cn(
        "absolute -bottom-1 left-1/2 -translate-x-1/2 h-px bg-royal-gold transition-all duration-500",
        isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:opacity-100 group-hover:w-full" 
      )}></span>
    </p>
    
    {subtext && 
      <p className={cn(
        "text-sm text-gray-700 mt-2 bg-white px-4 py-2 rounded-md border max-w-xs mx-auto shadow-sm transform transition-all duration-300",
        isActive 
          ? "border-royal-gold/50 translate-y-[-2px]" 
          : "border-[#9D6FE8]/30 group-hover:translate-y-[-2px] group-hover:border-royal-gold/30"
      )}>
        {subtext}
      </p>
    }
    
    {/* Subtle highlight animation for active state */}
    {isActive && (
      <div className="absolute inset-0 bg-royal-gold/5 rounded-xl animate-pulse-glow pointer-events-none"></div>
    )}
  </div>
);

const QRCodeCard = ({ 
  title, 
  url, 
  onMapClick 
}: { 
  title: string; 
  url: string; 
  onMapClick: () => void;
}) => {
  // Animation for hover state visibility
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="flex flex-col items-center p-5 bg-gradient-to-b from-white to-white border border-[#9D6FE8]/30 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced card hover glow effect with radial gradient */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-[#9D6FE8]/5 to-royal-gold/5"></div>
        <div className="absolute inset-0 bg-radial-gradient opacity-30"></div>
      </div>
      
      <h4 className="font-cinzel text-lg font-semibold text-[#7E69AB] mb-4 tracking-wide relative">
        {title}
        {/* Enhanced title decoration */}
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-royal-gold/50 to-transparent group-hover:w-full transition-all duration-500"></span>
      </h4>
      
      <div 
        className="bg-white p-3 rounded-md mb-4 shadow-sm border border-[#9D6FE8]/20 cursor-pointer relative transform group-hover:scale-105 transition-transform duration-500 overflow-hidden" 
        onClick={onMapClick}
        aria-label={`Escanear QR code para ${title}`}
      >
        {/* Enhanced QR code glow effect with pulse */}
        <div className="absolute inset-0 bg-gradient-to-br from-royal-gold/10 via-transparent to-[#9D6FE8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        {/* QR code scan line animation */}
        <div className={cn(
          "absolute h-1 w-full bg-gradient-to-r from-transparent via-royal-gold/40 to-transparent left-0 -translate-y-10 transition-opacity duration-300",
          isHovered ? "opacity-100 animate-scan-line" : "opacity-0"
        )}></div>
        
        <QRCodeSVG 
          value={url} 
          size={140}
          bgColor="#FFFFFF"
          fgColor="#000000"
          level="H"
        />
        
        {/* Enhanced corner sparkles with staggered animation */}
        <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: "rotate(15deg)", animationDelay: "0.2s" }}>
          <Sparkles size={12} className="text-royal-gold animate-pulse-glow" />
        </div>
        <div className="absolute -bottom-1 -left-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: "rotate(-15deg)", animationDelay: "0.5s" }}>
          <Sparkles size={12} className="text-royal-gold animate-pulse-glow" />
        </div>
        
        {/* Add corner decorations */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-royal-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-royal-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-royal-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-royal-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="qr-map-link text-sm text-white font-medium bg-gradient-to-r from-[#9D6FE8] to-[#7E69AB] px-5 py-1.5 rounded-full group-hover:shadow-md transition-all duration-300 relative overflow-hidden"
        onClick={(e) => {
          e.preventDefault();
          onMapClick();
        }}
      >
        {/* Enhanced button shine effect with smoother animation */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
        Abrir no Maps
      </a>
    </div>
  );
};

export default EventDetails;
