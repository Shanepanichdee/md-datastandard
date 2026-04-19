# Wiki Index: Data Standards & Enterprise Data Governance

> LLM-maintained catalog. Updated on every ingest operation.
> Last updated: 2026-04-19 | Sources ingested: 9 | Wiki pages: 32

---

## Topics
*Synthesis pages — multi-source analysis of a subject.*

| Page | Summary | Sources | Updated |
|------|---------|---------|---------|
| [[wiki/topics/technical-enforcement-of-data-standards]] | Shift-left enforcement via data contracts, CI/CD gates, and ingestion-time quality rules | 1 | 2026-04-19 |
| [[wiki/topics/data-governance-best-practices]] | Federated models, decision rights, 90-day adoption playbook, anti-patterns — 80% of programs fail organizationally | 4 | 2026-04-19 |
| [[wiki/topics/ai-ready-data-governance]] | Unified data+AI control planes, tag-based security, DMFs, Data Mesh, MCP security, defense-in-depth for AI agents | 2 | 2026-04-19 |
| [[wiki/topics/data-standards-definition-taxonomy]] | Policy vs. standard distinction, 5-dimension taxonomy, 6 quality sub-dimensions, AI-readiness, compliance by design | 4 | 2026-04-19 |

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
| [[wiki/entities/data-standards-taxonomy]] | concept | 5-dimension framework (Semantic, Structural, Quality, Security, Interoperability) — industry synthesis across DAMA/DCAM/Gartner/Forrester | 3 |
| [[wiki/entities/odcs]] | standard | Open Data Contract Standard — vendor-neutral YAML spec for portable, machine-enforceable data contracts | 2 |
| [[wiki/entities/ci-cd-enforcement]] | concept | CI/CD gate blocking breaking schema changes — primary shift-left enforcement mechanism | 3 |
| [[wiki/entities/atlan]] | platform | Active data catalog and metadata control plane — deploys governance policies via IaC across multi-cloud stacks | 3 |
| [[wiki/entities/databricks-dlt]] | tool | Delta Live Tables — declarative ETL with expectations (warn/drop/fail) for ingestion-time quality enforcement | 3 |
| [[wiki/entities/great-expectations]] | library | Open-source Python data validation — expectation suites for producer-side pre-write quality checks | 2 |

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
| [[wiki/sources/data-standard-governance-main]] | Data Standards in Enterprise Data Governance (Main Synthesis, 18 sources) | 2026-04-19 | local:raw/data-standard-governance.md |
| [[wiki/sources/data-standard-governance-frameworks]] | Data Standards: Definitions and Taxonomy (DAMA-DMBOK, DCAM, Gartner, Forrester) | 2026-04-19 | local:raw/data-standard-governance-frameworks.md |
| [[wiki/sources/data-standard-governance-practices]] | Data Standard Governance Practices (Operating Models, Stewardship, Change Mgmt) | 2026-04-19 | local:raw/data-standard-governance-practices.md |
| [[wiki/sources/data-standard-governance-architecture-of-trust]] | The Architecture of Trust: Elaborating on Data Standards (long-form article) | 2026-04-19 | local:raw/data-standard-governance- The Architecture of Trust...md |
