const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const MAINTENANCE_MODE = process.env.MAINTENANCE_MODE === 'true' || false;
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
  '.mp4': 'video/mp4',
  '.webp': 'image/webp',
  '.pdf': 'application/pdf'
};

function addSecurityHeaders(res, ext) {
  const headers = {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
  };
  if (ext !== '.html') {
    headers['Cache-Control'] = 'public, max-age=31536000, immutable';
  }
  return headers;
}

const server = http.createServer((req, res) => {
  // Decode URL in case of encoded spaces/characters
  let reqPath = decodeURIComponent(req.url);
  
  // Default routing
  if (reqPath === '/') {
    reqPath = '/index.html';
  }
  
  // Strip null bytes and prevent path traversal
  reqPath = reqPath.replace(/\0/g, '');
  const filePath = path.resolve(__dirname, reqPath);
  
  // Safety check to prevent escaping workspace directory
  if (!filePath.startsWith(path.resolve(__dirname))) {
    res.statusCode = 403;
    res.end('Forbidden');
    return;
  }
  
  // Block access to private directories
  if (reqPath.startsWith('/_private') || reqPath.startsWith('/node_modules') || reqPath.startsWith('/product assets')) {
    res.statusCode = 403;
    res.end('Forbidden');
    return;
  }
  
  // Server-side maintenance mode (bypass for /admin)
  if (MAINTENANCE_MODE && !reqPath.startsWith('/admin')) {
    res.writeHead(503, { 'Content-Type': 'text/html' });
    res.end('<!DOCTYPE html><html><head><title>Under Maintenance</title><style>body{font-family:sans-serif;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;background:#FAF8F5;color:#1c1c1a;}h1{font-weight:300;}</style></head><body><h1>We\'ll be back soon.</h1></body></html>');
    return;
  }
  
  fs.stat(filePath, (err, stats) => {
    if (err) {
      if (err.code === 'ENOENT' && !path.extname(filePath)) {
        const htmlFilePath = filePath + '.html';
        fs.stat(htmlFilePath, (errHtml, statsHtml) => {
          if (!errHtml && statsHtml.isFile()) {
            const secHeaders = addSecurityHeaders(res, '.html');
            res.writeHead(200, Object.assign({}, {
              'Content-Type': 'text/html',
              'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate'
            }, secHeaders));
            fs.createReadStream(htmlFilePath).pipe(res);
            return;
          }
          res.statusCode = 404;
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Not Found');
        });
        return;
      }
      res.statusCode = 404;
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
      return;
    }
    
    if (stats.isDirectory()) {
      const indexFile = path.join(filePath, 'index.html');
      fs.stat(indexFile, (errIdx, statsIdx) => {
        if (!errIdx && statsIdx.isFile()) {
          const secHeaders = addSecurityHeaders(res, '.html');
          res.writeHead(200, Object.assign({}, {
            'Content-Type': 'text/html',
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate'
          }, secHeaders));
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
    const secHeaders = addSecurityHeaders(res, ext);
    const headers = Object.assign({}, { 'Content-Type': contentType }, secHeaders);
    
    if (ext === '.html') {
      headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, proxy-revalidate';
    }
    
    res.writeHead(200, headers);
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Preview URL: http://localhost:${PORT}/index.html`);
});
