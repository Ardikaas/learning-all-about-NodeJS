const yargs = require('yargs');
const { save, list, detail, remove } = require('./contact');

yargs.command({
  command: 'add',
  describe: 'Menambahkan contact baru',
  builder: {
    nama: {
      describe: 'Nama lengkap',
      demandOption: true,
      type: 'string',
    },
    email: {
      describe: 'email',
      demandOption: false,
      type: 'string',
    },
    noHP: {
      describe: 'Nomor HP',
      demandOption: true,
      type: 'string',
    },
    alamat: {
      describe: 'alamat',
      demandOption: false,
      type: 'string',
    }
  },
  handler(argv){
    save(argv.nama, argv.email, argv.noHP, argv.alamat);
  }
}).demandCommand();

yargs.command({
  command: 'list',
  describe: 'Menampilkan nama dan nomor hp',
  handler(){
    list();
  }
});

yargs.command({
  command: 'detail',
  describe: 'Menampilkan detail contact berdasarkan nama',
  builder: {
    nama: {
      describe: 'Nama lengkap',
      demandOption: true,
      type: 'string',
    }
  },
  handler(argv){
    detail(argv.nama);
  }
})

yargs.command({
  command: 'remove',
  describe: 'Menghapus detail contact berdasarkan nama',
  builder: {
    nama: {
      describe: 'Nama lengkap',
      demandOption: true,
      type: 'string',
    }
  },
  handler(argv){
    remove(argv.nama);
  }
})

yargs.parse();