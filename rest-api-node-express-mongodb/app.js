const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const db = require('./app/models')

const port = 3000;
const app = express();

const corsOptions = {
  origin: '*'
};


//middleware
app.use(cors(corsOptions));
app.use(express.json());

//databasee connection
const mongooseConfig = { 
  useNewUrlParser: true,
  useUnifiedTopology: true
}

db.mongoose.connect(db.url, mongooseConfig).then(() => {
  console.log('database connected')
}).catch(err =>{
  console.log(`database failed connection ${err.message}` )
  process.exit()
})


//routes
require('./app/routes/mahasiswa.route')(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


