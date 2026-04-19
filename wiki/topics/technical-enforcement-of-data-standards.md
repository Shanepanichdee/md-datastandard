---
title: "Technical Enforcement of Data Standards"
type: topic
tags: [enforcement, data-contracts, ci-cd, data-quality, shift-left]
source_count: 1
last_updated: 2026-04-19
---

## Overview
Modern data stacks have shifted standard enforcement from manual, reactive governance to automated, shift-left mechanisms. Instead of auditing data quality after the fact, rules are now embedded as executable code in contracts, CI/CD pipelines, and transformation frameworks — making violations impossible to deploy, or catching them at the moment of ingestion.

## Key Findings

1. **Data contracts replace documentation.** Standards are codified in YAML/JSON Schema/ODCS files stored in Git. They serve as both human-readable specs and machine-enforceable rules, eliminating the gap between what governance says and what pipelines do.

2. **CI/CD is the enforcement gate.** Schema changes are validated against contracts in CI before deployment. Breaking changes (dropped columns, narrowed types) fail the build — producers cannot ship non-compliant structures to downstream consumers.

3. **Quality rules run at ingestion, not after.** Tools like Databricks DLT expectations, Great Expectations, and Pydantic execute validation as data flows through pipelines. Bad records are warned, dropped, or cause pipeline halt before reaching storage.

4. **Catalogs become active governance hubs.** Platforms like Atlan and Dataplex deploy quality rules and access controls via Terraform/IaC. PII tagging, lineage-based access control, and quality scans run dynamically across distributed data meshes.

5. **Transformation tooling is contract-aware.** dbt integrates with Soda Core and Monte Carlo to map contract requirements directly to dbt tests. SLA violations trigger operational incident workflows.

## Contradictions / Open Questions
- Performance trade-offs of read-time vs. write-time validation at high throughput are unquantified. No source benchmarks this directly.
- Dynamic RBAC enforcement via catalog-to-IdP API is mentioned but not detailed in current sources.

## Evidence Table
| Finding | Mechanism / Tool | Source |
|---------|-----------------|--------|
| Contracts as code | YAML, JSON Schema, ODCS in Git | [[wiki/sources/data-contracts-technical-enforcement]] |
| CI/CD gate | GitHub Actions + Schema Registry | [[wiki/sources/data-contracts-technical-enforcement]] |
| Ingestion-time quality | Databricks DLT expectations, Great Expectations, Pydantic | [[wiki/sources/data-contracts-technical-enforcement]] |
| Catalog as IaC | Terraform + Dataplex/Atlan | [[wiki/sources/data-contracts-technical-enforcement]] |
| Contract-aware transforms | dbt + Soda Core / Monte Carlo | [[wiki/sources/data-contracts-technical-enforcement]] |

## Links
[[wiki/entities/data-contracts]], [[wiki/entities/ci-cd-enforcement]], [[wiki/entities/great-expectations]], [[wiki/entities/databricks-dlt]], [[wiki/entities/odcs]]
