---
title: "Snowflake Horizon"
type: entity
category: tool
tags: [snowflake, horizon, data-governance, tag-based-security, dmf, data-quality, ai-governance]
source_count: 1
---

## Definition
Snowflake Horizon is Snowflake's built-in governance layer — a unified control plane for data compliance, security, privacy, and interoperability across the Snowflake ecosystem. It enables tag-based dynamic access control, native data quality monitoring via Data Metric Functions (DMFs), and cross-platform metadata integration through Snowflake's open catalog (Apache Iceberg compatible).

## Key Attributes
- **Tag-based governance**: PII and classification tags applied to columns automatically trigger Dynamic Data Masking (DDM) and Row-Level Security (RLS) policies at query time — globally enforced without duplicate secured views.
- **Data Metric Functions (DMFs)**: Native SQL functions that run continuously on the compute layer to monitor data freshness, completeness, and accuracy. Replaces external batch ETL quality checks.
- **Cortex AI integration**: Governs AI/ML features and models alongside structured data within the same platform.
- **Cross-platform lineage**: Integrates with metadata control planes like Atlan for cross-platform lineage and classification.
- **Object Tagging**: Enables automated metadata collection — tags propagate through lineage to downstream objects.

## Source Evidence
| Claim | Source |
|-------|--------|
| Tag-based Dynamic Data Masking + Row-Level Security at query time | [[wiki/sources/data-gov-best-practices-cloud-ai]] |
| DMFs run natively on compute layer for continuous quality monitoring | [[wiki/sources/data-gov-best-practices-cloud-ai]] |
| Snowflake Horizon governs tables, AI features, and models in unified platform | [[wiki/sources/data-gov-best-practices-cloud-ai]] |

## Open Questions
- Current sources document Snowflake DMF capabilities but do not benchmark performance overhead at high-throughput streaming workloads.

## Links
[[wiki/entities/ai-governance]], [[wiki/entities/unity-catalog]], [[wiki/topics/ai-ready-data-governance]], [[wiki/sources/data-gov-best-practices-cloud-ai]]
