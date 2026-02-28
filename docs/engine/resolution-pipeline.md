---
title: Resolution pipeline
---

# Resolution pipeline

At epoch end, the engine performs a deterministic pipeline:

1. **Detect boundary** (epoch advanced / cutoff reached)
2. **Select canonical slot** for resolution
3. **Fetch finalized blockhash** for that slot
4. **Derive winning number** using the documented algorithm
5. **Compute winners and payouts**
6. **Publish result artifact** (e.g., S3 + Arweave/Irys)
7. **Persist outcome state** (DynamoDB / on-chain PDA references)
8. **Enable claiming**

## Idempotency

Each step uses stable keys (epoch/tier/etc.) so retries do not double-pay or double-publish.