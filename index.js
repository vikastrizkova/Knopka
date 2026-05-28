const http = require('http');
let s = 'не в руке';
http.createServer((req, res) => {
    if (req.url.includes('knopka=on')) s = 'в руке';
    if (req.url.includes('knopka=off')) s = 'не в руке';
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<h1>Состояние: ${s}</h1><a href="?knopka=on">ON</a> | <a href="?knopka=off">OFF</a>`);
}).listen(process.env.PORT || 3000);