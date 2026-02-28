---
title: Engine overview
---


# Autonomous Game Engine

<img
src="/img/autonomous-game-engine.png"
alt="Autonomous Game Engine"
style={{ maxWidth: '900px', width: '100%', margin: '2rem auto', display: 'block' }}
/>

The IC42N game engine runs continuously in the background and is responsible for turning Solana epoch transitions into finalized game outcomes.

It is implemented as a set of AWS Lambda functions (Rust) and supporting infrastructure (EventBridge schedules, DynamoDB, S3/Arweave publishing, and queues where applicable).

## Responsibilities

- Monitor epoch progression and determine when a round is ending
- Enforce cutoff times (open → closed)
- Resolve a round deterministically using canonical Solana data
- Compute winners and payout amounts
- Publish a signed/archived result record (for independent auditing)
- Support claims (including protection against duplicate/replay claims)
- Handle rollovers and accounting across epochs (if applicable)

## Design goals

- Deterministic resolution
- Idempotent execution (safe to retry)
- Observable (logs + metrics + traceable artifacts)
- Minimal trust assumptions