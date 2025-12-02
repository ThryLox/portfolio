---
title: "Honeypot Telemetry Lessons"
date: "2025-11-10"
severity: "INFO"
tags: ["security", "threat-intelligence", "ssh"]
description: "Insights from SSH Sentinel attack data analysis."
---

`2025-11-10 14:23:01 | INFO`

Deployed honeypot generated over **200K SSH intrusion attempts** within 3 weeks.

### Analysis
- 70% of attempts originated from common VPS IP blocks.
- Majority used password dictionaries under 500 variants.
- Repeated connection attempts show lateral movement testing behavior.

Geo-intelligence reveals **clusters in SEA and Eastern Europe** — matching known brute-force campaigns.
Future work: integrate **behavioral clustering** and **MITRE ATT&CK correlation** to classify intrusion types.
