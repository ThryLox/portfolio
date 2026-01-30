---
title: "Depth Lens"
date: "2025-10-15"
status: "active"
version: "v1.0.0"
description: "Privacy-first mental health reflection tool based on PDM-2 psychological framework."
tags: ["Next.js", "TypeScript", "Web Crypto API", "Privacy"]
link: "https://github.com/ThryLox/depth-lens"
demo: "https://depth-lens.vercel.app/"
---

# Overview

**Depth Lens** is a self-reflection tool inspired by the Psychodynamic Diagnostic Manual (PDM-2). It measures psychological capacities across three dimensions—not just symptoms.

> **Note:** This is a wellness tool, not a diagnostic instrument.

---

## Three-Axis Model

- **Axis P (Personality)** — Patterns of thinking, feeling, and relating
- **Axis M (Mental Functioning)** — Emotional regulation, empathy, self-reflection
- **Axis S (Symptom Distress)** — Subjective experience of emotional difficulty

---

## Privacy Architecture

All data stays local. Zero cloud transmission.

- **Encryption:** AES-256-GCM via Web Crypto API
- **Storage:** Browser localStorage only
- **Tracking:** None—no analytics or cookies

---

## Design

Built with a "Clinical / Old Money" aesthetic: warm sand tones, sage green, lavender. Designed to feel calm and distraction-free.

---

## Tech Stack

`Next.js 15` `TypeScript` `Zustand` `Framer Motion` `TailwindCSS`
