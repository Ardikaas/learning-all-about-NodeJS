import { MongoClient } from "mongodb";
import crypto from 'crypto';


// Replace the uri string with your connection string.
const uri = "mongodb://127.0.0.1:27017/";
const dbName = 'ardikaas';
const client = new MongoClient(uri);

const user = 'ucup'
const pass = 'ucupgimang412'

async function signup() {
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
    const data = {
      user: user,
      pass: hashed,
    }
    const result = await colls.insertOne(data);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);

  } finally {
    await client.close();
  }
}
signup().catch(console.dir);