import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const initialBlessings = [
  '新年快乐 🎊',
  '恭喜发财 💰',
  '身体健康 💪',
  '万事如意 ✨',
  '心想事成 🌟',
  '财源广进 💵',
  '工作顺利 📈',
  '阖家欢乐 👨‍👩‍👧‍👦',
  '步步高升 🚀',
  '学业进步 📚',
  '早日脱单 💑',
  '平安喜乐 🎉',
  '福星高照 ⭐',
  '吉祥如意 🎯',
  '锦鲤附体 🐟',
  '好运连连 🍀',
  '笑口常开 😊',
  '天天开心 🌈',
  '梦想成真 💫',
  '幸福美满 💖',
];

const DanmakuWall = () => {
  const [danmakus, setDanmakus] = useState([]);

  useEffect(() => {
    // Initialize danmakus with random positions and speeds
    const initialDanmakus = initialBlessings.map((text, index) => ({
      id: `initial-${index}`,
      text,
      top: Math.random() * 80 + 5, // 5% - 85% from top
      duration: Math.random() * 10 + 15, // 15-25 seconds
      delay: Math.random() * 5, // 0-5 seconds initial delay
      fontSize: Math.random() * 8 + 16, // 16-24px
    }));

    setDanmakus(initialDanmakus);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyber-red via-cyber-gold to-cyber-red bg-clip-text text-transparent">
            弹幕祝福墙
          </h2>
          <p className="text-gray-400 text-lg tracking-wide">
            满屏的祝福，送给每一个你
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glass rounded-3xl p-12 border border-cyber-gold/30 min-h-[400px] flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-8xl mb-6"
            >
              🎊
            </motion.div>
            <p className="text-2xl md:text-3xl text-white mb-4" style={{ fontFamily: "'Noto Serif SC', serif" }}>
              新年祝福
            </p>
            <p className="text-gray-400">
              让祝福飘满整个屏幕
            </p>
          </div>
        </motion.div>
      </div>

      {/* Danmaku layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {danmakus.map((danmaku) => (
          <motion.div
            key={danmaku.id}
            initial={{ x: '100vw' }}
            animate={{ x: '-100%' }}
            transition={{
              duration: danmaku.duration,
              delay: danmaku.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute whitespace-nowrap font-bold"
            style={{
              top: `${danmaku.top}%`,
              fontSize: `${danmaku.fontSize}px`,
              textShadow: '0 0 10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(230, 0, 18, 0.6)',
              color: danmaku.id.includes('initial') 
                ? (danmaku.id.charCodeAt(danmaku.id.length - 1) % 3 === 0 
                  ? '#FFD700' 
                  : danmaku.id.charCodeAt(danmaku.id.length - 1) % 3 === 1 
                    ? '#E60012' 
                    : '#FF6B6B')
                : '#FFD700',
            }}
          >
            {danmaku.text}
          </motion.div>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <span className="text-4xl">
              {['🎊', '🎉', '✨', '🌟', '💫'][i % 5]}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DanmakuWall;

