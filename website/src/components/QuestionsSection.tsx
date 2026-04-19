import Reveal from './Reveal'

const questions = [
  {
    q: 'How do we version-manage data standards across distributed domain teams?',
    context: 'Git-native contract versioning exists, but integration with org-wide policy enforcement is immature. Most teams still rely on manual review.',
  },
  {
    q: 'Can AI-generated metadata be trusted for governance decisions?',
    context: 'LLM-assisted tagging (PII detection, business term suggestion) is gaining adoption, but explainability and audit requirements remain unresolved.',
  },
  {
    q: 'What is the minimum viable governance tier for a startup vs. enterprise?',
    context: 'Frameworks like DAMA-DMBOK and DCAM were designed for large enterprises. Lightweight operationalizations for <50-person data teams are not well-documented.',
  },
  {
    q: 'How does data mesh governance work when domains span multiple cloud providers?',
    context: 'Cross-cloud lineage, federated policy enforcement, and consistent RBAC across AWS + Azure + GCP remain partially solved.',
  },
]

export default function QuestionsSection() {
  return (
    <section className="py-32 px-6 bg-bg-card">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">06 · Open Questions</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink mb-4 gold-rule">
            What Remains Unsolved
          </h2>
          <p className="text-muted text-lg max-w-2xl mt-6 mb-16" style={{ fontWeight: 300 }}>
            Gaps and tensions surfaced across the research that do not yet have clear practitioner consensus.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {questions.map((item, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="rounded-xl border border-border p-7 h-full" style={{ background: 'rgba(155,143,212,0.04)', borderColor: 'rgba(155,143,212,0.15)' }}>
                <div className="w-6 h-6 rounded-full flex items-center justify-center mb-5"
                  style={{ background: 'rgba(155,143,212,0.15)', border: '1px solid rgba(155,143,212,0.3)' }}>
                  <span className="font-mono text-[10px] text-lav">?</span>
                </div>
                <h3 className="font-serif text-xl text-ink mb-4 leading-snug">{item.q}</h3>
                <p className="text-muted text-sm leading-relaxed" style={{ fontWeight: 300 }}>{item.context}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
