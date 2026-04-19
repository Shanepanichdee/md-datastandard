---
title: "Research: Cloud and AI Data Governance Best Practices (2025–2026)"
type: source
date_ingested: 2026-04-19
source_url: "local:raw/data-gov-best-practices-research-cloud-ai copy.md"
tags: [cloud, ai-governance, data-mesh, unity-catalog, snowflake, mcp, identity-passthrough, tag-based-security]
---

## Summary
Modern governance has shifted to automated, decentralized architectures (Data Mesh/Fabric) with unified data+AI control planes. Core patterns: tag-based dynamic access control replaces manual classification; native Data Metric Functions run continuous quality checks on the compute layer; AI agent security requires defense-in-depth (network isolation, Identity Passthrough via RFC 8693, external RBAC). MCP security is an emerging critical concern.

## Key Claims
- **Unified control planes**: Databricks Unity Catalog and Snowflake Horizon govern tables, unstructured data, and ML models in one metastore — enabling lineage from model back to training data.
- **Data Mesh**: Shifts data ownership to business domains; central IT provides self-serve platform; logical catalogs structured by domain (e.g., `sales.gold_metrics`).
- **Data Fabric**: Relies on active metadata for automated integration across environments (vs. Mesh's domain ownership model).
- **Tag-based dynamic masking**: PII tags automatically trigger Dynamic Data Masking and Row-Level Security at query time — no duplicate secured views needed.
- **Native DMFs (Snowflake) / Lakeflow Expectations (Databricks)**: Continuous quality monitoring runs directly on the compute layer, not via external batch ETL checks.
- **AI agent defense-in-depth** (5 layers): Network isolation (read-only containers, blocked egress) → Identity Passthrough (RFC 8693 Token Exchange — human user's RBAC passed to agent) → External Authorization (platform RBAC, not LLM system prompts) → Sandboxing → Immutable audit logs.
- **MCP security**: Tools accessed by AI agents must enforce OAuth/PAT authentication, validate parameters via JSON Schema, and run within platform RBAC trust boundary to prevent tool poisoning and data exfiltration.
- EU AI Act, DORA, NIS2 mandate immutable audit trails and data residency controls for cross-region AI inference.
- **Gap**: Standardized approaches for governing AI models across multi-cloud/hybrid environments remain evolving.

## Relevance
Introduces AI governance, Data Mesh, Unity Catalog, Snowflake Horizon, and MCP security as new wiki entities. Extends the technical enforcement topic with cloud-native patterns beyond CI/CD contracts.

## Links
[[wiki/entities/ai-governance]], [[wiki/entities/data-mesh]], [[wiki/entities/unity-catalog]], [[wiki/entities/snowflake-horizon]], [[wiki/topics/ai-ready-data-governance]], [[wiki/topics/data-governance-best-practices]]
