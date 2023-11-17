const fs = require('fs')

// reading text asynchronous
fs.readFile('./text/read.txt' ,'utf-8', (error, data)=>{
 if(error){
  throw Error('Error reading text')
 }
 //write asynchronous 
 fs.writeFile('./text/write.txt', data, (error, data)=>{
  if(error){
   throw Error('write data error')
  }
  
 })
})

console.log('testing async');
