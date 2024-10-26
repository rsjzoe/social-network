const http = require('http');
// import http from "http"

const server = http.createServer((req, res) => {
    if(req.url == "/") {
        res.statusCode = 200;    
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, world!\n');
    } else if  (req.url == "/chat") {
        res.statusCode = 200;    
        res.setHeader('Content-Type', 'text/plain');
        res.end('chats!\n');
    }
});

server.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000');
});
