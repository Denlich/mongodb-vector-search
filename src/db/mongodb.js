import { MongoClient } from 'mongodb';

let client;
let db;

export const connectMongo = async () => {
  if (!client) {
    client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    db = client.db('sample_mflix');
    console.log('Connected to MongoDB');
  }
  return db;
}