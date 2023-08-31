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

const cekDuplikat = (value) => {
  const contacts = load();
  return contacts.find((contact) => contact.nama === value);
}

const deleteContact = (nama) => {
  const contacts = load();
  const filtered = contacts.filter((contact) => contact.nama !== nama);
  save(filtered);
}

const update = (contactBaru) => {
  const contacts = load();
  const filtered = contacts.filter((contact) => contact.nama !== contactBaru.oldNama);
  delete contactBaru.oldNama;
  filtered.push(contactBaru);
  save(filtered);
}

module.exports = { load, detail, add, cekDuplikat, deleteContact, update }