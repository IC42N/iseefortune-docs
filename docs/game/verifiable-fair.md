---
title: Verifiable & Fair
---

# Verifiable & Fair

The winning number is derived entirely from **public, immutable on-chain data** on the Solana blockchain.

Specifically, it is computed using the finalized **blockhash** and **slot** of the epoch — values that anyone can independently view and verify.

## How anyone can verify a result

1. View the finalized blockhash and slot (Solana Explorer or any Solana RPC)
2. Run the open-source calculation script using those values
3. Reproduce the winning number exactly

Solana Explorer:
- https://explorer.solana.com

## Permanent resolution record (Arweave)

For full transparency, a complete resolution record is permanently uploaded to Arweave, containing:

- the blockhash and slot used
- the computed winning number
- the full winners list
- tickets awarded and rollover data
- Merkle data required for claims

Anyone can compare the record against Solana data and reproduce the calculation without trusting the team.

If the inputs match, the result is correct. If they don’t, it’s provably wrong.

---

## Links

- Spec: https://github.com/IC42N/iseefortune-verifier/blob/main/SPEC.md
- Verify UI: https://verify.iseefortune.com
- Source: https://github.com/IC42N