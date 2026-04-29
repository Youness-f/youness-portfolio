import photo from './photo.jpg'


export default function ProfileFrame() {
  return (
    <div
      style={{
        position: 'relative',
        width: 'min(230px, 72vw)', height: 'min(230px, 72vw)',
        animation: 'float 4s ease-in-out infinite',
      }}
    >
      {/* Outer dashed ring — CW */}
      <svg
        style={{ position: 'absolute', inset: 0, animation: 'spin-cw 10s linear infinite' }}
        viewBox="0 0 230 230" width="100%" height="100%"
      >
        <circle cx="115" cy="115" r="111" fill="none"
          stroke="rgba(0,245,255,0.25)" strokeWidth="1.2" strokeDasharray="9 5" />
      </svg>

      {/* Inner dashed ring — CCW */}
      <svg
        style={{ position: 'absolute', inset: 0, animation: 'spin-ccw 7s linear infinite' }}
        viewBox="0 0 230 230" width="100%" height="100%"
      >
        <circle cx="115" cy="115" r="97" fill="none"
          stroke="rgba(168,85,247,0.22)" strokeWidth="1" strokeDasharray="5 9" />
      </svg>

      {/* Corner brackets + crosshair ticks */}
      <svg
        style={{ position: 'absolute', inset: 0 }}
        viewBox="0 0 230 230" width="100%" height="100%"
      >
        {/* Top-left */}
        <path d="M28 52 L28 28 L52 28" fill="none" stroke="#00f5ff" strokeWidth="2.2" />
        {/* Top-right */}
        <path d="M178 28 L202 28 L202 52" fill="none" stroke="#00f5ff" strokeWidth="2.2" />
        {/* Bottom-left */}
        <path d="M28 178 L28 202 L52 202" fill="none" stroke="#00f5ff" strokeWidth="2.2" />
        {/* Bottom-right */}
        <path d="M178 202 L202 202 L202 178" fill="none" stroke="#00f5ff" strokeWidth="2.2" />
        {/* Corner dots */}
        <circle cx="28"  cy="28"  r="3" fill="#00f5ff" opacity="0.6" />
        <circle cx="202" cy="28"  r="3" fill="#00f5ff" opacity="0.6" />
        <circle cx="28"  cy="202" r="3" fill="#00f5ff" opacity="0.6" />
        <circle cx="202" cy="202" r="3" fill="#00f5ff" opacity="0.6" />
        {/* Crosshair ticks */}
        <line x1="115" y1="6"   x2="115" y2="22"  stroke="rgba(0,245,255,0.4)" strokeWidth="1" />
        <line x1="115" y1="208" x2="115" y2="224" stroke="rgba(0,245,255,0.4)" strokeWidth="1" />
        <line x1="6"   y1="115" x2="22"  y2="115" stroke="rgba(0,245,255,0.4)" strokeWidth="1" />
        <line x1="208" y1="115" x2="224" y2="115" stroke="rgba(0,245,255,0.4)" strokeWidth="1" />
      </svg>

      {/* Photo circle */}
      <div
        style={{
          position: 'absolute', top: '16%', left: '16%', right: '16%', bottom: '16%',
          borderRadius: '50%', overflow: 'hidden',
          background: 'linear-gradient(145deg, rgba(0,245,255,0.08), rgba(168,85,247,0.08))',
          border: '1.5px solid rgba(0,245,255,0.22)',
          boxShadow: '0 0 40px rgba(0,245,255,0.12)',
        }}
      >
        <div
          style={{
            width: '100%', height: '100%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'linear-gradient(145deg, #060b1a, #0c1630)',
            fontSize: 38, fontWeight: 800,
            color: 'rgba(0,245,255,0.75)',
            letterSpacing: '-0.02em',
            animation: 'glow-pulse 3s ease-in-out infinite',
          }}
        >
           <img
             src={photo}
             alt="Youness"
             className="w-full h-full object-cover"
             style={{
               objectPosition: 'center 24%',
               transform: 'scale(1.08)',
             }}
           />
        </div>

        {/* Scanning line */}
        <div
          style={{
            position: 'absolute', left: 0, right: 0, height: 2,
            background: 'linear-gradient(90deg, transparent, #00f5ff 40%, rgba(0,245,255,0.6) 60%, transparent)',
            boxShadow: '0 0 10px rgba(0,245,255,0.9)',
            animation: 'scanline 2.8s ease-in-out infinite',
          }}
        />
      </div>

      {/* Lock label */}
      <div
        className="mono"
        style={{
          position: 'absolute', bottom: -22,
          left: 0, right: 0, textAlign: 'center',
        }}
      >
        ID_LOCK :: VERIFIED
      </div>
    </div>
  )
}
