const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const files = {'/':'index.html','/index.html':'index.html','/style.css':'style.css','/app.js':'app.js'};
http.createServer((req,res)=>{const file=files[new URL(req.url,'http://localhost').pathname];if(!file){res.writeHead(404);return res.end('Introuvable');}res.setHeader('Content-Type',file.endsWith('.css')?'text/css':file.endsWith('.js')?'text/javascript':'text/html; charset=utf-8');fs.createReadStream(path.join(__dirname,file)).pipe(res);}).listen(process.env.PORT||3000,'0.0.0.0',()=>console.log('Horizon démarré sur le port '+(process.env.PORT||3000)));
