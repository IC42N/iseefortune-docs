---
title: Glossary
---

# Glossary

This glossary defines key terms used throughout the IC42N documentation.

---

## Epoch
A Solana epoch boundary used to define a game round. Each epoch produces exactly one winning number.

---

## Slot
A unit of time in Solana. The final canonical slot used at epoch end is one of the inputs for calculating the winning number.

---

## Finalized Blockhash
The confirmed blockhash associated with a finalized slot. It is publicly retrievable and used as a deterministic input to the winning number calculation.

---

## Winning Number
A value between **0–9** derived from:
- The canonical slot (u64 little-endian bytes)
- The finalized blockhash (base58 decoded)
- SHA‑256 hashing
- Byte summation
- Modulo 10

---

## Conviction
The amount of lamports a player contributes to a prediction. Conviction determines proportional payout share if the prediction wins.

---

## Gross Pot
The total lamports contributed by all players during a round.

---

## Protocol Fee (Taker Fee)
A percentage deducted from the gross pot before payouts are calculated.

---

## Net Pot
The gross pot minus the protocol fee. This amount is distributed proportionally among winners.

---

## Tier
A gameplay level with its own conviction range and economic parameters. Each tier operates independently.

---

## Rollover
Occurs when the winning number is:
- 0
- The previous epoch’s winning number

During a rollover:
- No winners are declared
- The entire pot carries forward
- Predictions remain active
- The taker fee decreases by 1%

---

## Payout Event
An epoch that does not result in a rollover. In these epochs, winners are determined and the net pot is distributed.

---

## Change Ticket
A consolation mechanism awarded to a percentage of players who miss the winning number. It allows a player to change their prediction before the cutoff time.

Change tickets:
- Do not increase probability of winning
- Can increase payout share if used strategically

---

## Merkle Root
A cryptographic commitment to the full winner list and payout distribution for an epoch. Used to securely validate claims.

---

## Merkle Proof
A cryptographic proof that a specific claim entry exists within the published Merkle root.

---

## Resolution Artifact
A permanent record (published to Arweave) containing:
- Slot
- Blockhash
- Winning number
- Winners list
- Ticket data
- Merkle root

---

## Verifier
The open-source reference implementation that reproduces the winning number calculation from public Solana data.
