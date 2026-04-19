import Reveal from './Reveal'

const entities = [
  {
    name: 'DAMA-DMBOK',
    type: 'Framework',
    color: '#C9A84C',
    bg: 'rgba(201,168,76,0.08)',
    sources: 5,
    summary: '11-domain knowledge body covering data architecture, MDM, data quality, security, and warehousing. The canonical reference for enterprise data management roles and processes.',
  },
  {
    name: 'DCAM',
    type: 'Framework',
    color: '#3ECFBE',
    bg: 'rgba(62,207,190,0.08)',
    sources: 2,
    summary: 'EDM Council\'s 9-capability maturity model: data management strategy, governance, architecture, quality, MDM, platform, operations, usage, and culture. Most operationalizable enterprise framework.',
  },
  {
    name: 'Data Mesh',
    type: 'Architecture',
    color: '#9B8FD4',
    bg: 'rgba(155,143,212,0.08)',
    sources: 2,
    summary: 'Federated data ownership with domain-level accountability, data-as-products, self-serve infrastructure, and federated computational governance. Resolves centralization vs. agility tension.',
  },
  {
    name: 'Federated Governance',
    type: 'Pattern',
    color: '#E8697A',
    bg: 'rgba(232,105,122,0.08)',
    sources: 5,
    summary: 'Distributed governance model where central teams set standards and platforms while domain teams own data quality. Enables scale without single-team bottlenecks.',
  },
  {
    name: 'Data Stewardship',
    type: 'Role / Process',
    color: '#E8A84C',
    bg: 'rgba(232,168,76,0.08)',
    sources: 5,
    summary: 'Human-layer accountability covering business stewards (semantic accuracy), technical stewards (structural integrity), and operational stewards (pipeline health and SLA adherence).',
  },
  {
    name: 'AI Governance',
    type: 'Emerging',
    color: '#9B8FD4',
    bg: 'rgba(155,143,212,0.08)',
    sources: 2,
    summary: 'Extends classical governance to ML/AI pipelines: training data lineage, bias detection, model drift monitoring, feature store contracts, and MLOps lifecycle standards.',
  },
]

export default function GovernanceSection() {
  return (
    <section id="governance" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">03 · Frameworks</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink mb-4 gold-rule">
            Governance Landscape
          </h2>
          <p className="text-muted text-lg max-w-2xl mt-6 mb-16" style={{ fontWeight: 300 }}>
            Key frameworks, architectures, and organizational patterns synthesized across all nine source documents.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {entities.map((e, i) => (
            <Reveal key={e.name} delay={i * 70}>
              <div
                className="rounded-xl border border-border p-6 card-hover h-full flex flex-col"
                style={{ background: e.bg, borderColor: e.color + '22' }}
              >
                <div className="flex items-start justify-between gap-2 mb-4">
                  <h3 className="font-serif text-xl" style={{ color: e.color }}>{e.name}</h3>
                  <span className="tag shrink-0 mt-1" style={{ background: e.color + '18', color: e.color, border: `1px solid ${e.color}30` }}>
                    {e.type}
                  </span>
                </div>
                <p className="text-muted text-sm leading-relaxed flex-1" style={{ fontWeight: 300 }}>
                  {e.summary}
                </p>
                <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-2">
                  <span className="font-mono text-xs text-dim">{e.sources} source{e.sources > 1 ? 's' : ''}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Anti-patterns box */}
        <Reveal delay={200}>
          <div
            className="mt-10 rounded-xl border p-8"
            style={{ background: 'rgba(232,105,122,0.05)', borderColor: 'rgba(232,105,122,0.2)' }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-xs text-rose tracking-widest uppercase">Anti-patterns</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Governance Theater', body: 'Policies documented but not enforced. Committees that produce artifacts with no downstream impact.' },
                { title: 'Shadow Governance', body: 'Unofficial data sharing outside sanctioned channels. Bypasses standards invisibly until a breach.' },
                { title: 'Tool-First Thinking', body: 'Buying a catalog tool before defining ownership, stewardship, and quality SLAs.' },
                { title: 'Standards Without Automation', body: 'Manual compliance checks that cannot scale beyond a 3-person team or a quarterly audit cycle.' },
              ].map(a => (
                <div key={a.title}>
                  <div className="font-serif text-base text-rose mb-2">{a.title}</div>
                  <p className="text-muted text-sm leading-relaxed" style={{ fontWeight: 300 }}>{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
