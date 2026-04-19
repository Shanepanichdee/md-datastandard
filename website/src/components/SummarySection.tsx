import Reveal from './Reveal'

export default function SummarySection() {
  return (
    <section id="overview" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">01 · Overview</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink mb-16 gold-rule">
            What This Research Covers
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Reveal delay={100}>
            <div className="bg-bg-card border border-border rounded-xl p-8 card-hover h-full"
              style={{ borderColor: 'rgba(201,168,76,0.15)' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6"
                style={{ background: 'rgba(201,168,76,0.12)' }}>
                <span className="font-mono text-gold text-sm">§</span>
              </div>
              <h3 className="font-serif text-2xl text-ink mb-4">The Core Problem</h3>
              <p className="text-muted leading-relaxed" style={{ fontWeight: 300 }}>
                Organizations accumulate data faster than they can govern it. Without standardized
                definitions, structural contracts, and enforcement mechanisms, data becomes a liability —
                siloed, contradictory, and untrustworthy at the moment of decision.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="bg-bg-card border border-border rounded-xl p-8 card-hover h-full"
              style={{ borderColor: 'rgba(62,207,190,0.15)' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6"
                style={{ background: 'rgba(62,207,190,0.12)' }}>
                <span className="font-mono text-teal text-sm">→</span>
              </div>
              <h3 className="font-serif text-2xl text-ink mb-4">The Research Lens</h3>
              <p className="text-muted leading-relaxed" style={{ fontWeight: 300 }}>
                This compendium synthesizes practitioner frameworks (DAMA-DMBOK, DCAM), emerging patterns
                (data mesh, data contracts), and technical enforcement tools (Great Expectations, Unity
                Catalog, Databricks DLT) into a unified taxonomy for enterprise data governance.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                color: '#C9A84C',
                bg: 'rgba(201,168,76,0.08)',
                title: 'Mature Frameworks',
                body: 'DAMA-DMBOK and DCAM provide decades of institutional knowledge. DCAM\'s 9-capability model offers the most operationalizable enterprise governance architecture available.',
              },
              {
                color: '#3ECFBE',
                bg: 'rgba(62,207,190,0.08)',
                title: 'Emerging Patterns',
                body: 'Data contracts (ODCS format) are shifting governance left. Federated ownership via data mesh resolves the central-vs-distributed tension without sacrificing quality guarantees.',
              },
              {
                color: '#9B8FD4',
                bg: 'rgba(155,143,212,0.08)',
                title: 'Technical Stack',
                body: 'Great Expectations, Unity Catalog, Databricks DLT, and Atlan represent a converging toolchain for automated, metadata-driven enforcement at pipeline and catalog layers.',
              },
            ].map(({ color, bg, title, body }) => (
              <div
                key={title}
                className="rounded-xl p-6 card-hover border border-border"
                style={{ background: bg }}
              >
                <div className="w-2 h-2 rounded-full mb-4" style={{ background: color }} />
                <h4 className="font-serif text-xl mb-3" style={{ color }}>{title}</h4>
                <p className="text-muted text-sm leading-relaxed" style={{ fontWeight: 300 }}>{body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
