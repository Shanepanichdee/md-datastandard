---
title: "Data Stewardship"
type: entity
category: concept
tags: [data-stewardship, roles, accountability, governance-operations, domain]
source_count: 3
---

## Definition
Data stewardship is the operational layer of data governance — the practice of assigning explicit, accountable responsibility for data management to individuals closest to the data. Stewards ensure data adheres to governance policies, maintains quality, and is fit for purpose within their specific domain.

## Key Attributes

**Role hierarchy:**
| Role | Scope | Accountability |
|------|-------|---------------|
| Chief Data Officer (CDO) | Enterprise | Strategy, value creation, program sponsorship |
| Domain Data Owner | Business domain | Data quality, usage, access policies for domain |
| Business Data Steward | Day-to-day | Enforce quality, manage data dictionary, resolve issues |
| Technical Data Custodian | Infrastructure | Storage, pipeline maintenance, technical access controls |

- **Domain-centric model**: Stewards assigned by data domain (master data, reference data, customer data, etc.) — not by IT function.
- **Decision rights are required**: Assigning the title "Data Steward" without explicitly defining decision rights, expected artifacts, and protected capacity renders the role symbolic and ineffective.
- **Business-owned, not IT-owned**: When IT owns stewardship, the business treats governance as an optional IT project.
- **Executive sponsor essential**: Without visible C-suite sponsorship (CFO, COO, CDO), middle management bypasses governance processes.

## Source Evidence
| Claim | Source |
|-------|--------|
| Stewards = operational layer; domain-centric accountability is best practice | [[wiki/sources/data-gov-best-practices-frameworks]] |
| Titles without decision rights, artifacts, and protected capacity are symbolic | [[wiki/sources/data-gov-best-practices-operations]] |
| Non-IT executive sponsor required for middle management compliance | [[wiki/sources/data-gov-best-practices-operations]] |
| Domain stewards closest to data enforce quality within their domains | [[wiki/sources/data-contracts-technical-enforcement]] |

## Open Questions
- Limited concrete guidance on HR compensation/bonus structures to incentivize active data stewardship among business users.

## Links
[[wiki/entities/federated-governance]], [[wiki/entities/dama-dmbok]], [[wiki/entities/governance-anti-patterns]], [[wiki/topics/data-governance-best-practices]], [[wiki/sources/data-gov-best-practices-operations]]
