const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.mp4': 'video/mp4'
};

const server = http.createServer((req, res) => {
  // Decode URL in case of encoded spaces/characters
  let reqPath = decodeURIComponent(req.url);
  
  // Default routing
  if (reqPath === '/') {
    reqPath = '/index.html';
  }
  
  const filePath = path.join(__dirname, reqPath);
  
  // Safety check to prevent escaping workspace directory
  const relative = path.relative(__dirname, filePath);
  if (relative && relative.startsWith('..') && !path.isAbsolute(relative)) {
    res.statusCode = 403;
    res.end('Forbidden');
    return;
  }
  
  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.statusCode = 404;
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
      return;
    }
    
    if (stats.isDirectory()) {
      const indexFile = path.join(filePath, 'index.html');
      fs.stat(indexFile, (errIdx, statsIdx) => {
        if (!errIdx && statsIdx.isFile()) {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          fs.createReadStream(indexFile).pipe(res);
        } else {
          res.statusCode = 404;
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Directory Index Not Found');
        }
      });
      return;
    }
    
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Preview URL: http://localhost:${PORT}/kuki/index.html`);
});
