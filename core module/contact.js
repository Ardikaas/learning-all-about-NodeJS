//simple contact apps

const readline = require('readline')
const fs = require('node:fs');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('masukkan nama anda: ', (nama) => {
  rl.question('masukkan nomor anda: ', (nomor) => {
    rl.question('masukkan alamat anda: ', (alamat) => {
      const contact = { 
        "name": nama,
        "contact": nomor,
        "address": alamat
      };
      const file = fs.readFileSync('data/contact.json', 'utf8');
      const contacts = JSON.parse(file)
      contacts.push(contact)
      fs.writeFileSync('data/contact.json', JSON.stringify(contacts, null, 2))
      console.log(contacts)
      console.log('thanks for your data')
      rl.close()
    })
  })
})