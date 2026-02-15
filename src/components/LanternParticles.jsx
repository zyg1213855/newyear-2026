import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const LanternParticles = () => {
  const [isExploded, setIsExploded] = useState(false);

  const handleClick = () => {
    if (isExploded) return;

    // Hide lantern
    setIsExploded(true);

    // Trigger full-screen golden and red confetti explosion
    const duration = 1500;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      // Golden confetti
      confetti({
        particleCount: 50,
        spread: 160,
        origin: { x: 0.5, y: 0.5 },
        colors: ['#FFD700', '#FFA500', '#FFDF00', '#FFE55C'],
        gravity: 0.8,
        scalar: 1.5,
        startVelocity: 45,
        ticks: 200,
      });

      // Red confetti
      confetti({
        particleCount: 30,
        spread: 140,
        origin: { x: 0.5, y: 0.5 },
        colors: ['#E60012', '#DC143C', '#FF6B6B'],
        gravity: 0.8,
        scalar: 1.3,
        startVelocity: 40,
        ticks: 180,
      });
    }, 150);
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(139, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.8) 50%, #000000 100%)',
      }}
    >
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyber-gold via-cyber-red to-cyber-gold bg-clip-text text-transparent">
            点亮灯笼
          </h2>
          <p className="text-gray-400 text-lg tracking-wide">
            点击灯笼，见证奇迹
          </p>
        </motion.div>

        {/* Lantern or Fu character */}
        <div className="relative w-full flex items-center justify-center min-h-[500px]">
          <AnimatePresence mode="wait">
            {!isExploded ? (
              // Lantern shrine with floating effect
              <motion.div
                key="lantern-shrine"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="relative"
              >
                {/* Golden halo - 金色光圈 */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-64 h-32 rounded-full blur-3xl"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(255, 215, 0, 0.6) 0%, rgba(255, 215, 0, 0.3) 50%, transparent 100%)',
                  }}
                />

                {/* Octagonal cyber frame - 八角赛博框架 */}
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    duration: 60, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ transform: 'scale(1.4)' }}
                >
                  <div 
                    className="w-80 h-80 relative"
                    style={{
                      clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                      border: '2px solid rgba(255, 215, 0, 0.4)',
                      boxShadow: '0 0 30px rgba(255, 215, 0, 0.6), inset 0 0 30px rgba(255, 215, 0, 0.2)',
                    }}
                  />
                </motion.div>

                {/* Lantern with float animation */}
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  onClick={handleClick}
                  className="relative cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {/* Glow effect */}
                  <motion.div
                    animate={{ 
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 rounded-full blur-2xl"
                    style={{
                      background: 'radial-gradient(circle, rgba(255, 215, 0, 0.6) 0%, transparent 70%)',
                    }}
                  />

                  <img 
                    src="/images/lantern.png" 
                    alt="灯笼" 
                    className="w-48 h-48 object-contain relative z-10"
                    style={{
                      filter: 'drop-shadow(0 0 30px rgba(255, 215, 0, 0.8))',
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div style="font-size: 12rem; filter: drop-shadow(0 0 30px rgba(255, 215, 0, 0.8));">🏮</div>
                      `;
                      e.target.parentElement.onclick = handleClick;
                    }}
                  />
                </motion.div>

                {/* Light rays */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      opacity: [0.2, 0.5, 0.2],
                      scaleY: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2 w-1 h-32 origin-bottom"
                    style={{
                      background: 'linear-gradient(to top, rgba(255, 215, 0, 0.6), transparent)',
                      transform: `translate(-50%, -100%) rotate(${i * 45}deg)`,
                    }}
                  />
                ))}
              </motion.div>
            ) : (
              // Fu character with flowing light effect after explosion
              <motion.div
                key="blessing"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 1, type: "spring", stiffness: 200 }}
                className="text-center"
              >
                {/* Flowing light background */}
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div 
                    className="w-[600px] h-[600px] rounded-full opacity-30"
                    style={{
                      background: 'conic-gradient(from 0deg, transparent 0%, rgba(255, 215, 0, 0.8) 10%, transparent 20%, rgba(255, 215, 0, 0.8) 30%, transparent 40%, rgba(255, 215, 0, 0.8) 50%, transparent 60%, rgba(255, 215, 0, 0.8) 70%, transparent 80%, rgba(255, 215, 0, 0.8) 90%, transparent 100%)',
                      filter: 'blur(40px)',
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.7, type: "spring", stiffness: 150 }}
                  className="mb-8 relative z-10"
                >
                  <h1 
                    className="text-[10rem] md:text-[15rem] font-black text-cyber-gold"
                    style={{
                      fontFamily: "'Noto Serif SC', serif",
                      textShadow: '0 0 40px rgba(255, 215, 0, 1), 0 0 80px rgba(255, 215, 0, 0.8), 0 0 120px rgba(255, 215, 0, 0.6)',
                      WebkitTextStroke: '3px rgba(230, 0, 18, 0.5)',
                      paintOrder: 'stroke fill',
                    }}
                  >
                    福
                  </h1>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2, duration: 1 }}
                  className="text-3xl md:text-5xl font-bold text-cyber-gold relative z-10"
                  style={{ 
                    fontFamily: "'Noto Serif SC', serif",
                    textShadow: '0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.4)'
                  }}
                >
                  祝您新年快乐
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Floating particles decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              y: [0, -100]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeOut"
            }}
            className="absolute w-1 h-1 bg-cyber-gold rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '0%',
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default LanternParticles;
