import { exec } from 'child_process';


export function enviarCorreo(destinatario, asunto, mensaje) {
    return new Promise((resolve, reject) => {
        
        console.log(`[TOOLS] Preparando envío de correo a: ${destinatario}`);
        
 
        const comandoPython = `python3 correo.py "${destinatario}" "${asunto}" "${mensaje}"`;

        exec(comandoPython, (error, stdout, stderr) => {
            if (error) {
                console.error(`[TOOLS ERROR] Falló el envío: ${error.message}`);
            }
            if (stderr) {
                console.warn(`[TOOLS WARN] Advertencia del sistema: ${stderr}`);
            }
            
            console.log(`[TOOLS ÉXITO] Correo enviado correctamente.`);
            resolve(stdout.trim()); 
        });
    });
}
