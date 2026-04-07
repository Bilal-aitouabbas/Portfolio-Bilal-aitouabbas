import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-dark3">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="sr text-center mb-16">
          <p className="font-mono text-blue text-sm mb-2">// Projets</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ce que j'ai construit
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="sr proj-card group relative flex flex-col rounded-2xl border border-white/8 bg-surface overflow-hidden hover:border-blue/40 transition-all duration-300"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Gradient top bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

              <div className="flex flex-col flex-1 p-7">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-blue/70 text-sm font-medium mb-4">
                  {project.description}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">
                  {project.longDesc}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/5 text-gray-300 text-xs font-medium border border-white/8"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    Code source
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Démo live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="sr text-center mt-12">
          <a
            href="https://github.com/Bilal-aitouabbas"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-gray-300 hover:text-white hover:border-white/30 transition-all duration-200 text-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            Voir tous mes projets sur GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
