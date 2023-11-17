const {add, a } = require('./local-1');
const {add: add2 , a: b}  = require('./local-2')

// console.log(b)

// build in modules
const path = require('path')
// console.log(path.dirname('.rakib/index.js'))

// console.log(path.parse('/rakib/index.js'));

console.log(path.join('/rakib/index.js', 'ami valo cele'));