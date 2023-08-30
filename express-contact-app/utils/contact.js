const fs = require('node:fs');

const dirPath = './data';
if(!fs.existsSync(dirPath)){
  fs.mkdirSync(dirPath);
}

const dataPath = './data/data.json'
if(!fs.existsSync(dataPath)){
  fs.writeFileSync(dataPath, '[]', 'utf-8')
}

const load = () => {
  const file = fs.readFileSync('data/data.json', 'utf8');
  const contacts = JSON.parse(file)
  return contacts;
}

const detail = (nama) => {
  const contacts = load();
  const contact = contacts.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );
  return contact;
}

const save = (contacts) => {
  fs.writeFileSync('data/data.json', JSON.stringify(contacts, null, 2));
}

const add = (contact) => {
  const contacts = load();
  contacts.push(contact);
  save(contacts)
}

module.exports = { load, detail, add }