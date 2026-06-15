
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Naveed MD Live");
});

server.listen(process.env.PORT || 3000, () => {
  console.log("Server Running");
});
