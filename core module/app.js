//file system
//const fs = require('node:fs/promises'); <- plain JS
//import * as fs from 'node:fs/promises'; // <- ES6 (To use the promise-based APIs)
//import * as fs from 'node:fs'; //To use the callback and sync APIs:
const fs = require('node:fs');


//sycronous writing string to file
fs.writeFileSync('data/test.txt', 'hello world sycronous');

//asycronous writing string to file
fs.writeFile('data/data.txt', 'hello world asycronous', (e) => {
  console.log(e);
})


//readline
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('masukkan nama anda: ', (nama) => {
  rl.question('masukkan nomor anda: ', (nomor) => {
    console.log(`terima kasih ${nama}, no hp anda ${nomor}`)
    rl.close
  })
})