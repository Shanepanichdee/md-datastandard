---
title: "Great Expectations"
type: entity
category: library
tags: [great-expectations, data-quality, validation, python, producer-side, shift-left]
source_count: 2
---

## Definition
Great Expectations is an open-source Python library for data validation. It enables data producers to define "expectation suites" — collections of declarative quality rules — and run them against datasets before data is written to storage. One of the primary tools for producer-side, shift-left data quality enforcement.

## Key Attributes
- **Expectation suites**: Named collections of rules (e.g., column not null, value in set, regex match) applied to a DataFrame or database table.
- **Producer-side**: Runs *before* data hits the storage layer — prevents bad data at the point of creation.
- **Multi-engine**: Works with Pandas, Spark, SQL databases, and cloud data warehouses.
- **Data docs**: Auto-generates human-readable HTML documentation of expectations and validation results.
- **Integration**: Commonly paired with Airflow or dbt; can post results to Slack, PagerDuty, or data observability tools.
- **Contrast with Pydantic**: Great Expectations operates on batch datasets and DataFrames; Pydantic operates on individual record schemas. Often used together — Pydantic at the API/event level, Great Expectations at the pipeline/batch level.

## Source Evidence
| Claim | Source |
|-------|--------|
| Used for producer-side pre-write validation of schema + business logic | [[wiki/sources/data-contracts-technical-enforcement]] |
| Enables quality checks directly within transformation pipelines | [[wiki/sources/data-standard-governance-main]] |
| Pipeline can warn, drop, or halt execution based on expectation results | [[wiki/sources/data-standard-governance-architecture-of-trust]] |

## Open Questions
- No source benchmarks Great Expectations performance overhead at high-throughput streaming workloads.

## Links
[[wiki/entities/databricks-dlt]], [[wiki/entities/ci-cd-enforcement]], [[wiki/entities/data-contracts]], [[wiki/topics/technical-enforcement-of-data-standards]]
