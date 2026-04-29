/**
 * TechTag
 * Neon glow pill label.
 * Props:
 *   label   — text
 *   purple  — boolean, use purple variant instead of cyan
 */
export default function TechTag({ label, purple = false }) {
  return (
    <span className={`tech-tag ${purple ? 'tech-tag-purple' : ''}`}>
      {label}
    </span>
  )
}
