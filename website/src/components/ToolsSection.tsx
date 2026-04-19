import Reveal from './Reveal'

const tools = [
  {
    name: 'Great Expectations',
    category: 'Quality',
    color: '#3ECFBE',
    bg: 'rgba(62,207,190,0.08)',
    description: 'Python-native DQ framework. Expectation suites encode quality rules as code. Generates human-readable docs and CI gate reports.',
  },
  {
    name: 'Unity Catalog',
    category: 'Catalog / Security',
    color: '#9B8FD4',
    bg: 'rgba(155,143,212,0.08)',
    description: 'Databricks unified governance layer. Fine-grained ABAC for tables, views, volumes. Automated PII tagging and lineage tracking.',
  },
  {
    name: 'Databricks DLT',
    category: 'Pipeline',
    color: '#C9A84C',
    bg: 'rgba(201,168,76,0.08)',
    description: 'Delta Live Tables — declarative pipelines with built-in expectations. Automates Medallion architecture with lineage and quality metrics.',
  },
  {
    name: 'Atlan',
    category: 'Data Catalog',
    color: '#E8A84C',
    bg: 'rgba(232,168,76,0.08)',
    description: 'Modern active metadata platform. Surfaces business context, lineage, and quality scores to consumers. Connects governance to data discovery.',
  },
  {
    name: 'ODCS',
    category: 'Contract Standard',
    color: '#E8697A',
    bg: 'rgba(232,105,122,0.08)',
    description: 'Open Data Contract Standard. YAML-based schema for declaring structural, quality, SLA, and ownership requirements between producers and consumers.',
  },
  {
    name: 'Snowflake Horizon',
    category: 'Governance Suite',
    color: '#3ECFBE',
    bg: 'rgba(62,207,190,0.06)',
    description: 'Snowflake\'s unified governance suite covering classification, masking policies, row-level security, and cross-cloud data sharing with governance.',
  },
]

export default function ToolsSection() {
  return (
    <section id="tools" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">05 · Toolchain</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink mb-4 gold-rule">
            The Modern Stack
          </h2>
          <p className="text-muted text-lg max-w-2xl mt-6 mb-16" style={{ fontWeight: 300 }}>
            Tools that operationalize governance. Each addresses a specific enforcement layer in the pipeline.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((t, i) => (
            <Reveal key={t.name} delay={i * 70}>
              <div
                className="rounded-xl border border-border p-6 card-hover h-full flex flex-col"
                style={{ background: t.bg, borderColor: t.color + '22' }}
              >
                <div className="flex items-start justify-between gap-2 mb-4">
                  <h3 className="font-serif text-xl" style={{ color: t.color }}>{t.name}</h3>
                  <span className="tag shrink-0 mt-1" style={{ background: t.color + '18', color: t.color, border: `1px solid ${t.color}30` }}>
                    {t.category}
                  </span>
                </div>
                <p className="text-muted text-sm leading-relaxed flex-1" style={{ fontWeight: 300 }}>
                  {t.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CI/CD integration callout */}
        <Reveal delay={200}>
          <div
            className="mt-10 rounded-xl border p-8"
            style={{ background: 'rgba(201,168,76,0.05)', borderColor: 'rgba(201,168,76,0.15)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-gold tracking-widest uppercase">CI/CD Enforcement Pattern</span>
            </div>
            <p className="text-muted leading-relaxed max-w-3xl" style={{ fontWeight: 300 }}>
              The convergence point: data contracts validated in PR pipelines, schema changes blocked if they break downstream
              consumer expectations, quality expectations run as pre-merge gates, and catalog metadata updated automatically
              on merge. Standards become the branching strategy.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
