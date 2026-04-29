import { useState } from 'react'
import { Mail, GitBranch, Globe } from 'lucide-react'

const LINKS = [
  {
    href: 'mailto:fadileyouness4@gmail.com',
    icon: Mail, label: 'Get in Touch',
    base: { background: 'rgba(0,245,255,0.07)', border: '1px solid rgba(0,245,255,0.32)', color: '#00f5ff' },
    hover: { background: 'rgba(0,245,255,0.15)', border: '1px solid rgba(0,245,255,0.32)', color: '#00f5ff' },
  },
  {
    href: 'https://github.com/Youness-f', target: '_blank', rel: 'noopener noreferrer',
    icon: GitBranch, label: 'GitHub',
    base: { background: 'transparent', border: '1px solid rgba(255,255,255,0.09)', color: '#94a3b8' },
    hover: { background: 'transparent', border: '1px solid rgba(168,85,247,0.4)', color: '#a855f7' },
  },
  {
    href: 'https://www.linkedin.com/in/youness-el-fadil-94083b398/', target: '_blank', rel: 'noopener noreferrer',
    icon: Globe, label: 'LinkedIn',
    base: { background: 'transparent', border: '1px solid rgba(255,255,255,0.09)', color: '#94a3b8' },
    hover: { background: 'transparent', border: '1px solid rgba(0,245,255,0.35)', color: '#00f5ff' },
  },
]

function FooterBtn({ href, target, rel, icon: Icon, label, base, hover }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      className="footer-btn"
      href={href}
      target={target}
      rel={rel}
      style={{
        padding: '11px 22px',
        borderRadius: 10,
        fontSize: 13,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        transition: 'all 0.2s ease',
        ...(hovered ? hover : base),
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon size={15} strokeWidth={1.5} />
      {label}
    </a>
  )
}

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        padding: '64px clamp(20px,5%,80px)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div
        className="footer-top"
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 32,
        }}
      >
        <div>
          <div className="mono" style={{ marginBottom: 10 }}>INITIATE_CONTACT</div>
          <h3
            style={{
              fontSize: 'clamp(1.3rem,2.5vw,2rem)',
              fontWeight: 700,
              color: '#e2e8f0',
              marginBottom: 6,
            }}
          >
            Let's build something great.
          </h3>
          <p style={{ fontSize: 13, color: '#475569' }}>
            Open to internships, collaborations, and full-time opportunities.
          </p>
        </div>

        <div className="footer-links" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
          {LINKS.map(l => <FooterBtn key={l.label} {...l} />)}
        </div>
      </div>

      <div
        className="footer-bottom"
        style={{
          maxWidth: 1120,
          margin: '28px auto 0',
          paddingTop: 22,
          borderTop: '1px solid rgba(255,255,255,0.04)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 8,
        }}
      >
        <span className="mono" style={{ opacity: 0.5 }}>
          Copyright 2026 YOUNESS EL FADIL
        </span>
        <span className="mono" style={{ opacity: 0.28 }}>
          BUILD_v2.0.26 // CYBER-MIN // ENSA KHOURIBGA
        </span>
      </div>
    </footer>
  )
}
