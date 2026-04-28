import { experiences } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-dark2">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="sr text-center mb-16">
          <p className="font-mono text-blue text-sm mb-2">// Parcours</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Mon expérience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="tl-line absolute left-5 sm:left-8 top-0 bottom-0 w-px" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="sr relative pl-14 sm:pl-20"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Dot */}
                <div className="absolute left-[14px] sm:left-[27px] top-1.5 w-3 h-3 rounded-full bg-blue ring-4 ring-dark2 shadow-[0_0_10px_rgba(79,142,255,0.6)]" />

                {/* Year badge */}
                <span className="inline-block font-mono text-xs text-blue/70 mb-2">
                  {exp.year}
                </span>

                {/* Card */}
                <div className="rounded-xl border border-white/8 bg-surface p-6 hover:border-blue/30 transition-all duration-300">
                  <h3 className="font-bold text-white text-lg leading-tight">
                    {exp.title}
                  </h3>
                  <p className="text-blue/80 text-sm font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
