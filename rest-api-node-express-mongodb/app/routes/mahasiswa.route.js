module.exports = app => {
  const mahasiswa = require('../controllers/mahasiswa.controller')
  const route = require('express').Router();

  route.get('/', mahasiswa.showAll);
  route.get('/:id', mahasiswa.show);
  route.post('/', mahasiswa.create);
  route.put('/:id', mahasiswa.update);
  route.delete('/:id', mahasiswa.delete);

  app.use('/mahasiswa', route);
}