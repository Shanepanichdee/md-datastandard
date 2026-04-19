# Research: Technical Codification and Enforcement of Data Standards

## Summary
In modern data stacks, data standards are technically codified through code-based data contracts, explicit metadata schema definitions, and programmatic quality checks (e.g., using YAML, dbt, Pydantic, or Soda). Enforcement is increasingly shifted left by embedding these codified rules directly into CI/CD pipelines, streaming registries, and data transformation frameworks. This prevents malformed or non-compliant data from ever reaching downstream consumers, automatically halting deployments or dropping bad records when standards are breached.

## Findings

### 1. Data Contracts as Code
Data contracts have evolved from static documentation into executable specifications stored in version control. Teams define schemas, data types, nullability, freshness SLAs, and quality constraints using formats like YAML, JSON Schema, Protobuf, or the Open Data Contract Standard (ODCS) [1][2][4]. For example, a contract defined in YAML specifies exact field constraints and change policies (what constitutes a breaking change) [3]. This allows the contract to serve as both human-readable documentation and machine-enforceable code [2].

### 2. CI/CD Enforcement for Data Assets
Data standards are strictly enforced in CI/CD pipelines through automated compatibility checks. When a producer proposes a schema change, CI pipelines test the change against the codified data contract [3]. If a breaking change (e.g., dropping a column, narrowing a data type) is detected, the pipeline fails the build, preventing the code deployment until downstream consumers acknowledge the change or migration paths are established [3][4]. Tools like Confluent Schema Registry validate schema compatibility before deployment in streaming applications, ensuring only backward-compatible schemas progress [4].

### 3. Automated Data Quality Rules at Ingestion
Instead of reactive testing after data is loaded, quality rules are now embedded directly into the transformation and ingestion layers. Platforms utilize programmatic validation mechanisms:
* **Databricks Delta Live Tables (DLT):** Employs "expectations" to apply constraints as data flows through ETL pipelines, allowing developers to configure pipelines to warn, drop invalid records, or halt execution upon failure [5].
* **Producer-side Validation:** Using libraries like Pydantic or Great Expectations, producers run pre-write validation to verify schema and business logic (e.g., regex for email formats) before data hits the storage layer [1][2].

### 4. Metadata-Driven Governance and Catalogs
Data catalogs (e.g., Atlan, Google Cloud Dataplex) act as active governance hubs rather than passive repositories. Quality rules and governance policies are defined as code (e.g., via Terraform) and stored in GitHub, leveraging Cloud Build to deploy these rules across Dataplex environments [6]. This CI/CD integration allows catalogs to dynamically apply access controls, flag PII based on column-level lineage, and execute data quality scans consistently across distributed data meshes [6].

### 5. Contract-Aware Transformation Tooling
Data transformation tools like dbt have integrated deeply with data observability and quality platforms (like Monte Carlo, Soda Core) to map contract requirements directly to dbt tests [3][4]. This ensures that any business rules or structural requirements negotiated in the contract are actively tested during the execution of dbt models, and any violations trigger operational incident workflows tied to the data SLA [3].

## Evidence Table

| Finding | Technical Mechanism | Key Tools / Standards | Source |
| :--- | :--- | :--- | :--- |
| Data Contracts | Executable YAML/JSON files stored in Git defining schemas, SLAs, and change policies. | YAML, Open Data Contract Standard (ODCS), Protobuf, Avro | [1], [2], [3], [4] |
| CI/CD Enforcement | Pipeline checks for schema compatibility; build failures on breaking changes. | GitHub Actions, Git, Confluent Schema Registry | [3], [4] |
| Automated Quality Rules | Declarative constraints evaluated at runtime to drop records or fail pipelines. | Great Expectations, Pydantic, Soda Core, Databricks DLT | [1], [2], [4], [5] |
| Metadata & Catalogs | Infrastructure as Code (IaC) deployment of quality rules and tagging. | Terraform, Dataplex, Atlan, Cloud Build | [6] |
| Transformation Testing | Mapping data contracts directly to transformation tests and SLA monitors. | dbt, Monte Carlo | [3] |

## Sources

- **[1] Kept:** Data Contracts in Practice: What 50 Production Implementations Actually Look Like | by Reliable Data Engineering | Feb, 2026 | Medium (https://medium.com/@reliabledataengineering/data-contracts-in-practice-what-50-production-implementations-actually-look-like-f1c953336bf2) — Provides real-world examples of how Great Expectations and Pydantic are used for producer-side schema and quality enforcement.
- **[2] Kept:** Data Contracts for Data Engineers: Getting Started in 2026 (https://pipelinepulse.dev/data-contracts-data-engineering/) — Gives concrete YAML file examples demonstrating how data contracts are codified.
- **[3] Kept:** Data Contracts for Data Engineers: Stop Breaking Downstream Pipelines | dataskew.io Blog (https://dataskew.io/blog/data-contracts-for-data-engineers/) — Details CI/CD integration, breaking/non-breaking change policies, and contract-aware dbt models.
- **[4] Kept:** Data Contracts for Reliable Pipelines | Conduktor (https://conduktor.io/glossary/data-contracts-for-reliable-pipelines) — Explains technical implementation for streaming architectures, including Schema Registries and ODCS.
- **[5] Kept:** Manage data quality with pipeline expectations | Databricks on AWS (https://docs.databricks.com/workflows/delta-live-tables/delta-live-tables-expectations.html) — Provides evidence of automated quality enforcement natively inside ETL pipelines via expectations.
- **[6] Kept:** Manage data quality rules as code with Terraform, Cloud Build, and GitHub | Dataplex Universal Catalog (https://docs.cloud.google.com/dataplex/docs/manage-data-quality-rules-as-code) — Shows how infrastructure as code is used to manage catalog-driven data quality rules.
- **Dropped:** General governance articles focusing on stewardship and high-level definitions, as they fell outside the technical task boundaries.

## Gaps
The research did not deeply explore the exact API interactions between data catalogs and identity providers (IdPs) for dynamic Role-Based Access Control (RBAC) enforcement, nor did it cover the precise performance overhead benchmarking of running extensive Great Expectations suites on high-throughput streaming workloads. Future exploration could focus on the performance trade-offs of read-time versus write-time data contract validation.