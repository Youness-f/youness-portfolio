/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-bg':     '#050810',
        'cyber-cyan':   '#00f5ff',
        'cyber-purple': '#a855f7',
        'cyber-green':  '#22c55e',
        'cyber-amber':  '#f59e0b',
        'cyber-text':   '#e2e8f0',
        'cyber-muted':  '#94a3b8',
        'cyber-faint':  '#475569',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      animation: {
        'spin-cw':    'spin-cw 10s linear infinite',
        'spin-ccw':   'spin-ccw 7s linear infinite',
        'float':      'float 4s ease-in-out infinite',
        'blink':      'blink 1s step-end infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'scan':       'scanline 2.8s ease-in-out infinite',
        'pulse-dot':  'pulse-dot 2s ease infinite',
      },
      keyframes: {
        'spin-cw':    { to: { transform: 'rotate(360deg)' } },
        'spin-ccw':   { to: { transform: 'rotate(-360deg)' } },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        'blink': { '50%': { opacity: '0' } },
        'glow-pulse': {
          '0%, 100%': { textShadow: '0 0 16px rgba(0,245,255,0.3)' },
          '50%':      { textShadow: '0 0 32px rgba(0,245,255,0.7), 0 0 60px rgba(0,245,255,0.3)' },
        },
        'scanline': {
          '0%':   { top: '4%',  opacity: '0' },
          '8%':   { opacity: '1' },
          '92%':  { opacity: '1' },
          '100%': { top: '96%', opacity: '0' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%':      { opacity: '1',   transform: 'scale(1.3)' },
        },
      },
    },
  },
  plugins: [],
}
