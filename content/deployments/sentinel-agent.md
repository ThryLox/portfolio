---
title: "Sentinel Agent"
date: "2024-11-15"
status: "active"
version: "v1.0.0"
description: "Lightweight endpoint monitoring agent built in Go."
tags: ["Go", "Windows", "Security", "SQLite", "Telemetry"]
link: "https://github.com/ThryLox/sentinel-agent"
demo: ""
---

# System Overview
A modular Windows endpoint agent designed for **offline-first telemetry collection, policy enforcement, and secure persistence**.

## Core Components
- Runs as a **Windows Service** via `kardianos/service`.
- Collects telemetry (system info, processes) through internal modules.
- Stores data in SQLite at `%PROGRAMDATA%/SentinelAgent/events.db`.
- Enforces YAML-based policies for process blocking and compliance validation.
- Syncs with a configurable remote **GatewayURL** for secure event delivery.

## Architecture
- **Modular design** separating detection, persistence, and communication layers.
- **Local-first storage** ensures resilience during network downtime.
- **YAML-based rule definitions** for auditable and transparent enforcement.

## Capabilities
`Endpoint Observability` `Extensible Design` `Enterprise Compliance`

---
