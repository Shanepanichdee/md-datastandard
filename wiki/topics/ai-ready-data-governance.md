---
title: "AI-Ready Data Governance"
type: topic
tags: [ai-governance, data-mesh, cloud, unity-catalog, snowflake-horizon, mcp-security, tag-based-security, ai-readiness]
source_count: 2
last_updated: 2026-04-19
---

## Overview
AI readiness requires data governance that extends beyond traditional structured data to cover ML models, training pipelines, and inference agents — all within the same control plane. The dominant shift: from manual classification and batch quality checks to automated tag-based enforcement and continuous native quality monitoring. AI agent security introduces a new attack surface (prompt injection, tool poisoning) that requires defense-in-depth at the infrastructure layer, not just LLM guardrails.

## Key Findings

1. **Unified data + AI control planes.** Databricks Unity Catalog and Snowflake Horizon govern tables, unstructured data, and ML models within a single metastore. Enables end-to-end lineage from a deployed model back to its training data — a requirement under EU AI Act and financial regulations.

2. **Tag-based automation replaces manual classification.** Manual PII tagging does not scale. Automated metadata extraction tags assets (PII, PHI, confidential), which automatically trigger Dynamic Data Masking and Row-Level Security at query time — globally, without creating duplicate secured views.

3. **Continuous native quality (DMFs / Lakeflow).** Snowflake Data Metric Functions and Databricks Lakeflow Expectations monitor data freshness, completeness, and accuracy continuously on the compute layer — not via external batch ETL checks. AI models trained on stale or incomplete data produce unreliable outputs; Gartner estimates 60% of AI projects fail by 2026 for this reason.

4. **Data Mesh implements governance at the architecture level.** Domain-oriented data products with their own catalogs (e.g., `sales.gold_metrics`) atop a shared physical metastore. Federated governance at architectural scale.

5. **Defense-in-depth for AI inference agents.** Network isolation → Identity Passthrough (RFC 8693: human user's RBAC passed through to agent) → External Authorization (platform RBAC, not LLM system prompts) → Sandboxing → Immutable audit logs. Each layer compensates for failure of others.

6. **MCP security is an emerging critical gap.** As AI agents adopt the Model Context Protocol for tool integration, MCP servers must enforce OAuth/PAT authentication, validate parameters via JSON Schema, and operate within the platform's RBAC trust boundary. Tool poisoning and data exfiltration via MCP are live risks.

7. **Regulatory convergence.** EU AI Act, DORA, NIS2 mandate: immutable audit trails of every authentication event, data access, and tool invocation; data residency controls for cross-region AI inference; risk classification for AI systems.

## Contradictions / Open Questions
- Performance overhead of comprehensive read-time vs. write-time validation on high-throughput streaming workloads unquantified.
- Cross-platform AI governance (multi-cloud/hybrid where neither Unity Catalog nor Snowflake Horizon spans the full stack) lacks standardized open approaches.
- Identity federation standards for AI agents across organizational boundaries are still evolving.

## Evidence Table
| Finding | Mechanism / Tool | Sources |
|---------|-----------------|---------|
| Unified data + AI governance | Databricks Unity Catalog, Snowflake Horizon | [[wiki/sources/data-gov-best-practices-cloud-ai]] |
| Tag-based dynamic masking | Snowflake Object Tagging + DDM + RLS | [[wiki/sources/data-gov-best-practices-cloud-ai]] |
| Continuous native quality | Snowflake DMFs, Databricks Lakeflow | [[wiki/sources/data-gov-best-practices-cloud-ai]] |
| Data Mesh architecture | Domain catalogs atop shared metastore | [[wiki/sources/data-gov-best-practices-cloud-ai]] |
| AI agent defense-in-depth | Network isolation + Identity Passthrough + RBAC | [[wiki/sources/data-gov-best-practices-cloud-ai]] |
| MCP security | OAuth/PAT + JSON Schema + RBAC boundary | [[wiki/sources/data-gov-best-practices-cloud-ai]] |
| 60% of AI projects fail by 2026 | Insufficient data quality standards | [[wiki/sources/data-contracts-technical-enforcement]] |

## Links
[[wiki/entities/ai-governance]], [[wiki/entities/unity-catalog]], [[wiki/entities/snowflake-horizon]], [[wiki/entities/data-mesh]], [[wiki/entities/data-contracts]], [[wiki/topics/data-governance-best-practices]], [[wiki/topics/technical-enforcement-of-data-standards]]
