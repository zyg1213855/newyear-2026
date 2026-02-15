import { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

const CheatCodeListener = () => {
  const inputSequence = useRef([]);
  const targetSequence = 'money'.toLowerCase().split('');

  useEffect(() => {
    const handleKeyPress = (e) => {
      const key = e.key.toLowerCase();
      
      // Add key to sequence
      inputSequence.current.push(key);
      
      // Keep only last 5 characters
      if (inputSequence.current.length > 5) {
        inputSequence.current.shift();
      }

      // Check if sequence matches "money"
      if (inputSequence.current.join('') === 'money') {
        triggerMoneyRain();
        inputSequence.current = []; // Reset sequence
      }
    };

    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  const triggerMoneyRain = () => {
    const duration = 5000; // 5 seconds
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 3;

      // Rain from random positions at the top
      confetti({
        particleCount,
        startVelocity: 0,
        ticks: 300,
        origin: {
          x: Math.random(),
          y: -0.1
        },
        colors: ['#FFD700', '#FFA500', '#FFDF00', '#FFE55C'],
        shapes: ['circle'],
        gravity: 0.6,
        scalar: 1.5,
        drift: Math.random() * 0.5 - 0.25,
        zIndex: 9999,
      });
    }, 50);

    // Show notification
    const notification = document.createElement('div');
    notification.innerHTML = '💰 金币雨来啦！财源滚滚！💰';
    notification.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(135deg, #FFD700, #FFA500);
      color: #000;
      padding: 20px 40px;
      border-radius: 20px;
      font-size: 24px;
      font-weight: bold;
      z-index: 10000;
      box-shadow: 0 10px 40px rgba(255, 215, 0, 0.6);
      animation: pulse 0.5s ease-in-out;
      font-family: 'Noto Serif SC', serif;
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.transition = 'opacity 0.5s';
      notification.style.opacity = '0';
      setTimeout(() => document.body.removeChild(notification), 500);
    }, 2000);
  };

  return null; // This component only handles side effects
};

export default CheatCodeListener;

