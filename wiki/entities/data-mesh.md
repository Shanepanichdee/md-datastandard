---
title: "Data Mesh"
type: entity
category: concept
tags: [data-mesh, decentralized, domain-ownership, data-products, self-serve, architecture]
source_count: 2
---

## Definition
Data Mesh is a decentralized data architecture paradigm that treats data as a product, assigns domain-oriented ownership to business teams, and requires central IT to provide a self-serve data platform. Governance is federated — domains own their data products and governance outcomes within enterprise-wide standards.

## Key Attributes
- **Four principles** (Zhamak Dehghani): Domain ownership, data as a product, self-serve infrastructure, federated computational governance.
- **Catalog structure**: Logical catalogs organized by business domain (e.g., `sales.gold_metrics`, `finance.revenue`) atop a shared physical metastore.
- **Self-serve platform**: Central IT manages the shared physical infrastructure; business domains manage their logical data products autonomously.
- **Governance model**: Federated — domains own execution; central team owns standards, interoperability contracts, and platform.
- **Contrast with Data Fabric**: Data Fabric relies on active metadata and automation for integration across environments; Mesh relies on explicit domain ownership and social contracts between teams.
- **Key prerequisite**: Organizational maturity — Data Mesh fails in orgs that lack domain autonomy or executive sponsorship for decentralization.

## Source Evidence
| Claim | Source |
|-------|--------|
| Ownership shifts to domain-oriented data products; central IT provides self-serve platform | [[wiki/sources/data-gov-best-practices-cloud-ai]] |
| Catalogs structured by domain to support autonomous data products (arXiv:2402.04681) | [[wiki/sources/data-gov-best-practices-cloud-ai]] |
| Databricks Unity Catalog implements domain-catalog model natively | [[wiki/sources/data-gov-best-practices-cloud-ai]] |
| Data Mesh governs one domain completely before expanding | [[wiki/sources/data-gov-best-practices-operations]] |

## Open Questions
- Standardized approaches for AI model governance across multi-cloud environments where native platform tools (Unity Catalog, Snowflake Horizon) don't span the full stack remain evolving.

## Links
[[wiki/entities/federated-governance]], [[wiki/entities/unity-catalog]], [[wiki/entities/ai-governance]], [[wiki/topics/ai-ready-data-governance]], [[wiki/sources/data-gov-best-practices-cloud-ai]]
