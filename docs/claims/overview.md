---
title: Claims overview
---

# Claims

Claims are designed so that winners can claim payouts without trusting a private backend to “decide” eligibility.

The protocol publishes a canonical outcome for each epoch that includes:
- winner set
- payout amounts
- a Merkle root committing to the entire winner distribution

The claim flow proves inclusion against that root.