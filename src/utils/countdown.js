import { useState, useEffect } from 'react';

export const useCountdown = (targetDate) => {
    const [countdown, setCountdown] = useState('');
  
    useEffect(() => {
      const calculateTime = () => {
        const now = new Date().getTime();
        const target = new Date(targetDate).getTime();
        const distance = target - now;
  
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
      };
  
      const timer = setInterval(() => setCountdown(calculateTime()), 1000);
      return () => clearInterval(timer);
    }, [targetDate]);
  
    return countdown;
};