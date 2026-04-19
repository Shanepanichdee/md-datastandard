---
title: "AI Governance"
type: entity
category: concept
tags: [ai-governance, ai-readiness, mcp-security, identity-passthrough, unity-catalog, llm, prompt-injection]
source_count: 2
---

## Definition
AI Governance extends data governance to cover AI models, training data, inference agents, and the pipelines that connect them. It ensures that AI systems are trained on trustworthy data, that access to data via AI agents respects the same RBAC policies as human users, and that regulatory requirements (EU AI Act, DORA, NIS2) are met through immutable audit trails.

## Key Attributes

**Unified control plane:**
- Databricks Unity Catalog and Snowflake Horizon govern tables, unstructured data, and ML models in a single metastore.
- Enables lineage tracing from a deployed model back to its upstream training datasets — a strict regulatory requirement.

**Defense-in-depth for AI inference agents (5 layers):**
1. **Network isolation**: Read-only containers with blocked egress except to approved endpoints.
2. **Identity Passthrough**: RFC 8693 Token Exchange passes the human user's identity to the agent — data platform enforces the *human's* RBAC, not a generic service account.
3. **External Authorization**: Platform-native RBAC and tag-based governance restrict data access — *not* LLM system prompts, which can be manipulated.
4. **Sandboxing**: Agents run in isolated environments preventing lateral movement.
5. **Immutable audit logs**: Every authentication event, data access, and tool invocation logged.

**MCP (Model Context Protocol) security:**
- MCP servers must enforce OAuth/PAT authentication.
- Tool parameters validated via JSON Schema before execution.
- All tools run within the platform's existing RBAC trust boundary to prevent tool poisoning and data exfiltration.

**Regulatory context:**
- EU AI Act: Mandates risk classification and documentation of AI systems.
- DORA / NIS2: Require immutable audit trails and data residency controls for cross-region inference.

## Source Evidence
| Claim | Source |
|-------|--------|
| Unity Catalog + Snowflake Horizon = unified data + AI governance in single metastore | [[wiki/sources/data-gov-best-practices-cloud-ai]] |
| Identity Passthrough (RFC 8693) passes human RBAC to agent | [[wiki/sources/data-gov-best-practices-cloud-ai]] |
| MCP requires OAuth/PAT, JSON Schema validation, platform RBAC boundary | [[wiki/sources/data-gov-best-practices-cloud-ai]] |
| Gartner: 60% of AI projects fail by 2026 due to poor data quality | [[wiki/sources/data-contracts-technical-enforcement]] |

## Open Questions
- Cross-platform AI federation: no standard for governing AI agents spanning multi-cloud/hybrid environments.
- "Prompt injection" defenses beyond external authorization are still evolving.

## Links
[[wiki/entities/unity-catalog]], [[wiki/entities/snowflake-horizon]], [[wiki/entities/data-mesh]], [[wiki/entities/data-contracts]], [[wiki/topics/ai-ready-data-governance]], [[wiki/sources/data-gov-best-practices-cloud-ai]]
