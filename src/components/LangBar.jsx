import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * LangBar
 * Animated horizontal language proficiency bar.
 */
export default function LangBar({ lang, pct, label }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 10, color: 'var(--faint)',
          width: 50, flexShrink: 0,
        }}
      >
        {lang}
      </span>

      <div
        style={{
          flex: 1, height: 3,
          background: 'rgba(255,255,255,0.05)',
          borderRadius: 2, overflow: 'hidden',
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${pct}%` : 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #00f5ff, #a855f7)',
            borderRadius: 2,
          }}
        />
      </div>

      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 9, color: 'var(--faint)',
          width: 68, textAlign: 'right', flexShrink: 0,
        }}
      >
        {label}
      </span>
    </div>
  )
}
