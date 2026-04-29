import { GraduationCap, Layers, Code2, MapPin } from 'lucide-react'
import BentoCard  from './BentoCard'
import SectionHead from './SectionHead'

export default function Education() {
  return (
    <section
      id="education"
      style={{ padding: '80px clamp(20px,5%,80px)', position: 'relative', zIndex: 2 }}
    >
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <SectionHead
          tag="// 01.EDUCATION"
          title="Academic Journey"
          sub="Progressive engineering education — from foundations to advanced systems."
        />

        {/* Bento Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px,100%), 1fr))',
            gap: 14,
          }}
        >
          {/* Master's — featured 2-col */}
          <BentoCard
            delay={0.1}
            style={{
              padding: '32px 34px', minHeight: 220,
              gridColumn: 'span 2',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 22 }}>
              <div
                style={{
                  width: 46, height: 46, borderRadius: 12,
                  background: 'rgba(0,245,255,0.07)',
                  border: '1px solid rgba(0,245,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <GraduationCap size={22} color="#00f5ff" strokeWidth={1.5} />
              </div>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace", fontSize: 10,
                  color: 'rgba(0,245,255,0.55)',
                  padding: '3px 10px',
                  border: '1px solid rgba(0,245,255,0.2)', borderRadius: 4,
                }}
              >
                2024 — 2026
              </span>
            </div>

            <h3 style={{ fontSize: 22, fontWeight: 700, color: '#e2e8f0', marginBottom: 8 }}>
              Master's in Software Engineering
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 14 }}>
              <MapPin size={12} color="#475569" strokeWidth={1.5} />
              <span style={{ fontSize: 13, color: '#475569' }}>ENSA Khouribga</span>
            </div>
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.65, maxWidth: '70ch' }}>
              Advanced software engineering principles — distributed systems, cloud architecture,
              microservices patterns, and enterprise-grade application design.
            </p>

            {/* Decorative radial glow */}
            <div
              style={{
                position: 'absolute', top: -20, right: -20,
                width: 220, height: 220, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0,245,255,0.04) 0%, transparent 65%)',
                pointerEvents: 'none',
              }}
            />
          </BentoCard>

          {/* Licence Pro */}
          <BentoCard delay={0.2} style={{ padding: 28, minHeight: 220 }}>
            <div
              style={{
                width: 42, height: 42, borderRadius: 12,
                background: 'rgba(168,85,247,0.07)',
                border: '1px solid rgba(168,85,247,0.22)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 16,
              }}
            >
              <Layers size={20} color="#a855f7" strokeWidth={1.5} />
            </div>
            <span className="mono" style={{ color: 'rgba(168,85,247,0.55)', display: 'block', marginBottom: 10 }}>
              2023 — 2024
            </span>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#e2e8f0', marginBottom: 7, lineHeight: 1.3 }}>
              Licence Pro<br />Software Engineering
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <MapPin size={11} color="#475569" strokeWidth={1.5} />
              <span style={{ fontSize: 12, color: '#475569' }}>ENSA</span>
            </div>
          </BentoCard>

          {/* DTS */}
          <BentoCard delay={0.28} style={{ padding: 28, minHeight: 180 }}>
            <div
              style={{
                width: 42, height: 42, borderRadius: 12,
                background: 'rgba(0,245,255,0.05)',
                border: '1px solid rgba(0,245,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 16,
              }}
            >
              <Code2 size={20} color="#00f5ff" strokeWidth={1.5} />
            </div>
            <span className="mono" style={{ display: 'block', marginBottom: 10, opacity: 0.6 }}>
              2021 — 2023
            </span>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#e2e8f0', lineHeight: 1.3 }}>
              DTS — Digital Development
            </h3>
          </BentoCard>

          {/* Academic Stats */}
          <BentoCard delay={0.36} style={{ padding: 28, minHeight: 180 }}>
            <div className="mono" style={{ marginBottom: 18 }}>ACADEMIC_STATS</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { k: 'Years of Study', v: '5+' },
                { k: 'Programs',       v: '3'  },
                { k: 'Institutions',   v: '2'  },
              ].map(({ k, v }) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 12, color: '#475569' }}>{k}</span>
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 15, color: '#00f5ff', fontWeight: 700,
                    }}
                  >
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  )
}
