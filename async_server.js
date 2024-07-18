const http = require('http');
const fs = require('fs').promises;

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(async (req, res) => {
  try {
    const data = await fs.readFile('message.txt', 'utf8');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(data);
  } catch (err) {
    res.statusCode = 500;
    res.end('Error reading file');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
