const fs = require('node:fs');

fs.readFile('data/data.txt', 'utf-8', (err, data) => { //read file asyncronous metode
  if (err) throw err;
  console.log(data);
})