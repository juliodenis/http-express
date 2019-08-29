// http no es un framework como tal, viene incluido al instalar node
// Para levantar servidores con http es un poco más complicado y con más código
const http = require('http');

const server = http.createServer((req, res) => {
    res.stattus = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello World')
});
server.listen(3000, () => {
    console.log('Server on port 3000');
    
})
// PARA EXPANDIR LA APLICACIÓN WEB A UN NIVEL MAYOR SE NECESITAN FRAMEWORKS, ESTO FACILITA A LA HORA DE GENERAR CÓDIGO.
