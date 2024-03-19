const { MongoClient } = require('mongodb');


// mongo.js
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI; // Your MongoDB connection string
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

export const connectToDatabase = async () => {
  try {
    await client.connect();
    dbConnection = client.db(process.env.DB_NAME); // Specify your database name
    console.log('Successfully connected to MongoDB.');
  } catch (error) {
    console.error('Could not connect to MongoDB:', error);
    process.exit(1); // Exit in case of connection failure
  }
};

export const getDb = () => {
  return dbConnection;
};