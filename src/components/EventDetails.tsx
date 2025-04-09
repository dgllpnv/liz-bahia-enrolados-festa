
import React from 'react';
import { MapPin, Calendar, Clock, Car } from 'lucide-react';
import QRCodeSVG from "react-qr-code";

const EventDetails = () => {
  const partyLocation = "https://maps.app.goo.gl/BXHXWoxH3UNyeaZe9"; // Google Maps link for Casa de Festa Mundo Caramelo
  const parkingLocation = "https://maps.app.goo.gl/pRYz2YLvV51DGVQW6"; // Google Maps link for Mais Empresarial

  return (
    <section id="details" className="section-container scroll-animation">
      <h2 className="tangled-heading mb-12 text-royal-gold drop-shadow-md">Detalhes do Evento</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/90 p-6 flex flex-col items-center text-center shadow-lg border-2 border-royal-gold/30 rounded-xl">
          <h3 className="font-cinzel text-2xl text-royal-gold font-bold mb-6 drop-shadow-sm">Informações</h3>
          
          <div className="space-y-6 w-full">
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
        
        <div className="bg-white/90 p-6 flex flex-col items-center shadow-lg border-2 border-royal-gold/30 rounded-xl">
          <h3 className="font-cinzel text-2xl text-royal-gold font-bold mb-6 drop-shadow-sm">QR Codes</h3>
          
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
  <div className="flex flex-col items-center">
    <div className="mb-2">{icon}</div>
    <h4 className="font-cinzel text-lg font-semibold text-royal-gold">
      {label}
    </h4>
    <p className="font-dancing text-xl text-royal-burgundy font-bold">
      {value}
    </p>
    {subtext && 
      <p className="text-sm text-[#4A4A4A] mt-1 bg-royal-cream/50 px-3 py-1.5 rounded-md border border-royal-gold/10">
        {subtext}
      </p>
    }
  </div>
);

const QRCodeCard = ({ title, url }: { title: string; url: string }) => (
  <div className="flex flex-col items-center p-4 bg-white border-2 border-royal-gold/30 rounded-lg shadow-md">
    <h4 className="font-cinzel text-lg font-semibold text-royal-gold mb-4">{title}</h4>
    <div className="bg-white p-2 rounded-md mb-3 shadow-md">
      <QRCodeSVG 
        value={url} 
        size={150}
        bgColor="#FFFFFF"
        fgColor="#000000"
        level="L"
      />
    </div>
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-sm text-white font-medium bg-royal-gold/70 px-4 py-1.5 rounded-full hover:bg-royal-gold/80 transition-colors"
    >
      Abrir no Maps
    </a>
  </div>
);

export default EventDetails;
