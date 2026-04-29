import { useRef, useCallback } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

/**
 * BentoCard
 * Glassmorphism card with 3-axis spring tilt on hover + scroll-reveal.
 * Props:
 *   delay    — stagger delay in seconds (default 0)
 *   className — extra CSS classes (e.g. "col-span-2")
 *   style     — inline styles
 *   children
 */
export default function BentoCard({ children, delay = 0, className = '', style = {} }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  const rxBase = useMotionValue(0)
  const ryBase = useMotionValue(0)
  const rx     = useSpring(rxBase, { damping: 26, stiffness: 320 })
  const ry     = useSpring(ryBase, { damping: 26, stiffness: 320 })

  const onMove = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const r  = el.getBoundingClientRect()
    const nx = (e.clientX - r.left)  / r.width  - 0.5
    const ny = (e.clientY - r.top)   / r.height - 0.5
    rxBase.set(-ny * 14)
    ryBase.set(nx  * 14)
  }, [rxBase, ryBase])

  const onLeave = useCallback(() => {
    rxBase.set(0)
    ryBase.set(0)
  }, [rxBase, ryBase])

  return (
    <motion.div
      ref={ref}
      className={`glass glass-hover ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{
        rotateX: rx,
        rotateY: ry,
        transformPerspective: 900,
        willChange: 'transform',
        ...style,
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  )
}
