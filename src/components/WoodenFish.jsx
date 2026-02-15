import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WoodenFish = () => {
  const [merit, setMerit] = useState(0);
  const [floatingTexts, setFloatingTexts] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Load merit from localStorage on mount
  useEffect(() => {
    const savedMerit = localStorage.getItem('cyberMerit');
    if (savedMerit) {
      setMerit(parseInt(savedMerit, 10));
    }
  }, []);

  // Save merit to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cyberMerit', merit.toString());
  }, [merit]);

  const handleClick = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setMerit(prev => prev + 1);

    // Create floating text
    const newText = {
      id: Date.now(),
      x: Math.random() * 100 - 50, // -50 to 50
      rotation: Math.random() * 30 - 15, // -15 to 15 degrees
    };
    setFloatingTexts(prev => [...prev, newText]);

    // Remove floating text after animation
    setTimeout(() => {
      setFloatingTexts(prev => prev.filter(t => t.id !== newText.id));
    }, 2000);

    // Reset animation state
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);

    // Simple Web Audio API sound (木鱼声音模拟)
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = 800; // High frequency for "knock" sound
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
      console.log('Audio not supported');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyber-gold via-cyber-red to-cyber-gold bg-clip-text text-transparent">
            电子木鱼
          </h2>
          <p className="text-gray-400 text-lg tracking-wide">
            点击木鱼，积累功德，祈福新年
          </p>
        </motion.div>

        {/* Merit Counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12 glass rounded-3xl p-8 border border-cyber-gold/30"
        >
          <div className="text-cyber-gold/60 text-sm tracking-widest mb-2">
            当前功德
          </div>
          <motion.div
            key={merit}
            initial={{ scale: 1.2, color: '#FFD700' }}
            animate={{ scale: 1, color: '#FFFFFF' }}
            transition={{ duration: 0.3 }}
            className="text-6xl md:text-8xl font-black"
            style={{ fontFamily: "'Orbitron', monospace" }}
          >
            {merit.toLocaleString()}
          </motion.div>
        </motion.div>

        {/* Wooden Fish */}
        <div className="relative flex justify-center">
          {/* Floating merit texts */}
          <AnimatePresence>
            {floatingTexts.map((text) => (
              <motion.div
                key={text.id}
                initial={{ 
                  opacity: 1, 
                  y: 0, 
                  x: 0,
                  scale: 1,
                  rotate: 0
                }}
                animate={{ 
                  opacity: 0, 
                  y: -150, 
                  x: text.x,
                  scale: 1.5,
                  rotate: text.rotation
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none z-20"
              >
                <span className="text-3xl font-bold text-cyber-gold" style={{ 
                  textShadow: '0 0 20px rgba(255, 215, 0, 0.8)',
                  fontFamily: "'Noto Serif SC', serif"
                }}>
                  +1 功德
                </span>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Wooden Fish Button */}
          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            animate={isAnimating ? { 
              scale: [1, 0.85, 1.05, 1],
              rotate: [0, -5, 5, 0]
            } : {}}
            transition={{ duration: 0.3 }}
            className="relative group cursor-pointer"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Glow effect */}
              <motion.div
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-cyber-red/40 to-cyber-gold/40 rounded-full blur-3xl"
              />

              {/* Wooden Fish SVG/Design */}
              <div className="relative w-full h-full glass rounded-full border-4 border-cyber-gold/50 flex items-center justify-center overflow-hidden group-hover:border-cyber-gold transition-colors"
                style={{
                  background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.3) 0%, rgba(160, 82, 45, 0.3) 100%)',
                }}
              >
                {/* Wooden texture pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(139, 69, 19, 0.5) 2px, rgba(139, 69, 19, 0.5) 4px)`,
                  }} />
                </div>

                {/* 木鱼 character */}
                <div className="relative z-10">
                  <motion.div
                    animate={{ 
                      textShadow: [
                        '0 0 20px rgba(255, 215, 0, 0.6)',
                        '0 0 40px rgba(255, 215, 0, 0.8)',
                        '0 0 20px rgba(255, 215, 0, 0.6)',
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-8xl md:text-9xl font-black text-cyber-gold"
                    style={{ fontFamily: "'Noto Serif SC', serif" }}
                  >
                    木<br/>鱼
                  </motion.div>
                </div>

                {/* Ripple effect on click */}
                {isAnimating && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0.8 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 border-4 border-cyber-gold rounded-full"
                  />
                )}
              </div>
            </div>
          </motion.button>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 text-gray-500 text-sm tracking-wide"
        >
          每一次敲击，都是对新年的美好祝愿
        </motion.p>

        {/* Merit milestones */}
        {merit > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {[
              { threshold: 10, text: '初心不改' },
              { threshold: 50, text: '持之以恒' },
              { threshold: 100, text: '功德圆满' },
              { threshold: 500, text: '大师境界' },
              { threshold: 1000, text: '功德无量' },
            ].map(({ threshold, text }) => (
              merit >= threshold && (
                <motion.div
                  key={threshold}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="px-4 py-2 glass rounded-full text-sm text-cyber-gold border border-cyber-gold/30"
                >
                  🏆 {text}
                </motion.div>
              )
            ))}
          </motion.div>
        )}
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              y: ['100%', '-20%'],
              x: [0, Math.random() * 100 - 50]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "linear"
            }}
            className="absolute bottom-0 text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
            }}
          >
            🙏
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WoodenFish;

