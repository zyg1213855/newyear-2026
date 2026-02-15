import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

const BGMPlayer = ({ shouldPlay }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio();
    // Load from local public folder
    audioRef.current.src = '/music/bgm.mp3';
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (shouldPlay && audioRef.current && !isPlaying) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.log('Audio play failed:', err);
      });
    }
  }, [shouldPlay]);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.button
      onClick={toggleMute}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed top-6 right-6 z-[100] w-14 h-14 glass rounded-full flex items-center justify-center border border-cyber-gold/30 hover:border-cyber-gold/60 transition-colors"
      style={{
        boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)',
      }}
    >
      {/* Vinyl Record Animation */}
      <motion.div
        animate={isPlaying ? { rotate: 360 } : {}}
        transition={isPlaying ? { duration: 3, repeat: Infinity, ease: "linear" } : {}}
        className="relative w-10 h-10"
      >
        {/* Outer circle (vinyl) */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyber-red to-cyber-gold" />
        
        {/* Inner circle (label) */}
        <div className="absolute inset-2 rounded-full bg-cyber-dark border border-cyber-gold/50" />
        
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyber-gold" />
        
        {/* Grooves */}
        <div className="absolute inset-1 rounded-full border border-cyber-gold/20" />
        <div className="absolute inset-3 rounded-full border border-cyber-gold/20" />
      </motion.div>

      {/* Mute indicator */}
      <AnimatePresence>
        {isMuted && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full"
          >
            <VolumeX className="w-6 h-6 text-white" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default BGMPlayer;

