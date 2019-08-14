/*server.js*/
const http = require('http');
const hostname = 'ec2-54-191-104-59.us-west-2.compute.amazonaws.com';
const port = 8080;
const server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
server.listen(port, hostname, function() {
  console.log('Server running at http://'+ hostname + ':' + port + '/');
});

