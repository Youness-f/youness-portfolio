import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'

const LINKS = ['About', 'Education', 'Projects', 'Contact']

export default function Navbar() {
  const [hovered, setHovered] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <nav
      className="site-nav"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '14px clamp(16px, 4vw, 40px)',
        background: 'rgba(5,8,16,0.72)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: '#00f5ff',
              display: 'inline-block',
              animation: 'pulse-dot 2s ease infinite',
            }}
          />
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 11,
              letterSpacing: '0.08em',
              color: 'rgba(0,245,255,0.75)',
            }}
          >
            DEV_MODE: ACTIVE
          </span>
        </div>

        <div className="site-nav-links" style={{ display: 'flex', gap: 30 }}>
          {LINKS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontSize: 13,
                fontWeight: 500,
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
          <a
            href="/Youness-El-Fadil-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: '#00f5ff',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <Download size={14} /> Resume
          </a>
        </div>

        <span
          className="site-nav-version"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 9,
            letterSpacing: '0.1em',
            color: 'rgba(0,245,255,0.25)',
          }}
        >
          v2.0.26
        </span>

        <button
          type="button"
          className="site-nav-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(open => !open)}
          style={{
            display: 'none',
            width: 40,
            height: 40,
            borderRadius: 10,
            border: '1px solid rgba(0,245,255,0.2)',
            background: 'rgba(0,245,255,0.05)',
            color: '#00f5ff',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {menuOpen && (
        <div
          className="site-nav-mobile"
          style={{
            maxWidth: 1120,
            margin: '12px auto 0',
            padding: 12,
            borderRadius: 16,
            border: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(7,12,24,0.94)',
            display: 'none',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          {LINKS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: '10px 12px',
                borderRadius: 10,
                color: '#cbd5e1',
                textDecoration: 'none',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.04)',
              }}
            >
              {item}
            </a>
          ))}
          <a
            href="/Youness-El-Fadil-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{
              padding: '10px 12px',
              borderRadius: 10,
              color: '#00f5ff',
              textDecoration: 'none',
              background: 'rgba(0,245,255,0.05)',
              border: '1px solid rgba(0,245,255,0.16)',
            }}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  )
}
