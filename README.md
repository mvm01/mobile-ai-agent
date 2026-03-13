# Mobile Edge AI Agent

![Status](https://img.shields.io/badge/Status-Active-success)
![Platform](https://img.shields.io/badge/Platform-Android%20(Termux)%20%7C%20Windows%20ARM-blue)
![Stack](https://img.shields.io/badge/Stack-Node.js%20%7C%20Ollama-orange)

## Overview
This project implements an **Edge AI** architecture, running a Small Language Model (SLM) 100% locally on ARM hardware (Snapdragon processors). 

The main objective is to demonstrate the feasibility of deploying an autonomous, conversational, and operational agent without relying on cloud-based APIs, ensuring:
* **Absolute Privacy:** Data never leaves the host device.
* **Zero Network Latency:** Native processing directly on the hardware.
* **Reduced Operational Costs:** Infrastructure with zero token fees or cloud subscription dependencies.
  
##Project Roadmap
This ecosystem is continuously evolving towards enterprise automation:

[x] Phase 0: Deployment of core infrastructure and Node.js server on Android.

[ ] Phase 1: Webhook connection (Localtunnel/Ngrok) to interact with the agent from other network devices.

[ ] Phase 2: Integration with B2B platforms (Slack/WhatsApp) for automated alerts and workflows.

[ ] Phase 3: Integration of "Tool Calling" to execute host OS scripts (e.g., sending emails, log analysis).


## Tech Stack
* **Inference Engine:** [Ollama](https://ollama.com/)
* **LLM:** Qwen 1.5B (Optimized for RAM-restricted environments).
* **Backend / API:** Node.js (Express/Native server for local routing).
* **Execution Environment:** Termux (Linux on Android) / Native ARM environments.

---

## Quick Installation (Automated Deployment)

To streamline deployment on any Android device (via Termux) or Linux/ARM environments, this repository includes an automated setup script (`setup.sh`). 

This script handles the installation of Node.js, system package updates, dependency downloads, and environment preparation for the AI engine.

**Step 1: Clone the repository**
```bash
git clone [https://github.com/mvm01/mobile-ai-agent.git](https://github.com/mvm01/mobile-ai-agent.git)
cd mobile-ai-agent




