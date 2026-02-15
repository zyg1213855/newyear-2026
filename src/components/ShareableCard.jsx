import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Share2 } from 'lucide-react';

const ShareableCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [blessing, setBlessing] = useState('');

  const blessings = [
    '愿你新年快乐，万事如意',
    '财源广进，步步高升',
    '身体健康，心想事成',
    '工作顺利，阖家欢乐',
    '福星高照，好运连连',
  ];

  const handleOpen = () => {
    const randomBlessing = blessings[Math.floor(Math.random() * blessings.length)];
    setBlessing(randomBlessing);
    setIsOpen(true);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={handleOpen}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 right-8 z-50 w-16 h-16 bg-gradient-to-br from-cyber-red to-cyber-gold rounded-full flex items-center justify-center shadow-2xl"
        style={{
          boxShadow: '0 0 30px rgba(255, 215, 0, 0.6), 0 0 60px rgba(230, 0, 18, 0.4)',
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <Share2 className="w-8 h-8 text-cyber-dark" />
        </motion.div>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0, rotateY: -180 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0, rotateY: 180 }}
              transition={{ type: "spring", duration: 0.6 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full"
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-4 -right-4 z-10 w-10 h-10 bg-cyber-red rounded-full flex items-center justify-center text-white hover:bg-cyber-gold hover:text-cyber-dark transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Card Content */}
              <div 
                id="shareable-card"
                className="relative rounded-3xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #8B0000 0%, #E60012 50%, #8B0000 100%)',
                  boxShadow: '0 20px 60px rgba(230, 0, 18, 0.6)',
                }}
              >
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle, #FFD700 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                  }} />
                </div>

                {/* Content */}
                <div className="relative p-8 md:p-12 text-center">
                  {/* Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-6"
                  >
                    <h3 
                      className="text-5xl md:text-6xl font-black text-cyber-gold mb-2"
                      style={{ 
                        fontFamily: "'Noto Serif SC', serif",
                        textShadow: '0 0 30px rgba(255, 215, 0, 0.8)'
                      }}
                    >
                      护身符
                    </h3>
                    <p className="text-cyber-gold/80 text-sm tracking-widest">
                      CyberNewYear 2026
                    </p>
                  </motion.div>

                  {/* Fu Character */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="mb-6"
                  >
                    <div 
                      className="text-9xl font-black text-cyber-gold inline-block"
                      style={{
                        fontFamily: "'Noto Serif SC', serif",
                        WebkitTextStroke: '2px rgba(255, 255, 255, 0.3)',
                        paintOrder: 'stroke fill',
                        textShadow: '0 0 40px rgba(255, 215, 0, 0.8)',
                      }}
                    >
                      福
                    </div>
                  </motion.div>

                  {/* Blessing Text */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-6 glass rounded-2xl p-6 border border-cyber-gold/30"
                  >
                    <p 
                      className="text-xl md:text-2xl text-white leading-relaxed"
                      style={{ fontFamily: "'Noto Serif SC', serif" }}
                    >
                      {blessing}
                    </p>
                  </motion.div>

                  {/* QR Code Placeholder */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mb-6 flex justify-center"
                  >
                    <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">🎊</div>
                        <div className="text-xs text-gray-600">扫码分享</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Footer */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-cyber-gold/60 text-sm"
                  >
                    <p>愿此符保佑你</p>
                    <p className="mt-1">2026 年平安喜乐，诸事顺遂</p>
                  </motion.div>

                  {/* Decorative corners */}
                  <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-cyber-gold/40 rounded-tl-2xl" />
                  <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-cyber-gold/40 rounded-tr-2xl" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-cyber-gold/40 rounded-bl-2xl" />
                  <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-cyber-gold/40 rounded-br-2xl" />
                </div>
              </div>

              {/* Instructions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-6 text-center"
              >
                <p className="text-gray-400 text-sm mb-4">
                  📸 长按或截图保存护身符
                </p>
                <div className="flex justify-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleOpen}
                    className="px-6 py-2 glass rounded-full text-sm text-cyber-gold border border-cyber-gold/30 hover:border-cyber-gold/50 transition-colors flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    换一个
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ShareableCard;

