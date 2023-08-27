const express = require('express')
const expressLayouts =require('express-ejs-layouts')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(expressLayouts);

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
  res.render('contact', { 
    layout: 'component/main-layout',
    title: 'Express web server | Contact' });
})

app.get('/product/:id/', (req, res) => {
  res.send(`Product id : ${req.params.id} <br>
  Category : ${req.query.category}`)
})

app.get('/api', (req, res) => {
  res.json({
    nama: 'udin',
    email: 'udin@gmail.com',
    nohp: '01234123'
  })
})

app.use('/', (req, res) => {
  res.status(404)
  res.send('<h1>404</h1>')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})