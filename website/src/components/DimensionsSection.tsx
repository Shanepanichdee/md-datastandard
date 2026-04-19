'use client'
import { useState } from 'react'
import Reveal from './Reveal'

const dims = [
  {
    id: 'semantic',
    label: 'Semantic',
    num: '01',
    color: '#C9A84C',
    bg: 'rgba(201,168,76,0.1)',
    border: 'rgba(201,168,76,0.25)',
    tagline: 'Shared meaning across systems',
    description: 'Establishes authoritative definitions through business glossaries, ontologies, and canonical data models. The prerequisite for any cross-domain data exchange — without shared semantics, every integration is a translation layer built on assumption.',
    examples: ['Business glossaries', 'Canonical models', 'Ontologies', 'DAMA-DMBOK Chapter 9', 'MDM hubs'],
  },
  {
    id: 'structural',
    label: 'Structural',
    num: '02',
    color: '#3ECFBE',
    bg: 'rgba(62,207,190,0.1)',
    border: 'rgba(62,207,190,0.25)',
    tagline: 'Consistent format and schema',
    description: 'Governs physical representation: naming conventions, data type consistency, schema versioning, and format standardization. Data contracts (ODCS) formalize these structural agreements between producers and consumers as versioned, machine-enforceable specifications.',
    examples: ['ODCS contracts', 'Schema registries', 'Naming conventions', 'Versioning policies', 'Format standards'],
  },
  {
    id: 'quality',
    label: 'Quality',
    num: '03',
    color: '#E8697A',
    bg: 'rgba(232,105,122,0.1)',
    border: 'rgba(232,105,122,0.25)',
    tagline: 'Fit-for-purpose measurement',
    description: 'Covers the 6 DQ dimensions (completeness, accuracy, consistency, timeliness, uniqueness, validity) plus automated enforcement via Great Expectations suites, DLT expectations, and SLA tracking. Quality becomes code, not documentation.',
    examples: ['Great Expectations', 'DLT Expectations', 'DQDL pipelines', '6 DQ dimensions', 'SLA monitoring'],
  },
  {
    id: 'security',
    label: 'Security',
    num: '04',
    color: '#9B8FD4',
    bg: 'rgba(155,143,212,0.1)',
    border: 'rgba(155,143,212,0.25)',
    tagline: 'Classification and access control',
    description: 'Encompasses PII tagging, data classification taxonomy (public → restricted → confidential → secret), RBAC/ABAC enforcement, audit trail generation, and privacy impact assessment workflows. Governance without security is incomplete governance.',
    examples: ['Unity Catalog ABAC', 'PII tagging', 'RBAC policies', 'Audit trails', 'Privacy impact assessments'],
  },
  {
    id: 'interoperability',
    label: 'Interoperability',
    num: '05',
    color: '#E8A84C',
    bg: 'rgba(232,168,76,0.1)',
    border: 'rgba(232,168,76,0.25)',
    tagline: 'Cross-system data exchange',
    description: 'Enables seamless integration across organizational and technical boundaries through API standards, open table formats (Delta Lake, Iceberg), and federated catalog mesh. Data mesh architecture operationalizes interoperability by treating data products as first-class API contracts.',
    examples: ['Delta Lake / Iceberg', 'REST/GraphQL APIs', 'Data mesh products', 'Federated catalogs', 'Cross-domain lineage'],
  },
]

export default function DimensionsSection() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="dimensions" className="py-32 px-6 bg-bg-card">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">02 · Taxonomy</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink mb-4 gold-rule">
            Five Dimensions
          </h2>
          <p className="text-muted text-lg max-w-2xl mt-6 mb-16" style={{ fontWeight: 300 }}>
            A complete data standard touches all five layers. Click any dimension to expand its definition and enforcement patterns.
          </p>
        </Reveal>

        <div className="space-y-3">
          {dims.map((d, i) => {
            const isOpen = active === d.id
            return (
              <Reveal key={d.id} delay={i * 80}>
                <button
                  onClick={() => setActive(isOpen ? null : d.id)}
                  className="w-full text-left rounded-xl border transition-all duration-300 overflow-hidden card-hover"
                  style={{
                    background: isOpen ? d.bg : 'transparent',
                    borderColor: isOpen ? d.border : 'rgba(255,255,255,0.06)',
                  }}
                >
                  <div className="flex items-center gap-6 px-7 py-5">
                    <span className="font-mono text-xs shrink-0" style={{ color: d.color, opacity: 0.6 }}>{d.num}</span>
                    <span className="font-serif text-2xl flex-1" style={{ color: isOpen ? d.color : '#EDE9E0' }}>{d.label}</span>
                    <span className="text-sm text-muted hidden md:block flex-1 text-right" style={{ fontWeight: 300 }}>{d.tagline}</span>
                    <span className="font-mono text-xs shrink-0" style={{ color: d.color }}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </div>

                  {isOpen && (
                    <div className="px-7 pb-7 pt-1">
                      <div className="h-px mb-6" style={{ background: d.border }} />
                      <p className="text-muted leading-relaxed mb-6" style={{ fontWeight: 300 }}>
                        {d.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {d.examples.map(ex => (
                          <span key={ex} className="tag" style={{ background: d.bg, color: d.color, border: `1px solid ${d.border}` }}>
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </button>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
