
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
      <h3 className="font-cinzel text-3xl md:text-4xl text-center mb-8 text-[#6E59A5] font-bold drop-shadow-md">
        Contagem Regressiva
      </h3>
      
      <div className="flex flex-wrap justify-center gap-6">
        <TimeBox value={timeLeft.days} label="Dias" />
        <TimeBox value={timeLeft.hours} label="Horas" />
        <TimeBox value={timeLeft.minutes} label="Minutos" />
        <TimeBox value={timeLeft.seconds} label="Segundos" />
      </div>
    </div>
  );
};

const TimeBox = ({ value, label }: { value: number; label: string }) => (
  <div className="card-glass p-5 w-24 md:w-32 h-32 md:h-36 flex flex-col items-center justify-center animate-float shadow-lg border-2 border-white/30">
    <div className="text-3xl md:text-5xl font-cinzel text-[#6E59A5] font-bold drop-shadow-md">
      {value}
    </div>
    <div className="text-sm md:text-base font-dancing text-[#1A1F2C] font-semibold mt-2">
      {label}
    </div>
  </div>
);

export default CountdownTimer;
