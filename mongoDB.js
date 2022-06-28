const { MongoClient } = require("mongodb");
const uri="mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function connectDB() {
  try {
  await client.connect();
  console.log('connected to MongoDB successfully');
  } catch (error) {
    console.log(error);
  }
}
module.exports ={connectDB, client}
