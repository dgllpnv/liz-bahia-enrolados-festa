
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
    <div className="mb-12 mt-4">
      <h3 className="font-cinzel text-2xl md:text-3xl text-center mb-6 text-rapunzel-purple-dark">
        Contagem Regressiva
      </h3>
      
      <div className="flex flex-wrap justify-center gap-4">
        <TimeBox value={timeLeft.days} label="Dias" />
        <TimeBox value={timeLeft.hours} label="Horas" />
        <TimeBox value={timeLeft.minutes} label="Minutos" />
        <TimeBox value={timeLeft.seconds} label="Segundos" />
      </div>
    </div>
  );
};

const TimeBox = ({ value, label }: { value: number; label: string }) => (
  <div className="card-glass p-4 w-20 md:w-24 flex flex-col items-center justify-center animate-float">
    <div className="text-2xl md:text-3xl font-cinzel text-rapunzel-purple-dark">
      {value}
    </div>
    <div className="text-xs md:text-sm font-dancing text-foreground mt-1">
      {label}
    </div>
  </div>
);

export default CountdownTimer;
