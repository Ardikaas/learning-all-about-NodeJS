const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile('./', { root: __dirname })
})

app.get('/about', (req, res) => {
  res.send('This is about page')
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