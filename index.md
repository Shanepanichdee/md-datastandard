# Wiki Index: Data Standards & Enterprise Data Governance

> LLM-maintained catalog. Updated on every ingest operation.
> Last updated: 2026-04-19 | Sources ingested: 5 | Wiki pages: 18

---

## Topics
*Synthesis pages — multi-source analysis of a subject.*

| Page | Summary | Sources | Updated |
|------|---------|---------|---------|
| [[wiki/topics/technical-enforcement-of-data-standards]] | Shift-left enforcement via data contracts, CI/CD gates, and ingestion-time quality rules | 1 | 2026-04-19 |
| [[wiki/topics/data-governance-best-practices]] | Federated models, decision rights, 90-day adoption playbook, anti-patterns — 80% of programs fail organizationally | 4 | 2026-04-19 |
| [[wiki/topics/ai-ready-data-governance]] | Unified data+AI control planes, tag-based security, DMFs, Data Mesh, MCP security, defense-in-depth for AI agents | 2 | 2026-04-19 |

---

## Entities
*One page per framework, tool, concept, or organization.*

| Page | Category | Summary | Sources |
|------|----------|---------|---------|
| [[wiki/entities/data-contracts]] | concept | Executable schema agreements (YAML/JSON/ODCS) stored in Git; enforce standards in CI/CD | 2 |
| [[wiki/entities/dama-dmbok]] | framework | 11 knowledge areas, DAMA Wheel, phased rollout — central reference for data management | 3 |
| [[wiki/entities/dcam]] | framework | EDM Council maturity model, 1–6 scale, Foundation/Execution/Collaboration — benchmarking tool | 2 |
| [[wiki/entities/federated-governance]] | concept | Central teams set standards; business domains own execution — dominant model for large enterprises | 3 |
| [[wiki/entities/data-stewardship]] | concept | Role hierarchy (CDO → Domain Owner → Steward); decision rights required for roles to be effective | 3 |
| [[wiki/entities/data-mesh]] | concept | Domain-owned data products, self-serve platform, federated governance at architecture level | 2 |
| [[wiki/entities/ai-governance]] | concept | Unified data+AI control planes, Identity Passthrough, MCP security, EU AI Act compliance | 2 |
| [[wiki/entities/unity-catalog]] | tool | Databricks unified governance for tables, unstructured data, and ML models in one metastore | 2 |
| [[wiki/entities/snowflake-horizon]] | tool | Snowflake governance layer — tag-based masking, DMFs, AI model governance | 1 |
| [[wiki/entities/governance-anti-patterns]] | concept | Six failure patterns: committee governance, tool-first, maturity trap, boiling ocean, IT ownership, symbolic stewardship | 2 |

---

## Sources
*One page per ingested raw source.*

| Page | Title | Date Ingested | URL/File |
|------|-------|---------------|----------|
| [[wiki/sources/data-contracts-technical-enforcement]] | Technical Codification and Enforcement of Data Standards | 2026-04-19 | local:data-standard-governance-tech.md |
| [[wiki/sources/data-gov-best-practices]] | Data Governance Best Practices: From Traditional Frameworks to AI-Ready Architectures | 2026-04-19 | local:raw/data-gov-best-practices copy.md |
| [[wiki/sources/data-gov-best-practices-frameworks]] | Research: Traditional Data Governance Frameworks and Core Pillars | 2026-04-19 | local:raw/data-gov-best-practices-research-frameworks copy.md |
| [[wiki/sources/data-gov-best-practices-cloud-ai]] | Research: Cloud and AI Data Governance Best Practices (2025–2026) | 2026-04-19 | local:raw/data-gov-best-practices-research-cloud-ai copy.md |
| [[wiki/sources/data-gov-best-practices-operations]] | Research: Data Governance Best Practices (Operations & People) | 2026-04-19 | local:raw/data-gov-best-practices-research-operations copy.md |

---

## Legacy Files (Pre-Schema)
*Research outputs created before this schema was established. Pending migration into wiki/ structure.*

| File | Description |
|------|-------------|
| [data-standard-governance.md](data-standard-governance.md) | Main synthesis: Data Standards in Enterprise Data Governance (18 sources) |
| [data-standard-governance-brief.md](data-standard-governance-brief.md) | Brief version of the main synthesis |
| [data-standard-governance-frameworks.md](data-standard-governance-frameworks.md) | Research: Definitions & taxonomy by DAMA-DMBOK, DCAM, Gartner, Forrester |
| [data-standard-governance-practices.md](data-standard-governance-practices.md) | Research: Organizational implementation & change management best practices |
| [data-standard-governance-tech.md](data-standard-governance-tech.md) | Research: Technical codification & CI/CD enforcement of data standards |
| [data-standard-governance-verification.md](data-standard-governance-verification.md) | Verification pass notes |
| [data-standard-governance.provenance.md](data-standard-governance.provenance.md) | Provenance: sources consulted, rounds, verification status |
| [data-standard-governance- The Architecture of Trust...md](data-standard-governance-%20The%20Architecture%20of%20Trust-%20Elaborating%20on%20Data%20Standards%20in%20Modern%20Enterprise%20Data%20Governance.md) | Elaborated article form of the synthesis |
