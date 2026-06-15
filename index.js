
const http = require('http');

http.createServer((req, res) => {
  res.end("Naveed MD Bot Running");
}).listen(process.env.PORT || 3000);

console.log("Bot Started");
