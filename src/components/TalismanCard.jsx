import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';
import html2canvas from 'html2canvas';

const TalismanCard = ({ poem, name, onClose }) => {
  const [isSaving, setIsSaving] = useState(false);
  const cardRef = useRef(null);

  const mainBlessings = [
    '岁岁平安',
    '万事胜意',
    '福寿安康',
    '吉祥如意',
    '心想事成',
    '阖家欢乐'
  ];

  const subBlessings = [
    '诸事顺遂',
    '福寿绵长',
    '步步高升',
    '幸福美满',
    '财源广进',
    '笑口常开'
  ];
  
  const randomMain = mainBlessings[Math.floor(Math.random() * mainBlessings.length)];
  const randomSub = subBlessings[Math.floor(Math.random() * subBlessings.length)];

  const handleSave = async () => {
    if (!cardRef.current) return;
    
    setIsSaving(true);
    
    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: null,
        scale: 3,
        logging: false,
        useCORS: true,
      });
      
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `护身符_${name || '新年'}_2026.png`;
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
        setIsSaving(false);
      });
    } catch (error) {
      console.error('Save failed:', error);
      setIsSaving(false);
      alert('保存失败，请尝试长按图片保存');
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0, rotateY: -180 }}
          animate={{ scale: 1, rotateY: 0 }}
          exit={{ scale: 0, rotateY: 180 }}
          transition={{ type: "spring", duration: 0.6 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-[90%] max-w-sm"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 z-10 w-12 h-12 bg-cyber-red rounded-full flex items-center justify-center text-white hover:bg-cyber-gold hover:text-cyber-dark transition-colors shadow-lg"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Talisman Card */}
          <div
            ref={cardRef}
            className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
            style={{
              aspectRatio: '2/3',
              background: 'linear-gradient(to bottom right, #b91c1c 0%, #dc2626 50%, #991b1b 100%)',
            }}
          >
            {/* Silk texture overlay - 红绸暗纹 */}
            <div className="absolute inset-0 opacity-30">
              <svg className="w-full h-full">
                <defs>
                  <pattern id="silk-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0,20 Q10,15 20,20 T40,20" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none"/>
                    <path d="M0,30 Q10,25 20,30 T40,30" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#silk-pattern)"/>
              </svg>
            </div>

            {/* Double golden border - 双层金边 */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Outer border */}
              <div 
                className="absolute inset-3 rounded-xl"
                style={{
                  border: '3px solid rgba(255, 215, 0, 0.6)',
                  boxShadow: '0 0 20px rgba(255, 215, 0, 0.4), inset 0 0 20px rgba(255, 215, 0, 0.2)'
                }}
              />
              {/* Inner border */}
              <div 
                className="absolute inset-6 rounded-lg"
                style={{
                  border: '1px solid rgba(255, 215, 0, 0.8)',
                }}
              />
              
              {/* Corner decorations */}
              {[
                { top: '12px', left: '12px', rotate: '0deg' },
                { top: '12px', right: '12px', rotate: '90deg' },
                { bottom: '12px', left: '12px', rotate: '-90deg' },
                { bottom: '12px', right: '12px', rotate: '180deg' }
              ].map((pos, i) => (
                <div
                  key={i}
                  className="absolute w-8 h-8"
                  style={{
                    ...pos,
                    transform: `rotate(${pos.rotate})`,
                  }}
                >
                  <svg viewBox="0 0 32 32" className="w-full h-full">
                    <path
                      d="M0,0 L8,0 L8,2 L2,2 L2,8 L0,8 Z"
                      fill="#FFD700"
                      opacity="0.8"
                    />
                  </svg>
                </div>
              ))}
            </div>

            {/* Content container */}
            <div className="relative h-full flex items-center justify-center p-12">
              {/* Left side: Seal with golden frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute bottom-12 left-12"
              >
                <div className="relative">
                  {/* Golden circular frame */}
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      border: '3px solid #FFD700',
                      boxShadow: '0 0 15px rgba(255, 215, 0, 0.6), inset 0 0 10px rgba(255, 215, 0, 0.3)',
                      transform: 'scale(1.15)'
                    }}
                  />
                  
                  <img 
                    src="/images/seal.png" 
                    alt="印章" 
                    className="w-24 h-24 object-contain relative z-10"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="w-24 h-24 flex items-center justify-center relative z-10" style="background: linear-gradient(135deg, #E60012, #8B0000); border: 3px solid rgba(139, 0, 0, 0.8); border-radius: 4px; box-shadow: 0 4px 20px rgba(230, 0, 18, 0.8), 0 0 15px rgba(255, 215, 0, 0.4);">
                          <div style="font-family: 'Noto Serif SC', serif; color: white; font-size: 1.5rem; font-weight: 900; writing-mode: vertical-rl; letter-spacing: 0.2em; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);">大吉</div>
                        </div>
                      `;
                    }}
                  />
                </div>
              </motion.div>

              {/* Center: Main blessing (vertical) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col items-center gap-8"
              >
                {/* Main blessing */}
                <div 
                  className="text-5xl md:text-6xl font-black"
                  style={{ 
                    writingMode: 'vertical-rl',
                    textOrientation: 'upright',
                    fontFamily: "'Noto Serif SC', serif",
                    color: '#FFD700',
                    letterSpacing: '0.3em',
                    textShadow: '0 0 20px rgba(255, 215, 0, 0.8), 2px 2px 4px rgba(0, 0, 0, 0.5)',
                    filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.6))',
                  }}
                >
                  {randomMain}
                </div>

                {/* Sub blessing */}
                <div 
                  className="text-3xl md:text-4xl font-bold"
                  style={{ 
                    writingMode: 'vertical-rl',
                    textOrientation: 'upright',
                    fontFamily: "'Noto Serif SC', serif",
                    color: '#FFA500',
                    letterSpacing: '0.3em',
                    textShadow: '0 0 15px rgba(255, 165, 0, 0.6), 2px 2px 3px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  {randomSub}
                </div>
              </motion.div>

              {/* Right side: Name (vertical) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute top-16 right-12"
              >
                <div 
                  className="text-3xl md:text-4xl font-bold"
                  style={{ 
                    writingMode: 'vertical-rl',
                    textOrientation: 'upright',
                    fontFamily: "'Noto Serif SC', serif",
                    color: '#FFD700',
                    letterSpacing: '0.4em',
                    textShadow: '0 0 15px rgba(255, 215, 0, 0.7), 2px 2px 3px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  {name || '贵人'}
                </div>
              </motion.div>

              {/* Top: Year mark */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute top-8 left-1/2 -translate-x-1/2"
              >
                <div 
                  className="text-sm font-medium tracking-widest px-4 py-1 rounded-full"
                  style={{ 
                    fontFamily: "'Noto Serif SC', serif",
                    color: '#FFD700',
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 215, 0, 0.5)',
                  }}
                >
                  丙午马年
                </div>
              </motion.div>
            </div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-6 flex flex-col gap-3"
          >
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="w-full px-6 py-4 bg-gradient-to-r from-cyber-red to-cyber-gold text-cyber-dark font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-shadow disabled:opacity-50"
            >
              <Download className="w-5 h-5" />
              {isSaving ? '保存中...' : '保存护身符'}
            </button>
            
            <motion.p
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-center text-cyber-gold text-sm"
            >
              📱 移动端可长按图片保存
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TalismanCard;
