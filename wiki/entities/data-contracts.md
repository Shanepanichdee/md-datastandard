---
title: "Data Contracts"
type: entity
category: concept
tags: [data-contracts, enforcement, schema, ci-cd, shift-left]
source_count: 4
---

## Definition
A data contract is an explicit, versioned agreement between a data producer and consumer that defines the schema, data types, quality constraints, nullability, freshness SLAs, and change policies for a data asset. In modern practice, contracts are stored as code (YAML, JSON Schema, Protobuf, ODCS) in version control — making them both human-readable documentation and machine-enforceable rules.

## Key Attributes
- **Formats:** YAML, JSON Schema, Protobuf, Avro, Open Data Contract Standard (ODCS)
- **Contents:** Field names, types, nullability, SLAs, breaking-change definitions, quality rules
- **Storage:** Git repositories — enabling diff, review, and CI enforcement
- **Dual purpose:** Documentation for humans + executable spec for pipelines
- **Breaking vs. non-breaking changes:** Dropping a required column or narrowing a type = breaking. Adding an optional column = non-breaking.

## Source Evidence
| Claim | Source |
|-------|--------|
| Contracts stored in Git; CI fails build on breaking schema change | [[wiki/sources/data-contracts-technical-enforcement]] |
| YAML contract specifies field constraints and change policies explicitly | [[wiki/sources/data-contracts-technical-enforcement]] |
| dbt + Soda Core maps contract requirements to transformation tests | [[wiki/sources/data-contracts-technical-enforcement]] |
| Confluent Schema Registry validates compatibility before streaming deployment | [[wiki/sources/data-contracts-technical-enforcement]] |
| Contracts bridge business intent and technical implementation — engineers build against standards, not policies | [[wiki/sources/data-standard-governance-architecture-of-trust]] |
| CI pipeline intercepts PRs, checks against contract, blocks deployment on breaking change | [[wiki/sources/data-standard-governance-architecture-of-trust]] |
| Data contracts codified in YAML/ODCS are the primary technical enforcement mechanism | [[wiki/sources/data-standard-governance-main]] |

## Open Questions
- Exact performance overhead of comprehensive read-time vs. write-time validation on high-throughput streaming workloads not yet quantified.
- API interactions between catalogs and IdPs for dynamic RBAC enforcement not deeply explored.

## Links
[[wiki/entities/ci-cd-enforcement]], [[wiki/entities/odcs]], [[wiki/entities/great-expectations]], [[wiki/entities/databricks-dlt]], [[wiki/entities/unity-catalog]], [[wiki/topics/technical-enforcement-of-data-standards]], [[wiki/topics/data-governance-best-practices]]
