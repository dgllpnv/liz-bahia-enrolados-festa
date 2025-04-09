
import React from 'react';
import { MapPin, Calendar, Clock, Car } from 'lucide-react';
import { QRCodeSVG } from 'react-qr-code';

const EventDetails = () => {
  const partyLocation = "https://maps.app.goo.gl/BXHXWoxH3UNyeaZe9"; // Google Maps link for Casa de Festa Mundo Caramelo
  const parkingLocation = "https://maps.app.goo.gl/pRYz2YLvV51DGVQW6"; // Google Maps link for Mais Empresarial

  return (
    <section id="details" className="section-container scroll-animation">
      <h2 className="tangled-heading mb-12 text-rapunzel-purple-dark">Detalhes do Evento</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card-glass p-6 flex flex-col items-center text-center">
          <h3 className="font-cinzel text-2xl text-rapunzel-purple-dark mb-6">Informações</h3>
          
          <div className="space-y-6 w-full">
            <DetailItem 
              icon={<Calendar className="text-rapunzel-gold" />} 
              label="Data" 
              value="26 de Abril de 2025" 
            />
            
            <DetailItem 
              icon={<Clock className="text-rapunzel-gold" />} 
              label="Horário" 
              value="18:00h" 
            />
            
            <DetailItem 
              icon={<MapPin className="text-rapunzel-gold" />} 
              label="Local" 
              value="Casa de Festa Mundo Caramelo" 
              subtext="R. João Chagas Ortins de Freitas, 5 - Buraquinho, Lauro de Freitas - BA, 42710-610" 
            />
            
            <DetailItem 
              icon={<Car className="text-rapunzel-gold" />} 
              label="Estacionamento" 
              value="Mais Empresarial"
              subtext="610, R. João Chagas Ortins de Freitas - Buraquinho, Lauro de Freitas - BA, 42700-000" 
            />
          </div>
        </div>
        
        <div className="card-glass p-6 flex flex-col items-center">
          <h3 className="font-cinzel text-2xl text-rapunzel-purple-dark mb-6">QR Codes</h3>
          
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
    <h4 className="font-cinzel text-lg text-foreground">{label}</h4>
    <p className="font-dancing text-xl text-rapunzel-purple-dark">{value}</p>
    {subtext && <p className="text-sm text-muted-foreground mt-1">{subtext}</p>}
  </div>
);

const QRCodeCard = ({ title, url }: { title: string; url: string }) => (
  <div className="flex flex-col items-center p-4 gold-border">
    <h4 className="font-cinzel text-lg text-foreground mb-4">{title}</h4>
    <div className="bg-white p-2 rounded-md mb-3">
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
      className="text-sm text-rapunzel-purple-dark underline hover:text-rapunzel-gold transition-colors"
    >
      Abrir no Maps
    </a>
  </div>
);

export default EventDetails;
