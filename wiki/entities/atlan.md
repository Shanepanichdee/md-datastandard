---
title: "Atlan"
type: entity
category: platform
tags: [atlan, data-catalog, metadata, governance, iac, cross-platform, lineage]
source_count: 3
---

## Definition
Atlan is a modern active data catalog and metadata control plane. Unlike traditional passive catalogs (which are documentation repositories), Atlan functions as a governance hub — deploying quality rules, access controls, and metadata policies dynamically across distributed data environments, often via Infrastructure as Code.

## Key Attributes
- **Active governance hub**: Deploys policies and access controls dynamically rather than storing static documentation.
- **IaC integration**: Governance policies (quality rules, access controls, PII tagging) defined as code (Terraform) and deployed via CI/CD.
- **Cross-platform metadata**: Integrates with Databricks, Snowflake, dbt, and other tools to provide unified lineage and classification across the stack.
- **Automated PII tagging**: Column-level lineage analysis flags PII fields automatically, triggering masking/access policies without manual classification.
- **Metadata Control Plane**: Acts as the single source of truth for metadata across multi-cloud or hybrid environments where no single platform (Unity Catalog, Snowflake Horizon) spans the full stack.
- **Atlan 7-step framework**: Published standardization best practices referenced across data governance literature.

## Source Evidence
| Claim | Source |
|-------|--------|
| Atlan deploys governance policies via Terraform — catalog as active governance hub | [[wiki/sources/data-contracts-technical-enforcement]] |
| Atlan provides cross-platform lineage and PII classification for Data Mesh | [[wiki/sources/data-gov-best-practices-cloud-ai]] |
| Atlan publishes DAMA-DMBOK and data standardization best-practice guides | [[wiki/sources/data-standard-governance-frameworks]] |
| Atlan referenced as metadata control plane bridging Unity Catalog and Snowflake Horizon | [[wiki/sources/data-gov-best-practices-cloud-ai]] |

## Links
[[wiki/entities/unity-catalog]], [[wiki/entities/snowflake-horizon]], [[wiki/entities/data-mesh]], [[wiki/topics/technical-enforcement-of-data-standards]], [[wiki/topics/ai-ready-data-governance]]
