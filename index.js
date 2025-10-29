const http = require('http');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});
const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: 'http://87.106.82.84:12488' });
});
server.listen(12488, () => {
  console.log('Proxy server is running on http://localhost:8080');
});
