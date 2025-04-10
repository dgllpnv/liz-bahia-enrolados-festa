
import React from 'react';
import { MapPin, Calendar, Clock, Car, Crown, Sparkles } from 'lucide-react';
import QRCodeSVG from "react-qr-code";

const EventDetails = () => {
  const partyLocation = "https://www.google.com/maps/place/MUNDO+CARAMELO+(antigo+TERRA+DO+NUNCA),+R.+Jo%C3%A3o+Chagas+Ortins+de+Freitas,+5+-+Buraquinho,+Lauro+de+Freitas+-+BA,+42710-610";
  const parkingLocation = "https://www.google.com/maps/place/Mais+Empresarial,+610,+R.+Jo%C3%A3o+Chagas+Ortins+de+Freitas+-+Buraquinho,+Lauro+de+Freitas+-+BA,+42700-000";

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
      {/* Decorative floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <div 
            key={`sparkle-${i}`}
            className="absolute animate-pulse-glow"
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
              opacity: 0.4 + (Math.random() * 0.3),
            }}
          >
            <Sparkles 
              size={8 + Math.random() * 8} 
              className="text-royal-gold" 
            />
          </div>
        ))}
      </div>

      {/* Elegant section title with animation */}
      <div className="flex items-center justify-center mb-12 relative">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <Crown className="h-5 w-5 text-royal-gold opacity-70 animate-float-slow" />
        </div>
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#9D6FE8]/60 to-transparent"></div>
        <h2 className="tangled-heading mx-6 text-[#7E69AB] drop-shadow-md relative">
          Detalhes do Evento
          <span className="absolute -top-1 -right-2 animate-pulse-glow" style={{ animationDelay: '0.5s' }}>
            <Sparkles size={10} className="text-royal-gold opacity-80" />
          </span>
        </h2>
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#9D6FE8]/60 to-transparent"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Enhanced information card with animations */}
        <div className="bg-white/95 p-8 flex flex-col items-center text-center shadow-lg border border-[#9D6FE8]/30 rounded-xl relative overflow-hidden transform hover:scale-[1.01] transition-all duration-500 group">
          {/* Subtle card background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-royal-gold/5 via-transparent to-[#9D6FE8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          {/* Card decoration with animation */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-royal-gold/10 to-[#9D6FE8]/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="mb-2 relative">
            <Crown className="h-6 w-6 text-[#9D6FE8]" />
            <div className="absolute inset-0 blur-sm animate-pulse-glow opacity-50">
              <Crown className="h-6 w-6 text-royal-gold/50" />
            </div>
          </div>
          
          <h3 className="font-cinzel text-2xl text-[#7E69AB] font-bold mb-8 drop-shadow-sm tracking-wide relative">
            Informações
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-royal-gold/30 to-transparent"></div>
          </h3>
          
          <div className="space-y-8 w-full">
            <DetailItem 
              icon={<Calendar className="text-[#7E69AB] drop-shadow-md" size={28} />} 
              label="Data" 
              value="Em breve" 
            />
            
            <DetailItem 
              icon={<Clock className="text-[#7E69AB] drop-shadow-md" size={28} />} 
              label="Horário" 
              value="A confirmar" 
            />
            
            <DetailItem 
              icon={<MapPin className="text-[#7E69AB] drop-shadow-md" size={28} />} 
              label="Local" 
              value="A confirmar" 
              subtext="Detalhes serão enviados em breve" 
            />
            
            <DetailItem 
              icon={<Car className="text-[#7E69AB] drop-shadow-md" size={28} />} 
              label="Estacionamento" 
              value="A confirmar"
              subtext="Informações serão fornecidas posteriormente" 
            />
          </div>
        </div>
        
        {/* Enhanced QR Code card with elegent glow effects */}
        <div className="bg-white/95 p-8 flex flex-col items-center shadow-lg border border-[#9D6FE8]/30 rounded-xl relative overflow-hidden transform hover:scale-[1.01] transition-all duration-500">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute w-full h-full bg-[url('/background-pattern.png')] bg-repeat bg-[length:200px] animate-pulse-glow"></div>
          </div>
          
          <div className="mb-2 relative">
            <Crown className="h-6 w-6 text-[#9D6FE8]" />
            <div className="absolute inset-0 blur-sm animate-pulse-glow opacity-50">
              <Crown className="h-6 w-6 text-royal-gold/50" />
            </div>
          </div>
          
          <h3 className="font-cinzel text-2xl text-[#7E69AB] font-bold mb-8 drop-shadow-sm tracking-wide relative">
            QR Codes
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-royal-gold/30 to-transparent"></div>
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
  subtext 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  subtext?: string;
}) => (
  <div className="flex flex-col items-center group">
    <div className="mb-2 transform group-hover:scale-110 transition-transform duration-300 relative">
      {icon}
      {/* Icon glow effect on hover */}
      <div className="absolute inset-0 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150">
        {icon}
      </div>
    </div>
    <h4 className="font-cinzel text-lg font-semibold text-[#7E69AB] tracking-wider">
      {label}
    </h4>
    <p className="font-dancing text-xl text-[#9D6FE8] font-bold mt-1 relative group-hover:text-royal-gold transition-colors duration-300">
      {value}
      {/* Subtle line decoration on hover */}
      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-royal-gold opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-500"></span>
    </p>
    {subtext && 
      <p className="text-sm text-gray-700 mt-2 bg-white px-4 py-2 rounded-md border border-[#9D6FE8]/30 max-w-xs mx-auto shadow-sm transform group-hover:translate-y-[-2px] transition-transform duration-300">
        {subtext}
      </p>
    }
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
}) => (
  <div className="flex flex-col items-center p-5 bg-gradient-to-b from-white to-white border border-[#9D6FE8]/30 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 group relative overflow-hidden">
    {/* Card hover glow effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#9D6FE8]/5 to-royal-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <h4 className="font-cinzel text-lg font-semibold text-[#7E69AB] mb-4 tracking-wide relative">
      {title}
      {/* Title decoration */}
      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-royal-gold/40 to-transparent group-hover:w-full transition-all duration-500"></span>
    </h4>
    
    <div 
      className="bg-white p-3 rounded-md mb-4 shadow-sm border border-[#9D6FE8]/20 cursor-pointer relative transform group-hover:scale-105 transition-transform duration-500 overflow-hidden" 
      onClick={onMapClick}
      aria-label={`Escanear QR code para ${title}`}
    >
      {/* QR glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-royal-gold/10 via-transparent to-[#9D6FE8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <QRCodeSVG 
        value={url} 
        size={140}
        bgColor="#FFFFFF"
        fgColor="#000000"
        level="H"
      />
      
      {/* Corner sparkles */}
      <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: "rotate(15deg)" }}>
        <Sparkles size={12} className="text-royal-gold" />
      </div>
      <div className="absolute -bottom-1 -left-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: "rotate(-15deg)" }}>
        <Sparkles size={12} className="text-royal-gold" />
      </div>
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
      {/* Button shine effect */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      Abrir no Maps
    </a>
  </div>
);

export default EventDetails;
