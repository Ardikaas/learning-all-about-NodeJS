const readline = require('readline')
const fs = require('node:fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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

const tanya = (pertanyaan) => {
  return new Promise((resolve, rejects) => {
    rl.question(pertanyaan, (e) =>{
      resolve (e)
    });
  });
};

const save = (nama, email, nomor, alamat) => {
  const contact = { 
    "name": nama,
    "email": email,
    "contact": nomor,
    "address": alamat
  };
  const file = fs.readFileSync('data/data.json', 'utf8');
  const contacts = JSON.parse(file)
  contacts.push(contact)
  fs.writeFileSync('data/data.json', JSON.stringify(contacts, null, 2))
  console.log(contacts)
  console.log('thanks for your data')
  rl.close()
}

module.exports = {
  tanya,
  save
}