import { FormEvent, useState } from 'react'
import { personal, formspreeId } from '../data/content'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-dark2">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="sr text-center mb-16">
          <p className="font-mono text-blue text-sm mb-2">// Contact</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Travaillons ensemble
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Une opportunité d'alternance, un projet ou juste une question ?
            N'hésitez pas à me contacter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact channels */}
          <div className="sr space-y-5">
            <Channel
              icon={<EmailIcon />}
              label="Email"
              value={personal.email}
              href={`mailto:${personal.email}`}
            />
            <Channel
              icon={<PhoneIcon />}
              label="Téléphone"
              value={personal.phone}
              href={`tel:${personal.phone}`}
            />
            <Channel
              icon={<LinkedInIcon />}
              label="LinkedIn"
              value="bilal-ait-ouabbas"
              href={personal.linkedin}
              external
            />
            <Channel
              icon={<GitHubIcon />}
              label="GitHub"
              value="Bilal-aitouabbas"
              href={personal.github}
              external
            />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="sr space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1.5">Nom</label>
              <input
                name="name"
                required
                placeholder="Jean Dupont"
                className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue/60 transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1.5">Email</label>
              <input
                name="email"
                type="email"
                required
                placeholder="contact@example.com"
                className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue/60 transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1.5">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Votre message..."
                className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue/60 transition-colors text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue to-purple text-white font-semibold hover:opacity-90 disabled:opacity-50 transition-all duration-200 shadow-lg shadow-blue/20"
            >
              {status === 'sending' ? 'Envoi…' : 'Envoyer le message'}
            </button>

            {status === 'success' && (
              <p className="text-green-400 text-sm text-center">
                Message envoyé ! Je vous répondrai rapidement.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm text-center">
                Une erreur est survenue. Réessayez ou contactez-moi par email.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function Channel({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href: string
  external?: boolean
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-surface hover:border-blue/40 hover:bg-blue/5 transition-all duration-200 group"
    >
      <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center text-blue group-hover:bg-blue/20 transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-0.5">{label}</p>
        <p className="text-white text-sm font-medium">{value}</p>
      </div>
    </a>
  )
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l.91-1.21a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}
