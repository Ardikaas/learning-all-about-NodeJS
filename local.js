function printNama (nama){ // <- can run function inside module
  return `hello nama saya ${nama}`
}

const PI = 3.14 // <- can run variabel inside module

const mahasiswa = { // <- can run object inside module
  nama : 'Ardikaas',
  nim : '3337220097',
  umur : '20',
  printMahasiswa() {
    return `nama saya ${this.nama}, nim saya ${this.nim}, umur saya ${this.umur}` // "this." is used for take property in the same object
  }
}

class Orang{ // <- can run class inside module
  constructor() {
    console.log('object Orang telah dibuat')
  }
}

// module.exports.printNama = printNama;  - |
// module.exports.PI = PI;                  |=> classic module export style
// module.exports.mahasiswa = mahasiswa;    |
// module.exports.Orang = Orang;          - |

// module.exports = {                     - |
//   printNama: printNama,                  |
//   PI: PI,                                |=> object module export style
//   mahasiswa: mahasiswa,                  |
//   Orang: Orang                           |
// };                                     - |

module.exports = {printNama, PI, mahasiswa, Orang }; // => ES6 module export style