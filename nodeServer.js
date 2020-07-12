const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>This is our home page</h1>');
    res.end();
  } else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write(`<h4>Sorry this isn't the page you're looking for!</h4>`);
    res.end();
  }
});

server.listen(3000);
