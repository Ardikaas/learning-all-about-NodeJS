import { MongoClient } from "mongodb";
import crypto from 'crypto';

const uri = "mongodb://127.0.0.1:27017/";
const dbName = 'ardikaas';
const client = new MongoClient(uri);

const user = 'ucup'
const pass = 'ucupgimang412'

async function login() {
  try {
    const database = client.db(dbName);
    const colls = database.collection('user');
    
    //hashing
    const hash = (str) => {
      const encrypt = crypto.createHmac('sha256', 'somethingSecret');
      const update = encrypt.update(str);
      const digest = update.digest('hex');
      return digest
    }

    const hashed = hash(pass)
    const data = { user: user }
    const findpass = "pass";
    
    const login = await colls.findOne(data)
    const plainpass = await colls.distinct(findpass, data)
    const strpass = plainpass.toString();

    if (strpass === hashed){
      console.log('login berhasil')
      console.log(login)
    }else{
      console.log('usename atau password yang anda masukkan salah!')
      return false;
    }
    
  } finally {
    await client.close();
  }
}
login().catch(console.dir);