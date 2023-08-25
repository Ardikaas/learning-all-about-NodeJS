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

const save = (nama, email, nomor, alamat) => {
  const contact = { 
    "name": nama,
    "email": email,
    "contact": nomor,
    "address": alamat
  };
  const file = fs.readFileSync('data/data.json', 'utf8');
  const contacts = JSON.parse(file)

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
  console.log(contacts)
  console.log(chalk.green.inverse.bold('thanks for your data'))
}

module.exports = { save }