
import React from 'react';
import { MapPin, Calendar, Clock, Car, Crown } from 'lucide-react';
import QRCodeSVG from "react-qr-code";

const EventDetails = () => {
  const partyLocation = "https://maps.app.goo.gl/BXHXWoxH3UNyeaZe9"; // Google Maps link for Casa de Festa Mundo Caramelo
  const parkingLocation = "https://maps.app.goo.gl/pRYz2YLvV51DGVQW6"; // Google Maps link for Mais Empresarial

  return (
    <section id="details" className="section-container scroll-animation">
      <div className="flex items-center justify-center mb-10">
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-royal-gold/40 to-transparent"></div>
        <h2 className="tangled-heading mx-6 text-royal-gold drop-shadow-md">Detalhes do Evento</h2>
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-royal-gold/40 to-transparent"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-white/80 p-8 flex flex-col items-center text-center shadow-lg border border-royal-gold/20 rounded-xl">
          <div className="mb-2">
            <Crown className="h-6 w-6 text-royal-gold" />
          </div>
          <h3 className="font-cinzel text-2xl text-royal-gold font-bold mb-8 drop-shadow-sm tracking-wide">Informações</h3>
          
          <div className="space-y-8 w-full">
            <DetailItem 
              icon={<Calendar className="text-royal-gold drop-shadow-md" size={28} />} 
              label="Data" 
              value="26 de Abril de 2025" 
            />
            
            <DetailItem 
              icon={<Clock className="text-royal-gold drop-shadow-md" size={28} />} 
              label="Horário" 
              value="18:00h" 
            />
            
            <DetailItem 
              icon={<MapPin className="text-royal-gold drop-shadow-md" size={28} />} 
              label="Local" 
              value="Casa de Festa Mundo Caramelo" 
              subtext="R. João Chagas Ortins de Freitas, 5 - Buraquinho, Lauro de Freitas - BA, 42710-610" 
            />
            
            <DetailItem 
              icon={<Car className="text-royal-gold drop-shadow-md" size={28} />} 
              label="Estacionamento" 
              value="Mais Empresarial"
              subtext="610, R. João Chagas Ortins de Freitas - Buraquinho, Lauro de Freitas - BA, 42700-000" 
            />
          </div>
        </div>
        
        <div className="bg-white/80 p-8 flex flex-col items-center shadow-lg border border-royal-gold/20 rounded-xl">
          <div className="mb-2">
            <Crown className="h-6 w-6 text-royal-gold" />
          </div>
          <h3 className="font-cinzel text-2xl text-royal-gold font-bold mb-8 drop-shadow-sm tracking-wide">QR Codes</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <QRCodeCard 
              title="Local da Festa" 
              url={partyLocation} 
            />
            
            <QRCodeCard 
              title="Estacionamento" 
              url={parkingLocation} 
            />
          </div>
        </div>
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
    <div className="mb-2 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <h4 className="font-cinzel text-lg font-semibold text-royal-gold tracking-wider">
      {label}
    </h4>
    <p className="font-dancing text-xl text-royal-pink font-bold mt-1">
      {value}
    </p>
    {subtext && 
      <p className="text-sm text-white mt-2 bg-royal-pink/10 px-4 py-2 rounded-md border border-royal-gold/10 max-w-xs mx-auto">
        {subtext}
      </p>
    }
  </div>
);

const QRCodeCard = ({ title, url }: { title: string; url: string }) => (
  <div className="flex flex-col items-center p-5 bg-gradient-to-b from-white to-royal-pink-light/10 border border-royal-gold/20 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
    <h4 className="font-cinzel text-lg font-semibold text-royal-gold mb-4 tracking-wide">{title}</h4>
    <div className="bg-white p-3 rounded-md mb-4 shadow-sm border border-royal-gold/10">
      <QRCodeSVG 
        value={url} 
        size={140}
        bgColor="#FFFFFF"
        fgColor="#000000"
        level="L"
      />
    </div>
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-sm text-white font-medium bg-gradient-to-r from-royal-pink/90 to-royal-pink px-5 py-1.5 rounded-full hover:shadow-md transition-all duration-300"
    >
      Abrir no Maps
    </a>
  </div>
);

export default EventDetails;
