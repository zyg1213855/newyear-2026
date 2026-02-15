import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, X, Sparkles } from 'lucide-react';

const fortunes = [
  "平安喜乐，万事顺心 🎊",
  "财源广进，福气满满 💰",
  "身体健康，笑口常开 😊",
  "锦鲤附体，好运连连 🐟",
  "步步高升，前程似锦 🚀",
  "心想事成，梦想成真 ✨",
  "阖家欢乐，幸福美满 👨‍👩‍👧‍👦",
  "事业有成，名利双收 📈",
  "贵人相助，逢凶化吉 🌟",
  "桃花朵朵，姻缘美满 💑",
  "学业进步，金榜题名 📚",
  "出入平安，一路顺风 🛡️",
  "福星高照，吉祥如意 🎯",
  "心情愉悦，天天开心 🌈",
  "万事大吉，诸事顺遂 🎉"
];

const RedEnvelope = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentFortune, setCurrentFortune] = useState('');
  const [isFlipping, setIsFlipping] = useState(false);

  const handleOpen = () => {
    if (isFlipping) return;
    
    setIsFlipping(true);
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    setCurrentFortune(randomFortune);
    
    setTimeout(() => {
      setIsOpen(true);
      setIsFlipping(false);
    }, 600);
  };

  const handleClose = () => {
    setIsOpen(false);
    setCurrentFortune('');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-red/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyber-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyber-red via-cyber-gold to-cyber-red bg-clip-text text-transparent">
            赛博红包
          </h2>
          <p className="text-gray-400 text-lg tracking-wide">
            点击领取你的 2026 专属运势
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center"
        >
          <motion.button
            onClick={handleOpen}
            disabled={isFlipping}
            whileHover={{ scale: 1.05, rotate: [0, -5, 5, -5, 0] }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <motion.div
              animate={isFlipping ? { rotateY: 360 } : {}}
              transition={{ duration: 0.6 }}
              className="relative w-48 h-64 md:w-64 md:h-80 glass rounded-3xl overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Red envelope design */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-red to-red-800 p-1">
                <div className="w-full h-full bg-gradient-to-br from-cyber-red via-red-700 to-red-900 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden">
                  {/* Decorative pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle, #FFD700 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }} />
                  </div>
                  
                  {/* Icon */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Gift className="w-20 h-20 md:w-24 md:h-24 text-cyber-gold mb-4" strokeWidth={1.5} />
                  </motion.div>
                  
                  {/* Text */}
                  <div className="text-cyber-gold font-bold text-2xl md:text-3xl mb-2" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                    福
                  </div>
                  <div className="text-cyber-gold/80 text-sm tracking-widest">
                    点击开启
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
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
                  repeatDelay: 2
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
              />
            </motion.div>

            {/* Floating sparkles */}
            <motion.div
              animate={{ 
                y: [-10, -20, -10],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-6 -right-6"
            >
              <Sparkles className="w-8 h-8 text-cyber-gold" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={handleClose}
            >
              <motion.div
                initial={{ scale: 0, rotateY: -180 }}
                animate={{ scale: 1, rotateY: 0 }}
                exit={{ scale: 0, rotateY: 180 }}
                transition={{ type: "spring", duration: 0.6 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-md w-full glass rounded-3xl p-8 md:p-12"
              >
                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Content */}
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <Sparkles className="w-16 h-16 text-cyber-gold mx-auto mb-6" />
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl md:text-4xl font-bold text-cyber-gold mb-4"
                    style={{ fontFamily: "'Noto Serif SC', serif" }}
                  >
                    恭喜发财
                  </motion.h3>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl text-white mb-6 leading-relaxed"
                  >
                    {currentFortune}
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-400 text-sm"
                  >
                    愿你在 2026 年心想事成
                  </motion.p>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    onClick={handleOpen}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 px-8 py-3 bg-gradient-to-r from-cyber-red to-cyber-gold text-cyber-dark font-bold rounded-full"
                  >
                    再抽一次
                  </motion.button>
                </div>

                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyber-gold/30 rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-cyber-gold/30 rounded-br-3xl" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RedEnvelope;

