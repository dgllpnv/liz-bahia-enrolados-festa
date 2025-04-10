
import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('April 26, 2025 18:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-16 mt-8">
      {/* Updated heading to match "Detalhes do Evento" styling */}
      <div className="flex items-center justify-center mb-12 relative">
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9D6FE8]/60 to-transparent"></div>
        <h2 className="tangled-heading mx-6 text-[#7E69AB] drop-shadow-md relative">
          Contagem Regressiva
          <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-royal-gold/60 to-transparent opacity-70"></span>
        </h2>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9D6FE8]/60 to-transparent"></div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8">
        <TimeBox value={timeLeft.days} label="Dias" />
        <TimeBox value={timeLeft.hours} label="Horas" />
        <TimeBox value={timeLeft.minutes} label="Minutos" />
        <TimeBox value={timeLeft.seconds} label="Segundos" />
      </div>
    </div>
  );
};

const TimeBox = ({ value, label }: { value: number; label: string }) => (
  <div className="card-glass p-6 w-28 md:w-36 h-36 md:h-40 flex flex-col items-center justify-center animate-float shadow-lg border-2 border-white/30">
    <div className="text-4xl md:text-6xl font-cinzel text-[#5D4A8A] font-bold" style={{ textShadow: '0 2px 8px rgba(93, 74, 138, 0.4)' }}>
      {value}
    </div>
    <div className="text-sm md:text-base font-dancing text-[#1A1F2C] font-semibold mt-2">
      {label}
    </div>
  </div>
);

export default CountdownTimer;
