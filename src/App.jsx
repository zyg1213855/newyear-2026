import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import EnhancedBackground from './components/EnhancedBackground';
import AmbientFireworks from './components/AmbientFireworks';
import EntranceOverlay from './components/EntranceOverlay';
import HeroSection from './components/HeroSection';
import WoodenFish from './components/WoodenFish';
import AcrosticPoem from './components/AcrosticPoem';
import DanmakuWall from './components/DanmakuWall';
import Fireworks from './components/Fireworks';
import RedEnvelope from './components/RedEnvelope';
import WishingWall from './components/WishingWall';
import CheatCodeListener from './components/CheatCodeListener';
import BGMPlayer from './components/BGMPlayer';
import LanternParticles from './components/LanternParticles';

function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [shouldPlayAudio, setShouldPlayAudio] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative text-white min-h-screen">
      {/* Enhanced Background with gradient and pattern */}
      <EnhancedBackground />

      {/* Ambient Fireworks (continuous background effect) */}
      {hasEntered && <AmbientFireworks />}

      {/* Cheat Code Listener (money rain easter egg) */}
      {hasEntered && <CheatCodeListener />}

      {/* Entrance Overlay */}
      {!hasEntered && (
        <EntranceOverlay 
          onEnter={() => setHasEntered(true)}
          onAudioStart={() => setShouldPlayAudio(true)}
        />
      )}

      {/* BGM Player */}
      {hasEntered && <BGMPlayer shouldPlay={shouldPlayAudio} />}

      {/* Main Content (only show after entrance) */}
      {hasEntered && (
        <>
          {/* Hero Section */}
          <HeroSection />

          {/* Divider */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-cyber-gold to-transparent mx-auto max-w-4xl"
          />

          {/* Wooden Fish Section */}
          <WoodenFish />

          {/* Divider */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-cyber-red to-transparent mx-auto max-w-4xl"
          />

          {/* Acrostic Poem Section */}
          <AcrosticPoem />

          {/* Divider */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-cyber-gold to-transparent mx-auto max-w-4xl"
          />

          {/* Danmaku Wall Section */}
          <DanmakuWall />

          {/* Divider */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-cyber-red to-transparent mx-auto max-w-4xl"
          />

          {/* Fireworks Section */}
          <Fireworks />

          {/* Divider */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-cyber-gold to-transparent mx-auto max-w-4xl"
          />

          {/* Red Envelope Section */}
          <RedEnvelope />

          {/* Divider */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-cyber-red to-transparent mx-auto max-w-4xl"
          />

          {/* Wishing Wall Section */}
          <WishingWall />

          {/* Divider */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-cyber-gold to-transparent mx-auto max-w-4xl"
          />

          {/* Lantern Particles Section - The Grand Finale */}
          <LanternParticles />

          {/* Footer */}
          <footer className="relative py-12 text-center border-t border-cyber-gold/20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <p className="text-cyber-gold text-lg font-bold" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                NewYear 2026
              </p>
              <p className="text-gray-500 text-sm tracking-widest">
                愿你在新的一年里，生活多精彩；
                来自小杨的新春祝福
              </p>
              <div className="flex justify-center gap-2 text-xs text-gray-600">
                <span>Made with</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-cyber-red"
                >
                  ❤️
                </motion.span>
                <span>and React</span>
              </div>
            </motion.div>
          </footer>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: scrollY < 100 ? 1 : 0 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-cyber-gold/60 text-sm tracking-widest">向下滚动</span>
              <div className="w-6 h-10 border-2 border-cyber-gold/40 rounded-full flex justify-center pt-2">
                <motion.div
                  animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-2 bg-cyber-gold rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </div>
  );
}

export default App;

