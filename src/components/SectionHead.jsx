import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * SectionHead
 * Section header with mono tag, gradient divider line, title & subtitle.
 */
export default function SectionHead({ tag, title, sub }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      className="mb-9"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="mono">{tag}</span>
        <div
          className="flex-1 h-px"
          style={{ background: 'linear-gradient(90deg, rgba(0,245,255,0.3), transparent)' }}
        />
      </div>
      <h2
        style={{
          fontSize: 'clamp(1.7rem, 3vw, 2.6rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: '#e2e8f0',
        }}
      >
        {title}
      </h2>
      {sub && <p className="text-cyber-faint mt-1.5 text-sm">{sub}</p>}
    </motion.div>
  )
}
