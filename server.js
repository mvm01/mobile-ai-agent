import express from 'express';
import fs from 'fs';
import { askAgent } from './agent.js';

const app = express();
app.use(express.json()); 

app.get('/', (req, res) => {
    try {
        // Usamos process.cwd() para anclar la ruta exacta sin importar qué diga Termux
        const html = fs.readFileSync(process.cwd() + '/public/index.html', 'utf8');
        res.setHeader('Content-Type', 'text/html');
        res.send(html);
    } catch (error) {
        res.status(500).send("Error leyendo el index.html: " + error.message);
    }
});

const PORT = 3001;

app.post('/api/chat', async (req, res) => {
    const textoUsuario = req.body.texto;
    if (!textoUsuario) {
        return res.status(400).json({ error: "El campo texto es obligatorio." });
    }
    console.log(`[INFO] Procesando petición: "${textoUsuario}"`);
    const respuestaAgente = await askAgent(textoUsuario);
    res.json({ respuesta: respuestaAgente });
    console.log(`[INFO] Respuesta enviada con éxito.`);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`[OK] Servidor blindado y anclado en el puerto ${PORT}`);
});
