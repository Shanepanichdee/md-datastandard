---
title: "CI/CD Enforcement"
type: entity
category: concept
tags: [ci-cd, enforcement, data-contracts, schema-registry, shift-left, breaking-changes]
source_count: 3
---

## Definition
CI/CD enforcement is the practice of embedding data standard validation into Continuous Integration and Continuous Deployment pipelines — automatically blocking deployments that introduce breaking schema changes. It is the primary technical mechanism for "shift-left governance": catching violations at the point of code change, not after bad data reaches downstream consumers.

## Key Attributes
- **Trigger**: Developer submits a schema change via pull request.
- **Gate**: CI pipeline checks the proposed change against the codified data contract.
- **Breaking change detection**: Dropped column, narrowed data type, removed enum value → build fails, deployment blocked.
- **Non-breaking changes**: Added optional column, widened type, new enum value → passes automatically.
- **Tools**: GitHub Actions (general-purpose), Confluent Schema Registry (streaming/Kafka), dbt tests (transformation layer).
- **Streaming variant**: Confluent Schema Registry validates backward/forward compatibility before any new schema version is deployed to Kafka topics.
- **Outcome**: Non-compliant data structures physically cannot reach the production ecosystem without going through a formal versioning and migration process with downstream consumers.

## Source Evidence
| Claim | Source |
|-------|--------|
| CI pipeline intercepts PR, checks against contract, fails build on breaking change | [[wiki/sources/data-standard-governance-architecture-of-trust]] |
| GitHub Actions + Schema Registry as primary tools | [[wiki/sources/data-contracts-technical-enforcement]] |
| Breaking vs. non-breaking change taxonomy | [[wiki/sources/data-contracts-technical-enforcement]] |
| dbt + Soda Core maps contracts to transformation tests | [[wiki/sources/data-contracts-technical-enforcement]] |

## Links
[[wiki/entities/data-contracts]], [[wiki/entities/odcs]], [[wiki/entities/great-expectations]], [[wiki/entities/databricks-dlt]], [[wiki/topics/technical-enforcement-of-data-standards]], [[wiki/sources/data-standard-governance-architecture-of-trust]]
