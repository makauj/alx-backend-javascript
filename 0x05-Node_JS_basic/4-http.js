#!/usr/bin/node
// samll http server using http module
// variable 'app' must be exported
// port 1245
const http = require('http');
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello ALX!\n');
});

app.listen(1245);

module.exports = app;