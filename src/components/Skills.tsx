import { skills } from '../data/content'

const borderColor: Record<string, string> = {
  blue: 'border-blue/30 hover:border-blue/60',
  purple: 'border-purple/30 hover:border-purple/60',
  cyan: 'border-cyan/30 hover:border-cyan/60',
}

const tagColor: Record<string, string> = {
  blue: 'bg-blue/10 text-blue',
  purple: 'bg-purple/10 text-purple',
  cyan: 'bg-cyan/10 text-cyan',
}

const glowColor: Record<string, string> = {
  blue: 'from-blue/10',
  purple: 'from-purple/10',
  cyan: 'from-cyan/10',
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-dark3">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="sr text-center mb-16">
          <p className="font-mono text-blue text-sm mb-2">// Compétences</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Stack technique
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <div
              key={skill.category}
              className={`sr sk-card relative rounded-2xl border bg-surface p-7 transition-all duration-300 ${borderColor[skill.color]}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Glow bg */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${glowColor[skill.color]} to-transparent opacity-0 group-hover:opacity-100 pointer-events-none`}
              />

              {/* Icon + Category */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{skill.icon}</span>
                <h3 className="font-bold text-white text-lg">{skill.category}</h3>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`ch-tag px-3 py-1 rounded-full text-xs font-medium ${tagColor[skill.color]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
