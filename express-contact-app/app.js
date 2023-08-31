const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const { body, validationResult, check } = require('express-validator')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')
const { load, detail, add, cekDuplikat, deleteContact, update } = require('./utils/contact')

const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser('secret'));
app.use(
  session({
  cookie: { maxAge: 6000 },
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
  })
);
app.use(flash());

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
    msg: req.flash('msg'),
  })
})

app.get('/contact/add', (req, res) => {
  res.render('add-contact', {
    layout: 'component/main-layout',
    title: 'Express web server | Add Contact',
  });
})

app.post('/contact', [
  body('nama').custom((value) => {
    const duplikat = cekDuplikat(value);
    if(duplikat) {
      throw new Error('Nama contact sudah digunakan!');
    }
    return true;
  }),
  check('email', 'Email tidak valid!').isEmail(),
  check('nohp', 'No Handphone tidak valid!').isMobilePhone('id-ID')
], (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()){
    res.render('add-contact', {
      layout: 'component/main-layout',
      title: 'Express web server | Contact',
      errors: errors.array(),
    });
  } else {
    add(req.body);
    req.flash('msg', 'Data contact berhasil ditambahkan :)')
    res.redirect('/contact')
  }
})

app.get('/contact/delete/:nama', (req, res) => {
  const contact = detail(req.params.nama);
  if(!contact) {
    res.status(404);
    res.send('<h1>404</h1>')
  }else {
    deleteContact(req.params.nama);
    req.flash('msg', 'Data contact berhasil dihapus :(')
    res.redirect('/contact')
  }
})

app.get('/contact/edit/:nama', (req, res) => {
  const contact = detail(req.params.nama);
  res.render('edit-contact', {
    layout: 'component/main-layout',
    title: 'Express web server | Edit Contact',
    contact,
  });
})

app.post('/contact/update', [
  body('nama').custom((value, { req }) => {
    const duplikat = cekDuplikat(value);
    if(value !== req.body.oldNama && duplikat) {
      throw new Error('Nama contact sudah digunakan!');
    }
    return true;
  }),
  check('email', 'Email tidak valid!').isEmail(),
  check('nohp', 'No Handphone tidak valid!').isMobilePhone('id-ID')
], (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()){
    res.render('edit-contact', {
      layout: 'component/main-layout',
      title: 'Express web server | Edit Contact',
      errors: errors.array(),
      contact: req.body,
    });
  } else {
    update(req.body);
    req.flash('msg', 'Data contact berhasil diubah :)')
    res.redirect('/contact')
  }
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