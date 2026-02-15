import { useCallback } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Fireworks = () => {
  const fireConfetti = useCallback((x, y) => {
    const colors = ['#E60012', '#FFD700', '#FF6B6B', '#FFA500'];
    
    // Reduced particle count for mobile performance
    confetti({
      particleCount: 50, // Reduced from 100
      spread: 70,
      origin: { x, y },
      colors: colors,
      gravity: 0.8,
      scalar: 1.2,
      drift: 0,
      ticks: 150, // Reduced from 200
    });

    // Second burst with stars (reduced)
    setTimeout(() => {
      confetti({
        particleCount: 25, // Reduced from 50
        spread: 100,
        origin: { x, y },
        colors: colors,
        shapes: ['star'],
        scalar: 1.5,
        gravity: 0.5,
      });
    }, 100);
  }, []);

  const handleClick = useCallback((e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    fireConfetti(x, y);
  }, [fireConfetti]);

  const handleFullScreenFireworks = useCallback(() => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { 
      startVelocity: 30, 
      spread: 360, 
      ticks: 60, 
      zIndex: 0,
      colors: ['#E60012', '#FFD700', '#FF6B6B', '#FFA500']
    };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 30 * (timeLeft / duration); // Reduced from 50

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      {/* Click area */}
      <div 
        onClick={handleClick}
        className="absolute inset-0 cursor-pointer"
        style={{ zIndex: 1 }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyber-gold via-cyber-red to-cyber-gold bg-clip-text text-transparent">
            璀璨烟火
          </h2>
          <p className="text-gray-400 text-lg mb-12 tracking-wide">
            点击屏幕任意位置，绽放属于你的新年烟花
          </p>
        </motion.div>

        <motion.button
          onClick={handleFullScreenFireworks}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group px-12 py-5 text-xl font-bold text-cyber-dark bg-gradient-to-r from-cyber-gold to-cyber-red rounded-full overflow-hidden shadow-2xl"
          style={{ zIndex: 20 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="relative z-10 flex items-center gap-3">
            <Sparkles className="w-6 h-6" />
            全屏盛放
            <Sparkles className="w-6 h-6" />
          </span>
          
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyber-red to-cyber-gold opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
          
          {/* Glow effect */}
          <div className="absolute inset-0 blur-xl bg-gradient-to-r from-cyber-gold to-cyber-red opacity-50 group-hover:opacity-75 transition-opacity" />
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 text-cyber-gold/60 text-sm tracking-widest"
        >
          每一次点击，都是一次美好的祝愿
        </motion.p>
      </div>

      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(230, 0, 18, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(230, 0, 18, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
    </section>
  );
};

export default Fireworks;

