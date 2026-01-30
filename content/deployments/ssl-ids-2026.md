---
title: "SSL-IDS — Manifold-Based Intrusion Detection"
date: "2025-09-01"
status: "active"
version: "v1.0.0"
description: "Self-supervised learning for network intrusion detection with zero-day capability."
tags: ["Machine Learning", "Network Security", "Python", "Research"]
link: "https://github.com/ThryLox/ssl-ids-2026"
demo: ""
---

# Overview

**SSL-IDS** uses contrastive self-supervised learning to detect network intrusions—including zero-day attacks—without requiring labeled malicious samples during training.

The model learns what "normal" looks like, then flags anything that deviates.

---

## How It Works

1. **Learn the Baseline** — Train on normal traffic only using InfoNCE loss
2. **Project to Hypersphere** — Encode flows into a geometric latent space
3. **Detect Anomalies** — Flag statistical displacements from the learned manifold

---

## Key Advantages

- **Zero-Label Training** — No attack samples needed
- **Zero-Day Detection** — Novel attacks appear as geometric outliers
- **LOATO Protocol** — Leave-One-Attack-Type-Out ensures real generalization

---

## Research Methodology

Follows USENIX-style academic standards. Full experimental pipeline with documented hyperparameters and reproducible results.

---

## Tech Stack

`PyTorch` `Scikit-learn` `InfoNCE` `Network Security`
