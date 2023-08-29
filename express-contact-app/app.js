const express = require('express')
const expressLayouts =require('express-ejs-layouts')
const { load, detail } = require('./utils/contact')

const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));

app.get('/', (req, res) => {
  const mahasiswa = [
    {
      nama: 'Ardikaas',
      email: 'ardikaas@gmail.com'
    },
    {
      nama: 'Dodi',
      email: 'dodi@gmail.com'
    },
    {
      nama: 'Ucup',
      email: 'Ucup@gmail.com'
    }
  ]
  res.render('index',{
    layout: 'component/main-layout',
    nama: 'Ardikaas',
    title: 'Express web server | Home',
    mahasiswa: mahasiswa,
  });
})

app.get('/about', (req, res) => {
  res.render('about', {
    layout: 'component/main-layout',
    title: 'Express web server | About' });
})

app.get('/contact', (req, res) => {
  const contacts = load();
  res.render('contact', { 
    layout: 'component/main-layout',
    title: 'Express web server | Contact',
    contacts: contacts,
  })
})

app.get('/contact/:nama', (req, res) => {
  const contact = detail(req.params.nama);
  res.render('detail', { 
    layout: 'component/main-layout',
    title: 'Express web server | Detail Contact',
    contact,
  })
})

app.use('/', (req, res) => {
  res.status(404)
  res.send('<h1>404</h1>')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})