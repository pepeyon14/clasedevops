const http = require('http');
const fs = require('fs');
const path = require('path');

// Mantenemos la función aquí para que tus pruebas automatizadas (Jest) sigan pasando exitosamente
function calcularPromedioPonderado(notas, porcentajes) {
    if (!notas || !porcentajes || notas.length !== porcentajes.length || notas.length === 0) return 0;
    let sumaProductos = 0, sumaPorcentajes = 0;
    for (let i = 0; i < notas.length; i++) {
        sumaProductos += notas[i] * porcentajes[i];
        sumaPorcentajes += porcentajes[i];
    }
    return sumaPorcentajes === 0 ? 0 : Number((sumaProductos / sumaPorcentajes).toFixed(2));
}

// Crear el servidor Web
const server = http.createServer((req, res) => {
    // Si entran a la raíz, servimos tu archivo index.html
    if (req.url === '/' || req.url === '/index.html') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Error interno del servidor leyendo HTML');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(content);
            }
        });
    } 
    // Permitimos que el HTML cargue tu archivo app.js para la lógica de los botones
    else if (req.url === '/app.js') {
        fs.readFile(path.join(__dirname, 'app.js'), (err, content) => {
            if (err) {
                res.writeHead(404);
                res.end('Archivo app.js no encontrado');
            } else {
                res.writeHead(200, { 'Content-Type': 'application/javascript' });
                res.end(content);
            }
        });
    } 
    // Cualquier otra ruta
    else {
        res.writeHead(404);
        res.end('Ruta no encontrada');
    }
});

// Escuchar en el puerto 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// Exportamos para el testing
module.exports = { calcularPromedioPonderado, server };