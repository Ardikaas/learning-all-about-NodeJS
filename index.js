
const nama = 'ardikaas'

const display = (nama) =>{
  console.log(`hi nama saya ${nama}`)
}

display(nama)

//use "node [file name]" to run node file

//const fs = require('fs')  <- this is core module
const umur = require('./exam') //call module from another node file <- this is local module
//const moment = require ('moment')  <- this is third party module / npm module 
console.log(umur(20))

//local module
const local = require('./local')
console.log( //this is how to use multiple module in 1 file "(module file).(object name)" 
  local.printNama('Widi'),
  local.PI,"\n",
  local.mahasiswa.printMahasiswa(),
  new local.Orang()
); 