var http = require('http');

https.createServer(function (req, res) {
  res.write("I'm alive");
  res.end();
}).listen(8080);
