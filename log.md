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
