---
title: "Driftlite — AI Behavior Monitoring"
date: "2025-07-01"
status: "active"
version: "v1.0.0"
description: "Lightweight monitoring of AI system drift using interpretable statistical signals."
tags: ["Machine Learning", "Python", "AI Safety", "Research"]
link: "https://github.com/ThryLox/drift-research"
demo: ""
---

# Overview

**Driftlite** detects when ML models start behaving differently in production—before accuracy tanks. Uses simple, interpretable statistics instead of complex monitoring systems.

Accompanies the preprint: *"Lightweight Monitoring of AI System Drift Using Interpretable Statistical Signals"*

---

## Research Questions

1. **Detection Sensitivity** — How reliably can PSI and KS-Test identify distribution shifts?
2. **Performance Correlation** — How does detected drift relate to accuracy degradation?

---

## Methods

- **PSI (Population Stability Index)** — Measures feature distribution shift
- **KS-Test** — Non-parametric comparison of probability distributions

Both methods are zero-dependency (just SciPy/NumPy) and model-agnostic.

---

## Features

- Realistic drift simulation (noise, label corruption)
- Automated Markdown reporting with distribution plots
- Works with any Scikit-learn model

---

## Tech Stack

`Python` `SciPy` `NumPy` `Scikit-learn` `Research`
