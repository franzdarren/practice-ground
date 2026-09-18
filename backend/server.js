import http from 'node:http';

http.createServer((req, res) => {
    console.log(req.method, req.url);
  res.end('hello');
}).listen(3000, () => {
  console.log('listening on http://localhost:3000');
  
});
