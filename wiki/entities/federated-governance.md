---
title: "Federated Governance"
type: entity
category: concept
tags: [federated-governance, operating-model, decentralized, data-mesh, business-accountability]
source_count: 5
---

## Definition
Federated Governance is a data governance operating model where central teams define baseline standards, platforms, and policies, while individual business domains own the execution, enforcement, and accountability for data within their area. Accountability lives closest to the data. It is the dominant model for large or complex enterprises.

## Key Attributes
- **Central team responsibilities**: Define enterprise-wide standards, provide the self-serve data platform, coordinate cross-domain issues, handle escalations.
- **Domain responsibilities**: Data quality enforcement, stewardship, definition ownership, access policy execution within the domain.
- **Decision rights split**: Governance owns decisions requiring enterprise consistency or formal risk control; everything else stays with domain operations.
- **Contrast with Centralized Governance**: Centralized = IT owns everything; appropriate only for small orgs or heavily regulated environments where uniformity > speed.
- **Contrast with Decentralized/Embedded**: Domain owns even more — governance is "invisible infrastructure" embedded directly in pipelines and sprints with minimal central oversight.
- **Key requirement**: Model must align with the org's existing culture and decision-making DNA — importing a federated model into a command-and-control culture fails.

## Source Evidence
| Claim | Source |
|-------|--------|
| Federated = standard for large/complex enterprises; central baselines + domain execution | [[wiki/sources/data-gov-best-practices]] |
| Governance "runway" (intake → triage → design authority → exception handling) needed for federated to work predictably | [[wiki/sources/data-gov-best-practices-operations]] |
| Data Mesh implements federated governance at the architecture level — domain-oriented data products | [[wiki/sources/data-gov-best-practices-cloud-ai]] |
| Central teams define baseline standards; domain stewards closest to data own enforcement | [[wiki/sources/data-contracts-technical-enforcement]] |
| Central team sets "absolute minimum baseline" for security, compliance, architecture — domains own everything else | [[wiki/sources/data-standard-governance-architecture-of-trust]] |
| Decision architecture over structure — governance follows decision rights, not org chart | [[wiki/sources/data-standard-governance-practices]] |

## Open Questions
- How do federated stewardship structures hold up when a single ML training job crosses 20+ domain boundaries? Who is accountable when training data fails a quality threshold?

## Links
[[wiki/entities/data-mesh]], [[wiki/entities/data-stewardship]], [[wiki/entities/governance-anti-patterns]], [[wiki/topics/data-governance-best-practices]], [[wiki/sources/data-gov-best-practices]], [[wiki/sources/data-gov-best-practices-operations]]
