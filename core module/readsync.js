const fs = require('node:fs');

const data = fs.readFileSync('data/test.txt') //read file syncronous metode
console.log(data.toString()) // <- "toString()" used for convert buffer text to string text