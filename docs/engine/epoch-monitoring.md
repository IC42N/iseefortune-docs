---
title: Epoch monitoring
---

# Epoch monitoring

The engine continuously tracks Solana epoch state and schedules resolution work near epoch boundaries.

## Key signals

- Current epoch
- Current slot and estimated time-to-epoch-end
- Finalized blockhash availability
- Barrier / “already processed” records to ensure one-time resolution

## Execution model

Typical pattern:
- A scheduled Lambda checks epoch status on a fixed interval
- When close to epoch end, it increases attention (tighter checks)
- After crossing the boundary, it enters resolution mode
- Every step is idempotent and safe to retry