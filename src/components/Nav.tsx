import { useEffect, useRef, useState } from 'react'
import { personal } from '../data/content'

const links = [
  { href: '#about', label: 'À propos' },
  { href: '#skills', label: 'Compétences' },
  { href: '#experience', label: 'Parcours' },
  { href: '#projects', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav
      ref={navRef}
      id="nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? 'bg-dark/90 backdrop-blur-md shadow-lg shadow-black/40' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-mono text-blue text-lg font-bold tracking-tight hover:text-cyan transition-colors"
        >
          {'<BA />'}
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-gray-300 hover:text-blue transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CV button */}
        <a
          href={personal.cv}
          download
          className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue/50 text-blue text-sm hover:bg-blue/10 transition-all duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          CV
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
              open ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
              open ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 bg-dark2/95 backdrop-blur-md' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={close}
                className="block text-gray-300 hover:text-blue transition-colors py-1"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={personal.cv}
              download
              className="inline-flex items-center gap-2 text-blue text-sm mt-1"
            >
              Télécharger CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
