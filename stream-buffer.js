const http = require('http');
const fs = require('fs');
const { error } = require('console');

// create a server using raw node js
const server = http.createServer();

server.on('request', (req, res) => {
 if (req.url === '/read-file', req.method === 'GET');

 const readableStream = fs.createReadStream(process.cwd()+ '/text/read.txt')

 readableStream.on('data', (buffer)=>{
  res.statusCode = 200
  res.write(buffer)
 })

 readableStream.on('end', ()=>{
  res.end('Streaming end')
  res.statusCode = 200
 })
 
 readableStream.on('error', (error)=>{
  console.log({error});
  res.statusCode = 500;
  res.end('something went wrong !');
 })

})

server.listen(5000, () => {
 console.log(`server is listen on port ${5000}`);
})