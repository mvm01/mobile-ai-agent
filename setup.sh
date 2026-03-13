#!/bin/bash
# setup.sh - Instalador automatizado para Mobile Edge AI Agent en Termux/Linux

echo "Iniciando configuración del Agente de IA Local..."

# 1. Actualizar repositorios de Termux/Linux
echo "Actualizando paquetes del sistema..."
pkg update -y && pkg upgrade -y || sudo apt update -y && sudo apt upgrade -y

# 2. Instalar dependencias base (Node.js y Git)
echo "Instalando Node.js y utilidades..."
pkg install nodejs git -y || sudo apt install nodejs git -y

# 3. Instalar librerías de Node.js (package.json)
echo "Instalando dependencias del proyecto (npm)..."
npm install

# 4. Verificación del Motor Ollama
echo "Verificando motor de IA (Ollama)..."
if command -v ollama >/dev/null 2>&1; then
    echo "Ollama detectado."
    echo "Asegurando que el modelo Qwen 1.5B esté descargado..."
    # Ejecuta la descarga en segundo plano si no existe
    ollama pull qwen:1.5b
else
    echo "ADVERTENCIA: Ollama no fue detectado en el PATH automático."
    echo "Asegúrate de instalar Ollama y descargar el modelo (ollama pull qwen:1.5b) para que el agente funcione correctamente."
fi

echo "---------------------------------------------------"
echo "¡Configuración completada con éxito!"
echo "Para encender tu agente, ejecuta: node server.js"
echo "---------------------------------------------------"
