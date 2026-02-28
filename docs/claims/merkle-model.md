---
title: Merkle root model
---

# Merkle root model

A Merkle root commits to a list of claim entries. Each entry is a leaf.

## Leaf format (conceptual)

A leaf binds the minimum data needed to prevent manipulation:

- epoch (or epoch chain id)
- tier (if applicable)
- winner public key
- claim index
- payout amount (lamports)

The Merkle root is computed from all leaves and published as part of the resolved game artifact.

## Why this prevents manipulation

Once the root is published:
- the winner list is committed
- payout amounts are committed
- any change would produce a different root

Claims must provide a Merkle proof that matches the published root.