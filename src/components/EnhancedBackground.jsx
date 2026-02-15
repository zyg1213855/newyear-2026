// SVG pattern for traditional Chinese cloud/wave pattern
export const CloudPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" style={{ zIndex: 1 }}>
    <defs>
      <pattern id="cloud-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
        {/* Traditional Chinese cloud motif */}
        <path
          d="M50,50 Q60,40 70,50 T90,50 Q95,45 100,50 T120,50"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-red-300"
        />
        <path
          d="M30,80 Q40,70 50,80 T70,80 Q75,75 80,80 T100,80"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-red-300"
        />
        <path
          d="M60,110 Q70,100 80,110 T100,110 Q105,105 110,110 T130,110"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-red-300"
        />
        
        {/*回纹 (Greek key pattern) */}
        <path
          d="M150,30 L170,30 L170,50 L160,50 L160,40 L150,40 Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-gold-400"
        />
        <path
          d="M20,150 L40,150 L40,170 L30,170 L30,160 L20,160 Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-gold-400"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#cloud-pattern)" />
  </svg>
);

// Background component with gradient and pattern
const EnhancedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Radial gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 20%, rgb(127, 29, 29) 0%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 100%)',
        }}
      />
      
      {/* Additional gradient layers for depth */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(circle at 80% 80%, rgba(230, 0, 18, 0.3) 0%, transparent 50%)',
        }}
      />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 20% 60%, rgba(255, 215, 0, 0.2) 0%, transparent 40%)',
        }}
      />
      
      {/* Cloud pattern overlay */}
      <CloudPattern />
      
      {/* Subtle vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.4) 100%)',
        }}
      />
    </div>
  );
};

export default EnhancedBackground;

