const http = require('http');
const httpProxy = require('http-proxy');

// Replace this with your local bot URL
const TARGET_URL = 'http://87.106.82.84:12488/';

// Create a proxy server
const proxy = httpProxy.createProxyServer({});

// Handle errors gracefully
proxy.on('error', (err, req, res) => {
  console.error('Proxy error:', err.message);
  res.writeHead(502, { 'Content-Type': 'text/plain' });
  res.end('Bad Gateway: Unable to reach target server.');
});

// Create HTTP server that forwards all requests
const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: TARGET_URL });
});

// Start proxy on port 8080 (or any port you choose)
const PORT = 8080;
server.listen(PORT, () => {
  console.log(`✅ Proxy server running on http://localhost:${PORT}`);
});
