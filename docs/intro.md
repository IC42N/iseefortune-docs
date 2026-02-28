---
sidebar_position: 1
title: Overview
slug: /
---

# I See Fortune (IC42N)

**I See Fortune** is an epoch-based prediction game on Solana where outcomes are derived from **public, finalized chain data**—not oracles, not hidden servers, not “trust me.”

This documentation is the canonical reference for how the game works end-to-end.

## Core properties

- **Deterministic:** the same inputs always produce the same winning number
- **Transparent:** inputs are public on Solana (slot + finalized blockhash)
- **Verifiable:** anyone can reproduce results independently

## Quick mental model

Each game round resolves using a canonical Solana data point:

1. Identify the final slot used for the epoch (or chosen canonical slot).
2. Fetch the **finalized blockhash** for that slot.
3. Derive the winning number using a documented hashing procedure.
4. Winners can independently verify and claim payouts.

## Where to start

- **How It Works → Epochs:** what a round is and how the lifecycle works
- **How It Works → Winner Derivation:** the exact algorithm + TypeScript reference
- **Verifier:** step-by-step reproduction using public chain data
- **Security:** threat model + what this system does and does not guarantee

## Goals of this documentation

- Make the game understandable to non-technical players
- Make the outcome calculation reproducible for engineers
- Make the assumptions explicit (fairness, finality, validator influence)