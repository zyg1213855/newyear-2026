import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Gift } from 'lucide-react';

const EntranceOverlay = ({ onEnter, onAudioStart }) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = () => {
    setIsExiting(true);
    
    // Trigger audio playback
    if (onAudioStart) {
      onAudioStart();
    }

    // Massive confetti explosion
    const duration = 2000;
    const animationEnd = Date.now() + duration;
    const defaults = { 
      startVelocity: 45, 
      spread: 360, 
      ticks: 100, 
      zIndex: 9999,
      colors: ['#E60012', '#FFD700', '#FF6B6B', '#FFA500', '#FF1493']
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        setTimeout(() => onEnter(), 500);
        return;
      }

      const particleCount = 100;

      // Fire from multiple points
      confetti({
        ...defaults,
        particleCount,
        origin: { x: 0.5, y: 0.5 }
      });
      
      confetti({
        ...defaults,
        particleCount: 50,
        origin: { x: 0.2, y: 0.6 }
      });
      
      confetti({
        ...defaults,
        particleCount: 50,
        origin: { x: 0.8, y: 0.6 }
      });
    }, 150);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[9998] flex items-center justify-center"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgb(127, 29, 29) 0%, rgb(0, 0, 0) 60%)',
          }}
        >
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: `${Math.random() * 100}%`,
                  y: `${Math.random() * 100}%`,
                  scale: 0,
                  opacity: 0
                }}
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
                className="absolute w-2 h-2 bg-cyber-gold rounded-full"
              />
            ))}
          </div>

          {/* Main content */}
          <div className="relative z-10 text-center px-4">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 15,
                duration: 1 
              }}
              className="mb-8"
            >
              <h1 
                className="text-[8rem] md:text-[12rem] font-black text-cyber-red mb-4"
                style={{
                  fontFamily: "'Noto Serif SC', serif",
                  textShadow: '0 0 40px rgba(230, 0, 18, 0.8), 0 0 80px rgba(230, 0, 18, 0.6)',
                  WebkitTextStroke: '2px #FFD700',
                  paintOrder: 'stroke fill',
                }}
              >
                福
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyber-red via-cyber-gold to-cyber-red bg-clip-text text-transparent mb-4">
                NewYear 2026
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 font-light tracking-widest">
                新年快乐 · 万象更新
              </p>
            </motion.div>

            {/* 3D Red Packet Button */}
            <motion.button
              onClick={handleEnter}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.5 }
              }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                {/* Red packet design */}
                <div className="relative w-56 h-72 md:w-64 md:h-80 rounded-3xl overflow-hidden transform-gpu"
                  style={{
                    background: 'linear-gradient(135deg, #E60012 0%, #8B0000 100%)',
                    boxShadow: '0 20px 60px rgba(230, 0, 18, 0.6), 0 0 80px rgba(255, 215, 0, 0.4)',
                  }}
                >
                  {/* Decorative pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle, #FFD700 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }} />
                  </div>
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center p-8">
                    <motion.div
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                      }}
                    >
                      <Gift className="w-24 h-24 md:w-28 md:h-28 text-cyber-gold mb-6" strokeWidth={1.5} />
                    </motion.div>
                    
                    <div className="text-cyber-gold font-black text-5xl md:text-6xl mb-4" 
                      style={{ 
                        fontFamily: "'Noto Serif SC', serif",
                        textShadow: '0 0 20px rgba(255, 215, 0, 0.8)'
                      }}
                    >
                      开启
                    </div>
                    
                    <div className="text-cyber-gold/90 text-xl tracking-[0.5em] font-light">
                      2026
                    </div>
                    
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="mt-6 flex items-center gap-2 text-cyber-gold/70 text-sm"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>点击进入</span>
                      <Sparkles className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Shine effect */}
                  <motion.div
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 1
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                  />
                </div>

                {/* Floating sparkles */}
                <motion.div
                  animate={{ 
                    y: [-15, -25, -15],
                    opacity: [0.5, 1, 0.5],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-8 -right-8"
                >
                  <Sparkles className="w-12 h-12 text-cyber-gold" />
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: [-10, -20, -10],
                    opacity: [0.5, 1, 0.5],
                    rotate: [360, 180, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -top-8 -left-8"
                >
                  <Sparkles className="w-10 h-10 text-cyber-red" />
                </motion.div>
              </motion.div>
            </motion.button>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="mt-12 text-gray-500 text-sm tracking-widest"
            >
              准备好迎接新年的祝福了吗？
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EntranceOverlay;

