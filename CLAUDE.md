# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Purpose

This repo is an **LLM-maintained wiki** on the topic of **Data Standards and Enterprise Data Governance**. You (the LLM) own the wiki layer entirely — writing pages, updating cross-references, and keeping everything consistent. The human curates sources and directs analysis. You do all the bookkeeping.

---

## Directory Layout

```
md_DataStandard/
├── CLAUDE.md          ← this file (wiki schema & operating rules)
├── index.md           ← content catalog (YOU update on every ingest)
├── log.md             ← append-only operation log (YOU append on every operation)
├── raw/               ← immutable source documents (human drops files here)
│   └── assets/        ← locally downloaded images
└── wiki/
    ├── topics/        ← synthesis pages: multi-source analysis of a subject
    ├── entities/      ← one page per framework, tool, concept, or organization
    └── sources/       ← one page per ingested raw source
```

**Immutability rule:** Never modify files under `raw/`. Read from them; write only to `wiki/`, `index.md`, and `log.md`.

---

## Page Formats

### Source page (`wiki/sources/<slug>.md`)
```markdown
---
title: <Title of source>
type: source
date_ingested: YYYY-MM-DD
source_url: <URL or "local:raw/filename.md">
tags: [tag1, tag2]
---

## Summary
2–4 sentence summary of the source's core argument.

## Key Claims
- Bullet list of specific, citable claims with direct quotes where useful.

## Relevance
How this source connects to existing wiki knowledge. Which entities/topics it informs.

## Links
[[wiki/entities/X]], [[wiki/topics/Y]]
```

### Entity page (`wiki/entities/<slug>.md`)
```markdown
---
title: <Entity name>
type: entity
category: framework | tool | concept | organization
tags: [tag1, tag2]
source_count: N
---

## Definition
Concise definition synthesized across all sources.

## Key Attributes
Structured details (dimensions, components, capabilities, etc.).

## Source Evidence
| Claim | Source |
|-------|--------|
| ...   | [[wiki/sources/X]] |

## Open Questions
Gaps or contradictions flagged for future research.

## Links
[[wiki/topics/X]], [[wiki/sources/Y]]
```

### Topic page (`wiki/topics/<slug>.md`)
```markdown
---
title: <Topic name>
type: topic
tags: [tag1, tag2]
source_count: N
last_updated: YYYY-MM-DD
---

## Overview
High-level synthesis paragraph.

## Key Findings
Numbered findings, each backed by sources.

## Contradictions / Open Questions
Flagged conflicts between sources, or gaps.

## Evidence Table
| Finding | Mechanism/Detail | Sources |
|---------|-----------------|---------|
| ...     | ...             | [[wiki/sources/X]] |

## Links
[[wiki/entities/X]], [[wiki/sources/Y]]
```

---

## Operations

### Ingest a source
When the human says "ingest `raw/filename.md`" or drops a URL:

1. **Read** the source in full.
2. **Discuss** key takeaways with the human (brief summary, ask if emphasis is right).
3. **Write** `wiki/sources/<slug>.md` using the source page format.
4. **Update** all affected entity pages in `wiki/entities/` — add source evidence, revise definitions if needed, flag new contradictions.
5. **Update** all affected topic pages in `wiki/topics/` — integrate new findings, update evidence tables, note superseded claims.
6. **Update** `index.md` — add source, update entity/topic page metadata.
7. **Append** to `log.md` — one entry in the format below.

A single source will often touch 5–15 wiki pages. Touch all of them.

### Answer a query
1. Read `index.md` to find relevant pages.
2. Read those pages.
3. Synthesize answer with `[[page]]` citations.
4. **If the answer is substantive** (comparison, analysis, new synthesis), offer to save it as a new topic page. Good answers compound knowledge.

### Lint the wiki
When the human asks for a health check:
- Find pages with no inbound `[[links]]` (orphans).
- Find claims in one page that contradict another — flag both.
- Find concepts mentioned inline but lacking their own entity page.
- Suggest new sources to look for based on coverage gaps.

---

## Log Format

Each log entry in `log.md` must start with this prefix pattern for grep-ability:

```
## [YYYY-MM-DD] <operation> | <title>
```

Valid operations: `ingest`, `query`, `lint`, `update`, `create`.

Example:
```markdown
## [2026-04-19] ingest | Atlan: Data Standardization Best Practices

- Source: https://atlan.com/...
- Pages created: [[wiki/sources/atlan-data-standardization]]
- Pages updated: [[wiki/entities/data-standards-taxonomy]], [[wiki/topics/data-standards-definition]]
- Notes: Source confirms 5-dimension taxonomy; added Atlan's 7-step framework to entity page.
```

---

## Naming Conventions

- File slugs: `lowercase-hyphenated`, no spaces, no special chars.
- Obsidian links: `[[wiki/entities/slug]]` — include the path prefix so links resolve in Obsidian's graph view.
- YAML frontmatter on every wiki page (source, entity, topic).
- Dates: ISO 8601 (`YYYY-MM-DD`).

---

## Cross-Reference Rules

- Every source page must link to ≥1 entity or topic page.
- Every entity/topic page must link back to its source pages.
- When a source contradicts an existing claim, add an **Open Questions** bullet on the entity/topic page noting the conflict and both sources.
- When `source_count` on an entity/topic page changes, update the frontmatter.

---

## Domain Context

**Topic:** Data Standards in Enterprise Data Governance.

**Core taxonomy** (five dimensions — treat as the canonical framework unless a source revises it):
1. Semantic Standards (naming, definitions, business glossaries)
2. Structural & Architectural Standards (schemas, formats, ISO 8601)
3. Data Quality Standards (completeness, accuracy, validity thresholds)
4. Security & Privacy Standards (classification, encryption, GDPR)
5. Interoperability & Exchange Standards (APIs, JSON/XML, EDI)

**Key entities already established:** DAMA-DMBOK, EDM Council DCAM, Gartner, Forrester, Federated Governance, Data Stewardship, Data Contracts, CI/CD Enforcement, Great Expectations, Pydantic, Databricks DLT, Atlan, Dataplex, dbt, ODCS.

**Recurring themes:** shift-left enforcement, data contracts as code, federated governance models, AI-readiness of data.
