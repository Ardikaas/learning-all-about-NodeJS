const fs = require('node:fs');
const chalk = require('chalk');
const validator = require('validator')

//optimize data exist
const dirPath = './data';
if(!fs.existsSync(dirPath)){
  fs.mkdirSync(dirPath);
}

//optimize file exist
const dataPath = './data/data.json'
if(!fs.existsSync(dataPath)){
  fs.writeFileSync(dataPath, '[]', 'utf-8')
}

const load = () => {
  const file = fs.readFileSync('data/data.json', 'utf8');
  const contacts = JSON.parse(file)
  return contacts;
}

const save = (nama, email, nomor, alamat) => {
  const contact = { 
    "name": nama,
    "email": email,
    "contact": nomor,
    "address": alamat
  };
  const contacts = load();

  const duplikat = contacts.find((contact) => contact.name === nama);
  if (duplikat){
    console.log(chalk.red.inverse.bold("Contact sudah terdaftar, gunakan nama lain!"))
    return false;
  }

  if(email){
    if(!validator.isEmail(email)){
      console.log(chalk.red.inverse.bold("Email yang anda masukkan tidak valid!"))
      return false;
    }
  }

  contacts.push(contact)
  fs.writeFileSync('data/data.json', JSON.stringify(contacts, null, 2))
  console.log(chalk.green.inverse.bold('thanks for your data'))
}

const list = () => {
  const contacts = load();
  console.log(chalk.cyan.inverse.bold('Daftar contact : '))
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.name} - ${contact.contact}`)
  });
};

const detail = (nama)=> {
  const contacts = load();
  const contact = contacts.find(
    (contact) => contact.name.toLowerCase() === nama.toLowerCase()
  );

  if(!contact){
    console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan`))
    return false;
  }
  console.log(chalk.cyan.inverse.bold(contact.name))
  console.log(contact.contact)
  if(contact.email){
    console.log(contact.email)
  }
}

const remove = (nama => {
  const contacts = load();
  const newContacts = contacts.filter(
    (contact) => contact.name.toLowerCase() !== nama.toLowerCase()
  );
  if(contacts.length === newContacts.length){
    console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan`))
    return false;
  }

  fs.writeFileSync('data/data.json', JSON.stringify(newContacts, null, 2))
  console.log(chalk.green.inverse.bold(`data contact ${nama} berhasil dihapus!`))
})

module.exports = { save, list, detail, remove }