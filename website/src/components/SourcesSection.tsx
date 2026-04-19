import Reveal from './Reveal'

const sources = [
  {
    slug: 'data-contracts-technical-enforcement',
    title: 'Technical Enforcement of Data Standards via Data Contracts',
    topic: 'Technical Enforcement',
    type: 'Practitioner Guide',
    year: '2024',
    color: '#3ECFBE',
  },
  {
    slug: 'data-gov-best-practices',
    title: 'Data Governance Best Practices',
    topic: 'Governance Operations',
    type: 'Best Practices',
    year: '2024',
    color: '#C9A84C',
  },
  {
    slug: 'data-gov-frameworks',
    title: 'Data Governance Frameworks (DAMA-DMBOK & DCAM)',
    topic: 'Governance Frameworks',
    type: 'Framework Survey',
    year: '2024',
    color: '#C9A84C',
  },
  {
    slug: 'data-gov-cloud-ai',
    title: 'AI-Ready Data Governance',
    topic: 'AI Governance',
    type: 'Strategic Report',
    year: '2024',
    color: '#9B8FD4',
  },
  {
    slug: 'data-gov-operations',
    title: 'Operationalizing Data Governance',
    topic: 'Governance Operations',
    type: 'Practitioner Guide',
    year: '2024',
    color: '#C9A84C',
  },
  {
    slug: 'data-standard-governance-main',
    title: 'Data Standards & Governance: Core Framework',
    topic: 'Standards Definition',
    type: 'Framework',
    year: '2025',
    color: '#E8697A',
  },
  {
    slug: 'data-standard-frameworks',
    title: 'Standards Frameworks & Industry Alignment',
    topic: 'Standards Definition',
    type: 'Framework Survey',
    year: '2025',
    color: '#E8697A',
  },
  {
    slug: 'data-standard-practices',
    title: 'Data Standardization Practices',
    topic: 'Standards Definition',
    type: 'Practitioner Guide',
    year: '2025',
    color: '#E8A84C',
  },
  {
    slug: 'data-standard-architecture-of-trust',
    title: 'The Architecture of Trust',
    topic: 'Strategic Vision',
    type: 'Position Paper',
    year: '2025',
    color: '#C9A84C',
  },
]

export default function SourcesSection() {
  return (
    <section id="sources" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">07 · Bibliography</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink mb-4 gold-rule">
            Source Documents
          </h2>
          <p className="text-muted text-lg max-w-2xl mt-6 mb-16" style={{ fontWeight: 300 }}>
            Nine primary sources spanning governance frameworks, technical enforcement, and strategic vision.
          </p>
        </Reveal>

        <div className="space-y-3">
          {sources.map((s, i) => (
            <Reveal key={s.slug} delay={i * 50}>
              <div className="rounded-xl border border-border p-5 card-hover flex items-center gap-5"
                style={{ background: 'rgba(255,255,255,0.015)', borderColor: s.color + '18' }}>
                <span className="font-mono text-xs shrink-0 w-6 text-right" style={{ color: s.color, opacity: 0.5 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-ink text-sm font-medium leading-snug truncate">{s.title}</p>
                  <p className="text-muted text-xs mt-1">{s.topic}</p>
                </div>
                <div className="hidden md:flex items-center gap-3 shrink-0">
                  <span className="tag" style={{ background: s.color + '12', color: s.color, border: `1px solid ${s.color}25` }}>
                    {s.type}
                  </span>
                  <span className="font-mono text-xs text-dim">{s.year}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
