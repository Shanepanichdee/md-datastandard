---
title: "Databricks Unity Catalog"
type: entity
category: tool
tags: [unity-catalog, databricks, data-catalog, ai-governance, lineage, rbac, data-mesh]
source_count: 2
---

## Definition
Unity Catalog is Databricks' unified governance layer for data and AI assets. It provides a single metastore to govern structured data (tables), unstructured data (files, volumes), and ML models — enabling end-to-end lineage from deployed models back to training data, and applying consistent RBAC across the entire Lakehouse.

## Key Attributes
- **Single metastore**: Governs tables, unstructured data, and ML models in one place. Eliminates siloed catalog-per-team setups.
- **Domain catalog model**: Supports Data Mesh — catalogs organized by business domain atop a shared physical metastore.
- **Column-level lineage**: Tracks data flow from source to transformation to model, enabling regulatory lineage requirements.
- **Row/column-level security**: Tag-based masking policies applied at query time without creating duplicate secured views.
- **Lakeflow Expectations**: Native data quality constraints embedded in Delta Live Tables pipelines (warn / drop / fail enforcement modes).
- **Identity Passthrough**: Supports RFC 8693 Token Exchange for AI agent inference — human user's RBAC is passed through to the agent.
- **AI model governance**: ML models registered in Unity Catalog inherit the same access controls and audit logging as data assets.

## Source Evidence
| Claim | Source |
|-------|--------|
| Unity Catalog governs tables, unstructured data, and ML models in single metastore | [[wiki/sources/data-gov-best-practices-cloud-ai]] |
| Domain-catalog model supports Data Mesh architecture | [[wiki/sources/data-gov-best-practices-cloud-ai]] |
| Lakeflow Expectations = continuous native quality monitoring on compute layer | [[wiki/sources/data-gov-best-practices-cloud-ai]] |
| Identity Passthrough for AI agent RBAC enforcement | [[wiki/sources/data-gov-best-practices-cloud-ai]] |

## Links
[[wiki/entities/ai-governance]], [[wiki/entities/data-mesh]], [[wiki/entities/databricks-dlt]], [[wiki/topics/ai-ready-data-governance]], [[wiki/sources/data-gov-best-practices-cloud-ai]]
