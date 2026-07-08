---
title: "SSL-IDS — Anomaly Detection & Representation Learning"
date: "2026-01-15"
status: "active"
version: "v1.0.0"
description: "Research repository on contrastive self-supervised learning (SSL) for network flow anomaly detection under distribution shift."
tags: ["PyTorch", "Python", "Machine Learning", "Network Security", "Research"]
link: "https://github.com/ThryLox/ssl-ids-2026"
demo: ""
---

# Overview

This repository contains the codebase and experimental pipeline for the research paper:  
**"Contrastive Representation Learning for Network Flow Anomaly Detection Under Distribution Shift"** (Accepted at **CCIDSA 2026**).

The research evaluates contrastive self-supervised learning (SSL) for flow-level network intrusion detection, characterizing the learned latent manifold under distribution shift and temporal drift rather than simple classification leaderboards.

---

## Key Research Findings

1.  **Cross-Dataset Transferability:** Under a strict **Leave-One-Attack-Type-Out (LOATO)** protocol evaluating transfer between the `CIC-IDS2017` and `CSE-CIC-IDS2018` datasets, contrastive embeddings yield the lowest performance degradation (a $\Delta\text{AUROC}$ of $-0.430$) compared to reconstruction-based ($-0.527$) and partition-based ($-0.444$) baselines.
2.  **Augmentation Selection:** Tabular network flow data is semantically constrained. Implementing simple **Gaussian Jitter** is highly effective ($+5.5\%$ DoS AUROC), whereas aggressive combined augmentations destroy flow semantics.
3.  **Calibration Collapse Under Temporal Drift:** While aggregate AUROC remains stable, thresholded true positive rates (TPR) collapse from $0.120$ to $0.000$ at a $1\%$ False Positive Rate (FPR) under temporal shift. This proves that representation robustness and score calibration are distinct operational challenges.

---

## Tech Stack

`PyTorch` `Scikit-Learn` `InfoNCE Loss` `Pandas` `CUDA` `Data Science`
