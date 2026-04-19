---
title: "Technical Codification and Enforcement of Data Standards"
type: source
date_ingested: 2026-04-19
source_url: "local:data-standard-governance-tech.md"
tags: [data-contracts, ci-cd, data-quality, enforcement, technical]
---

## Summary
Modern data stacks enforce standards through executable data contracts (YAML/JSON stored in Git), CI/CD pipeline checks that fail builds on breaking schema changes, and programmatic quality rules embedded directly in transformation pipelines. The central shift is from reactive, manual governance to proactive, automated enforcement — standards move from documents into running code.

## Key Claims
- Data contracts codified in YAML/JSON Schema/ODCS serve as both human-readable docs and machine-enforceable rules.
- CI pipelines fail the build when a producer introduces a breaking schema change (dropped column, narrowed type), blocking deployment until consumers acknowledge.
- Databricks DLT "expectations" let pipelines warn, drop records, or halt execution at ingestion time — not after.
- Great Expectations and Pydantic enable producer-side pre-write validation (schema + business logic like email regex).
- Atlan and Google Cloud Dataplex deploy quality rules and access controls via Terraform/IaC — catalogs become active governance hubs.
- dbt + Soda Core / Monte Carlo maps contract requirements directly to dbt tests, triggering SLA incident workflows on violation.

## Relevance
Core technical evidence for the "Data Contracts as Code" entity and the "Technical Enforcement" topic. Directly supports claims in the main synthesis about shift-left enforcement. Provides tool-level evidence for: Great Expectations, Pydantic, Databricks DLT, Confluent Schema Registry, Atlan, Dataplex, dbt, ODCS.

## Links
[[wiki/entities/data-contracts]], [[wiki/entities/ci-cd-enforcement]], [[wiki/entities/great-expectations]], [[wiki/entities/databricks-dlt]], [[wiki/entities/odcs]], [[wiki/topics/technical-enforcement-of-data-standards]]
