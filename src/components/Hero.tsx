import { useEffect, useRef } from 'react'
import { personal } from '../data/content'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // ── Particle canvas ──────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let rafId: number
    let w = 0
    let h = 0

    type Particle = {
      x: number; y: number; vx: number; vy: number
      r: number; alpha: number
    }
    let particles: Particle[] = []

    const resize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }

    const spawn = (): Particle => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
    })

    const init = () => {
      resize()
      particles = Array.from({ length: 90 }, spawn)
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.strokeStyle = `rgba(79,142,255,${0.12 * (1 - dist / 120)})`
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw & move particles
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(79,142,255,${p.alpha})`
        ctx.fill()

        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
      })

      rafId = requestAnimationFrame(draw)
    }

    init()
    draw()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark"
    >
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,142,255,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 text-center px-6 hero-anim">
        {/* Badge */}
        <div className="d1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue/30 bg-blue/5 text-blue text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-blue anim-pulse" />
          Disponible pour une alternance
        </div>

        {/* Name */}
        <h1 className="d2 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4">
          <span className="anim-grad-text">{personal.name}</span>
        </h1>

        {/* Title */}
        <p className="d3 text-2xl sm:text-3xl font-semibold text-gray-200 mb-3">
          {personal.title}
        </p>

        {/* Tagline */}
        <p className="d4 font-mono text-blue/80 text-base sm:text-lg mb-10 tracking-wide">
          {personal.tagline}
        </p>

        {/* CTA buttons */}
        <div className="d5 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-7 py-3 rounded-full bg-gradient-to-r from-blue to-purple text-white font-semibold shadow-lg shadow-blue/30 hover:shadow-blue/50 hover:scale-105 transition-all duration-200"
          >
            Voir mes projets
          </a>
          <a
            href={personal.cv}
            download
            className="px-7 py-3 rounded-full border border-blue/40 text-blue font-semibold hover:bg-blue/10 hover:border-blue transition-all duration-200 flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Télécharger CV
          </a>
        </div>

        {/* Social links */}
        <div className="d6 flex justify-center gap-5 mt-10">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-blue transition-colors"
            aria-label="GitHub"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-blue transition-colors"
            aria-label="LinkedIn"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 text-xs">
        <span>scroll</span>
        <div className="w-5 h-8 rounded-full border border-gray-600 flex justify-center pt-1.5">
          <span className="w-1 h-2 rounded-full bg-blue anim-wheel" />
        </div>
      </div>
    </section>
  )
}
