import { useState } from 'react'

const LINKS = ['About', 'Education', 'Projects', 'Contact']

export default function Navbar() {
  const [hovered, setHovered] = useState(null)

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 40px',
        background: 'rgba(5,8,16,0.72)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      {/* Status badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span
          style={{
            width: 7, height: 7, borderRadius: '50%',
            background: '#00f5ff', display: 'inline-block',
            animation: 'pulse-dot 2s ease infinite',
          }}
        />
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 11, letterSpacing: '0.08em',
            color: 'rgba(0,245,255,0.75)',
          }}
        >
          DEV_MODE: ACTIVE
        </span>
      </div>

      {/* Nav links */}
      <div style={{ display: 'flex', gap: 30 }}>
        {LINKS.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              fontSize: 13, fontWeight: 500,
              color: hovered === item ? '#00f5ff' : '#94a3b8',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={() => setHovered(item)}
            onMouseLeave={() => setHovered(null)}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Build tag */}
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 9, letterSpacing: '0.1em',
          color: 'rgba(0,245,255,0.25)',
        }}
      >
        v2.0.26
      </span>
    </nav>
  )
}
