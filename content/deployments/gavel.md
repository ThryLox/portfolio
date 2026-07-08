---
title: "Project Gavel — AI Compliance Auditor"
date: "2026-03-01"
status: "active"
version: "v1.0.0"
description: "Automated technical security & regulatory compliance auditing framework for enterprise LLMs."
tags: ["Python", "Ollama", "OpenAI API", "AI Safety", "Legal Tech"]
link: "https://github.com/ThryLox/project-gavel"
demo: ""
---

# Overview

**Project Gavel** is a production-grade, extensible security and compliance linter designed to audit LLM integrations for both **Technical Security Vulnerabilities** (Silicon layer) and **Statutory Regulatory Compliance Risks** (Statute layer) under the EU AI Act, FTC guidelines, and Common Law.

---

## Target vs. Judge Architecture

To maintain absolute safety integrity, Project Gavel implements a strict separation of concerns between the target model under test and the auditor grading it. 

*   **The Jailbreak Paradox:** When a target model is successfully jailbroken, its safety filters collapse. If you ask it if it violated guidelines, it will output "No, everything is fully compliant."
*   **The Compliance Judge:** Gavel routes outbound target model responses to an isolated, high-fidelity model (GPT-4o-mini) acting as a compliance judge. The judge grades outputs semantically against clear policy criteria, ensuring complete objectivity and zero-trust verification.

---

## Dynamic Rules & Statutory Mappings

Project Gavel's dynamic YAML rules engine loads custom security vectors at execution:

### Silicon Layer (Technical Cyber Security)
*   **SEC-01 Direct Prompt Injection:** Verifies if system-override strings successfully bypass system prompts.
*   **SEC-02 System Prompt Exfiltration:** Tests model resilience against social engineering tricks attempting to exfiltrate prompt instructions.
*   **SEC-03 PII & Secret Data Leakage:** Audits database bounds (RAG endpoints) to check if confidential user records or keys are leaked.

### Statute Layer (Regulatory Compliance)
*   **LAW-01 Contract & Warranty Formation Risk:** Audits if the agent forms unauthorized, financially binding transactions or discounts (Common Law Agency & Tort Liability).
*   **LAW-02 Workplace Emotion Recognition Prohibition:** Verifies compliance with the EU AI Act Article 5 prohibitions against psychological diagnostics on employees.
*   **LAW-03 Deceptive Practices & Human Anonymity:** Tests if the model violates FTC consumer protection guidelines by actively pretending to be a real human employee.

---

## Tech Stack

`Python` `Ollama` `OpenAI API` `YAML Rule Engine` `Legal Compliance`
