import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * ThreeBackground
 * Full-screen fixed canvas with:
 *   - 1 800 vertex-colored particles (cyan → purple gradient)
 *   - DNA double-helix strand
 *   - Mouse parallax
 */
export default function ThreeBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas   = canvasRef.current
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false })
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5))
    renderer.setSize(innerWidth, innerHeight)

    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.1, 500)
    camera.position.z = 35

    /* ── Particle field ── */
    const N   = 1800
    const pos = new Float32Array(N * 3)
    const col = new Float32Array(N * 3)

    for (let i = 0; i < N; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 100
      pos[i * 3 + 1] = (Math.random() - 0.5) * 100
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50
      const t        = Math.random()
      // Cyan (#00f5ff) ↔ Purple (#a855f7)
      col[i * 3]     = t * 0.66
      col[i * 3 + 1] = (1 - t) * 0.96
      col[i * 3 + 2] = 1.0
    }

    const fieldGeo = new THREE.BufferGeometry()
    fieldGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    fieldGeo.setAttribute('color',    new THREE.BufferAttribute(col, 3))
    const fieldMat = new THREE.PointsMaterial({
      size: 0.18, vertexColors: true,
      transparent: true, opacity: 0.55, sizeAttenuation: true,
    })
    const field = new THREE.Points(fieldGeo, fieldMat)
    scene.add(field)

    /* ── DNA helix ── */
    const D = 280, dnaPos = new Float32Array(D * 3)
    for (let i = 0; i < D; i++) {
      const t   = i / D
      const ang = t * Math.PI * 14
      const s   = i % 2 === 0 ? 1 : -1
      dnaPos[i * 3]     = Math.cos(ang) * 4 * s - 14
      dnaPos[i * 3 + 1] = (t - 0.5) * 70
      dnaPos[i * 3 + 2] = Math.sin(ang) * 4 - 10
    }
    const dnaGeo = new THREE.BufferGeometry()
    dnaGeo.setAttribute('position', new THREE.BufferAttribute(dnaPos, 3))
    const dnaMat = new THREE.PointsMaterial({
      size: 0.3, color: 0x00f5ff,
      transparent: true, opacity: 0.22,
    })
    const dna = new THREE.Points(dnaGeo, dnaMat)
    scene.add(dna)

    /* ── Mouse parallax ── */
    let mx = 0, my = 0
    const onMove = (e) => {
      mx = (e.clientX / innerWidth  - 0.5) * 0.6
      my = (e.clientY / innerHeight - 0.5) * 0.6
    }
    addEventListener('mousemove', onMove)

    /* ── Render loop ── */
    let raf
    const tick = () => {
      raf = requestAnimationFrame(tick)
      const t          = Date.now() * 0.0001
      field.rotation.y = t * 0.4 + mx
      field.rotation.x = t * 0.15 + my * 0.4
      dna.rotation.y   = t * 1.0
      renderer.render(scene, camera)
    }
    tick()

    const onResize = () => {
      camera.aspect = innerWidth / innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(innerWidth, innerHeight)
    }
    addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      removeEventListener('mousemove', onMove)
      removeEventListener('resize', onResize)
      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', inset: 0,
        width: '100%', height: '100%',
        zIndex: 0, pointerEvents: 'none',
      }}
    />
  )
}
