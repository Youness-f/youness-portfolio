import { Monitor, Cpu, Server, GitBranch, ExternalLink } from 'lucide-react'
import BentoCard   from './BentoCard'
import TechTag     from './TechTag'
import SectionHead from './SectionHead'

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ padding: '80px clamp(20px,5%,80px)', position: 'relative', zIndex: 2 }}
    >
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <SectionHead
          tag="// 02.PROJECTS & EXPERIENCE"
          title="Built & Deployed"
          sub="Production-grade systems — from first commit to live environment."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px,100%), 1fr))',
            gap: 14,
          }}
        >
          {/* Real Estate App — featured 2-col */}
          <BentoCard
            delay={0.1}
            style={{ padding: '32px 34px', minHeight: 265, gridColumn: '1 / -1' }}
          >
            {/* Decorative watermark icon */}
            <div
              style={{
                position: 'absolute', bottom: -10, right: -10,
                opacity: 0.035, pointerEvents: 'none',
              }}
            >
              <Monitor size={210} color="#00f5ff" />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 22 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  style={{
                    width: 46, height: 46, borderRadius: 12,
                    background: 'rgba(0,245,255,0.07)',
                    border: '1px solid rgba(0,245,255,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <Monitor size={22} color="#00f5ff" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="mono" style={{ marginBottom: 4 }}>@ 1337 SCHOOL</div>
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace", fontSize: 10,
                      color: '#22c55e', background: 'rgba(34,197,94,0.1)',
                      padding: '2px 8px', borderRadius: 4,
                    }}
                  >
                    FULL_STACK_PROJECT
                  </span>
                </div>
              </div>
              <ExternalLink size={15} color="#475569" strokeWidth={1.5} />
            </div>

            <h3 style={{ fontSize: 22, fontWeight: 700, color: '#e2e8f0', marginBottom: 10 }}>
              Real Estate Platform
            </h3>
            <p style={{ fontSize: 13.5, color: '#94a3b8', lineHeight: 1.7, marginBottom: 22, maxWidth: '68ch' }}>
              End-to-end real estate web platform with property listings, advanced geo-filtering,
              user authentication system, admin control panel, and real-time search built
              on a clean MVC architecture.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
              {['PHP', 'MySQL', 'JavaScript', 'HTML/CSS', 'REST API', 'MVC'].map(t => (
                <TechTag key={t} label={t} />
              ))}
            </div>
          </BentoCard>

          {/* OCP Internship */}
          <BentoCard delay={0.18} style={{ padding: 28, minHeight: 265 }}>
            <div
              style={{
                position: 'absolute', top: -8, right: -8,
                opacity: 0.04, pointerEvents: 'none',
              }}
            >
              <Cpu size={130} color="#a855f7" />
            </div>

            <div
              style={{
                width: 42, height: 42, borderRadius: 12,
                background: 'rgba(168,85,247,0.07)',
                border: '1px solid rgba(168,85,247,0.22)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 14,
              }}
            >
              <Cpu size={20} color="#a855f7" strokeWidth={1.5} />
            </div>

            <div className="mono" style={{ color: 'rgba(168,85,247,0.55)', marginBottom: 6 }}>
              @ OCP GROUP
            </div>
            <span
              style={{
                fontFamily: "'Space Mono', monospace", fontSize: 10,
                color: '#f59e0b', background: 'rgba(245,158,11,0.1)',
                padding: '2px 8px', borderRadius: 4,
                display: 'inline-block', marginBottom: 14,
              }}
            >
              INTERNSHIP
            </span>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#e2e8f0', marginBottom: 10, lineHeight: 1.3 }}>
              Industrial Systems Observation
            </h3>
            <p style={{ fontSize: 12.5, color: '#475569', lineHeight: 1.65 }}>
              Technical analysis of industrial automation, SCADA systems, and process monitoring
              at Morocco's largest phosphate mining corporation.
            </p>
          </BentoCard>

          {/* Backend Stack */}
          <BentoCard delay={0.26} style={{ padding: 28, minHeight: 190 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <Server size={17} color="#00f5ff" strokeWidth={1.5} />
              <span className="mono">BACKEND_STACK</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
              {['Spring Boot', 'Java', 'MySQL', 'MongoDB', 'REST API'].map(t => (
                <TechTag key={t} label={t} />
              ))}
            </div>
          </BentoCard>

          {/* Frontend Stack */}
          <BentoCard delay={0.32} style={{ padding: 28, minHeight: 190 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <Monitor size={17} color="#a855f7" strokeWidth={1.5} />
              <span className="mono" style={{ color: 'rgba(168,85,247,0.6)' }}>FRONTEND_STACK</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
              {['Angular', 'React', 'TypeScript', 'Tailwind CSS'].map(t => (
                <TechTag key={t} label={t} purple />
              ))}
            </div>
          </BentoCard>

          {/* Experience Log */}
          <BentoCard
            delay={0.38}
            style={{
              padding: 28, minHeight: 190,
              background: 'linear-gradient(135deg, rgba(0,245,255,0.03), rgba(168,85,247,0.04))',
            }}
          >
            <div className="mono" style={{ marginBottom: 20 }}>EXPERIENCE_LOG</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { k: 'Projects Built', v: '5+',  c: '#00f5ff' },
                { k: 'Tech Mastered',  v: '10+', c: '#a855f7' },
                { k: 'Years Coding',   v: '4+',  c: '#22c55e' },
              ].map(({ k, v, c }) => (
                <div
                  key={k}
                  style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    paddingBottom: 10,
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                  }}
                >
                  <span style={{ fontSize: 12, color: '#475569' }}>{k}</span>
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 17, color: c, fontWeight: 700,
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
