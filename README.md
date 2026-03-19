# Mobile Edge AI Agent

![Status](https://img.shields.io/badge/Status-In%20Development-success)
![Platform](https://img.shields.io/badge/Platform-Android%20(Termux)%20%7C%20ARM-blue)
![Stack](https://img.shields.io/badge/Stack-Node.js%20%7C%20Ollama%20%7C%20Local%20AI-orange)

## Overview

`mobile-ai-agent` is the local execution layer of a broader **GTM / Compliance / RevOps automation ecosystem** being developed for fully local and privacy-preserving operation.

This project focuses on running a Small Language Model (SLM) directly on ARM hardware and exposing it through a lightweight local API and interface. The goal is to prove that operational AI workflows can be executed without depending on cloud-hosted inference for the core decision layer.

This repository is **not intended to be a standalone chatbot only**. It is the foundational module that will connect to:
- a public-facing prototype experience in `avtaja-portfolio`
- a local GTM orchestration layer
- compliance and RevOps workflow logic
- future integrations for alerts, validation, and operational decision support

## Role in the System

Within the full ecosystem, this repository is responsible for:

- local model inference
- local API exposure
- agent interaction logic
- execution entry point for future workflow integrations
- serving as the secure AI core behind other connected interfaces

## Why this matters

Most GTM and operational automation systems rely heavily on cloud APIs, external orchestration, and third-party SaaS dependencies. This project explores a different approach:

- **privacy-first**: sensitive operational data can remain local
- **low-latency**: inference runs directly on-device
- **lower cost**: reduced dependency on token-based pricing
- **modularity**: the agent can act as one subsystem inside a larger automation machine

## Current Status

This repository is currently in the infrastructure phase.

### Completed
- Local Node.js server running on Android / ARM environment
- Ollama-based local model connection
- Basic chat interface
- Local API structure for prompt/response flow

### In Progress
- integration with the `avtaja-portfolio` prototype
- connection to local GTM workflow logic
- architecture refinement for multi-module orchestration

### Planned
- webhook and remote device access
- workflow/tool execution
- compliance and RevOps validation routines
- operational dashboards and system signals

## System Relationship

This repo should be understood as part of a larger architecture:

`Portfolio / Web Experience -> Local Agent -> GTM / Compliance / RevOps Logic`

The public-facing portfolio layer demonstrates the experience and business surface, while `mobile-ai-agent` powers the local intelligence and execution backbone.

## Tech Stack

- **Inference Engine:** Ollama
- **Model:** Qwen 2.5 / lightweight local model variants
- **Backend:** Node.js + Express
- **Execution Environment:** Termux / Linux on ARM
- **Frontend:** lightweight local web UI

## Project Goal

Build a modular, local-first AI operations system where the intelligence layer, workflow logic, and user-facing surfaces can work together without requiring the core decision engine to leave the device.
