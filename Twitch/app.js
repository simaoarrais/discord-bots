import { capitalize } from './utils.js';
import http from 'http';

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(capitalize('hello World!'));
}).listen(8080);