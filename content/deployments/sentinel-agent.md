---
title: "Sentinel Agent"
date: "2024-11-15"
status: "active"
version: "v1.0.0"
description: "Lightweight Windows endpoint monitoring agent built in Go."
tags: ["Go", "Windows", "Security", "SQLite"]
link: "https://github.com/ThryLox/sentinel-agent"
demo: ""
---

# Overview

**Sentinel Agent** is a modular Windows endpoint agent for offline-first telemetry collection and policy enforcement. Built in Go for minimal footprint.

---

## Features

- Runs as a Windows Service via `kardianos/service`
- Collects system info, process telemetry
- SQLite storage at `%PROGRAMDATA%/SentinelAgent/`
- YAML-based policies for process blocking
- Syncs with remote gateway for event delivery

---

## Architecture

- Modular design separating detection, persistence, and comms
- Local-first storage for network resilience
- YAML rules for transparent enforcement

---

## Tech Stack

`Go` `SQLite` `Windows Services` `YAML Policies`
