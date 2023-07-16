const { tanya, save } = require('./contact')

const main = async() => {
  const nama = await tanya('Masukkan nama anda: ');
  const email = await tanya('Masukkan email anda: ');
  const nomor = await tanya('Masukkan nomor HP anda: ');
  const alamat = await tanya('Masukkan alamat anda: ');

  save(nama, email, nomor, alamat)
};

main();