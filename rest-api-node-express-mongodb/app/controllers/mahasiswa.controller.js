const db = require('../models')
const mahasiswa = db.mahasiswa

exports.create = (req,res) => {

  req.body.tanggal_lahir = new Date(req.body.tanggal_lahir)

  mahasiswa.create(req.body).then(() => {
    res.send({message: 'success'})
  }).catch(err => res.status(500).send({message: err.message}))
}

exports.showAll = (req,res) => {
  res.json({message: 'working'})
}

exports.show = (req,res) => {

}

exports.update = (req,res) => {

}

exports.delete = (req,res) => {

}