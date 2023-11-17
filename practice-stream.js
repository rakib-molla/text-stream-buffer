const http = require('http');
const fs = require('fs')
const server = http.createServer();

server.on('request', (req, res) => {
 if (res.url === '/read-file', req.method === 'GET') {
  const readableStream = fs.createReadStream(process.cwd() + ('/text/read.txt'))

  readableStream.on('data', (buffer) => {
   res.statusCode = 200;
   res.write(buffer);
  })
  readableStream.on('end', ()=>{
   res.statusCode = 200;
   res.end('all end')
  })

  readableStream.on('error', ()=>{
   res.end('something went wrong')
  })
 }
})

server.listen(5000, () => {
 console.log(`server is running on port ${5000}`);
})