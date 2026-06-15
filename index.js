
const http = require('http');

http.createServer((req, res) => {
  res.end("Bot Running OK");
}).listen(process.env.PORT || 3000);
