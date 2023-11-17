const fs = require('fs');

const readText = fs.readFileSync('./text/read.txt', 'utf-8')

// write a text

const writeText = fs.writeFileSync('./text/write.txt', readText + 'rakib text')

console.log(readText);
