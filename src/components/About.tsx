import { personal } from '../data/content'

const chips = [
  { icon: '📍', label: 'Lyon, France' },
  { icon: '🎓', label: 'Epitech Lyon' },
  { icon: '💼', label: 'Alternance' },
  { icon: '🚀', label: 'Disponible' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark2">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="sr text-center mb-16">
          <p className="font-mono text-blue text-sm mb-2">// À propos</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Qui suis-je ?
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Photo */}
          <div className="sr flex-shrink-0">
            <div className="photo-ring">
              <img
                src={personal.photo}
                alt={personal.name}
                className="w-52 h-52 sm:w-64 sm:h-64 rounded-full object-cover object-top"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            {personal.about.map((para, i) => (
              <p
                key={i}
                className="sr text-gray-300 text-lg leading-relaxed mb-5"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {para}
              </p>
            ))}

            {/* Info chips */}
            <div className="sr flex flex-wrap gap-3 mt-8">
              {chips.map((c) => (
                <span
                  key={c.label}
                  className="info-chip flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-white/10 text-gray-300 text-sm"
                >
                  <span>{c.icon}</span>
                  {c.label}
                </span>
              ))}
            </div>

            {/* Contact shortcuts */}
            <div className="sr flex flex-wrap gap-4 mt-8">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 text-gray-400 hover:text-blue transition-colors text-sm"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {personal.email}
              </a>
              <a
                href={`tel:${personal.phone}`}
                className="flex items-center gap-2 text-gray-400 hover:text-blue transition-colors text-sm"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l.91-1.21a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z" />
                </svg>
                {personal.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
