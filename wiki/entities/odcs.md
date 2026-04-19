---
title: "ODCS (Open Data Contract Standard)"
type: entity
category: standard
tags: [odcs, data-contracts, standard, yaml, interoperability, open-source]
source_count: 2
---

## Definition
The Open Data Contract Standard (ODCS) is an open, vendor-neutral specification for writing data contracts. It defines a YAML-based format for expressing schema structures, data types, nullability, freshness SLAs, quality constraints, and change policies in a portable, human-readable, and machine-enforceable way.

## Key Attributes
- **Format**: YAML-based, stored in version control.
- **Vendor-neutral**: Not tied to Databricks, Snowflake, or any specific platform — contracts are portable across stacks.
- **Dual purpose**: Human-readable documentation + machine-enforceable specification.
- **Contents**: Field names, types, nullability, SLAs, breaking-change definitions, ownership metadata, quality rules.
- **Interoperability dimension**: ODCS is the emerging standard for the "Interoperability & Exchange" dimension of the data standards taxonomy — standardizing how contracts are expressed across organizations.
- **Status**: Emerging — not yet universally adopted, but gaining traction as CI/CD-first teams move away from ad-hoc YAML formats.

## Source Evidence
| Claim | Source |
|-------|--------|
| ODCS as format for portable data contracts alongside YAML/JSON Schema/Protobuf | [[wiki/sources/data-contracts-technical-enforcement]] |
| ODCS used in streaming architectures via Confluent Schema Registry | [[wiki/sources/data-contracts-technical-enforcement]] |
| ODCS mentioned as emerging interoperability standard | [[wiki/sources/data-standard-governance-architecture-of-trust]] |

## Links
[[wiki/entities/data-contracts]], [[wiki/entities/ci-cd-enforcement]], [[wiki/entities/data-standards-taxonomy]], [[wiki/topics/technical-enforcement-of-data-standards]]
