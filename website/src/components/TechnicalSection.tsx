import Reveal from './Reveal'

const pipelineStages = [
  { label: 'Source', sub: 'Raw ingestion', color: '#4A4860' },
  { label: 'Contract', sub: 'ODCS validation', color: '#C9A84C' },
  { label: 'Bronze', sub: 'Schema check', color: '#7A788C' },
  { label: 'Silver', sub: 'DQ expectations', color: '#3ECFBE' },
  { label: 'Gold', sub: 'SLA certified', color: '#C9A84C' },
  { label: 'Catalog', sub: 'Unity / Atlan', color: '#9B8FD4' },
]

export default function TechnicalSection() {
  return (
    <section id="technical" className="py-32 px-6 bg-bg-card">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">04 · Enforcement</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink mb-4 gold-rule">
            Technical Architecture
          </h2>
          <p className="text-muted text-lg max-w-2xl mt-6 mb-16" style={{ fontWeight: 300 }}>
            Standards only compound value when they are enforced automatically — at ingestion, transformation, and publication layers.
          </p>
        </Reveal>

        {/* Pipeline diagram */}
        <Reveal delay={100}>
          <div className="rounded-xl border border-border bg-bg-elev p-8 mb-10">
            <p className="font-mono text-xs text-muted tracking-widest uppercase mb-8">Enforcement Pipeline</p>
            <div className="flex items-center gap-0 overflow-x-auto pb-2">
              {pipelineStages.map((s, i) => (
                <div key={s.label} className="flex items-center shrink-0">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-20 h-20 rounded-xl flex flex-col items-center justify-center border"
                      style={{ background: s.color + '15', borderColor: s.color + '40' }}
                    >
                      <span className="font-mono text-xs font-medium" style={{ color: s.color }}>{s.label}</span>
                      <span className="font-mono text-[9px] text-muted mt-1 text-center px-1 leading-tight">{s.sub}</span>
                    </div>
                  </div>
                  {i < pipelineStages.length - 1 && (
                    <div className="flex items-center mx-1">
                      <div className="w-6 h-[1px] bg-dim" />
                      <div className="w-0 h-0" style={{ borderTop: '4px solid transparent', borderBottom: '4px solid transparent', borderLeft: '6px solid #4A4860' }} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-4">
              {[
                { step: 'Shift-Left', body: 'Data contracts (ODCS) defined before pipeline build. Schema, SLAs, and owners declared as code.', color: '#C9A84C' },
                { step: 'In-Pipeline', body: 'Great Expectations suites and Databricks DLT expectations block invalid data from advancing tiers.', color: '#3ECFBE' },
                { step: 'Post-Publish', body: 'Unity Catalog enforces RBAC/ABAC. Atlan surfaces lineage, ownership, and quality scores for consumers.', color: '#9B8FD4' },
              ].map(({ step, body, color }) => (
                <div key={step} className="rounded-lg p-4 border border-border" style={{ background: color + '08' }}>
                  <div className="font-mono text-xs mb-2" style={{ color }}>{step}</div>
                  <p className="text-muted text-sm leading-relaxed" style={{ fontWeight: 300 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Code samples */}
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal delay={150}>
            <div>
              <p className="font-mono text-xs text-muted tracking-widest uppercase mb-3">ODCS Contract Fragment</p>
              <div className="code-block">
                <div><span className="kw">schema</span>:</div>
                <div>  <span className="str">name</span>: <span className="val">customer_events</span></div>
                <div>  <span className="str">version</span>: <span className="val">&quot;2.1.0&quot;</span></div>
                <div>  <span className="str">owner</span>: <span className="val">data-platform@acme.io</span></div>
                <div>  <span className="str">sla</span>:</div>
                <div>    <span className="str">freshness</span>: <span className="val">4h</span></div>
                <div>    <span className="str">availability</span>: <span className="val">99.5%</span></div>
                <div>  <span className="str">quality</span>:</div>
                <div>    <span className="str">completeness</span>: <span className="val">&gt;= 98%</span></div>
                <div>    <span className="str">uniqueness</span>: <span className="val">customer_id</span></div>
                <div><span className="cmt">  # Breaking changes require major version bump</span></div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div>
              <p className="font-mono text-xs text-muted tracking-widest uppercase mb-3">DLT Expectations (Python)</p>
              <div className="code-block">
                <div><span className="kw">@dlt</span>.expect_or_drop(</div>
                <div>    <span className="str">&quot;valid_customer_id&quot;</span>,</div>
                <div>    <span className="val">col</span>(<span className="str">&quot;customer_id&quot;</span>).isNotNull()</div>
                <div>)</div>
                <div><span className="kw">@dlt</span>.expect_or_fail(</div>
                <div>    <span className="str">&quot;schema_version_match&quot;</span>,</div>
                <div>    <span className="val">col</span>(<span className="str">&quot;_schema_version&quot;</span>) == <span className="val">lit</span>(<span className="str">&quot;2.1.0&quot;</span>)</div>
                <div>)</div>
                <div><span className="kw">def</span> <span className="str">silver_customers</span>():</div>
                <div>    <span className="kw">return</span> dlt.read(<span className="str">&quot;bronze_customers&quot;</span>)</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
