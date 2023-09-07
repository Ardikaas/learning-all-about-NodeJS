module.exports = mongoose => {
  const schema = mongoose.Schema(
    {
      nama_lengkap: String,
      jenis_kelamin: String,
      tanggal_lahir: Date,
      tempat_lahir: String,
      alamat: String,
      email: String,
    },
    {
      timestamps: true
    }
  );
  return mongoose.model('mahasiswa', schema)

};