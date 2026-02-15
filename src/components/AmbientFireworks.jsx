import { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

const AmbientFireworks = () => {
  const intervalRef = useRef(null);

  useEffect(() => {
    const fireAmbientFirework = () => {
      const colors = ['#E60012', '#FFD700', '#FF6B6B', '#FFA500'];
      const x = Math.random() * 0.6 + 0.2; // 20% - 80% from left
      const y = Math.random() * 0.4 + 0.1; // 10% - 50% from top

      confetti({
        particleCount: 15, // Reduced from 30 for better performance
        spread: 60,
        origin: { x, y },
        colors: colors,
        gravity: 0.4,
        scalar: 0.8,
        drift: 0,
        ticks: 150,
        startVelocity: 20,
        decay: 0.9,
        zIndex: -1,
      });
    };

    // Fire ambient fireworks every 3-5 seconds
    const scheduleNext = () => {
      const delay = Math.random() * 2000 + 3000; // 3-5 seconds
      intervalRef.current = setTimeout(() => {
        fireAmbientFirework();
        scheduleNext();
      }, delay);
    };

    scheduleNext();

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, []);

  return null; // This component only handles side effects
};

export default AmbientFireworks;

