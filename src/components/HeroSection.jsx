import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showFortune, setShowFortune] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle class for golden trail
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.life = 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= 0.02;
        if (this.size > 0.2) this.size -= 0.05;
      }

      draw() {
        ctx.fillStyle = `rgba(255, 215, 0, ${this.life})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#FFD700';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      for (let i = 0; i < 3; i++) {
        particlesRef.current.push(new Particle(x, y));
      }
    };

    const handleTouchMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;

      for (let i = 0; i < 3; i++) {
        particlesRef.current.push(new Particle(x, y));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter(particle => particle.life > 0);

      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
      />

      {/* Main content */}
      <div className="relative z-20 text-center px-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 15,
            duration: 1.2 
          }}
          className="mb-8 relative"
        >
          {/* Fortune Arrives Text */}
          <AnimatePresence>
            {showFortune && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.5 }}
                animate={{ opacity: 1, y: -50, scale: 1 }}
                exit={{ opacity: 0, y: -100, scale: 0.5 }}
                transition={{ duration: 0.6 }}
                className="absolute -top-20 left-1/2 -translate-x-1/2 whitespace-nowrap"
              >
                <span 
                  className="text-4xl md:text-6xl font-bold text-cyber-gold"
                  style={{
                    textShadow: '0 0 30px rgba(255, 215, 0, 1), 0 0 60px rgba(255, 215, 0, 0.8)',
                    fontFamily: "'Noto Serif SC', serif"
                  }}
                >
                  福到了！
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.h1 
            onClick={() => {
              setIsFlipped(!isFlipped);
              setShowFortune(true);
              setTimeout(() => setShowFortune(false), 2000);
            }}
            animate={{ 
              rotate: isFlipped ? 180 : 0,
            }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 20 
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-black text-cyber-red animate-glow-pulse select-none cursor-pointer"
            style={{
              fontFamily: "'Noto Serif SC', serif",
              WebkitTextStroke: '2px #FFD700',
              paintOrder: 'stroke fill',
            }}
          >
            福
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyber-red via-cyber-gold to-cyber-red bg-clip-text text-transparent">
            NewYear 2026
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-widest">
            新年快乐 · 万象更新
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 text-cyber-gold/60 text-sm tracking-wider"
        >
          <p>移动鼠标 · 感受流光溢彩</p>
          <p className="mt-2">点击屏幕 · 绽放璀璨烟花（点福，福就到/倒）</p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{ 
          rotate: 360,
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-20 right-20 w-32 h-32 border-2 border-cyber-gold/20 rounded-full"
      />
      
      <motion.div
        animate={{ 
          rotate: -360,
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute bottom-20 left-20 w-24 h-24 border-2 border-cyber-red/20 rounded-full"
      />
    </section>
  );
};

export default HeroSection;

