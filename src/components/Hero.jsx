import { motion } from 'framer-motion'
import { Terminal, ChevronRight, Mail } from 'lucide-react'
import ProfileFrame from './ProfileFrame'
import LangBar     from './LangBar'
import TechTag     from './TechTag'

const TECH = [
  'Spring Boot','Angular','React','MySQL','MongoDB',
  'Java','PHP','TypeScript','REST API','Docker',
]

const STATUS_GRID = [
  { k: 'STATUS',   v: 'AVAILABLE',  c: '#22c55e'  },
  { k: 'BASE',     v: 'MOROCCO',    c: '#00f5ff'  },
  { k: 'DEGREE',   v: 'MSC STUDENT',c: '#a855f7'  },
  { k: 'FOCUS',    v: 'FULL STACK', c: '#f59e0b'  },
]

const LANGS = [
  { lang: 'Arabic',  pct: 100, label: 'Native'       },
  { lang: 'French',  pct: 72,  label: 'Intermediate' },
  { lang: 'English', pct: 68,  label: 'Intermediate' },
]

const ease = [0.16, 1, 0.3, 1]

export default function Hero() {
  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        padding: '110px clamp(20px,5%,80px) 80px',
      }}
    >
      <div
        style={{
          maxWidth: 1120, margin: '0 auto', width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(480px, 100%), 1fr))',
          gap: 'clamp(40px,6vw,90px)',
          alignItems: 'center',
        }}
      >
        {/* ── TEXT COLUMN ──────────────────────────────────── */}
        <div>
          {/* Coordinates */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}
          >
            <span className="mono">33.9716° N, 6.8498° W</span>
            <span className="mono" style={{ opacity: 0.4 }}>// MOROCCO</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            style={{
              fontSize: 'clamp(2.6rem,5.5vw,4.8rem)',
              fontWeight: 800, letterSpacing: '-0.03em',
              lineHeight: 1.05, marginBottom: 14,
            }}
          >
            Youness<br />
            <span
              style={{
                color: '#00f5ff',
                textShadow: '0 0 30px rgba(0,245,255,0.45)',
              }}
            >
              EL FADIL
            </span>
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 22 }}
          >
            <Terminal size={15} color="#a855f7" strokeWidth={1.5} />
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 13, color: '#a855f7',
              }}
            >
              Full Stack Engineer
            </span>
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 13, color: 'rgba(255,255,255,0.18)',
                animation: 'blink 1s step-end infinite',
              }}
            >
              _
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            style={{
              color: '#94a3b8', lineHeight: 1.7,
              fontSize: 14.5, marginBottom: 28, maxWidth: '50ch',
            }}
          >
            Engineering scalable full-stack systems from Morocco.
            Specializing in Java Spring Boot backends and modern React / Angular
            frontends — from database schema to polished UI.
          </motion.p>

          {/* Tech tags */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 34 }}
          >
            {TECH.map(t => <TechTag key={t} label={t} />)}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}
          >
            <a
              href="#projects"
              style={{
                padding: '10px 22px', borderRadius: 8,
                background: 'rgba(0,245,255,0.08)',
                border: '1px solid rgba(0,245,255,0.4)',
                color: '#00f5ff', fontSize: 13, fontWeight: 600,
                display: 'flex', alignItems: 'center', gap: 6,
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,245,255,0.17)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,245,255,0.08)'}
            >
              View Projects <ChevronRight size={13} />
            </a>
            <a
              href="#contact"
              style={{
                padding: '10px 22px', borderRadius: 8,
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#94a3b8', fontSize: 13, fontWeight: 600,
                display: 'flex', alignItems: 'center', gap: 6,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(168,85,247,0.45)'
                e.currentTarget.style.color       = '#a855f7'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.color       = '#94a3b8'
              }}
            >
              <Mail size={13} /> Contact
            </a>
          </motion.div>
        </div>

        {/* ── PROFILE COLUMN ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.35, ease }}
          style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: 36,
          }}
        >
          <ProfileFrame />

          {/* Status card */}
          <div
            className="glass"
            style={{ padding: '16px 20px', width: '100%', maxWidth: 300 }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {STATUS_GRID.map(({ k, v, c }) => (
                <div key={k}>
                  <div
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 8.5, color: '#475569',
                      marginBottom: 3, letterSpacing: '0.1em',
                    }}
                  >
                    {k}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 10.5, color: c, letterSpacing: '0.04em',
                    }}
                  >
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Language bars */}
          <div style={{ width: '100%', maxWidth: 300 }}>
            <div className="mono" style={{ marginBottom: 10 }}>LANGUAGES</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {LANGS.map(l => <LangBar key={l.lang} {...l} />)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
