
const nama = 'ardikaas'

const display = (nama) =>{
  console.log(`hi nama saya ${nama}`)
}

display(nama)

//use "node [file name]" to run node file

const umur = require('./exam') //call module from another node file
console.log(umur(20))