const yargs = require('yargs');
const { save } = require('./contact');

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
});

yargs.parse();