import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Wand2, Shield } from 'lucide-react';
import { generateAcrosticPoem } from '../utils/poemGenerator';
import TalismanCard from './TalismanCard';

const AcrosticPoem = () => {
  const [name, setName] = useState('');
  const [poem, setPoem] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [displayedPoem, setDisplayedPoem] = useState([]);
  const [showTalisman, setShowTalisman] = useState(false);

  const handleGenerate = () => {
    if (!name.trim()) return;

    setIsGenerating(true);
    setDisplayedPoem([]);

    // Generate poem
    const generatedPoem = generateAcrosticPoem(name);
    setPoem(generatedPoem);

    // Typewriter effect
    let lineIndex = 0;
    let charIndex = 0;
    const tempDisplay = [];

    const typeInterval = setInterval(() => {
      if (lineIndex < generatedPoem.length) {
        if (charIndex < generatedPoem[lineIndex].length) {
          if (!tempDisplay[lineIndex]) {
            tempDisplay[lineIndex] = '';
          }
          tempDisplay[lineIndex] += generatedPoem[lineIndex][charIndex];
          setDisplayedPoem([...tempDisplay]);
          charIndex++;
        } else {
          lineIndex++;
          charIndex = 0;
        }
      } else {
        clearInterval(typeInterval);
        setIsGenerating(false);
      }
    }, 80); // 80ms per character for smooth typing effect
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyber-gold via-cyber-red to-cyber-gold bg-clip-text text-transparent">
            AI 藏头诗
          </h2>
          <p className="text-gray-400 text-lg tracking-wide">
            输入您的名字，生成专属新年祝福藏头诗
          </p>
        </motion.div>

        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <div className="glass rounded-2xl p-8 border border-cyber-gold/30">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleGenerate()}
                placeholder="请输入您的名字（2-4个字）"
                maxLength={4}
                className="flex-1 bg-black/30 text-white placeholder-gray-500 px-6 py-4 rounded-xl outline-none text-lg border border-cyber-gold/20 focus:border-cyber-gold/50 transition-colors"
              />
              
              <motion.button
                onClick={handleGenerate}
                disabled={!name.trim() || isGenerating}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyber-red to-cyber-gold text-cyber-dark font-bold rounded-xl flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                <Wand2 className="w-5 h-5" />
                {isGenerating ? '生成中...' : '生成藏头诗'}
              </motion.button>
            </div>

            <p className="mt-4 text-cyber-gold/60 text-sm text-left">
              {name.length}/4 字
            </p>
          </div>
        </motion.div>

        {/* Poem Display */}
        {displayedPoem.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-8 md:p-12 border border-cyber-red/30 relative overflow-hidden"
          >
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-cyber-gold/40 rounded-tl-3xl" />
            <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-cyber-gold/40 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-cyber-gold/40 rounded-bl-3xl" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-cyber-gold/40 rounded-br-3xl" />

            {/* Sparkle decoration */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-8 right-8"
            >
              <Sparkles className="w-8 h-8 text-cyber-gold/60" />
            </motion.div>

            <div className="relative z-10 space-y-6">
              {displayedPoem.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-left"
                >
                  <p 
                    className="text-2xl md:text-4xl text-white leading-relaxed"
                    style={{ fontFamily: "'Noto Serif SC', serif" }}
                  >
                    <span className="text-cyber-gold font-bold text-3xl md:text-5xl">
                      {line[0]}
                    </span>
                    <span className="ml-2">{line.substring(1)}</span>
                    {isGenerating && index === displayedPoem.length - 1 && (
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        className="inline-block w-1 h-8 bg-cyber-gold ml-1"
                      />
                    )}
                  </p>
                </motion.div>
              ))}
            </div>

            {!isGenerating && displayedPoem.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 pt-8 border-t border-cyber-gold/20 space-y-4"
              >
                <p className="text-gray-400 text-sm">
                  🎊 祝 {name} 在 2026 年{' '}
                  <span className="text-cyber-gold">万事如意，心想事成</span>
                </p>
                
                {/* Generate Talisman Button */}
                <motion.button
                  onClick={() => setShowTalisman(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyber-red to-cyber-gold text-cyber-dark font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg"
                >
                  <Shield className="w-5 h-5" />
                  生成护身符
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Example names */}
        {poem.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8"
          >
            <p className="text-gray-500 text-sm mb-4">试试这些名字：</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['李明', '张伟', '王芳', '刘洋', '陈静'].map((exampleName) => (
                <motion.button
                  key={exampleName}
                  onClick={() => setName(exampleName)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 glass rounded-full text-sm text-gray-300 hover:text-cyber-gold border border-cyber-gold/20 hover:border-cyber-gold/50 transition-colors"
                >
                  {exampleName}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Talisman Card Modal */}
      {showTalisman && (
        <TalismanCard 
          poem={poem} 
          name={name}
          onClose={() => setShowTalisman(false)}
        />
      )}

      {/* Floating characters decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {['福', '禄', '寿', '喜', '财'].map((char, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.1, 0],
              y: ['100%', '-20%'],
              rotate: [0, 360]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              delay: i * 3,
              ease: "linear"
            }}
            className="absolute text-6xl text-cyber-red/20"
            style={{
              left: `${20 + i * 15}%`,
              fontFamily: "'Noto Serif SC', serif",
              fontWeight: 900
            }}
          >
            {char}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AcrosticPoem;

