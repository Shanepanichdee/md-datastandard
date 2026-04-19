# Wiki Log

Append-only. One entry per operation. Grep-friendly prefix: `## [YYYY-MM-DD] <op> | <title>`

```bash
# Last 5 entries:
grep "^## \[" log.md | tail -5
```

---

## [2026-04-19] create | Wiki bootstrapped

- Schema established: CLAUDE.md
- Folder structure created: raw/, raw/assets/, wiki/topics/, wiki/entities/, wiki/sources/
- Catalog created: index.md
- Log started: log.md
- Legacy files cataloged in index.md (8 pre-schema research files, pending migration)
- Notes: Domain is Data Standards & Enterprise Data Governance. Core 5-dimension taxonomy established as canonical baseline in CLAUDE.md.

---

## [2026-04-19] ingest | Technical Codification and Enforcement of Data Standards

- Source: local:data-standard-governance-tech.md
- Pages created: [[wiki/sources/data-contracts-technical-enforcement]], [[wiki/entities/data-contracts]], [[wiki/topics/technical-enforcement-of-data-standards]]
- Pages updated: index.md
- Notes: First ingest demo. Covers data contracts as code (YAML/ODCS), CI/CD enforcement, ingestion-time quality (DLT/Great Expectations/Pydantic), IaC-driven catalogs (Atlan/Dataplex), and contract-aware transforms (dbt+Soda). Two open questions logged: streaming validation perf overhead, RBAC/IdP API depth.

---

## [2026-04-19] ingest | Data Governance Best Practices (4-file batch)

- Sources (4):
  - local:raw/data-gov-best-practices copy.md → [[wiki/sources/data-gov-best-practices]]
  - local:raw/data-gov-best-practices-research-frameworks copy.md → [[wiki/sources/data-gov-best-practices-frameworks]]
  - local:raw/data-gov-best-practices-research-cloud-ai copy.md → [[wiki/sources/data-gov-best-practices-cloud-ai]]
  - local:raw/data-gov-best-practices-research-operations copy.md → [[wiki/sources/data-gov-best-practices-operations]]
- Metadata files skipped (provenance, verification ×2, MOC index — not primary sources)
- Entity pages created (9): [[wiki/entities/dama-dmbok]], [[wiki/entities/dcam]], [[wiki/entities/federated-governance]], [[wiki/entities/data-stewardship]], [[wiki/entities/data-mesh]], [[wiki/entities/ai-governance]], [[wiki/entities/unity-catalog]], [[wiki/entities/snowflake-horizon]], [[wiki/entities/governance-anti-patterns]]
- Entity pages updated (1): [[wiki/entities/data-contracts]] (source_count 1→2, added Unity Catalog link)
- Topic pages created (2): [[wiki/topics/data-governance-best-practices]], [[wiki/topics/ai-ready-data-governance]]
- Pages updated: index.md (sources 1→5, wiki pages 3→18), log.md
- Notes: New topic track — Governance Best Practices and AI-Ready Governance. Key additions: Data Mesh, AI agent defense-in-depth (Identity Passthrough RFC 8693), MCP security, tag-based dynamic masking, Snowflake DMFs, governance anti-patterns (6 patterns), 90-day adoption playbook. Three open questions logged: streaming perf, cross-platform AI federation, post-implementation decay.

---

## [2026-04-19] ingest | Data Standards prior knowledge batch (4-file batch)

- Sources (4):
  - local:raw/data-standard-governance.md → [[wiki/sources/data-standard-governance-main]]
  - local:raw/data-standard-governance-frameworks.md → [[wiki/sources/data-standard-governance-frameworks]]
  - local:raw/data-standard-governance-practices.md → [[wiki/sources/data-standard-governance-practices]]
  - local:raw/data-standard-governance- The Architecture of Trust...md → [[wiki/sources/data-standard-governance-architecture-of-trust]]
- Metadata files skipped: data-standard-governance-tech.md (already ingested), -brief.md (duplicate), -verification.md, .provenance.md, 000_ MOC
- Entity pages created (6): [[wiki/entities/data-standards-taxonomy]], [[wiki/entities/odcs]], [[wiki/entities/ci-cd-enforcement]], [[wiki/entities/atlan]], [[wiki/entities/databricks-dlt]], [[wiki/entities/great-expectations]]
- Entity pages updated (4): [[wiki/entities/data-contracts]] (→4 sources), [[wiki/entities/federated-governance]] (→5), [[wiki/entities/data-stewardship]] (→5), [[wiki/entities/dama-dmbok]] (→5)
- Topic pages created (1): [[wiki/topics/data-standards-definition-taxonomy]]
- Pages updated: index.md (sources 5→9, wiki pages 18→32), log.md, Legacy section removed (files now in raw/)
- Notes: Policy vs. standard distinction now documented. 6 quality sub-dimensions (Completeness/Accuracy/Validity/Uniqueness/Timeliness/Consistency) with concrete rule examples added to taxonomy entity. Architecture of Trust article is richest single narrative source in wiki — covers every dimension with engineering-grade examples.
