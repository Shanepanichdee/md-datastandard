---
title: "Databricks Delta Live Tables (DLT)"
type: entity
category: tool
tags: [databricks, dlt, delta-live-tables, data-quality, expectations, ingestion, pipeline]
source_count: 3
---

## Definition
Databricks Delta Live Tables (DLT) is a declarative ETL framework within the Databricks Lakehouse platform. Its "expectations" feature embeds data quality constraints directly into pipeline definitions — enforcing standards at ingestion time with three configurable enforcement modes.

## Key Attributes
- **Expectations**: Declarative SQL constraints applied as data flows through ETL pipelines.
- **Three enforcement modes**:
  - `@dlt.expect` — Log violations but continue; records pass through.
  - `@dlt.expect_or_drop` — Drop records that violate the constraint; pipeline continues.
  - `@dlt.expect_or_fail` — Halt the entire pipeline on violation; prevents bad data from reaching storage.
- **Shift-left enforcement**: Quality checks run *at ingestion*, not after data is loaded — catching problems at source.
- **Dead letter queue pattern**: Dropped records can be routed to a quarantine table for manual review by domain stewards.
- **Unity Catalog integration**: Lakeflow Expectations (the next-gen version) integrates with Unity Catalog for lineage tracking of quality violations.
- **Continuous monitoring**: Runs natively on the Databricks compute layer — no external quality tool needed.

## Source Evidence
| Claim | Source |
|-------|--------|
| DLT expectations: warn / drop / fail enforcement modes at ingestion | [[wiki/sources/data-contracts-technical-enforcement]] |
| Dead letter queue for quarantining invalid records | [[wiki/sources/data-standard-governance-architecture-of-trust]] |
| Lakeflow Expectations = continuous native quality monitoring on compute layer | [[wiki/sources/data-gov-best-practices-cloud-ai]] |

## Links
[[wiki/entities/unity-catalog]], [[wiki/entities/great-expectations]], [[wiki/entities/ci-cd-enforcement]], [[wiki/entities/data-contracts]], [[wiki/topics/technical-enforcement-of-data-standards]]
