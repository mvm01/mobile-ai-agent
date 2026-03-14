#!/bin/bash
# setup.sh - Installer for Mobile Edge AI Agent en Termux/Linux

echo "Starting local agent configuration..."

# 1 Update thermux packages
echo "Updating system packages..."
pkg update -y && pkg upgrade -y || sudo apt update -y && sudo apt upgrade -y

# 2. Install the dependencies (Node.js y Git)
echo "Installing Node.js and utilities..."
pkg install nodejs git -y || sudo apt install nodejs git -y

# 3. Install libraries of Node.js (package.json)
echo "Installing dependencies of the project (npm)..."
npm install

# 4. Verification of Ollama Motor
echo "Verifying (Ollama) IA motor..."
if command -v ollama >/dev/null 2>&1; then
    echo "Ollama detected."
    echo "Ensuring the model Qwen 1.5B is downloaded..."
    # Execute the download
    ollama pull qwen:1.5b
else
    echo "Warning: Ollama was not detected."
    echo "Make sure to install Ollama (ollama pull qwen:1.5b) for the agent to work properly ."
fi

echo "---------------------------------------------------"
echo "¡Configuration completed successfully!"
echo "To execute the server: node server.js"
echo "---------------------------------------------------"
