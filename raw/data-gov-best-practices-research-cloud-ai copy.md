# Research: Cloud and AI Data Governance Best Practices (2025-2026)

## Summary
Modern data governance has shifted from centralized, manual compliance frameworks to automated, decentralized architectures (Data Mesh/Fabric) that unify data and AI management within cloud platforms. Current best practices emphasize **tag-based dynamic access controls, continuous native data quality** monitoring for AI-readiness, and defense-in-depth security for AI inference agents to meet converging global regulations (like the EU AI Act).

## Evidence Table

| Practice Area               | Traditional Approach          | Modern Cloud/AI Approach                                                 | Key Vendor/Tool Capabilities                                        |
| :-------------------------- | :---------------------------- | :----------------------------------------------------------------------- | :------------------------------------------------------------------ |
| **Governance Architecture** | Centralized IT control        | Federated/Decentralized (Data Mesh) with *domain-owned data products.*   | Databricks Unity Catalog (Domain catalogs), Snowflake Horizon.      |
| **Asset Management**        | Separate data & model silos   | Unified control plane for tables, unstructured data, and ML models.      | Databricks (Models in Unity Catalog), Snowflake (Cortex AI).        |
| **Access Control**          | Explicit user grants, views   | Tag-based dynamic data masking and row-level security.                   | Snowflake Object Tagging & Masking, Databricks Row/Column masks.    |
| **Data Quality**            | Batch ETL quality checks      | Native Data Metric Functions (DMFs) running continuously on compute.     | Snowflake DMFs, Databricks Lakeflow Expectations.                   |
| **AI Agent Security**       | Prompt engineering/guardrails | External Authorization (RBAC), Identity Passthrough (OAuth), Sandboxing. | Snowpark Container Services, Model Context Protocol (MCP) Security. |
| **Metadata & Lineage**      | Manual cataloging             | Automated metadata extraction, cross-platform lineage.                   | Atlan (Metadata Control Plane), Databricks Catalog Explorer.        |

## Findings

1. **Unification of Data and AI Governance**
   Vendors like Databricks and Snowflake now advocate governing AI models, features, and source data within a single metastore. This ensures seamless access to high-quality data and allows chronological tracking of a model's lineage back to its upstream training datasets, a strict requirement for regulatory compliance [1, 2].

2. **Federated and Decentralized Architectures (Data Mesh/Fabric)**
   The transition to Data Mesh shifts data ownership to business domains closest to the data, while central IT provides a self-serve platform. Catalogs are structured by business domain (e.g., `sales.gold_metrics`) to support autonomous data products, while Data Fabric relies on active metadata for automated integration across environments [1, 5, 6].

3. **Automated Classification and Tag-Based Security**
   Manual data classification does not scale. Best practices dictate using automated metadata collection to tag assets (e.g., PII, PHI). These tags automatically trigger Dynamic Data Masking and Row-Level Security policies at query time, applying protections globally without creating duplicate secured views [2].

4. **Continuous AI-Ready Data Quality (DMFs)**
   AI models trained on poor data produce unreliable outputs. Modern platforms execute native Data Metric Functions (DMFs) or pipeline expectations to continuously monitor data freshness, completeness, and accuracy directly within the warehouse, avoiding external data movement [1, 2].

5. **Defense-in-Depth for AI Inference**
   Security controls must exist externally to the AI agent, as agents can be manipulated via prompt injection. Best practices include:
   - **Network Isolation:** Read-only containers with blocked egress, except to approved endpoints.
   - **Identity Propagation:** Using Token Exchange (RFC 8693) to pass the human user's identity through to the agent, ensuring the data platform enforces the human's RBAC, not a generic service account's.
   - **External Authorization:** Relying on the platform's native RBAC and tag-based governance rather than LLM system prompts to restrict data access [3, 4].

6. **Securing the Tool Layer (MCP)**
   With the rise of the Model Context Protocol (MCP) for agent integration, security requires that MCP servers enforce strict authentication (OAuth/PAT), validate tool parameters via JSON Schema, and run within the platform's existing RBAC trust boundary to prevent tool poisoning and data exfiltration [4].

7. **Regulatory Convergence and Observability**
   The enforcement of the EU AI Act, DORA, and NIS2 mandates immutable audit trails. Modern governance requires logging every authentication event, data access (via Access History), and tool invocation. Cross-region inference must be explicitly controlled to maintain data residency and sovereignty [4].

## Sources

### Kept Sources
1. **Best practices for data and AI governance | Databricks on AWS** (https://docs.databricks.com/en/lakehouse-architecture/data-governance/best-practices) — Details Unity Catalog design, lineage tracking, and the unification of data and AI security.
2. **Snowflake Data Governance Best Practices for 2026 | Atlan** (https://atlan.com/know/snowflake/data-governance-best-practices/) — Comprehensive guide on Horizon, tag-based masking, DMFs, and cross-platform metadata integration.
3. **AI Governance for Cloud-Native AI Systems | CSA** (https://cloudsecurityalliance.org/blog/2026/01/27/ai-governance-framework-adoption-in-cloud-native-ai-systems-phased-approach-and-considerations) — Covers ISO 42001 mapping to NIST AI-RMF and AI supply-chain security for cloud-native workflows.
4. **Governing AI Inference in the Data Cloud: A Security Architecture Guide for EMEA Enterprises** (https://kevinkeller.org/posts/governing-ai-inference-data-cloud/) — Essential deep-dive into the 5 layers of AI inference security, Identity Passthrough, and MCP security risks.
5. **Architectural Design Decisions for Self-Serve Data Platforms in Data Meshes** (arXiv:2402.04681) — Academic grey literature review validating the technical shift toward decentralized, self-serve data mesh architectures.
6. **Decentralized Data Governance as Part of a Data Mesh Platform: Concepts and Approaches** (arXiv:2307.02357) — Explores socio-technical implementations of automated data governance within a Data Mesh.

### Dropped Sources
- **Microsoft Purview vs Collibra comparisons (LinkedIn/Medium/PeerSpot)** — Mostly high-level SEO vendor comparisons that lacked deep technical architecture insights compared to the Snowflake/Databricks documentation.
- **DAMA-DMBOK general architecture guides** — Explicitly excluded by task boundaries.

## Gaps
While the technical implementations for Snowflake and Databricks are extremely well-documented, standardized approaches for governing AI models that span multi-cloud or hybrid environments (where native tools like Unity Catalog or Horizon fall short) are still evolving. Metadata control planes (like Atlan) bridge this gap, but native open standards for cross-platform AI agent identity federation could benefit from further research.