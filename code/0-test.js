const fs = require('fs')
const path = require('path')

console.log(__dirname)
console.log(process.cwd())
console.log(path.join('./'))
console.log(path.resolve('a'))
fs.readdir('./doc', (err, files) => console.log(files))