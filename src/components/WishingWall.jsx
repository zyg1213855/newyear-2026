import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';

const WishingWall = () => {
  const [wish, setWish] = useState('');
  const [wishes, setWishes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (wish.trim()) {
      const newWish = {
        id: Date.now(),
        text: wish,
        x: Math.random() * 80 + 10, // 10-90% from left
        duration: Math.random() * 10 + 15, // 15-25 seconds
        delay: 0,
      };
      setWishes(prev => [...prev, newWish]);
      setWish('');
    }
  };

  useEffect(() => {
    // Clean up old wishes
    const interval = setInterval(() => {
      setWishes(prev => prev.filter(w => Date.now() - w.id < 30000));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-purple-950/20 to-cyber-dark" />

      {/* Floating wishes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <AnimatePresence>
          {wishes.map((wishItem) => (
            <motion.div
              key={wishItem.id}
              initial={{ 
                y: '100vh', 
                x: `${wishItem.x}%`,
                opacity: 0,
                scale: 0.5
              }}
              animate={{ 
                y: '-20vh', 
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1, 1, 0.8],
                rotate: [0, 5, -5, 0]
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: wishItem.duration,
                ease: "linear",
                opacity: {
                  times: [0, 0.1, 0.9, 1],
                  duration: wishItem.duration
                }
              }}
              className="absolute"
              style={{ left: 0 }}
            >
              <div className="relative">
                {/* Lantern shape */}
                <div className="relative w-32 h-40 glass rounded-3xl bg-gradient-to-br from-cyber-red/40 to-cyber-gold/40 border border-cyber-gold/50 p-4 flex items-center justify-center">
                  <p className="text-white text-sm text-center font-medium leading-relaxed break-words">
                    {wishItem.text}
                  </p>
                  
                  {/* Lantern top */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-cyber-gold rounded-full" />
                  
                  {/* Lantern bottom tassel */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-1 h-6 bg-cyber-gold" />
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyber-red rounded-full" />
                  
                  {/* Glow */}
                  <div className="absolute inset-0 bg-cyber-gold/20 rounded-3xl blur-xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyber-gold via-cyber-red to-cyber-gold bg-clip-text text-transparent">
            许愿墙
          </h2>
          <p className="text-gray-400 text-lg tracking-wide">
            写下你的新年愿望，让它化作孔明灯飘向天际
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative"
        >
          <div className="relative glass rounded-2xl p-2 border border-cyber-gold/30">
            <input
              type="text"
              value={wish}
              onChange={(e) => setWish(e.target.value)}
              placeholder="输入你的新年愿望..."
              maxLength={50}
              className="w-full bg-transparent text-white placeholder-gray-500 px-6 py-4 pr-16 outline-none text-lg"
            />
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-cyber-red to-cyber-gold rounded-xl flex items-center justify-center shadow-lg"
            >
              <Send className="w-5 h-5 text-cyber-dark" />
            </motion.button>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-cyber-gold/60 text-sm"
          >
            {wish.length}/50 字
          </motion.p>
        </motion.form>

        {/* Example wishes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {['身体健康', '万事如意', '财源广进', '心想事成', '阖家欢乐'].map((example, index) => (
            <motion.button
              key={example}
              onClick={() => setWish(example)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="px-4 py-2 glass rounded-full text-sm text-gray-300 hover:text-cyber-gold border border-cyber-gold/20 hover:border-cyber-gold/50 transition-colors"
            >
              {example}
            </motion.button>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 text-gray-500 text-sm"
        >
          已有 {wishes.length} 个愿望飘向天空
        </motion.p>
      </div>

      {/* Decorative stars */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
          className="absolute w-1 h-1 bg-cyber-gold rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </section>
  );
};

export default WishingWall;

