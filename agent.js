const OLLAMA_URL = "http://127.0.0.1:11434/api/generate";

export async function askAgent(promptUsuario) {
    const promptCompleto = "Eres un asistente inteligente, amable y útil. Responde de manera clara y concisa.\n\nUsuario: " + promptUsuario + "\nAsistente:";

    const payload = {
        model: "qwen2.5:1.5b",
        prompt: promptCompleto,
        stream: false
    };

    try {
        const peticion = await fetch(OLLAMA_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const data = await peticion.json();
        
        if (!data.response) {
            return "Lo siento, tuve un problema al generar la respuesta.";
        }

        return data.response.trim();

    } catch (error) {
        console.error("[ERROR en agent.js]:", error.message);
        return "Error interno del servidor.";
    }
}
