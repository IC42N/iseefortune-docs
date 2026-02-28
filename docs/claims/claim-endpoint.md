---
title: Claim endpoint
---

# Claim endpoint

The claim endpoint returns an **unsigned** transaction that can be signed by the claimant wallet.

## Security model

- Wallet control is proven by signing (or by a lightweight SIWS-style challenge prior to requesting the claim transaction)
- The server checks eligibility against the published resolution artifact
- The client receives a transaction that enforces the Merkle proof on-chain

## Anti-abuse / correctness

Typical protections:
- per-wallet and per-IP rate limiting
- idempotency key per (epoch, tier, pubkey)
- “already claimed” guardrails
- “results not finalized” guardrails