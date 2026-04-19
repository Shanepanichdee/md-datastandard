---
title: "Data Standards Taxonomy (5 Dimensions)"
type: entity
category: concept
tags: [taxonomy, data-standards, semantic, structural, quality, security, interoperability]
source_count: 3
---

## Definition
An industry-synthesized framework organizing enterprise data standards into five primary dimensions. Not a single published taxonomy from any one body — rather, an aggregation across DAMA-DMBOK, EDM Council DCAM, Gartner, and Forrester that reflects consensus across all major frameworks. Each dimension addresses a distinct layer of the data lifecycle.

## The Five Dimensions

### 1. Semantic Standards
Govern the *meaning* of data — naming conventions, business glossaries, data dictionaries, approved acronyms. Eliminate ambiguity so that "Gross Revenue" means the same thing in Finance and Marketing.
- **Examples**: snake_case enforced for column names; centralized business glossary; Key Data Elements (KDEs) defined per domain.
- **Framework alignment**: DMBOK "Metadata Management" + "Data Modeling"; Forrester "semantic layer."

### 2. Structural & Architectural Standards
Govern the *physical and logical format* of data — schemas, data types, field lengths, date formats. Ensure systems interact predictably.
- **Examples**: `DECIMAL(18,2)` for financial amounts (not FLOAT); ISO 8601 for all dates; Avro/Protobuf for streaming payloads.
- **Framework alignment**: DMBOK "Data Architecture"; Gartner "essential for scalable data fabrics."

### 3. Data Quality Standards
Establish *acceptable thresholds* data must meet before it is considered reliable. Six quality dimensions:

| Dimension | Example Rule |
|-----------|-------------|
| Completeness | `email_address` cannot be null for active users |
| Accuracy | `customer_age` must be >0 and <130 |
| Validity | `country_code` must conform to ISO 3166-1 alpha-2 |
| Uniqueness | No two active accounts share the same SSN |
| Timeliness | Daily transaction data available by 06:00 UTC |
| Consistency | `status` field must match across billing and fulfillment systems |

- **Framework alignment**: DMBOK dedicated knowledge area; Gartner: 60% of AI projects fail by 2026 due to insufficient quality standards.

### 4. Security & Privacy Standards
Govern *protection and access control* — classification levels, encryption, masking, RBAC.
- **Examples**: AES-256 at rest and in transit; "least privilege" principle; PII fields tokenized/hashed; audit log on every sensitive data access.
- **Framework alignment**: DMBOK "Data Security"; GDPR/CCPA/HIPAA/BCBS 239 compliance.

### 5. Interoperability & Exchange Standards
Govern how data is *formatted and transmitted* between systems — API specs, payload formats, schema registries.
- **Examples**: JSON Schema / Avro / Protobuf for API payloads; ODCS for data contracts; Confluent Schema Registry for streaming.
- **Framework alignment**: DMBOK "Data Integration & Interoperability."

## Important Caveat
The grouping of exactly five dimensions is an AI-synthesized aggregation. No single framework publishes this exact 5-pillar structure collectively. The dimensions themselves are valid and well-evidenced; the specific grouping reflects synthesis across sources, not direct citation.

## Source Evidence
| Claim | Source |
|-------|--------|
| All five dimensions evidenced across DAMA-DMBOK, DCAM, Gartner, Forrester | [[wiki/sources/data-standard-governance-frameworks]] |
| Six quality sub-dimensions with concrete examples | [[wiki/sources/data-standard-governance-architecture-of-trust]] |
| Main synthesis adopts 5-dimension framework as canonical | [[wiki/sources/data-standard-governance-main]] |

## Links
[[wiki/entities/data-contracts]], [[wiki/entities/odcs]], [[wiki/entities/dama-dmbok]], [[wiki/entities/dcam]], [[wiki/topics/data-standards-definition-taxonomy]], [[wiki/sources/data-standard-governance-frameworks]]
